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

// ─── SVG Icons (no emoji) ───

function BeakerIcon({ cx, cy, r, opacity }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.accent} opacity={opacity} />
      {/* Beaker: trapezoid body */}
      <polygon
        points={`${cx - 5},${cy - 7} ${cx + 5},${cy - 7} ${cx + 7},${cy + 6} ${cx - 7},${cy + 6}`}
        fill="none" stroke="white" strokeWidth="1.3" strokeLinejoin="round"
      />
      {/* Beaker rim */}
      <line x1={cx - 6} y1={cy - 7} x2={cx + 6} y2={cy - 7} stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      {/* Bubbles */}
      <circle cx={cx - 2} cy={cy + 1} r="1.2" fill="white" opacity="0.8" />
      <circle cx={cx + 2} cy={cy - 2} r="0.9" fill="white" opacity="0.7" />
      <circle cx={cx + 1} cy={cy + 3} r="1" fill="white" opacity="0.6" />
    </g>
  );
}

function MicroscopeIcon({ cx, cy, r, opacity }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.accent} opacity={opacity} />
      {/* Lens circle */}
      <circle cx={cx} cy={cy - 5} r="3.5" fill="none" stroke="white" strokeWidth="1.2" />
      {/* Body rect */}
      <rect x={cx - 1.5} y={cy - 2} width="3" height="9" rx="0.5" fill="white" opacity="0.9" />
      {/* Base rect */}
      <rect x={cx - 5} y={cy + 6} width="10" height="2" rx="1" fill="white" opacity="0.9" />
    </g>
  );
}

function SmallPeopleIcon({ cx, cy, r, opacity }) {
  const people = [-5, 0, 5];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.accent} opacity={opacity} />
      {people.map((dx, i) => (
        <g key={i}>
          <circle cx={cx + dx} cy={cy - 4} r="2" fill="white" opacity="0.9" />
          <rect x={cx + dx - 1.2} y={cy - 1.5} width="2.4" height="5" rx="1" fill="white" opacity="0.9" />
        </g>
      ))}
    </g>
  );
}

function MediumPeopleIcon({ cx, cy, r, opacity }) {
  const row1 = [-5, 0, 5];
  const row2 = [-5, 0, 5];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.accent} opacity={opacity} />
      {row1.map((dx, i) => (
        <g key={`r1-${i}`}>
          <circle cx={cx + dx} cy={cy - 6} r="1.8" fill="white" opacity="0.9" />
          <rect x={cx + dx - 1} y={cy - 3.8} width="2" height="4" rx="0.8" fill="white" opacity="0.9" />
        </g>
      ))}
      {row2.map((dx, i) => (
        <g key={`r2-${i}`}>
          <circle cx={cx + dx} cy={cy + 2} r="1.8" fill="white" opacity="0.9" />
          <rect x={cx + dx - 1} y={cy + 4.2} width="2" height="4" rx="0.8" fill="white" opacity="0.9" />
        </g>
      ))}
    </g>
  );
}

function LargePeopleIcon({ cx, cy, r, opacity }) {
  const cols = [-6, -2, 2, 6];
  const rows = [-5.5, 0, 5.5];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.accent} opacity={opacity} />
      {rows.map((dy, ri) =>
        cols.slice(0, ri === 2 ? 3 : 4).map((dx, ci) => (
          <g key={`${ri}-${ci}`}>
            <circle cx={cx + dx} cy={cy + dy - 1.5} r="1.4" fill="white" opacity="0.85" />
            <rect x={cx + dx - 0.8} y={cy + dy} width="1.6" height="3" rx="0.6" fill="white" opacity="0.85" />
          </g>
        ))
      )}
    </g>
  );
}

function ShieldCheckIcon({ cx, cy, r, opacity }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.accent} opacity={opacity} />
      {/* Shield */}
      <path
        d={`M${cx},${cy - 8} L${cx + 7},${cy - 4} L${cx + 7},${cy + 2} Q${cx + 7},${cy + 7} ${cx},${cy + 9} Q${cx - 7},${cy + 7} ${cx - 7},${cy + 2} L${cx - 7},${cy - 4} Z`}
        fill="none" stroke="white" strokeWidth="1.2" strokeLinejoin="round"
      />
      {/* Checkmark */}
      <polyline
        points={`${cx - 3},${cy} ${cx - 1},${cy + 3} ${cx + 4},${cy - 3}`}
        fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
  );
}

// ─── Stage card component ───
function StageCard({ x, y, stage, delay }) {
  const w = 125;
  const h = 200;
  const iconCx = x + w / 2;
  const iconCy = y + 38;
  const IconComponent = stage.icon;

  return (
    <g style={{ animation: `slideUp 0.5s ease-out ${delay}s both` }}>
      {/* Card background */}
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill="white" stroke={C.accent} strokeWidth="1" strokeOpacity={stage.intensity} />
      <rect x={x} y={y} width={w} height={h} rx="12" ry="12"
        fill={C.accent} opacity={stage.intensity} />

      {/* Icon */}
      <IconComponent cx={iconCx} cy={iconCy} r={20} opacity={stage.intensity + 0.15} />

      {/* Stage name */}
      <text x={x + w / 2} y={y + 72} textAnchor="middle" fill={C.text}
        fontSize="11" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
        {stage.name}
      </text>

      {/* Description — wrapped */}
      {stage.desc.map((line, i) => (
        <text key={i} x={x + w / 2} y={y + 92 + i * 14} textAnchor="middle" fill={C.textDim}
          fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
          {line}
        </text>
      ))}

      {/* Timeline pill */}
      <rect x={x + w / 2 - 30} y={y + h - 36} width="60" height="20" rx="10"
        fill={C.accentLight} />
      <text x={x + w / 2} y={y + h - 23} textAnchor="middle" fill={C.accent}
        fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="500">
        {stage.timeline}
      </text>
    </g>
  );
}

// ─── Stages data ───
const stages = [
  {
    name: "Discovery",
    icon: BeakerIcon,
    desc: ["Peptide identified", "and isolated"],
    timeline: "2-5 years",
    intensity: 0.06,
  },
  {
    name: "Preclinical",
    icon: MicroscopeIcon,
    desc: ["Lab and animal", "testing"],
    timeline: "1-3 years",
    intensity: 0.10,
  },
  {
    name: "Phase I Trial",
    icon: SmallPeopleIcon,
    desc: ["Safety testing in", "small group"],
    timeline: "1-2 years",
    intensity: 0.15,
  },
  {
    name: "Phase II Trial",
    icon: MediumPeopleIcon,
    desc: ["Efficacy in", "larger group"],
    timeline: "1-3 years",
    intensity: 0.20,
  },
  {
    name: "Phase III Trial",
    icon: LargePeopleIcon,
    desc: ["Large-scale", "confirmation"],
    timeline: "2-4 years",
    intensity: 0.25,
  },
  {
    name: "FDA Review",
    icon: ShieldCheckIcon,
    desc: ["NDA submitted", "and reviewed"],
    timeline: "1-2 years",
    intensity: 0.30,
  },
];

const stageXPositions = [30, 167, 304, 441, 578, 715];

export default function FDAApprovalProcessInfographic({ className }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const W = 860;
  const H = 400;
  const cardW = 125;
  const cardY = 70;
  const cardH = 200;

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
        {/* ─── Defs ─── */}
        <defs>
          <pattern id="fdaDotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={C.accent} opacity="0.08" />
          </pattern>
          <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5" refY="3"
            orient="auto" markerUnits="strokeWidth">
            <polygon points="0,0 6,3 0,6" fill={C.accent} opacity="0.3" />
          </marker>
        </defs>

        {/* ─── Background ─── */}
        <rect width={W} height={H} fill={C.bg} />
        <rect width={W} height={H} fill="url(#fdaDotGrid)" />

        {/* ─── Title ─── */}
        <text x={W / 2} y="38" textAnchor="middle" fill={C.text}
          fontSize="20" fontFamily="'Fraunces', Georgia, serif" fontWeight="500"
          letterSpacing="-0.3"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.1s both" }}>
          How a Peptide Gets FDA Approval
        </text>
        <text x={W / 2} y="56" textAnchor="middle" fill={C.textDim}
          fontSize="11.5" fontFamily="'Outfit', sans-serif" fontWeight="350"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.2s both" }}>
          From discovery to market — a long and rigorous journey
        </text>

        {/* ─── Arrow connectors between stage cards ─── */}
        {stageXPositions.slice(0, -1).map((sx, i) => {
          const x1 = sx + cardW;
          const x2 = stageXPositions[i + 1];
          const midY = cardY + cardH / 2;
          return (
            <line key={i} x1={x1 + 2} y1={midY} x2={x2 - 2} y2={midY}
              stroke={C.accent} strokeWidth="2.5" opacity="0.3"
              markerEnd="url(#arrowHead)"
              style={{ animation: `fadeNodeIn 0.4s ease-out ${0.5 + i * 0.1}s both` }} />
          );
        })}

        {/* ─── Stage cards ─── */}
        {stages.map((stage, i) => (
          <StageCard key={i} x={stageXPositions[i]} y={cardY}
            stage={stage} delay={0.3 + i * 0.1} />
        ))}

        {/* ─── Bottom summary bar ─── */}
        <g style={{ animation: "slideUp 0.5s ease-out 1.2s both" }}>
          <rect x="100" y="290" width={W - 200} height="52" rx="12"
            fill="white" stroke={C.border} strokeWidth="1" />
          <rect x="100" y="290" width={W - 200} height="52" rx="12"
            fill={C.accent} opacity="0.02" />

          {[
            { x: 255, val: "8-15 years", label: "Total timeline" },
            { x: 430, val: "$1-2 billion", label: "Average cost" },
            { x: 605, val: "~12%", label: "Success rate" },
          ].map((stat, i) => (
            <g key={i}>
              {i > 0 && (
                <line x1={stat.x - 90} y1={300} x2={stat.x - 90} y2={332}
                  stroke={C.border} strokeWidth="1" />
              )}
              <text x={stat.x} y="312" textAnchor="middle" fill={C.accent}
                fontSize="15" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
                {stat.val}
              </text>
              <text x={stat.x} y="328" textAnchor="middle" fill={C.textMuted}
                fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
                {stat.label}
              </text>
            </g>
          ))}
        </g>

        {/* ─── Source line ─── */}
        <text x={W / 2} y={H - 18} textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="300"
          opacity="0.6">
          Sources: FDA.gov · ClinicalTrials.gov · Tufts Center for the Study of Drug Development
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
