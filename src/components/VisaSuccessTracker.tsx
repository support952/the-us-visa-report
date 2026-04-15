"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Clock } from "lucide-react";

interface TrackerItem {
  label: string;
  value: string;
  status: "active" | "processing" | "closed";
  progress: number;
  delta?: string;
}

const baseData: TrackerItem[] = [
  { label: "DV-2027 Selection", value: "ACTIVE", status: "active", progress: 65, delta: "+12%" },
  { label: "H-1B FY2026 Cap", value: "FILLED", status: "closed", progress: 100, delta: "85,000" },
  { label: "EB-2 PD (India)", value: "01 JAN 2013", status: "processing", progress: 22, delta: "+3w" },
  { label: "EB-3 PD (World)", value: "01 SEP 2022", status: "processing", progress: 78, delta: "+2mo" },
  { label: "I-485 Avg", value: "8.5-14 MO", status: "processing", progress: 55 },
];

export default function VisaSuccessTracker() {
  const [data, setData] = useState(baseData);
  const [ts, setTs] = useState("");

  useEffect(() => {
    setTs(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    const iv = setInterval(() => {
      setData((p) => p.map((d) => ({ ...d, progress: Math.min(100, Math.max(0, d.progress + (Math.random() * 1.5 - 0.75))) })));
      setTs(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    }, 10000);
    return () => clearInterval(iv);
  }, []);

  const dot = (s: string) => s === "active" ? "bg-emerald-600" : s === "closed" ? "bg-ink-faint" : "bg-amber-600";
  const bar = (s: string) => s === "active" ? "bg-emerald-600" : s === "closed" ? "bg-ink-faint" : "bg-amber-600";

  return (
    <div className="bg-paper-warm border border-rule">
      {/* Header */}
      <div className="px-3 py-2 border-b border-rule flex items-center justify-between">
        <span className="text-[9px] font-sans font-semibold text-ink uppercase tracking-[0.18em]">
          Visa Policy Tracker
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 bg-emerald-600 rounded-full animate-pulse" />
          <span className="text-[8px] font-data text-emerald-700 uppercase tracking-wider">Live</span>
        </span>
      </div>

      {/* Data rows */}
      <div className="divide-y divide-rule">
        {data.map((item, i) => (
          <div key={i} className="px-3 py-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans font-medium text-ink leading-none">{item.label}</span>
              <div className="flex items-center gap-1.5">
                <span className={`w-1 h-1 rounded-full ${dot(item.status)}`} />
                <span className="text-[10px] font-data font-semibold text-ink tracking-wide">{item.value}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex-1 bg-rule-light h-[3px]">
                <div className={`h-[3px] transition-all duration-1000 ${bar(item.status)}`} style={{ width: `${item.progress}%` }} />
              </div>
              {item.delta && (
                <span className="text-[8px] font-data text-emerald-700 flex items-center gap-0.5">
                  <TrendingUp size={7} />{item.delta}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Source */}
      <div className="px-3 py-1.5 border-t border-rule flex items-center justify-between bg-steel-light/50">
        <span className="text-[8px] font-sans text-ink-muted">
          Source: U.S. Dept of State / USCIS
        </span>
        <span className="text-[8px] font-data text-ink-muted flex items-center gap-0.5">
          <Clock size={7} />{ts}
        </span>
      </div>
    </div>
  );
}
