import { reportException, type EventProps } from "./analytics";

export function reportClientError(error: unknown, context: EventProps = {}) {
  if (typeof window === "undefined") return;
  console.error("[client-error]", error, context);
  reportException(error, context);
}
