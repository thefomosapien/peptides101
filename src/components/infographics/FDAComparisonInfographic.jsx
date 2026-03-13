export default function FDAComparisonInfographic() {
  const font = "'Outfit', sans-serif";

  // Columns: label(110) + 16gap + FDA(218) + 8gap + notFDA(248) = 600. Margins=40 each side.
  // 40+110+16+218+8+248+40 = 680 ✓
  const LABEL_X  = 40;
  const LABEL_W  = 110;
  const FDA_X    = 166;   // LABEL_X + LABEL_W + 16
  const FDA_W    = 218;
  const NOTFDA_X = 392;   // FDA_X + FDA_W + 8
  const NOTFDA_W = 248;

  const HEADER_Y = 56;
  const HEADER_H = 46;
  const ROW_H    = 50;
  const ROWS_Y   = HEADER_Y + HEADER_H; // 102

  const rows = [
    {
      label: 'Clinical testing',
      fda:    'Phase I, II, III trials',
      notFda: 'Often limited to animal studies',
    },
    {
      label: 'Quality control',
      fda:    'Strict FDA cGMP standards',
      notFda: 'Varies widely by source',
    },
    {
      label: 'Access',
      fda:    'Prescription from any physician',
      notFda: 'Compounding, online, intl.',
    },
    {
      label: 'Cost',
      fda:    'Often insurance-covered',
      notFda: 'Out-of-pocket, $100–500+/mo',
    },
    {
      label: 'Safety data',
      fda:    'Extensive long-term profiles',
      notFda: 'Limited, less established',
    },
  ];

  const TABLE_BOTTOM = ROWS_Y + rows.length * ROW_H; // 352
  const TABLE_H      = TABLE_BOTTOM - HEADER_Y;       // 296
  const NOTE_Y       = TABLE_BOTTOM + 12;             // 364

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginBottom: 24 }}>
      <svg width="100%" viewBox="0 0 680 434" xmlns="http://www.w3.org/2000/svg">

        {/* ── Title ── */}
        <text x="340" y="22" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="14" fontWeight="500" fill="#1A1A1A">FDA-approved vs. non-approved</text>
        <text x="340" y="40" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">
          Key differences in oversight, access, and evidence
        </text>

        {/* ── Table: clipped to rounded container ── */}
        <defs>
          <clipPath id="fda-table-clip">
            <rect x={LABEL_X} y={HEADER_Y} width="600" height={TABLE_H} rx="8" />
          </clipPath>
        </defs>

        <g clipPath="url(#fda-table-clip)">
          {/* Header background fills */}
          <rect x={FDA_X}    y={HEADER_Y} width={FDA_W}    height={HEADER_H} fill="#E1F5EE" />
          <rect x={NOTFDA_X} y={HEADER_Y} width={NOTFDA_W} height={HEADER_H} fill="#FAEEDA" />

          {/* Header labels */}
          <text x={FDA_X + FDA_W / 2} y={HEADER_Y + HEADER_H / 2} textAnchor="middle" dominantBaseline="central"
            fontFamily={font} fontSize="13" fontWeight="500" fill="#085041">FDA-approved</text>
          <text x={NOTFDA_X + NOTFDA_W / 2} y={HEADER_Y + HEADER_H / 2} textAnchor="middle" dominantBaseline="central"
            fontFamily={font} fontSize="13" fontWeight="500" fill="#633806">Not FDA-approved</text>

          {/* Data rows */}
          {rows.map((row, i) => {
            const ry   = ROWS_Y + i * ROW_H;
            const rMid = ry + ROW_H / 2;
            const isOdd = i % 2 === 0;

            return (
              <g key={i}>
                {/* Alternating row tints */}
                {isOdd && (
                  <>
                    <rect x={LABEL_X}  y={ry} width={LABEL_W}  height={ROW_H} fill="#F8F7F4" />
                    <rect x={FDA_X}    y={ry} width={FDA_W}    height={ROW_H} fill="#E1F5EE" opacity="0.75" />
                    <rect x={NOTFDA_X} y={ry} width={NOTFDA_W} height={ROW_H} fill="#FAEEDA" opacity="0.75" />
                  </>
                )}

                {/* Row separator */}
                <line x1={LABEL_X} y1={ry} x2={NOTFDA_X + NOTFDA_W} y2={ry}
                  stroke="#E5E2DB" strokeWidth="0.5" />

                {/* Row label */}
                <text x={LABEL_X + 10} y={rMid} textAnchor="start" dominantBaseline="central"
                  fontFamily={font} fontSize="12" fontWeight="500" fill="#444441">{row.label}</text>

                {/* FDA value */}
                <text x={FDA_X + 12} y={rMid} textAnchor="start" dominantBaseline="central"
                  fontFamily={font} fontSize="11" fontWeight="400" fill="#085041">{row.fda}</text>

                {/* Not-FDA value */}
                <text x={NOTFDA_X + 12} y={rMid} textAnchor="start" dominantBaseline="central"
                  fontFamily={font} fontSize="11" fontWeight="400" fill="#633806">{row.notFda}</text>
              </g>
            );
          })}

          {/* Bottom row separator */}
          <line x1={LABEL_X} y1={TABLE_BOTTOM} x2={NOTFDA_X + NOTFDA_W} y2={TABLE_BOTTOM}
            stroke="#E5E2DB" strokeWidth="0.5" />
        </g>

        {/* Outer rounded border (drawn on top of clip group to stay crisp) */}
        <rect x={LABEL_X} y={HEADER_Y} width="600" height={TABLE_H}
          rx="8" fill="none" stroke="#E5E2DB" strokeWidth="0.5" />

        {/* ── Note box ── */}
        <rect x="40" y={NOTE_Y} width="600" height="40" rx="8"
          fill="#FAEEDA" stroke="#854F0B" strokeWidth="0.5" />
        <text x="340" y={NOTE_Y + 20} textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="500" fill="#633806">
          Not FDA-approved does not mean unsafe — many widely-used peptides fall in this category
        </text>

        {/* Source */}
        <text x="340" y="420" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#A3A3A3" opacity="0.8">
          Sources: FDA.gov · International Journal of Molecular Sciences
        </text>
      </svg>
    </div>
  );
}
