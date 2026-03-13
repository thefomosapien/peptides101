export default function ResearchTimelineInfographic() {
  const font = "'Outfit', sans-serif";

  // Timeline: line at y=150, circles at x=90,190,290,390,490,590
  // Cards alternate above (bottom y=112) and below (top y=172), h=58, w=96
  const milestones = [
    { x: 90,  above: true,  year: '1921', event: 'Insulin discovered',        op: 0.45 },
    { x: 190, above: false, year: '1953', event: 'Oxytocin synthesized',       op: 0.55 },
    { x: 290, above: true,  year: '1977', event: 'Recombinant DNA synthesis',  op: 0.65 },
    { x: 390, above: false, year: '2005', event: '50 FDA approvals',           op: 0.75 },
    { x: 490, above: true,  year: '2017', event: 'Semaglutide approved',       op: 0.88 },
    { x: 590, above: false, year: '2024', event: '100+ approved',              op: 1.00 },
  ];

  const TL_Y = 150;
  const CARD_W = 96;
  const CARD_H = 58;
  const CARD_R = 8;

  // teal color for all (with varying opacity)
  const TEAL_FILL   = '#E1F5EE';
  const TEAL_STROKE = '#0F6E56';
  const TEAL_TEXT   = '#085041';
  const TEAL_SUB    = '#0F6E56';

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginBottom: 24 }}>
      <svg width="100%" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="300" fill="#FAFAF8" />

        {/* Timeline base line */}
        <line x1="84" y1={TL_Y} x2="596" y2={TL_Y}
          stroke="#E5E2DB" strokeWidth="2" strokeLinecap="round" />

        {milestones.map((m, i) => {
          const cardX = m.x - CARD_W / 2;
          const cardY = m.above ? TL_Y - CARD_H - 10 : TL_Y + 10;
          const stemY1 = m.above ? cardY + CARD_H : TL_Y + 6;
          const stemY2 = m.above ? TL_Y - 6 : cardY;

          return (
            <g key={i} opacity={m.op}>
              {/* Connector stem */}
              <line x1={m.x} y1={stemY1} x2={m.x} y2={stemY2}
                stroke={TEAL_STROKE} strokeWidth="0.8" />

              {/* Circle on timeline */}
              <circle cx={m.x} cy={TL_Y} r="6" fill={TEAL_FILL} stroke={TEAL_STROKE} strokeWidth="1.5" />
              <circle cx={m.x} cy={TL_Y} r="2.5" fill={TEAL_STROKE} />

              {/* Card */}
              <rect x={cardX} y={cardY} width={CARD_W} height={CARD_H} rx={CARD_R}
                fill={TEAL_FILL} stroke={TEAL_STROKE} strokeWidth="0.5" />

              {/* Year */}
              <text x={m.x} y={cardY + 18} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={TEAL_TEXT}>{m.year}</text>

              {/* Event (may wrap to 2 lines) */}
              <text x={m.x} y={cardY + 38} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={TEAL_SUB}>{m.event}</text>
            </g>
          );
        })}

        {/* Source */}
        <text x="340" y="276" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#888" opacity="0.5">
          Sources: FDA.gov · PubMed · Nature Reviews Drug Discovery
        </text>
      </svg>
    </div>
  );
}
