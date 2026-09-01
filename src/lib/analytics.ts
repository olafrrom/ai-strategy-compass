/**
 * Umami Analytics helper.
 * - Event names are product-scoped with the `strategy_` prefix.
 * - Only editorial metadata is sent (IDs, names, enfoque, familia, tool).
 * - Never sends user input, prompts, or any personal data.
 * - No-ops gracefully if the Umami script is not loaded.
 */

type UmamiEventData = Record<string, string | number>;

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: UmamiEventData) => void;
    };
  }
}

export const trackEvent = (eventName: string, data?: UmamiEventData): void => {
  try {
    if (typeof window !== "undefined" && window.umami?.track) {
      window.umami.track(eventName, data);
    }
  } catch {
    // Analytics must never break the app.
  }
};
