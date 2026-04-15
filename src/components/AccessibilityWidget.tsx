"use client";

import { useState, useEffect } from "react";
import { X, Plus, Minus, Type, Eye, RotateCcw } from "lucide-react";

interface Settings {
  fontSize: number;
  contrast: boolean;
  lineHeight: boolean;
  highlight: boolean;
}

const defaults: Settings = { fontSize: 0, contrast: false, lineHeight: false, highlight: false };

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(defaults);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = settings.fontSize ? `${100 + settings.fontSize * 12.5}%` : "";
    html.classList.toggle("a11y-contrast", settings.contrast);
    html.classList.toggle("a11y-line-height", settings.lineHeight);
    html.classList.toggle("a11y-highlight", settings.highlight);
  }, [settings]);

  const reset = () => setSettings(defaults);
  const hasChanges = settings.fontSize !== 0 || settings.contrast || settings.lineHeight || settings.highlight;

  if (!mounted) return null;

  return (
    <>
      {/* Small fixed button - bottom left */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Accessibility"
        style={{
          position: "fixed",
          left: 16,
          bottom: 16,
          zIndex: 85,
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#1a1a1b",
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.2s ease",
          transform: open ? "rotate(90deg)" : "none",
        }}
      >
        {open ? (
          <X size={15} color="#f9f9f7" strokeWidth={1.5} />
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f9f9f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="4.5" r="2.5" />
            <path d="M12 7v6m0 0l-3 7m3-7l3 7" />
            <path d="M5 10h14" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 84 }}
          />
          <div
            style={{
              position: "fixed",
              left: 16,
              bottom: 60,
              zIndex: 85,
              width: 200,
              background: "#ffffff",
              border: "1px solid #d4d4d0",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              padding: "14px 16px",
              transform: open ? "translateY(0)" : "translateY(10px)",
              opacity: open ? 1 : 0,
            }}
          >
            <p className="font-sans" style={{ fontSize: 8, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.2em", color: "#8a8a8b", marginBottom: 12 }}>
              Accessibility
            </p>

            {/* Font size */}
            <div style={{ marginBottom: 10 }}>
              <div className="font-sans" style={{ fontSize: 10, color: "#1a1a1b", fontWeight: 500, marginBottom: 5, display: "flex", alignItems: "center", gap: 5 }}>
                <Type size={11} strokeWidth={1.5} />
                Font Size
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <button
                  onClick={() => setSettings((s) => ({ ...s, fontSize: Math.max(-2, s.fontSize - 1) }))}
                  style={{ width: 28, height: 28, border: "1px solid #d4d4d0", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 3 }}
                >
                  <Minus size={12} strokeWidth={1.5} color="#1a1a1b" />
                </button>
                <span className="font-sans" style={{ fontSize: 10, color: "#474748", flex: 1, textAlign: "center" }}>
                  {settings.fontSize === 0 ? "Default" : `${settings.fontSize > 0 ? "+" : ""}${settings.fontSize}`}
                </span>
                <button
                  onClick={() => setSettings((s) => ({ ...s, fontSize: Math.min(4, s.fontSize + 1) }))}
                  style={{ width: 28, height: 28, border: "1px solid #d4d4d0", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 3 }}
                >
                  <Plus size={12} strokeWidth={1.5} color="#1a1a1b" />
                </button>
              </div>
            </div>

            {/* Toggles */}
            {[
              { key: "contrast" as const, label: "High Contrast", icon: Eye },
              { key: "lineHeight" as const, label: "Line Spacing", icon: Type },
              { key: "highlight" as const, label: "Highlight Links", icon: Eye },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setSettings((s) => ({ ...s, [key]: !s[key] }))}
                className="font-sans"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 0",
                  background: "none",
                  border: "none",
                  borderTop: "1px solid #e8e8e4",
                  cursor: "pointer",
                  fontSize: 10,
                  color: "#1a1a1b",
                  fontWeight: 500,
                }}
              >
                <Icon size={11} strokeWidth={1.5} />
                <span style={{ flex: 1, textAlign: "left" }}>{label}</span>
                <span style={{
                  width: 28,
                  height: 16,
                  borderRadius: 8,
                  background: settings[key] ? "#1a1a1b" : "#d4d4d0",
                  position: "relative",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "absolute",
                    top: 2,
                    left: settings[key] ? 14 : 2,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#fff",
                    transition: "left 0.2s",
                  }} />
                </span>
              </button>
            ))}

            {/* Reset */}
            {hasChanges && (
              <button
                onClick={reset}
                className="font-sans"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  marginTop: 10,
                  padding: "6px 0",
                  background: "none",
                  border: "1px solid #d4d4d0",
                  cursor: "pointer",
                  fontSize: 9,
                  color: "#8a8a8b",
                  fontWeight: 500,
                  borderRadius: 3,
                }}
              >
                <RotateCcw size={9} strokeWidth={1.5} />
                Reset
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
