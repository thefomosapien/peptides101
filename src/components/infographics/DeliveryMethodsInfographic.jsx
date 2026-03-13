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

// Syringe icon (simple SVG shapes)
function SyringeIcon({ cx, cy, color }) {
  return (
    <g>
      {/* Syringe body */}
      <rect x={cx - 4} y={cy - 10} width={8} height={14} rx="1.5" fill="white" stroke={color} strokeWidth="1.2" />
      {/* Plunger top */}
      <line x1={cx} y1={cy - 14} x2={cx} y2={cy - 10} stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1={cx - 3} y1={cy - 14} x2={cx + 3} y2={cy - 14} stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Needle */}
      <polygon points={`${cx - 2},${cy + 4} ${cx + 2},${cy + 4} ${cx},${cy + 12}`} fill={color} opacity="0.7" />
      {/* Tick marks */}
      <line x1={cx - 4} y1={cy - 5} x2={cx - 2} y2={cy - 5} stroke={color} strokeWidth="0.6" opacity="0.5" />
      <line x1={cx - 4} y1={cy - 1} x2={cx - 2} y2={cy - 1} stroke={color} strokeWidth="0.6" opacity="0.5" />
    </g>
  );
}

// Pill capsule icon (two halves)
function CapsuleIcon({ cx, cy, color }) {
  return (
    <g>
      {/* Left half */}
      <rect x={cx - 12} y={cy - 5} width={12} height={10} rx="5" fill={color} opacity="0.7" />
      {/* Right half */}
      <rect x={cx} y={cy - 5} width={12} height={10} rx="5" fill={color} opacity="0.4" />
      {/* Center divider */}
      <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke="white" strokeWidth="0.8" opacity="0.6" />
    </g>
  );
}

// Droplet icon (teardrop SVG path)
function DropletIcon({ cx, cy, color }) {
  return (
    <path
      d={`M${cx},${cy - 10} Q${cx + 8},${cy} ${cx},${cy + 10} Q${cx - 8},${cy} ${cx},${cy - 10} Z`}
      fill={color} opacity="0.65" stroke={color} strokeWidth="0.8"
    />
  );
}

// Tube/jar icon (rect with rounded top)
function TubeIcon({ cx, cy, color }) {
  return (
    <g>
      {/* Tube body */}
      <rect x={cx - 7} y={cy - 4} width={14} height={12} rx="2" fill={color} opacity="0.5" />
      {/* Rounded cap */}
      <rect x={cx - 8} y={cy - 9} width={16} height={7} rx="3.5" fill={color} opacity="0.75" />
      {/* Nozzle tip */}
      <rect x={cx - 3} y={cy - 12} width={6} height={4} rx="2" fill={color} opacity="0.9" />
    </g>
  );
}

// Ease-of-use dots
function EaseDots({ x, y, filled, total, color }) {
  const dots = [];
  const gap = 12;
  const startX = x;
  for (let i = 0; i < total; i++) {
    dots.push(
      <circle
        key={i}
        cx={startX + i * gap}
        cy={y}
        r={4}
        fill={i < filled ? color : "white"}
        stroke={color}
        strokeWidth={i < filled ? "0" : "1"}
        opacity={i < filled ? 0.85 : 0.35}
      />
    );
  }
  return <g>{dots}</g>;
}

// Delivery method card
function MethodCard({ x, y, w, h, color, name, icon, data, easeFilled, delay }) {
  const iconCy = y + 32;
  const iconCx = x + w / 2;
  const nameY = y + 58;
  const dividerY = y + 68;
  const dataStartY = y + 84;
  const rowH = 28;

  return (
    <g style={{ animation: `slideUp 0.5s ease-out ${delay}s both` }}>
      {/* Card background */}
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill="white" stroke={color} strokeWidth="1" opacity="0.9" />
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill={color} opacity="0.04" />

      {/* Icon circle */}
      <circle cx={iconCx} cy={iconCy} r="18" fill={color} opacity="0.12" />

      {/* Icon */}
      {icon === "syringe" && <SyringeIcon cx={iconCx} cy={iconCy} color={color} />}
      {icon === "capsule" && <CapsuleIcon cx={iconCx} cy={iconCy} color={color} />}
      {icon === "droplet" && <DropletIcon cx={iconCx} cy={iconCy} color={color} />}
      {icon === "tube" && <TubeIcon cx={iconCx} cy={iconCy} color={color} />}

      {/* Method name */}
      <text x={iconCx} y={nameY} textAnchor="middle" fill={C.text}
        fontSize="12" fontFamily="'Fraunces', Georgia, serif" fontWeight="600">
        {name}
      </text>

      {/* Divider */}
      <line x1={x + 14} y1={dividerY} x2={x + w - 14} y2={dividerY}
        stroke={C.border} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />

      {/* Data rows */}
      {data.map((row, i) => (
        <g key={i}>
          <text x={x + 14} y={dataStartY + i * rowH} fill={C.textMuted}
            fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="400">
            {row.label}
          </text>
          <text x={x + 14} y={dataStartY + i * rowH + 13} fill={C.textMid}
            fontSize="10.5" fontFamily="'Outfit', sans-serif" fontWeight="500">
            {row.value}
          </text>
        </g>
      ))}

      {/* Ease of use row */}
      <text x={x + 14} y={dataStartY + data.length * rowH} fill={C.textMuted}
        fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="400">
        Ease of use
      </text>
      <EaseDots
        x={x + 14}
        y={dataStartY + data.length * rowH + 14}
        filled={easeFilled}
        total={5}
        color={color}
      />
    </g>
  );
}

export default function DeliveryMethodsInfographic({ className }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const W = 860;
  const H = 420;

  const cardW = 185;
  const cardH = 300;
  const cardY = 60;
  const totalCardsWidth = cardW * 4;
  const totalGaps = (W - 40 - totalCardsWidth) / 3;
  const startX = 20;

  const methods = [
    {
      name: "Injection (Subcutaneous)",
      icon: "syringe",
      color: C.accent,
      data: [
        { label: "Absorption", value: "High (90-100%)" },
        { label: "Speed", value: "Fast (15-30 min)" },
        { label: "Common for", value: "Most therapeutic peptides" },
      ],
      ease: 2,
    },
    {
      name: "Oral Capsules",
      icon: "capsule",
      color: C.blue,
      data: [
        { label: "Absorption", value: "Low-Moderate (10-40%)" },
        { label: "Speed", value: "Slow (1-2 hours)" },
        { label: "Common for", value: "Collagen, BPC-157 oral" },
      ],
      ease: 5,
    },
    {
      name: "Sublingual Drops",
      icon: "droplet",
      color: C.orange,
      data: [
        { label: "Absorption", value: "Moderate (50-70%)" },
        { label: "Speed", value: "Moderate (30-60 min)" },
        { label: "Common for", value: "Selank, some GH peptides" },
      ],
      ease: 4,
    },
    {
      name: "Topical Cream",
      icon: "tube",
      color: C.rose,
      data: [
        { label: "Absorption", value: "Targeted (local area)" },
        { label: "Speed", value: "Varies" },
        { label: "Common for", value: "GHK-Cu, collagen creams" },
      ],
      ease: 5,
    },
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
      `}</style>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
        {/* Background */}
        <defs>
          <pattern id="dotGridDelivery" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={C.accent} opacity="0.08" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill={C.bg} />
        <rect width={W} height={H} fill="url(#dotGridDelivery)" />

        {/* ─── Title ─── */}
        <text x={W / 2} y="35" textAnchor="middle" fill={C.text}
          fontSize="20" fontFamily="'Fraunces', Georgia, serif" fontWeight="500"
          letterSpacing="-0.3"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.1s both" }}>
          Peptide Delivery Methods Compared
        </text>

        {/* ─── Method cards ─── */}
        {methods.map((method, i) => (
          <MethodCard
            key={i}
            x={startX + i * (cardW + totalGaps)}
            y={cardY}
            w={cardW}
            h={cardH}
            color={method.color}
            name={method.name}
            icon={method.icon}
            data={method.data}
            easeFilled={method.ease}
            delay={0.2 + i * 0.1}
          />
        ))}

        {/* ─── Bottom note ─── */}
        <text x={W / 2} y={H - 25} textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="300"
          opacity="0.6"
          style={{ animation: "slideUp 0.5s ease-out 0.8s both" }}>
          Absorption rates are approximate and vary by specific peptide and individual factors
        </text>

        {/* ─── Source ─── */}
        <text x={W / 2} y={H - 10} textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="300"
          opacity="0.6">
          Sources: Journal of Controlled Release, Pharmaceutics (MDPI)
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
