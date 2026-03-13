import React from "react";

const C = {
  accent: "#0D7C66", accentLight: "#E8F5F1", accentMid: "#1A9E80", accentDark: "#065446",
  orange: "#E8723A", blue: "#3B6FC0", amber: "#C6890E", red: "#D94F4F", rose: "#C4567A",
  text: "#1A1A1A", textMid: "#4A4A4A", textDim: "#7A7A7A", textMuted: "#A3A3A3",
  bg: "#FAFAF7", bgWarm: "#F3F1EC", bgCard: "#FFFFFF", border: "#E5E2DB",
};

const spokes = [
  {
    x: 140, y: 90, label: "Recovery", color: C.accent,
    peptides: "BPC-157, TB-500, Thymosin \u03B24",
    icon: "bandage",
  },
  {
    x: 720, y: 90, label: "Weight", color: C.orange,
    peptides: "Semaglutide, AOD-9604",
    icon: "scale",
  },
  {
    x: 750, y: 215, label: "Anti-Aging", color: C.blue,
    peptides: "CJC-1295, Ipamorelin, GHK-Cu",
    icon: "sparkle",
  },
  {
    x: 620, y: 290, label: "Immune", color: C.rose,
    peptides: "Thymosin \u03B1-1, Selank",
    icon: "shield",
  },
  {
    x: 240, y: 290, label: "Skin & Joints", color: C.amber,
    peptides: "Collagen, GHK-Cu",
    icon: "skin",
  },
];

const CX = 430;
const CY = 180;

function SpokeIcon({ type, x, y, color }) {
  switch (type) {
    case "bandage":
      return (
        <g transform={`translate(${x},${y})`}>
          <line x1={-7} y1={0} x2={7} y2={0} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
          <line x1={0} y1={-7} x2={0} y2={7} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
        </g>
      );
    case "scale":
      return (
        <g transform={`translate(${x},${y})`}>
          <line x1={0} y1={-8} x2={0} y2={6} stroke={color} strokeWidth={2} strokeLinecap="round" />
          <line x1={-8} y1={-4} x2={8} y2={-4} stroke={color} strokeWidth={2} strokeLinecap="round" />
          <line x1={-8} y1={-4} x2={-6} y2={2} stroke={color} strokeWidth={1.5} strokeLinecap="round" />
          <line x1={8} y1={-4} x2={6} y2={2} stroke={color} strokeWidth={1.5} strokeLinecap="round" />
          <line x1={-3} y1={6} x2={3} y2={6} stroke={color} strokeWidth={2} strokeLinecap="round" />
        </g>
      );
    case "sparkle":
      return (
        <g transform={`translate(${x},${y})`}>
          <path
            d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z"
            fill={color} opacity={0.85}
          />
        </g>
      );
    case "shield":
      return (
        <g transform={`translate(${x},${y})`}>
          <path
            d="M0-9 L7-4 L7 2 Q7 7 0 10 Q-7 7-7 2 L-7-4Z"
            fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round"
          />
        </g>
      );
    case "skin":
      return (
        <g transform={`translate(${x},${y})`}>
          <rect x={-6} y={-6} width={12} height={12} rx={3} fill="none" stroke={color} strokeWidth={2} />
          <circle cx={0} cy={0} r={2.5} fill={color} opacity={0.6} />
        </g>
      );
    default:
      return null;
  }
}

export default function PeptideCategoriesInfographic({ className }) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        borderRadius: 16,
        border: `1px solid ${C.border}`,
        overflow: "hidden",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Outfit:wght@300;400;500;600&display=swap"
      />

      <style>{`
        @keyframes fadeNodeIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <svg
        viewBox="0 0 860 340"
        width="100%"
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dotGrid" width={20} height={20} patternUnits="userSpaceOnUse">
            <circle cx={10} cy={10} r={0.6} fill={C.accent} opacity={0.08} />
          </pattern>
        </defs>

        {/* Background */}
        <rect width={860} height={340} fill={C.bg} />
        <rect width={860} height={340} fill="url(#dotGrid)" />

        {/* Title */}
        <text
          x={430} y={32}
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontSize={20}
          fontWeight={600}
          fill={C.text}
          style={{ animation: "slideUp 0.5s ease both 0.05s" }}
        >
          Peptide Categories at a Glance
        </text>

        {/* Connector lines */}
        {spokes.map((s, i) => (
          <line
            key={`line-${i}`}
            x1={CX} y1={CY} x2={s.x} y2={s.y}
            stroke={s.color}
            strokeWidth={2.5}
            strokeOpacity={0.3}
            strokeLinecap="round"
            style={{ animation: `fadeNodeIn 0.5s ease both ${0.15 + i * 0.08}s` }}
          />
        ))}

        {/* Center glow */}
        <circle
          cx={CX} cy={CY} r={52}
          fill={C.accent} opacity={0.1}
          style={{ animation: "fadeNodeIn 0.5s ease both 0.1s" }}
        />

        {/* Center circle */}
        <g style={{ animation: "fadeNodeIn 0.5s ease both 0.1s", transformOrigin: `${CX}px ${CY}px` }}>
          <circle cx={CX} cy={CY} r={45} fill={C.accent} />

          {/* Amino chain icon */}
          <circle cx={CX - 12} cy={CY - 12} r={3.5} fill="none" stroke="#fff" strokeWidth={1.5} />
          <circle cx={CX} cy={CY - 16} r={3.5} fill="none" stroke="#fff" strokeWidth={1.5} />
          <circle cx={CX + 12} cy={CY - 12} r={3.5} fill="none" stroke="#fff" strokeWidth={1.5} />
          <line x1={CX - 8.5} y1={CY - 13} x2={CX - 3.5} y2={CY - 15} stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
          <line x1={CX + 3.5} y1={CY - 15} x2={CX + 8.5} y2={CY - 13} stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />

          {/* Center text */}
          <text
            x={CX} y={CY + 8}
            textAnchor="middle"
            fontFamily="Fraunces, serif"
            fontSize={14}
            fontWeight={600}
            fill="#FFFFFF"
          >
            Peptides
          </text>
        </g>

        {/* Spoke nodes */}
        {spokes.map((s, i) => {
          const delay = 0.3 + i * 0.1;
          const textDelay = delay + 0.15;
          return (
            <g key={`spoke-${i}`}>
              {/* Spoke circle bg */}
              <g style={{ animation: `fadeNodeIn 0.5s ease both ${delay}s`, transformOrigin: `${s.x}px ${s.y}px` }}>
                <circle cx={s.x} cy={s.y} r={30} fill={s.color} opacity={0.15} />
                <circle cx={s.x} cy={s.y} r={30} fill="none" stroke={s.color} strokeWidth={2} />
                {/* Inner highlight */}
                <circle cx={s.x - 6} cy={s.y - 8} r={12} fill="#FFFFFF" opacity={0.18} />

                {/* Icon */}
                <SpokeIcon type={s.icon} x={s.x} y={s.y} color={s.color} />
              </g>

              {/* Label: category name */}
              <text
                x={s.x} y={s.y + 42}
                textAnchor="middle"
                fontFamily="Fraunces, serif"
                fontSize={11}
                fontWeight={600}
                fill={s.color}
                style={{ animation: `slideUp 0.45s ease both ${textDelay}s` }}
              >
                {s.label}
              </text>

              {/* Label: peptide names */}
              <text
                x={s.x} y={s.y + 55}
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontSize={9.5}
                fill={C.textDim}
                style={{ animation: `slideUp 0.45s ease both ${textDelay + 0.08}s` }}
              >
                {s.peptides}
              </text>
            </g>
          );
        })}

        {/* Source */}
        <text
          x={430} y={332}
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontSize={9}
          fill={C.textMuted}
          opacity={0.6}
        >
          Source: Published peptide research literature
        </text>

        {/* Watermark */}
        <text
          x={845} y={332}
          textAnchor="end"
          fontFamily="Fraunces, serif"
          fontSize={10}
          fill={C.textMuted}
          opacity={0.35}
        >
          peptides101.info
        </text>
      </svg>
    </div>
  );
}
