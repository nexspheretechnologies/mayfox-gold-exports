// Lightweight client-side spam protection: honeypot, time-trap, and rate limiting.
// Used to deter automated bots from submitting public lead forms.

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute window
const RATE_LIMIT_MAX = 3;            // max submissions per window per form
const MIN_FILL_TIME_MS = 2_500;      // humans take more than ~2.5s to fill a form

export type SpamCheckResult =
  | { ok: true }
  | { ok: false; reason: "honeypot" | "too-fast" | "rate-limited"; message: string };

function storageKey(formId: string) {
  return `mfx_rl_${formId}`;
}

function readTimestamps(formId: string): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(formId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((n) => typeof n === "number") : [];
  } catch {
    return [];
  }
}

function writeTimestamps(formId: string, stamps: number[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey(formId), JSON.stringify(stamps));
  } catch {
    /* ignore quota / privacy-mode errors */
  }
}

export function checkSpamProtection(opts: {
  formId: string;
  honeypotValue: string;
  startedAt: number;
}): SpamCheckResult {
  // 1. Honeypot — hidden field; only bots fill it.
  if (opts.honeypotValue && opts.honeypotValue.trim() !== "") {
    return { ok: false, reason: "honeypot", message: "Submission rejected." };
  }

  // 2. Time-trap — reject sub-second submissions typical of bots.
  const elapsed = Date.now() - opts.startedAt;
  if (elapsed < MIN_FILL_TIME_MS) {
    return {
      ok: false,
      reason: "too-fast",
      message: "Please take a moment to review your details before submitting.",
    };
  }

  // 3. Rate limit — cap submissions per rolling window from this browser.
  const now = Date.now();
  const recent = readTimestamps(opts.formId).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    const waitSec = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - recent[0])) / 1000);
    return {
      ok: false,
      reason: "rate-limited",
      message: `Too many submissions. Please wait ${waitSec}s before trying again.`,
    };
  }

  recent.push(now);
  writeTimestamps(opts.formId, recent);
  return { ok: true };
}

// Inline style object for the honeypot wrapper — visually hidden but accessible to bots.
export const honeypotWrapperStyle: React.CSSProperties = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
};
