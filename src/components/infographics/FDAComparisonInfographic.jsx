import { useState, useEffect } from "react";

// ─── Design tokens matching the Peptides101 site ───
const C = {
  accent: "#0D7C66",
  accentLight: "#E8F5F1",
  accentMid: "#1A9E80",
  accentDark: "#065446",
  orange: "#E8723A",
  blue: "#3B6FC0",
  amber: "#C6890E",
  red: "#D94F4F",
  rose: "#C4567A",
  text: "#1A1A1A",
  textMid: "#4A4A4A",
  textDim: "#7A7A7A",
  textMuted: "#A3A3A3",
  bg: "#FAFAF7",
  bgWarm: "#F3F1EC",
  bgCard: "#FFFFFF",
  border: "#E5E2DB",
};

const amberLight = "#FEF7EC";

// ─── Row icon components (all SVG, no emoji) ───

function ClipboardIcon({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="2" y="0" width="10" height="13" rx="1.5" fill="none" stroke={C.accent} strokeWidth="1.2" />
      <rect x="4" y="-1.5" width="6" height="3" rx="1" fill={C.accentLight} stroke={C.accent} strokeWidth="0.8" />
      <line x1="4.5" y1="5" x2="9.5" y2="5" stroke={C.accent} strokeWidth="0.8" opacity="0.6" />
      <line x1="4.5" y1="7.5" x2="9.5" y2="7.5" stroke={C.accent} strokeWidth="0.8" opacity="0.6" />
      <line x1="4.5" y1="10" x2="8" y2="10" stroke={C.accent} strokeWidth="0.8" opacity="0.6" />
    </g>
  );
}

function GearIcon({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="7" cy="7" r="3" fill="none" stroke={C.accent} strokeWidth="1.2" />
      <circle cx="7" cy="7" r="1.2" fill={C.accent} opacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const ix = 7 + Math.cos(rad) * 4.5;
        const iy = 7 + Math.sin(rad) * 4.5;
        const ox = 7 + Math.cos(rad) * 6;
        const oy = 7 + Math.sin(rad) * 6;
        return (
          <line key={i} x1={ix} y1={iy} x2={ox} y2={oy}
            stroke={C.accent} strokeWidth="1.3" strokeLinecap="round" />
        );
      })}
    </g>
  );
}

function KeyIcon({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="4" cy="5" r="3.5" fill="none" stroke={C.accent} strokeWidth="1.2" />
      <circle cx="4" cy="5" r="1.2" fill={C.accent} opacity="0.3" />
      <line x1="7.5" y1="5" x2="13" y2="5" stroke={C.accent} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="5" x2="11" y2="8" stroke={C.accent} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="5" x2="13" y2="7.5" stroke={C.accent} strokeWidth="1.2" strokeLinecap="round" />
    </g>
  );
}

function CoinIcon({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="7" cy="7" r="6" fill={C.accentLight} stroke={C.accent} strokeWidth="1.2" />
      <text x="7" y="7.5" textAnchor="middle" dominantBaseline="central"
        fontSize="8" fontFamily="'Fraunces', Georgia, serif" fontWeight="600"
        fill={C.accent}>$</text>
    </g>
  );
}

function PulseIcon({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M7 2 C4 2, 1 4.5, 1 7.2 C1 10.5, 7 13, 7 13 C7 13, 13 10.5, 13 7.2 C13 4.5, 10 2, 7 2Z"
        fill={C.accentLight} stroke={C.accent} strokeWidth="1" />
      <polyline points="2,7.5 4.5,7.5 5.5,5 7,10 8.5,6 9.5,7.5 12,7.5"
        fill="none" stroke={C.accent} strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

// ─── Header icons ───

function ShieldCheckIcon({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M9 1 L2 4 L2 9 C2 13, 9 16, 9 16 C9 16, 16 13, 16 9 L16 4 Z"
        fill={C.accentLight} stroke={C.accent} strokeWidth="1.2" />
      <polyline points="6,8.5 8.5,11 12.5,6.5"
        fill="none" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function WarningTriangleIcon({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M9 1.5 L1.5 15 L16.5 15 Z"
        fill={amberLight} stroke={C.amber} strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="9" y1="6" x2="9" y2="10.5"
        stroke={C.amber} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="12.5" r="0.9" fill={C.amber} />
    </g>
  );
}

// ─── Row data ───
const rows = [
  {
    label: "Clinical Testing",
    Icon: ClipboardIcon,
    left: "Phase I, II, III trials in thousands of patients",
    right: "Often limited to animal studies or small trials",
  },
  {
    label: "Quality Control",
    Icon: GearIcon,
    left: "Manufactured under strict FDA cGMP standards",
    right: "Varies widely \u2014 pharmacy compounded to unregulated",
  },
  {
    label: "Access",
    Icon: KeyIcon,
    left: "Prescription from any licensed physician",
    right: "Compounding pharmacies, online, or international",
  },
  {
    label: "Cost",
    Icon: CoinIcon,
    left: "Often covered by insurance",
    right: "Typically out-of-pocket, $100-500+/month",
  },
  {
    label: "Safety Data",
    Icon: PulseIcon,
    left: "Extensive long-term safety profiles",
    right: "Limited \u2014 risk/benefit less established",
  },
];

export default function FDAComparisonInfographic({ className }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const W = 860;
  const H = 420;

  const colLeft = 60;
  const colRight = 435;
  const colEnd = 800;
  const colMid = 430;
  const headerY = 65;
  const headerH = 32;
  const rowStartY = headerY + headerH;
  const rowH = 50;
  const noteY = rowStartY + rows.length * rowH + 14;

  return (
    <div className={className} style={{
      width: "100%", borderRadius: 16, border: `1px solid ${C.border}`,
      overflow: "hidden", fontFamily: "'Outfit', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Outfit:wght@300;350;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeNodeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
        {/* ─── Background ─── */}
        <defs>
          <pattern id="fdaDotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={C.accent} opacity="0.08" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill={C.bg} />
        <rect width={W} height={H} fill="url(#fdaDotGrid)" />

        {/* ─── Title ─── */}
        <text x={W / 2} y="38" textAnchor="middle" fill={C.text}
          fontSize="20" fontFamily="'Fraunces', Georgia, serif" fontWeight="500"
          letterSpacing="-0.3"
          style={{ animation: "slideUp 0.5s ease-out 0.1s both" }}>
          FDA-Approved vs. Non-Approved: What's Different?
        </text>

        {/* ─── Header row ─── */}
        <g style={{ animation: "slideUp 0.5s ease-out 0.2s both" }}>
          {/* Left header — FDA-Approved */}
          <rect x={colLeft} y={headerY} width={colMid - colLeft - 5} height={headerH} rx="6"
            fill={C.accentLight} stroke={C.accent} strokeWidth="0.8" />
          <ShieldCheckIcon x={colLeft + 12} y={headerY + 8} />
          <text x={colLeft + 36} y={headerY + 17} dominantBaseline="central"
            fill={C.accent} fontSize="14" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
            FDA-Approved
          </text>

          {/* Right header — Not FDA-Approved */}
          <rect x={colRight} y={headerY} width={colEnd - colRight} height={headerH} rx="6"
            fill={amberLight} stroke={C.amber} strokeWidth="0.8" />
          <WarningTriangleIcon x={colRight + 12} y={headerY + 8} />
          <text x={colRight + 36} y={headerY + 17} dominantBaseline="central"
            fill={C.amber} fontSize="14" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
            Not FDA-Approved
          </text>
        </g>

        {/* ─── Comparison rows ─── */}
        {rows.map((row, i) => {
          const ry = rowStartY + i * rowH;
          const isEven = i % 2 === 1;
          const delay = 0.3 + i * 0.08;
          const { Icon } = row;
          return (
            <g key={i} style={{ animation: `slideUp 0.5s ease-out ${delay}s both` }}>
              {/* Row background */}
              <rect x={colLeft} y={ry} width={colEnd - colLeft} height={rowH}
                fill={isEven ? C.bgWarm : C.bgCard} opacity={isEven ? 0.5 : 1} />
              {/* Green tint on left half */}
              <rect x={colLeft} y={ry} width={colMid - colLeft - 5} height={rowH}
                fill={C.accent} opacity="0.02" />

              {/* Row icon + label */}
              <Icon x={colLeft + 8} y={ry + 8} />
              <text x={colLeft + 26} y={ry + 16} fill={C.text}
                fontSize="11" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
                {row.label}
              </text>

              {/* Left value */}
              <text x={colLeft + 26} y={ry + 34} fill={C.textMid}
                fontSize="10.5" fontFamily="'Outfit', sans-serif" fontWeight="400">
                {row.left}
              </text>

              {/* Right value */}
              <text x={colRight + 12} y={ry + 26} fill={C.textMid}
                fontSize="10.5" fontFamily="'Outfit', sans-serif" fontWeight="400"
                dominantBaseline="central">
                {row.right}
              </text>

              {/* Vertical divider */}
              <line x1={colMid} y1={ry} x2={colMid} y2={ry + rowH}
                stroke={C.border} strokeWidth="1" />
            </g>
          );
        })}

        {/* ─── Bottom border of table ─── */}
        <line x1={colLeft} y1={rowStartY + rows.length * rowH}
          x2={colEnd} y2={rowStartY + rows.length * rowH}
          stroke={C.border} strokeWidth="1" />

        {/* ─── Bottom note card ─── */}
        <g style={{ animation: "slideUp 0.5s ease-out 0.8s both" }}>
          <rect x={W / 2 - 300} y={noteY} width="600" height="44" rx="10"
            fill={C.bgCard} stroke={C.border} strokeWidth="1" />
          <rect x={W / 2 - 300} y={noteY} width="600" height="44" rx="10"
            fill={C.accent} opacity="0.02" />
          <text x={W / 2} y={noteY + 23} textAnchor="middle" dominantBaseline="central"
            fill={C.textDim} fontSize="10.5" fontFamily="'Outfit', sans-serif"
            fontWeight="400" fontStyle="italic">
            Not FDA-approved does not mean unsafe — it means the full approval process
          </text>
          <text x={W / 2} y={noteY + 37} textAnchor="middle" dominantBaseline="central"
            fill={C.textDim} fontSize="10.5" fontFamily="'Outfit', sans-serif"
            fontWeight="400" fontStyle="italic">
            hasn't been completed. Many widely-used peptides fall in this category.
          </text>
        </g>

        {/* ─── Source line ─── */}
        <text x={W / 2} y={H - 14} textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="300"
          opacity="0.6">
          Sources: FDA.gov · International Journal of Molecular Sciences
        </text>

        {/* ─── Watermark ─── */}
        <text x={W - 18} y={H - 12} textAnchor="end" fill={C.textMuted}
          fontSize="9" fontFamily="'Fraunces', Georgia, serif" fontWeight="400"
          opacity="0.35">
          peptides101.info
        </text>
      </svg>
    </div>
  );
}
