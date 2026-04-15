import { Lightbulb } from "lucide-react";

export default function KeyTakeaways({ takeaways }: { takeaways: string[] }) {
  return (
    <div className="bg-paper-warm border border-rule p-5 mb-10">
      <h3 className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
        <Lightbulb size={11} strokeWidth={1.5} />
        Key Takeaways
      </h3>
      <ul className="space-y-1.5">
        {takeaways.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[12px] font-sans text-ink-soft leading-relaxed">
            <span className="w-1 h-1 bg-ink rounded-full mt-[7px] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
