import { useCallback, useRef, useState } from "react";
import { submitLead, type SubmitResult } from "./lead-functions";
import { track } from "./analytics";
import type { LeadInput } from "./lead-schema";

export type LeadFormState =
  | { status: "idle" }
  | { status: "pending" }
  | { status: "sent"; result: SubmitResult }
  | { status: "error"; message: string };

// Reads the form by field name, so the markup stays plain HTML inputs: the field
// names are the schema keys except the honeypot, which bots see as "website".
function payloadFrom(form: HTMLFormElement, kind: LeadInput["kind"], startedAt: number) {
  const raw: Record<string, unknown> = {};
  new FormData(form).forEach((value, key) => {
    raw[key] = typeof value === "string" ? value : "";
  });
  const { website, ...fields } = raw;
  return {
    ...fields,
    kind,
    honeypot: website ?? "",
    filledMs: Date.now() - startedAt,
    sourcePage: window.location.pathname,
  };
}

export function useLeadSubmit(kind: LeadInput["kind"]) {
  const [state, setState] = useState<LeadFormState>({ status: "idle" });
  const startedAt = useRef(Date.now());

  const submit = useCallback(
    async (form: HTMLFormElement) => {
      setState({ status: "pending" });
      try {
        const payload = payloadFrom(form, kind, startedAt.current);
        const result = await submitLead({ data: payload as unknown as LeadInput });
        track("lead_submitted", { kind, reference: result.reference });
        setState({ status: "sent", result });
        startedAt.current = Date.now();
        return result;
      } catch (error) {
        const message =
          error instanceof Error && error.message ? error.message : "Submission failed. Please try again.";
        setState({ status: "error", message });
        return null;
      }
    },
    [kind],
  );

  const reset = useCallback(() => {
    setState({ status: "idle" });
    startedAt.current = Date.now();
  }, []);

  return { state, submit, reset };
}
