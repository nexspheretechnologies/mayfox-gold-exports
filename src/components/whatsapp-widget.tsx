// Floating WhatsApp chat widget pinned to the bottom-right of every page.
// Tapping it opens a pre-filled WhatsApp chat to the Mayfox Gold sales line.

const PHONE = "254754979755"; // +254 754 979 755 — Mayfox Gold sales line
const MESSAGE =
  "Hello Mayfox Gold, I would like to inquire about your precious metals and request a quote.";

export function WhatsAppWidget() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mayfox Gold sales on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-3 group"
    >
      {/* Pulse */}
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ width: 60, height: 60, top: "auto", left: "auto", bottom: 0, right: 0 }} />

      <span className="hidden md:inline-block bg-onyx/95 backdrop-blur border border-gold/30 px-4 py-2 text-xs tracking-wider uppercase text-gold opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all rounded-sm">
        Chat on WhatsApp
      </span>

      <span
        className="relative flex items-center justify-center rounded-full bg-[#25D366] shadow-2xl ring-2 ring-white/20 hover:scale-110 transition-transform"
        style={{ width: 60, height: 60 }}
      >
        <svg viewBox="0 0 32 32" width="34" height="34" fill="white" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.806 2.722.806.395 0 2.642-.058 2.642-1.323 0-.43.014-.872-.272-1.158-.213-.215-1.96-1.146-2.215-1.146zm-3.143 8.4c-1.78 0-3.515-.488-5.022-1.405l-3.605 1.16 1.175-3.490c-1.018-1.575-1.575-3.418-1.575-5.301 0-5.45 4.434-9.883 9.882-9.883C21.467 6.687 25.9 11.12 25.9 16.57c0 5.448-4.433 9.882-9.883 9.882zm0-21.65C9.443 3.955 4.077 9.323 4.077 15.85c0 2.117.586 4.21 1.69 6.052L3.71 28.65l6.929-1.829a11.85 11.85 0 0 0 5.667 1.434c6.527 0 11.895-5.368 11.895-11.895 0-6.528-5.368-11.895-11.895-11.895z" />
        </svg>
      </span>
    </a>
  );
}
