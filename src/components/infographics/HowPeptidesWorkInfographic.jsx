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

// ─── Step number badge ───
function StepBadge({ cx, cy, number, delay }) {
  return (
    <g style={{ animation: `fadeNodeIn 0.5s ease-out ${delay}s both` }}>
      <circle cx={cx} cy={cy} r="16" fill={C.accent} opacity="0.1" />
      <circle cx={cx} cy={cy} r="12" fill={C.accent} opacity="0.85" />
      <circle cx={cx} cy={cy} r="9" fill="white" opacity="0.15" />
      <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central"
        fill="white" fontSize="11" fontFamily="'Outfit', sans-serif" fontWeight="600">
        {number}
      </text>
    </g>
  );
}

// ─── Arrow connector between steps ───
function StepConnector({ x1, y1, x2, y2, delay }) {
  return (
    <g style={{ animation: `fadeNodeIn 0.4s ease-out ${delay}s both` }}>
      <line x1={x1} y1={y1} x2={x2 - 8} y2={y2}
        stroke={C.accent} strokeWidth="2.5" opacity="0.3"
        strokeLinecap="round" />
      <polygon
        points={`${x2 - 10},${y2 - 5} ${x2},${y2} ${x2 - 10},${y2 + 5}`}
        fill={C.accent} opacity="0.3" />
    </g>
  );
}

// ─── Small outcome card (for Step 4 grid) ───
function OutcomeCard({ x, y, icon, label, color, delay }) {
  const w = 74;
  const h = 58;
  return (
    <g style={{ animation: `slideUp 0.5s ease-out ${delay}s both` }}>
      <rect x={x} y={y} width={w} height={h} rx="8" ry="8"
        fill="white" stroke={color} strokeWidth="1" opacity="0.9" />
      <rect x={x} y={y} width={w} height={h} rx="8" ry="8"
        fill={color} opacity="0.04" />
      {icon}
      <text x={x + w / 2} y={y + h - 8} textAnchor="middle" fill={C.textDim}
        fontSize="8.5" fontFamily="'Outfit', sans-serif" fontWeight="400">
        {label}
      </text>
    </g>
  );
}

// ─── SVG Icons built from primitives ───

function SyringeIcon({ x, y, delay }) {
  return (
    <g style={{ animation: `fadeNodeIn 0.5s ease-out ${delay}s both` }}>
      {/* Syringe body */}
      <rect x={x} y={y} width="36" height="14" rx="2" fill={C.accentLight} stroke={C.accent} strokeWidth="1" />
      {/* Plunger handle */}
      <rect x={x + 36} y={y + 2} width="10" height="10" rx="1" fill={C.accent} opacity="0.3" />
      <line x1={x + 46} y1={y + 3} x2={x + 46} y2={y + 11} stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" />
      {/* Needle tip (triangle) */}
      <polygon points={`${x},${y + 3} ${x - 10},${y + 7} ${x},${y + 11}`}
        fill={C.accent} opacity="0.6" />
      {/* Graduation marks */}
      <line x1={x + 10} y1={y} x2={x + 10} y2={y + 4} stroke={C.accent} strokeWidth="0.5" opacity="0.4" />
      <line x1={x + 20} y1={y} x2={x + 20} y2={y + 4} stroke={C.accent} strokeWidth="0.5" opacity="0.4" />
      <line x1={x + 30} y1={y} x2={x + 30} y2={y + 4} stroke={C.accent} strokeWidth="0.5" opacity="0.4" />
    </g>
  );
}

function PeptideChainSmall({ x, y, delay }) {
  const nodes = [
    { cx: x, cy: y },
    { cx: x + 14, cy: y - 8 },
    { cx: x + 28, cy: y - 2 },
    { cx: x + 42, cy: y - 10 },
  ];
  return (
    <g style={{ animation: `fadeNodeIn 0.5s ease-out ${delay}s both` }}>
      {nodes.slice(0, -1).map((n, i) => (
        <line key={i} x1={n.cx} y1={n.cy} x2={nodes[i + 1].cx} y2={nodes[i + 1].cy}
          stroke={C.accent} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="6" fill={C.accent} opacity="0.1" />
          <circle cx={n.cx} cy={n.cy} r="4" fill={i % 2 === 0 ? C.accent : C.accentMid} opacity="0.85" />
          <circle cx={n.cx} cy={n.cy} r="2.5" fill="white" opacity="0.15" />
        </g>
      ))}
    </g>
  );
}

function MuscleIcon({ x, y }) {
  return (
    <g>
      {/* Muscle fibers - three parallel angled lines with rounded ends */}
      <line x1={x} y1={y + 10} x2={x + 20} y2={y} stroke={C.accent} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <line x1={x + 4} y1={y + 14} x2={x + 24} y2={y + 4} stroke={C.accentMid} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <line x1={x + 8} y1={y + 18} x2={x + 28} y2={y + 8} stroke={C.accent} strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      {/* Bulge circles at the middle of fibers */}
      <circle cx={x + 12} cy={y + 6} r="2" fill={C.accent} opacity="0.5" />
      <circle cx={x + 16} cy={y + 10} r="2" fill={C.accentMid} opacity="0.4" />
    </g>
  );
}

function ShieldIcon({ x, y }) {
  return (
    <g>
      <path d={`M${x + 12},${y} L${x + 24},${y + 5} L${x + 24},${y + 15} Q${x + 24},${y + 22} ${x + 12},${y + 26} Q${x},${y + 22} ${x},${y + 15} L${x},${y + 5} Z`}
        fill={C.blue} opacity="0.15" stroke={C.blue} strokeWidth="1" />
      {/* Checkmark inside */}
      <polyline points={`${x + 7},${y + 13} ${x + 11},${y + 17} ${x + 18},${y + 9}`}
        fill="none" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </g>
  );
}

function WrenchIcon({ x, y }) {
  return (
    <g>
      {/* Wrench handle */}
      <rect x={x + 8} y={y + 10} width="16" height="5" rx="1"
        fill={C.orange} opacity="0.5"
        transform={`rotate(-45, ${x + 16}, ${y + 12})`} />
      {/* Wrench head - open jaw */}
      <path d={`M${x + 2},${y + 2} Q${x},${y + 8} ${x + 4},${y + 12} L${x + 10},${y + 6} Q${x + 8},${y + 2} ${x + 2},${y + 2} Z`}
        fill={C.orange} opacity="0.3" stroke={C.orange} strokeWidth="0.8" />
      {/* Small bolt circle */}
      <circle cx={x + 5} cy={y + 7} r="1.5" fill={C.orange} opacity="0.6" />
    </g>
  );
}

function FlameIcon({ x, y }) {
  return (
    <g>
      {/* Outer flame */}
      <path d={`M${x + 10},${y} Q${x + 18},${y + 8} ${x + 16},${y + 18} Q${x + 14},${y + 24} ${x + 10},${y + 24} Q${x + 6},${y + 24} ${x + 4},${y + 18} Q${x + 2},${y + 8} ${x + 10},${y} Z`}
        fill={C.amber} opacity="0.25" stroke={C.amber} strokeWidth="0.8" />
      {/* Inner flame */}
      <path d={`M${x + 10},${y + 8} Q${x + 14},${y + 14} ${x + 13},${y + 20} Q${x + 11},${y + 22} ${x + 10},${y + 22} Q${x + 9},${y + 22} ${x + 7},${y + 20} Q${x + 6},${y + 14} ${x + 10},${y + 8} Z`}
        fill={C.amber} opacity="0.45" />
    </g>
  );
}

export default function HowPeptidesWorkInfographic({ className }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const W = 860;
  const H = 400;

  // Step positions
  const steps = [
    { x: 70, num: 1, title: "Peptide Enters Body" },
    { x: 280, num: 2, title: "Finds Target Receptor" },
    { x: 490, num: 3, title: "Activates Cell Signal" },
    { x: 700, num: 4, title: "Biological Response" },
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
        <defs>
          <pattern id="dotGridHPW" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill={C.accent} opacity="0.08" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill={C.bg} />
        <rect width={W} height={H} fill="url(#dotGridHPW)" />

        {/* ─── Title ─── */}
        <text x={W / 2} y="32" textAnchor="middle" fill={C.text}
          fontSize="20" fontFamily="'Fraunces', Georgia, serif" fontWeight="500"
          letterSpacing="-0.3"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.1s both" }}>
          How Peptides Work in Your Body
        </text>
        <text x={W / 2} y="50" textAnchor="middle" fill={C.textDim}
          fontSize="12" fontFamily="'Outfit', sans-serif" fontWeight="350"
          style={{ animation: "fadeNodeIn 0.5s ease-out 0.15s both" }}>
          A simplified signaling pathway from injection to biological response
        </text>

        {/* ─── Step badges & titles ─── */}
        {steps.map((s, i) => (
          <g key={i}>
            <StepBadge cx={s.x} cy={75} number={s.num} delay={0.2 + i * 0.12} />
            <text x={s.x} y={100} textAnchor="middle" fill={C.text}
              fontSize="12" fontFamily="'Fraunces', Georgia, serif" fontWeight="500"
              style={{ animation: `slideUp 0.5s ease-out ${0.25 + i * 0.12}s both` }}>
              {s.title}
            </text>
          </g>
        ))}

        {/* ─── Arrow connectors between steps ─── */}
        <StepConnector x1={130} y1={75} x2={225} y2={75} delay={0.4} />
        <StepConnector x1={340} y1={75} x2={435} y2={75} delay={0.55} />
        <StepConnector x1={550} y1={75} x2={645} y2={75} delay={0.7} />

        {/* ════════════════════════════════════════════════════════ */}
        {/* STEP 1 — Peptide Enters Body                           */}
        {/* ════════════════════════════════════════════════════════ */}
        <g style={{ animation: "slideUp 0.5s ease-out 0.3s both" }}>
          {/* Syringe */}
          <SyringeIcon x={38} y={140} delay={0.35} />
          {/* Small peptide chain near needle tip */}
          <PeptideChainSmall x={30} y={175} delay={0.4} />
          {/* Downward arrow from syringe to chain */}
          <line x1={50} y1={157} x2={50} y2={167}
            stroke={C.accent} strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
          <polygon points="46,166 50,172 54,166" fill={C.accent} opacity="0.25" />
          {/* Label */}
          <text x={70} y={210} textAnchor="middle" fill={C.textDim}
            fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
            Injection / Oral
          </text>
        </g>

        {/* ════════════════════════════════════════════════════════ */}
        {/* STEP 2 — Finds Target Receptor                         */}
        {/* ════════════════════════════════════════════════════════ */}
        <g style={{ animation: "slideUp 0.5s ease-out 0.45s both" }}>
          {/* Cell membrane — curved horizontal line */}
          <path d="M240,175 Q260,165 280,175 Q300,185 320,175"
            fill="none" stroke={C.textDim} strokeWidth="2" opacity="0.35" strokeLinecap="round" />
          {/* Lipid bilayer hint — parallel line */}
          <path d="M240,180 Q260,170 280,180 Q300,190 320,180"
            fill="none" stroke={C.textDim} strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />

          {/* Receptor — Y-shape on the membrane */}
          <line x1={280} y1={175} x2={280} y2={145} stroke={C.accent} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1={280} y1={145} x2={268} y2={130} stroke={C.accent} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1={280} y1={145} x2={292} y2={130} stroke={C.accent} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          {/* Receptor binding site glow */}
          <circle cx={280} cy={135} r="10" fill={C.accent} opacity="0.08" />
          <circle cx={280} cy={135} r="6" fill={C.accent} opacity="0.12" />

          {/* Approaching peptide chain (small) */}
          <g>
            <circle cx={248} cy={132} r="3.5" fill={C.accentMid} opacity="0.8" />
            <circle cx={240} cy={128} r="3.5" fill={C.accent} opacity="0.8" />
            <line x1={240} y1={128} x2={248} y2={132}
              stroke={C.accent} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
            {/* Arrow showing approach direction */}
            <line x1={252} y1={133} x2={262} y2={134}
              stroke={C.accent} strokeWidth="1" opacity="0.4" strokeLinecap="round"
              strokeDasharray="2 2" />
          </g>

          <text x={280} y={210} textAnchor="middle" fill={C.textDim}
            fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
            Lock & Key Binding
          </text>
        </g>

        {/* ════════════════════════════════════════════════════════ */}
        {/* STEP 3 — Activates Cell Signal                         */}
        {/* ════════════════════════════════════════════════════════ */}
        <g style={{ animation: "slideUp 0.5s ease-out 0.6s both" }}>
          {/* Cell body — large circle */}
          <circle cx={490} cy={170} r="42" fill={C.accentLight} opacity="0.3" stroke={C.accent} strokeWidth="1" opacity="0.2" />

          {/* Receptor at top of cell (activated, bound) */}
          <line x1={490} y1={128} x2={490} y2={142} stroke={C.accent} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <line x1={490} y1={128} x2={482} y2={118} stroke={C.accent} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <line x1={490} y1={128} x2={498} y2={118} stroke={C.accent} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          {/* Peptide attached */}
          <circle cx={490} cy={120} r="4" fill={C.accentMid} opacity="0.85" />

          {/* Radiating signal ripples (concentric circles) */}
          <circle cx={490} cy={170} r="12" fill="none" stroke={C.accent} strokeWidth="1.5" opacity="0.35" />
          <circle cx={490} cy={170} r="20" fill="none" stroke={C.accent} strokeWidth="1" opacity="0.2" />
          <circle cx={490} cy={170} r="28" fill="none" stroke={C.accent} strokeWidth="0.8" opacity="0.12" />
          <circle cx={490} cy={170} r="36" fill="none" stroke={C.accent} strokeWidth="0.5" opacity="0.06" />

          {/* Central signal burst */}
          <circle cx={490} cy={170} r="5" fill={C.accent} opacity="0.15" />
          <circle cx={490} cy={170} r="3" fill={C.accent} opacity="0.3" />

          {/* Signal lines radiating outward */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 490 + Math.cos(rad) * 8;
            const y1 = 170 + Math.sin(rad) * 8;
            const x2 = 490 + Math.cos(rad) * 18;
            const y2 = 170 + Math.sin(rad) * 18;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={C.accentMid} strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
            );
          })}

          <text x={490} y={225} textAnchor="middle" fill={C.textDim}
            fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
            Signal Cascade
          </text>
        </g>

        {/* ════════════════════════════════════════════════════════ */}
        {/* STEP 4 — Biological Response (2x2 outcome cards)       */}
        {/* ════════════════════════════════════════════════════════ */}
        <OutcomeCard x={660} y={118} color={C.accent} label="Muscle Growth" delay={0.75}
          icon={<MuscleIcon x={680} y={124} />} />
        <OutcomeCard x={740} y={118} color={C.blue} label="Immune Response" delay={0.8}
          icon={<ShieldIcon x={755} y={124} />} />
        <OutcomeCard x={660} y={182} color={C.orange} label="Tissue Repair" delay={0.85}
          icon={<WrenchIcon x={680} y={188} />} />
        <OutcomeCard x={740} y={182} color={C.amber} label="Fat Metabolism" delay={0.9}
          icon={<FlameIcon x={755} y={188} />} />

        {/* ─── Horizontal divider ─── */}
        <line x1="60" y1="260" x2={W - 60} y2="260"
          stroke={C.border} strokeWidth="1"
          style={{ animation: "fadeNodeIn 0.4s ease-out 0.9s both" }} />

        {/* ─── Bottom summary bar ─── */}
        <g style={{ animation: "slideUp 0.5s ease-out 1.0s both" }}>
          <rect x="60" y="275" width={W - 120} height="52" rx="12"
            fill="white" stroke={C.border} strokeWidth="1" />
          <rect x="60" y="275" width={W - 120} height="52" rx="12"
            fill={C.accent} opacity="0.02" />

          {[
            { x: 175, val: "< 1 min", label: "Peptide receptor binding speed" },
            { x: 430, val: "50+ types", label: "Of cell-surface receptors targeted" },
            { x: 685, val: "Seconds", label: "To initiate signal cascades" },
          ].map((stat, i) => (
            <g key={i}>
              {i > 0 && (
                <line x1={stat.x - 130} y1="285" x2={stat.x - 130} y2="317"
                  stroke={C.border} strokeWidth="1" />
              )}
              <text x={stat.x} y="296" textAnchor="middle" fill={C.accent}
                fontSize="15" fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
                {stat.val}
              </text>
              <text x={stat.x} y="314" textAnchor="middle" fill={C.textMuted}
                fontSize="10" fontFamily="'Outfit', sans-serif" fontWeight="350">
                {stat.label}
              </text>
            </g>
          ))}
        </g>

        {/* ─── Bottom note ─── */}
        <text x={W / 2} y="350" textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="300"
          style={{ animation: "slideUp 0.5s ease-out 1.1s both" }}>
          Simplified illustration — actual mechanisms vary by peptide type
        </text>

        {/* ─── Source ─── */}
        <text x={W / 2} y="370" textAnchor="middle" fill={C.textMuted}
          fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="300"
          opacity="0.6"
          style={{ animation: "fadeNodeIn 0.4s ease-out 1.15s both" }}>
          Sources: Nature Reviews Drug Discovery · Journal of Biological Chemistry · PubMed
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
