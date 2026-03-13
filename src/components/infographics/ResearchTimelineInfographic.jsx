export default function ResearchTimelineInfographic() {
  const font = "'Outfit', sans-serif";

  // All events use 2 text lines to avoid single-line overflow at any width
  const milestones = [
    { x: 90,  above: true,  year: '1921', line1: 'Insulin',          line2: 'discovered',  op: 0.60 },
    { x: 190, above: false, year: '1953', line1: 'Oxytocin',         line2: 'synthesized', op: 0.68 },
    { x: 290, above: true,  year: '1977', line1: 'Recombinant DNA',  line2: 'synthesis',   op: 0.76 },
    { x: 390, above: false, year: '2005', line1: '50 FDA',           line2: 'approvals',   op: 0.84 },
    { x: 490, above: true,  year: '2017', line1: 'Semaglutide',      line2: 'approved',    op: 0.92 },
    { x: 590, above: false, year: '2024', line1: '100+',             line2: 'approved',    op: 1.00 },
  ];

  const TL_Y   = 180;  // timeline y (pushed down to make room for title)
  const CARD_W = 110;
  const CARD_H = 68;
  const CARD_R = 8;
  const R_OUT  = 8;    // outer dot radius
  const R_IN   = 3;    // inner dot radius

  // Uniform 8px gap between outer circle edge and card edge
  // Above: card bottom at TL_Y - R_OUT - 8 → cardY = TL_Y - R_OUT - 8 - CARD_H
  // Below: card top  at TL_Y + R_OUT + 8
  const cardYOf = (m) => m.above
    ? TL_Y - R_OUT - 8 - CARD_H   // = 180 - 8 - 8 - 68 = 96
    : TL_Y + R_OUT + 8;            // = 180 + 8 + 8 = 196

  const TEAL_FILL   = '#E1F5EE';
  const TEAL_STROKE = '#0F6E56';
  const TEAL_TEXT   = '#085041';
  const TEAL_SUB    = '#0F6E56';

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginBottom: 24 }}>
      <svg width="100%" viewBox="0 0 680 298" xmlns="http://www.w3.org/2000/svg">

        {/* ── Title ── */}
        <text x="340" y="22" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="14" fontWeight="500" fill="#1A1A1A">A century of peptide science</text>
        <text x="340" y="40" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">
          Key milestones from insulin to 100+ FDA approvals
        </text>

        {/* ── Timeline base line ── */}
        <line x1="30" y1={TL_Y} x2="650" y2={TL_Y}
          stroke="#E5E2DB" strokeWidth="1.5" strokeLinecap="round" />

        {milestones.map((m, i) => {
          const cardX = m.x - CARD_W / 2;
          const cardY = cardYOf(m);
          // Stem endpoints: leave 8px gap from outer circle edge to card edge
          const stemY1 = m.above ? cardY + CARD_H : TL_Y + R_OUT;
          const stemY2 = m.above ? TL_Y - R_OUT   : cardY;

          return (
            <g key={i} opacity={m.op}>
              {/* Connector stem */}
              <line x1={m.x} y1={stemY1} x2={m.x} y2={stemY2}
                stroke={TEAL_STROKE} strokeWidth="0.8" />

              {/* Timeline dot – larger for visibility at small sizes */}
              <circle cx={m.x} cy={TL_Y} r={R_OUT}  fill={TEAL_FILL}   stroke={TEAL_STROKE} strokeWidth="1.5" />
              <circle cx={m.x} cy={TL_Y} r={R_IN}   fill={TEAL_STROKE} />

              {/* Card */}
              <rect x={cardX} y={cardY} width={CARD_W} height={CARD_H} rx={CARD_R}
                fill={TEAL_FILL} stroke={TEAL_STROKE} strokeWidth="0.5" />

              {/* Year */}
              <text x={m.x} y={cardY + 18} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={TEAL_TEXT}>{m.year}</text>

              {/* Event – two lines to prevent overflow */}
              <text x={m.x} y={cardY + 40} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={TEAL_SUB}>{m.line1}</text>
              <text x={m.x} y={cardY + 54} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={TEAL_SUB}>{m.line2}</text>
            </g>
          );
        })}

        {/* Source */}
        <text x="340" y="282" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#A3A3A3" opacity="0.8">
          Sources: FDA.gov · PubMed · Nature Reviews Drug Discovery
        </text>
      </svg>
    </div>
  );
}
