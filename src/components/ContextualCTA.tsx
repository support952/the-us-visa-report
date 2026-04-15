import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContextualCTA({ topic }: { topic: string }) {
  return (
    <div className="bg-paper-warm border border-rule p-4 my-8">
      <p className="text-[12px] font-sans text-ink-soft leading-relaxed">
        <span className="font-semibold text-ink">Policy Advisory:</span>{" "}
        Due to the complexity of current {topic.toLowerCase()} regulations, official
        policy analysts are providing limited eligibility assessments for qualified applicants.
      </p>
      <Link href="/assessment" className="inline-flex items-center gap-1 mt-2.5 text-[10px] font-sans font-semibold text-ink hover:text-ink-soft transition-colors uppercase tracking-[0.12em]">
        Begin Formal Assessment<ArrowRight size={10} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
