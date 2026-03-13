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

const milestones = [
  { x: 100, above: true, year: "1921", event: "Insulin Discovered", desc: "First peptide isolated for medical use", color: "#94A3B8" },
  { x: 236, above: false, year: "1953", event: "Oxytocin Synthesized", desc: "First peptide chemically synthesized", color: "#7A9EAF" },
  { x: 372, above: true, year: "1977", event: "Somatostatin Produced", desc: "First peptide made via recombinant DNA", color: "#5A9E96" },
  { x: 508, above: false, year: "2005", event: "50 FDA Approvals", desc: "Peptide drugs hit mainstream medicine", color: "#2D8E76" },
  { x: 644, above: true, year: "2017", event: "Semaglutide Approved", desc: "GLP-1 revolution begins", color: C.accentMid },
  { x: 780, above: false, year: "2024", event: "100+ Approved", desc: "Peptides now 10% of all drug approvals", color: C.accent },
];

function MilestoneNode({ x, color, delay }) {
  return (
    <g style={{ animation: `fadeNodeIn 0.5s ease-out ${delay}s both` }}>
      <circle cx={x} cy={155} r={12} fill={color} opacity="0.15" />
      <circle cx={x} cy={155} r={8} fill={color} />
    </g>
  );
}

function MilestoneCard({ x, above, year, event, desc, color, delay }) {
  const cardW = 120;
  const cardH = 62;
  const cardX = x - cardW / 2;
  const cardY = above ? 45 : 175;
  const stemY1 = above ? cardY + cardH : 155;
  const stemY2 = above ? 155 : cardY;

  return (
    <g style={{ animation: `slideUp 0.5s ease-out ${delay}s both` }}>
      {/* Stem */}
      <line
        x1={x} y1={stemY1} x2={x} y2={stemY2}
        stroke={color} strokeWidth="1" opacity="0.4"
      />
      {/* Card background */}
      <rect
        x={cardX} y={cardY} width={cardW} height={cardH}
        rx="10" ry="10" fill={C.bgCard} stroke={color} strokeWidth="1"
      />
      {/* Year */}
      <text
        x={x} y={cardY + 18}
        textAnchor="middle" fill={color}
        fontSize="15" fontFamily="'Fraunces', Georgia, serif" fontWeight="600"
      >
        {year}
      </text>
      {/* Event name */}
      <text
        x={x} y={cardY + 33}
        textAnchor="middle" fill={C.text}
        fontSize="11" fontFamily="'Outfit', sans-serif" fontWeight="600"
      >
        {event}
      </text>
      {/* Description */}
      <text
        x={x} y={cardY + 48}
        textAnchor="middle" fill={C.textDim}
        fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="350"
      >
        {desc}
      </text>
    </g>
  );
}

export default function ResearchTimelineInfographic({ className }) {
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
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Outfit:wght@300;350;400;500;600;700&display=swap"
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
        viewBox="0 0 860 300"
        width="100%"
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={C.accent} opacity="0.08" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="860" height="300" fill={C.bg} />
        <rect width="860" height="300" fill="url(#dotGrid)" />

        {/* Title */}
        <text
          x="430" y="30"
          textAnchor="middle" fill={C.text}
          fontSize="20" fontFamily="'Fraunces', Georgia, serif" fontWeight="600"
        >
          A Century of Peptide Science
        </text>

        {/* Timeline base line */}
        <line
          x1="80" y1="155" x2="780" y2="155"
          stroke={C.border} strokeWidth="2" strokeLinecap="round"
        />

        {/* Milestone nodes */}
        {milestones.map((m, i) => (
          <MilestoneNode
            key={`node-${i}`}
            x={m.x}
            color={m.color}
            delay={0.1 + i * 0.12}
          />
        ))}

        {/* Milestone cards */}
        {milestones.map((m, i) => (
          <MilestoneCard
            key={`card-${i}`}
            x={m.x}
            above={m.above}
            year={m.year}
            event={m.event}
            desc={m.desc}
            color={m.color}
            delay={0.25 + i * 0.12}
          />
        ))}

        {/* Source */}
        <text
          x="430" y="290"
          textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="400"
          opacity="0.6"
        >
          Source: FDA, PubMed, Nature Reviews Drug Discovery
        </text>

        {/* Watermark */}
        <text
          x="845" y="293"
          textAnchor="end" fill={C.accent}
          fontSize="10" fontFamily="'Fraunces', Georgia, serif" fontWeight="500"
          opacity="0.35"
        >
          peptides101.info
        </text>
      </svg>
    </div>
  );
}
