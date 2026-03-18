import { useState } from "react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item bg-white border border-slate-200 rounded-custom transition-base ${open ? "active" : ""}`}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <span className="faq-icon">⌄</span>
      </button>

      <div className="faq-content">
        <div className="px-5 pb-5 text-slate-600">{a}</div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        <FAQItem q="Is it free to use?" a="Yes, ReelGrab is 100% free." />
        <FAQItem q="Do I need to login?" a="No login required." />
        <FAQItem q="Is it safe?" a="Yes, completely safe." />
      </div>
    </section>
  );
}
