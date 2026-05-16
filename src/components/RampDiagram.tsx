/* Side-profile spec drawing of the OBP ramp. */
export function RampDiagram() {
  return (
    <svg viewBox="0 0 700 320" aria-hidden="true" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect x="40" y="244" width="580" height="6" fill="#0E0E0E" opacity="0.18" />
      <path d="M 60 240 C 360 240, 540 200, 580 110 L 580 240 Z" fill="#0E0E0E" />
      <rect x="578" y="106" width="6" height="6" fill="#0E0E0E" />
      <line x1="200" y1="237" x2="200" y2="240" stroke="#F6F2E6" strokeWidth="2" />
      <line x1="330" y1="225" x2="330" y2="240" stroke="#F6F2E6" strokeWidth="2" />
      <line x1="450" y1="185" x2="450" y2="240" stroke="#F6F2E6" strokeWidth="2" />
      <g stroke="#0E0E0E" strokeWidth="2">
        <line x1="80" y1="240" x2="80" y2="250" />
        <line x1="130" y1="240" x2="130" y2="250" />
        <line x1="180" y1="240" x2="180" y2="250" />
        <line x1="230" y1="240" x2="230" y2="250" />
        <line x1="280" y1="240" x2="280" y2="250" />
        <line x1="330" y1="240" x2="330" y2="250" />
        <line x1="380" y1="240" x2="380" y2="250" />
        <line x1="430" y1="240" x2="430" y2="250" />
        <line x1="480" y1="240" x2="480" y2="250" />
        <line x1="530" y1="240" x2="530" y2="250" />
      </g>
      <g stroke="#0E0E0E" strokeWidth="1.4" fill="none">
        <line x1="60" y1="278" x2="580" y2="278" />
        <line x1="60" y1="272" x2="60" y2="284" />
        <line x1="580" y1="272" x2="580" y2="284" />
      </g>
      <text x="320" y="300" textAnchor="middle"
        fontFamily="var(--font-mono)" fontSize="13" fontWeight="700"
        letterSpacing="2" fill="#0E0E0E">48 IN · 4 SECTIONS</text>
      <g stroke="#0E0E0E" strokeWidth="1.4" fill="none">
        <line x1="612" y1="110" x2="612" y2="240" />
        <line x1="606" y1="110" x2="618" y2="110" />
        <line x1="606" y1="240" x2="618" y2="240" />
      </g>
      <text x="626" y="180"
        fontFamily="var(--font-mono)" fontSize="13" fontWeight="700"
        letterSpacing="2" fill="#0E0E0E">12 IN</text>
    </svg>
  );
}
