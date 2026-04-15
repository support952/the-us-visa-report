"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButtonInline() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1 text-[10px] font-sans text-ink-muted hover:text-ink transition-colors flex-shrink-0"
    >
      <ArrowLeft size={11} strokeWidth={1.5} />
      Back
    </button>
  );
}

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="border-t border-rule mt-10 pt-6 pb-2">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-[11px] font-sans text-ink-muted hover:text-ink transition-colors"
      >
        <ArrowLeft size={13} strokeWidth={1.5} />
        Back
      </button>
    </div>
  );
}
