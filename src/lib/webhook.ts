// Posts a JSON payload to the global n8n form webhook.
// Fire-and-forget; never blocks the user's UX.
export const FORM_WEBHOOK_URL =
  "https://n8n.srv1005837.hstgr.cloud/webhook/1e346807-cafc-4140-bf3d-8e1085033c52";

export function postFormWebhook(source: string, data: Record<string, unknown>) {
  try {
    const payload = {
      source,
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.href : "",
      ...data,
    };
    void fetch(FORM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "no-cors",
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* silent */
  }
}
