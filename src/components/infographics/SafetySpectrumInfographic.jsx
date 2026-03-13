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

// Shield with checkmark icon
function ShieldIcon({ cx, cy, color }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="14" fill={color} opacity="0.12" />
      <path
        d={`M${cx} ${cy - 8} L${cx - 6} ${cy - 5} L${cx - 6} ${cy + 1} Q${cx} ${cy + 7} ${cx} ${cy + 7} Q${cx} ${cy + 7} ${cx + 6} ${cy + 1} L${cx + 6} ${cy - 5} Z`}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <polyline
        points={`${cx - 3},${cy} ${cx - 0.5},${cy + 2.5} ${cx + 3.5},${cy - 2}`}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

// Medical cross icon
function MedicalCrossIcon({ cx, cy, color }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="14" fill={color} opacity="0.12" />
      <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

// Bottle icon
function BottleIcon({ cx, cy, color }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="14" fill={color} opacity="0.12" />
      <rect x={cx - 3} y={cy - 8} width="6" height="3" rx="1" fill="none" stroke={color} strokeWidth="1.1" />
      <rect x={cx - 4.5} y={cy - 5} width="9" height="12" rx="2" fill="none" stroke={color} strokeWidth="1.1" />
    </g>
  );
}

// Warning triangle icon
function WarningIcon({ cx, cy, color }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="14" fill={color} opacity="0.12" />
      <polygon
        points={`${cx},${cy - 7} ${cx - 7},${cy + 5} ${cx + 7},${cy + 5}`}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <text
        x={cx}
        y={cy + 3}
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize="9"
        fontFamily="'Outfit', sans-serif"
        fontWeight="700"
      >
        !
      </text>
    </g>
  );
}

// Tier card component
function TierCard({ x, y, w, h, color, title, examples, note, IconComponent, delay }) {
  return (
    <g style={{ animation: `slideUp 0.5s ease-out ${delay}s both` }}>
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill={C.bgCard} stroke={color} strokeWidth="1" />
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill={color} opacity="0.04" />
      {/* Icon */}
      <IconComponent cx={x + w / 2} cy={y + 22} color={color} />
      {/* Title */}
      <text x={x + w / 2} y={y + 46} textAnchor="middle"
        fill={C.text} fontSize="11" fontFamily="'Fraunces', Georgia, serif" fontWeight="600">
        {title}
      </text>
      {/* Examples */}
      <text x={x + w / 2} y={y + 62} textAnchor="middle"
        fill={C.textDim} fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="400">
        {examples}
      </text>
      {/* Note */}
      <text x={x + w / 2} y={y + 78} textAnchor="middle"
        fill={C.textMuted} fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="400"
        fontStyle="italic">
        {note}
      </text>
    </g>
  );
}

export default function SafetySpectrumInfographic({ className }) {
  // Spectrum bar dimensions
  const barX = 130;
  const barW = 600;
  const barY = 110;
  const barH = 16;

  // Tier positions along the bar (fractional)
  const tiers = [
    {
      frac: 0.05,
      color: C.accent,
      title: "FDA-Approved Prescription",
      examples: "Semaglutide, Tesamorelin, Insulin",
      note: "Rigorous clinical trials completed",
      Icon: ShieldIcon,
    },
    {
      frac: 0.32,
      color: C.accentMid,
      title: "Physician-Prescribed Compounded",
      examples: "BPC-157, CJC-1295 + Ipamorelin",
      note: "Medical oversight, pharmacy-sourced",
      Icon: MedicalCrossIcon,
    },
    {
      frac: 0.63,
      color: C.amber,
      title: "OTC Supplements",
      examples: "Collagen peptides, GHK-Cu topicals",
      note: "Generally safe, less regulation",
      Icon: BottleIcon,
    },
    {
      frac: 0.95,
      color: C.red,
      title: "Unregulated / Gray Market",
      examples: '"Research-only" online peptides',
      note: "Unknown purity, no oversight",
      Icon: WarningIcon,
    },
  ];

  const cardW = 170;
  const cardH = 92;
  const cardY = 168;
  const cardSpacing = 14;
  const totalCardsW = tiers.length * cardW + (tiers.length - 1) * cardSpacing;
  const cardsStartX = (860 - totalCardsW) / 2;

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
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
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
        viewBox="0 0 860 380"
        width="100%"
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dot grid pattern */}
          <pattern id="ss-dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={C.accent} opacity="0.08" />
          </pattern>
          {/* Spectrum gradient */}
          <linearGradient id="ss-spectrumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.accent} />
            <stop offset="50%" stopColor={C.amber} />
            <stop offset="100%" stopColor={C.red} />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="860" height="380" fill={C.bg} />
        <rect width="860" height="380" fill="url(#ss-dotGrid)" />

        {/* Title */}
        <text
          x="430" y="42" textAnchor="middle"
          fill={C.text} fontSize="20" fontFamily="'Fraunces', Georgia, serif" fontWeight="600"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.1s both" }}
        >
          The Peptide Safety Spectrum
        </text>

        {/* Subtitle */}
        <text
          x="430" y="62" textAnchor="middle"
          fill={C.textDim} fontSize="12" fontFamily="'Outfit', sans-serif" fontWeight="400"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.2s both" }}
        >
          Understanding risk levels across peptide sources
        </text>

        {/* Labels above bar ends */}
        <text
          x={barX} y={barY - 14} textAnchor="middle"
          fill={C.accent} fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="600"
          letterSpacing="0.5"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.3s both" }}
        >
          SAFEST
        </text>
        <text
          x={barX + barW} y={barY - 14} textAnchor="middle"
          fill={C.red} fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="600"
          letterSpacing="0.5"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.3s both" }}
        >
          HIGHEST RISK
        </text>

        {/* Spectrum bar */}
        <g style={{ animation: "fadeNodeIn 0.5s ease-out 0.35s both" }}>
          <rect
            x={barX} y={barY} width={barW} height={barH}
            rx="8" ry="8"
            fill="url(#ss-spectrumGrad)"
          />
        </g>

        {/* Tier nodes on bar, stems, and cards */}
        {tiers.map((tier, i) => {
          const nodeX = barX + tier.frac * barW;
          const nodeY = barY + barH / 2;
          const cardX = cardsStartX + i * (cardW + cardSpacing);
          const cardCenterX = cardX + cardW / 2;
          const stemTopY = barY + barH + 1;
          const stemBottomY = cardY - 2;
          const delay = 0.4 + i * 0.15;

          return (
            <g key={i}>
              {/* Vertical stem */}
              <line
                x1={cardCenterX} y1={stemTopY} x2={cardCenterX} y2={stemBottomY}
                stroke={tier.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.4"
                style={{ animation: `fadeNodeIn 0.4s ease-out ${delay}s both` }}
              />
              {/* Angled connector from node to stem top */}
              <line
                x1={nodeX} y1={nodeY + 8} x2={cardCenterX} y2={stemTopY}
                stroke={tier.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.25"
                style={{ animation: `fadeNodeIn 0.4s ease-out ${delay}s both` }}
              />
              {/* Node on bar */}
              <g style={{ animation: `fadeNodeIn 0.5s ease-out ${delay}s both` }}>
                <circle cx={nodeX} cy={nodeY} r="8" fill={tier.color} />
                <circle cx={nodeX} cy={nodeY} r="4" fill="white" opacity="0.5" />
              </g>
              {/* Card */}
              <TierCard
                x={cardX} y={cardY} w={cardW} h={cardH}
                color={tier.color}
                title={tier.title}
                examples={tier.examples}
                note={tier.note}
                IconComponent={tier.Icon}
                delay={delay + 0.1}
              />
            </g>
          );
        })}

        {/* Tip box */}
        <g style={{ animation: "slideUp 0.5s ease-out 1.1s both" }}>
          <rect
            x="180" y="290" width="500" height="38" rx="10" ry="10"
            fill={C.accentLight} stroke={C.accent} strokeWidth="0.7" opacity="0.9"
          />
          <text
            x="430" y="313" textAnchor="middle"
            fill={C.accentDark} fontSize="11" fontFamily="'Outfit', sans-serif" fontWeight="500"
          >
            Wherever you fall on this spectrum, consulting a physician is always recommended
          </text>
        </g>

        {/* Source */}
        <text
          x="430" y="365" textAnchor="middle"
          fill={C.textMuted} fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="400"
          opacity="0.6"
        >
          Source: FDA, USP, peer-reviewed clinical literature
        </text>

        {/* Watermark */}
        <text
          x="835" y="372" textAnchor="end"
          fill={C.accent} fontSize="10" fontFamily="'Fraunces', Georgia, serif" fontWeight="400"
          opacity="0.35"
        >
          peptides101.info
        </text>
      </svg>
    </div>
  );
}
