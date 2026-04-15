"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

const DELAY_MS = 50_000;

export default function EligibilityPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const dismissed = useRef(false);

  useEffect(() => {
    if (dismissed.current) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest?.('a[href="/assessment"]')) {
        dismissed.current = true;
        clearTimeout(timer);
      }
    };

    const timer = setTimeout(() => {
      if (dismissed.current) return;
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }, DELAY_MS);

    document.addEventListener("click", handleClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    dismissed.current = true;
    setTimeout(() => setMounted(false), 500);
  };

  if (!mounted) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "32px",
        paddingLeft: "16px",
        paddingRight: "16px",
        backgroundColor: visible ? "rgba(26, 26, 27, 0.18)" : "rgba(26, 26, 27, 0)",
        transition: "background-color 0.4s ease",
      }}
    >
      <div
        ref={popupRef}
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#ffffff",
          border: "1px solid #d4d4d0",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
          padding: "36px 32px 28px",
          position: "relative",
          textAlign: "center",
          transform: visible ? "translateY(0)" : "translateY(40px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#b0b0b0",
            padding: "6px",
            lineHeight: 0,
          }}
        >
          <X size={16} strokeWidth={1.5} />
        </button>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
          <span style={{ width: "24px", height: "1px", background: "#d4d4d0", display: "block" }} />
          <span className="font-sans" style={{ fontSize: "8px", fontWeight: 600, color: "#991b1b", textTransform: "uppercase" as const, letterSpacing: "0.25em" }}>
            DV-2027 Lottery
          </span>
          <span style={{ width: "24px", height: "1px", background: "#d4d4d0", display: "block" }} />
        </div>

        <p className="font-serif" style={{ fontSize: "19px", fontWeight: 700, color: "#1a1a1b", lineHeight: 1.3, margin: 0 }}>
          Are you eligible for the Diversity Visa program?
        </p>

        <p className="font-sans" style={{ fontSize: "12px", color: "#8a8a8b", marginTop: "12px", lineHeight: 1.6 }}>
          Free preliminary assessment. Takes less than 2 minutes.
        </p>

        <Link
          href="/assessment"
          onClick={dismiss}
          className="font-sans"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "20px",
            padding: "10px 28px",
            border: "1px solid #1a1a1b",
            color: "#1a1a1b",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase" as const,
            letterSpacing: "0.12em",
            textDecoration: "none",
          }}
        >
          Check Eligibility<ArrowRight size={12} strokeWidth={1.5} />
        </Link>

        <p className="font-sans" style={{ fontSize: "9px", color: "#b0b0b0", marginTop: "16px", marginBottom: 0 }}>
          No personal data required to start
        </p>
      </div>
    </div>
  );
}
