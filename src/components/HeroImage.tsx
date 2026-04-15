export default function HeroImage({ variant = "default" }: { variant?: "default" | "capitol" | "statue" | "flag" }) {
  // Professional SVG illustrations for hero backgrounds
  if (variant === "capitol") {
    return (
      <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#sky)" />
        {/* Capitol silhouette */}
        <rect x="300" y="200" width="200" height="120" fill="#475569" rx="2" />
        <rect x="370" y="140" width="60" height="60" fill="#475569" rx="2" />
        <ellipse cx="400" cy="140" rx="40" ry="35" fill="#475569" />
        <rect x="390" y="100" width="20" height="45" fill="#475569" />
        {/* Wings */}
        <rect x="200" y="240" width="100" height="80" fill="#475569" rx="1" />
        <rect x="500" y="240" width="100" height="80" fill="#475569" rx="1" />
        {/* Columns */}
        {[320, 350, 380, 410, 440, 470].map((x) => (
          <rect key={x} x={x} y="210" width="6" height="100" fill="#64748b" rx="1" />
        ))}
        {/* Stars */}
        {[100, 200, 650, 720, 400, 550].map((x, i) => (
          <circle key={i} cx={x} cy={30 + i * 12} r="1" fill="#94a3b8" />
        ))}
      </svg>
    );
  }

  if (variant === "statue") {
    return (
      <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#dusk)" />
        {/* Water */}
        <rect x="0" y="320" width="800" height="80" fill="#1e293b" opacity="0.7" />
        {/* Pedestal */}
        <rect x="350" y="240" width="100" height="80" fill="#475569" />
        <rect x="340" y="230" width="120" height="15" fill="#64748b" />
        {/* Figure */}
        <rect x="380" y="140" width="40" height="90" fill="#64748b" rx="2" />
        <circle cx="400" cy="125" r="18" fill="#64748b" />
        {/* Crown */}
        {[-12, -6, 0, 6, 12].map((dx) => (
          <rect key={dx} x={398 + dx} y="100" width="3" height="15" fill="#94a3b8" />
        ))}
        {/* Torch */}
        <rect x="415" y="105" width="6" height="40" fill="#64748b" />
        <ellipse cx="418" cy="100" rx="8" ry="10" fill="#94a3b8" opacity="0.5" />
      </svg>
    );
  }

  if (variant === "flag") {
    return (
      <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#1e293b" />
        {/* Stripes — subtle */}
        {Array.from({ length: 13 }, (_, i) => (
          <rect key={i} x="0" y={i * 30 + 10} width="800" height="15" fill={i % 2 === 0 ? "#991b1b" : "#ffffff"} opacity="0.04" />
        ))}
        {/* Canton */}
        <rect x="0" y="10" width="300" height="200" fill="#334155" opacity="0.3" />
        {/* Stars grid */}
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 6 }, (_, col) => (
            <circle key={`${row}-${col}`} cx={30 + col * 45} cy={30 + row * 38} r="3" fill="#94a3b8" opacity="0.3" />
          ))
        )}
      </svg>
    );
  }

  // Default: abstract
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#1e293b" />
      <rect x="100" y="100" width="600" height="200" fill="#334155" rx="2" opacity="0.5" />
    </svg>
  );
}
