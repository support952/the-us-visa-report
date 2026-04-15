"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-rule">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-3.5 text-left group"
          >
            <span className="text-[13px] font-sans font-medium text-ink leading-snug group-hover:text-ink-soft transition-colors">
              {item.q}
            </span>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className={`flex-shrink-0 mt-0.5 text-ink-faint transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="pb-4 pr-8">
              <p className="text-[12.5px] font-sans text-ink-soft leading-[1.8]">
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
