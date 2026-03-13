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

// Amino acid node component
function AminoNode({ cx, cy, r, color, delay, label }) {
  return (
    <g style={{ animation: `fadeNodeIn 0.5s ease-out ${delay}s both` }}>
      <circle cx={cx} cy={cy} r={r + 4} fill={color} opacity="0.1" />
      <circle cx={cx} cy={cy} r={r} fill={color} opacity="0.85" />
      <circle cx={cx} cy={cy} r={r - 3} fill="white" opacity="0.15" />
      {label && (
        <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central"
          fill="white" fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="600"
          letterSpacing="0.3">{label}</text>
      )}
    </g>
  );
}

// Bond line between nodes
function Bond({ x1, y1, x2, y2, delay }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={C.accent} strokeWidth="2.5" opacity="0.3"
      strokeLinecap="round"
      style={{ animation: `fadeNodeIn 0.4s ease-out ${delay}s both` }} />
  );
}

// Category card within the infographic
function CategoryBlock({ x, y, icon, name, peptides, color, delay }) {
  const w = 155;
  const h = 95;
  return (
    <g style={{ animation: `slideUp 0.5s ease-out ${delay}s both` }}>
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill="white" stroke={color} strokeWidth="1" opacity="0.9" />
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill={color} opacity="0.04" />
      {/* Icon circle */}
      <circle cx={x + 24} cy={y + 24} r="14" fill={color} opacity="0.12" />
      <text x={x + 24} y={y + 25} textAnchor="middle" dominantBaseline="central"
        fontSize="14">{icon}</text>
      {/* Category name */}
      <text x={x + 44} y={y + 21} fill={C.text}
        fontSize="12" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
        {name}
      </text>
      {/* Divider */}
      <line x1={x + 14} y1={y + 42} x2={x + w - 14} y2={y + 42}
        stroke={color} strokeWidth="0.5" opacity="0.3" />
      {/* Peptide names */}
      {peptides.map((p, i) => (
        <text key={i} x={x + 14} y={y + 58 + i * 15} fill={C.textDim}
          fontSize="10.5" fontFamily="'Outfit', sans-serif" fontWeight="400">
          {p}
        </text>
      ))}
    </g>
  );
}

export default function HeroInfographic({ className }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const W = 860;
  const H = 520;

  // Amino acid chain positions (peptide — short chain)
  const peptideChain = [
    { cx: 82, cy: 115 }, { cx: 112, cy: 100 }, { cx: 142, cy: 112 },
    { cx: 172, cy: 98 }, { cx: 202, cy: 110 }, { cx: 232, cy: 97 },
    { cx: 262, cy: 108 },
  ];

  // Protein chain (longer, extends further)
  const proteinChain = [
    { cx: 530, cy: 115 }, { cx: 554, cy: 102 }, { cx: 578, cy: 114 },
    { cx: 602, cy: 100 }, { cx: 626, cy: 112 }, { cx: 650, cy: 99 },
    { cx: 674, cy: 111 }, { cx: 698, cy: 98 }, { cx: 722, cy: 110 },
    { cx: 746, cy: 100 }, { cx: 770, cy: 112 },
  ];

  const aminoLabels = ["Gly", "Ala", "Val", "Leu", "Ser", "Pro", "Thr", "Ile", "Phe", "Met", "Asp"];
  const accentColors = [C.accent, C.accentMid, C.accent, C.accentMid, C.accent, C.accentMid, C.accent, C.accentMid, C.accent, C.accentMid, C.accent];

  const categories = [
    { x: 15, icon: "🩹", name: "Recovery", peptides: ["BPC-157", "TB-500"], color: C.accent },
    { x: 185, icon: "⚖️", name: "Weight", peptides: ["Semaglutide", "AOD-9604"], color: C.orange },
    { x: 355, icon: "⚡", name: "Anti-Aging", peptides: ["CJC-1295", "GHK-Cu"], color: C.blue },
    { x: 525, icon: "🛡️", name: "Immune", peptides: ["Thymosin α-1", "Selank"], color: C.rose },
    { x: 695, icon: "✨", name: "Skin & Joints", peptides: ["Collagen", "GHK-Cu"], color: C.amber },
  ];

  return (
    <div className={className} style={{
      width: "100%", background: C.bg, borderRadius: 16, border: `1px solid ${C.border}`,
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
        @keyframes drawLine {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
      `}</style>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
        {/* Subtle background texture */}
        <defs>
          <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={C.accent} opacity="0.08" />
          </pattern>
          <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.accent} stopOpacity="0.06" />
            <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="proteinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.textDim} stopOpacity="0" />
            <stop offset="30%" stopColor={C.textDim} stopOpacity="0.04" />
            <stop offset="100%" stopColor={C.textDim} stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill={C.bg} />
        <rect width={W} height={H} fill="url(#dotGrid)" />

        {/* ─── Title area ─── */}
        <text x={W / 2} y="38" textAnchor="middle" fill={C.text}
          fontSize="20" fontFamily="'Fraunces', Georgia, serif" fontWeight="500"
          letterSpacing="-0.3">
          What Are Peptides?
        </text>
        <text x={W / 2} y="58" textAnchor="middle" fill={C.textDim}
          fontSize="12" fontFamily="'Outfit', sans-serif" fontWeight="350">
          Small chains of amino acids that tell your cells what to do
        </text>

        {/* ─── SECTION 1: Peptide chain (left) ─── */}
        {/* Background pill */}
        <rect x="40" y="74" width="260" height="80" rx="16" fill="url(#chainGrad)" />

        {/* Label */}
        <text x="170" y="172" textAnchor="middle" fill={C.accent}
          fontSize="13" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
          Peptide
        </text>
        <text x="170" y="187" textAnchor="middle" fill={C.textMuted}
          fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
          2–50 amino acids · Small & fast-acting
        </text>

        {/* Bonds */}
        {peptideChain.slice(0, -1).map((node, i) => (
          <Bond key={i}
            x1={node.cx} y1={node.cy}
            x2={peptideChain[i + 1].cx} y2={peptideChain[i + 1].cy}
            delay={0.1 + i * 0.06} />
        ))}
        {/* Nodes */}
        {peptideChain.map((node, i) => (
          <AminoNode key={i} cx={node.cx} cy={node.cy} r={14}
            color={accentColors[i]} delay={0.15 + i * 0.06}
            label={aminoLabels[i]} />
        ))}

        {/* ─── VS divider ─── */}
        <g style={{ animation: "fadeNodeIn 0.4s ease-out 0.5s both" }}>
          <line x1={W / 2 - 50} y1="80" x2={W / 2 - 50} y2="195"
            stroke={C.border} strokeWidth="1" strokeDasharray="4 4" />
          <rect x={W / 2 - 72} y="125" width="44" height="24" rx="12"
            fill={C.bgWarm} stroke={C.border} strokeWidth="1" />
          <text x={W / 2 - 50} y="138" textAnchor="middle" dominantBaseline="central"
            fill={C.textMuted} fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="600"
            letterSpacing="1">VS</text>
        </g>

        {/* ─── SECTION 2: Protein chain (right) ─── */}
        <rect x="490" y="74" width="330" height="80" rx="16" fill="url(#proteinGrad)" />

        <text x="650" y="172" textAnchor="middle" fill={C.textDim}
          fontSize="13" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
          Protein
        </text>
        <text x="650" y="187" textAnchor="middle" fill={C.textMuted}
          fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
          50–2000+ amino acids · Large & complex
        </text>

        {/* Protein bonds */}
        {proteinChain.slice(0, -1).map((node, i) => (
          <Bond key={i}
            x1={node.cx} y1={node.cy}
            x2={proteinChain[i + 1].cx} y2={proteinChain[i + 1].cy}
            delay={0.3 + i * 0.04} />
        ))}
        {/* Protein nodes (gray tones to differentiate) */}
        {proteinChain.map((node, i) => (
          <AminoNode key={i} cx={node.cx} cy={node.cy} r={11}
            color={i % 2 === 0 ? "#94A3B8" : "#7A8BA0"} delay={0.35 + i * 0.04}
            label={aminoLabels[i]} />
        ))}

        {/* Fade-out dots for protein chain */}
        <g style={{ animation: "fadeNodeIn 0.4s ease-out 0.8s both" }}>
          <circle cx="790" cy="108" r="2.5" fill={C.textMuted} opacity="0.4" />
          <circle cx="802" cy="108" r="2" fill={C.textMuted} opacity="0.25" />
          <circle cx="812" cy="108" r="1.5" fill={C.textMuted} opacity="0.15" />
        </g>

        {/* ─── Annotation: "Your body makes these naturally" ─── */}
        <g style={{ animation: "slideUp 0.5s ease-out 0.6s both" }}>
          <rect x="305" y="78" width="180" height="42" rx="10"
            fill={C.accentLight} stroke={C.accent} strokeWidth="0.5" opacity="0.9" />
          <text x="395" y="95" textAnchor="middle" fill={C.accent}
            fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="600">
            Your body makes peptides
          </text>
          <text x="395" y="110" textAnchor="middle" fill={C.accentDark}
            fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="350">
            but production declines with age
          </text>
        </g>

        {/* ─── Divider line ─── */}
        <line x1="60" y1="215" x2={W - 60} y2="215"
          stroke={C.border} strokeWidth="1" />

        {/* ─── Section label: How they help ─── */}
        <g style={{ animation: "slideUp 0.5s ease-out 0.7s both" }}>
          <rect x={W / 2 - 95} y="205" width="190" height="22" rx="11"
            fill={C.bg} stroke={C.border} strokeWidth="1" />
          <text x={W / 2} y="219" textAnchor="middle" fill={C.textMuted}
            fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="500"
            letterSpacing="1.5" textTransform="uppercase">
            FIVE KEY CATEGORIES
          </text>
        </g>

        {/* ─── Arrow connectors from divider to categories ─── */}
        {categories.map((cat, i) => {
          const cardCenter = cat.x + 77.5;
          return (
            <line key={i} x1={cardCenter} y1="226" x2={cardCenter} y2="245"
              stroke={cat.color} strokeWidth="1" opacity="0.25"
              style={{ animation: `fadeNodeIn 0.3s ease-out ${0.8 + i * 0.05}s both` }} />
          );
        })}

        {/* ─── SECTION 3: Category cards ─── */}
        {categories.map((cat, i) => (
          <CategoryBlock key={i} {...cat} y={248} delay={0.85 + i * 0.08} />
        ))}

        {/* ─── Bottom insight bar ─── */}
        <g style={{ animation: "slideUp 0.5s ease-out 1.3s both" }}>
          <rect x="60" y="365" width={W - 120} height="52" rx="12"
            fill="white" stroke={C.border} strokeWidth="1" />
          <rect x="60" y="365" width={W - 120} height="52" rx="12"
            fill={C.accent} opacity="0.02" />

          {/* Three stats inside */}
          {[
            { x: 175, val: "100+", label: "FDA-approved peptide drugs" },
            { x: 430, val: "Since 1921", label: "Starting with insulin" },
            { x: 685, val: "7,000+", label: "Naturally in your body" },
          ].map((stat, i) => (
            <g key={i}>
              {i > 0 && (
                <line x1={stat.x - 130} y1="375" x2={stat.x - 130} y2="407"
                  stroke={C.border} strokeWidth="1" />
              )}
              <text x={stat.x} y="386" textAnchor="middle" fill={C.accent}
                fontSize="15" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
                {stat.val}
              </text>
              <text x={stat.x} y="402" textAnchor="middle" fill={C.textMuted}
                fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
                {stat.label}
              </text>
            </g>
          ))}
        </g>

        {/* ─── Source line ─── */}
        <text x={W / 2} y="440" textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="300"
          opacity="0.6">
          Sources: FDA.gov · Biomolecules (MDPI) · International Journal of Molecular Sciences
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
