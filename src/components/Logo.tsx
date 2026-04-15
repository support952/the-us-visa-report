export function LogoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className="flex-shrink-0"
    >
      <rect width="32" height="32" rx="4" fill="#f9f9f7" />
      <text
        x="4"
        y="24"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="26"
        fontWeight="700"
        fill="#1a1a1b"
        letterSpacing="-1"
      >
        V
      </text>
      <line x1="24" y1="6" x2="24" y2="14" stroke="#991b1b" strokeWidth="1.5" />
    </svg>
  );
}

export function LogoIconDark({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className="flex-shrink-0"
    >
      <rect width="32" height="32" rx="4" fill="#1a1a1b" />
      <text
        x="4"
        y="24"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="26"
        fontWeight="700"
        fill="#f9f9f7"
        letterSpacing="-1"
      >
        V
      </text>
      <line x1="24" y1="6" x2="24" y2="14" stroke="#991b1b" strokeWidth="1.5" />
    </svg>
  );
}
