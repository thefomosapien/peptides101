export default function FDAComparisonInfographic() {
  const font = "'Outfit', sans-serif";

  // Layout: label col (x=40, w=130), FDA col (x=186, w=208), notFDA col (x=402, w=238)
  // FDA ends at 394, notFDA ends at 640. Right margin=40.
  const LABEL_X  = 40;
  const LABEL_W  = 130;
  const FDA_X    = 186;
  const FDA_W    = 208;
  const NOTFDA_X = 402;
  const NOTFDA_W = 238;

  const HEADER_Y = 48;
  const HEADER_H = 50;
  const ROW_H    = 50;
  const ROWS_Y   = HEADER_Y + HEADER_H; // 98

  const rows = [
    {
      label: 'Clinical testing',
      fda:    'Phase I, II, III trials',
      notFda: 'Often limited to animal studies',
    },
    {
      label: 'Quality control',
      fda:    'Strict FDA manufacturing standards',
      notFda: 'Varies widely by source',
    },
    {
      label: 'Access',
      fda:    'Prescription from any physician',
      notFda: 'Compounding, online, international',
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

  const NOTE_Y = ROWS_Y + rows.length * ROW_H + 12; // 360

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginBottom: 24 }}>
      <svg width="100%" viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="400" fill="#FAFAF8" />

        {/* Column headers */}
        <rect x={FDA_X} y={HEADER_Y} width={FDA_W} height={HEADER_H} rx="8"
          fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5" />
        <text x={FDA_X + FDA_W / 2} y={HEADER_Y + HEADER_H / 2} textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="13" fontWeight="500" fill="#085041">FDA-approved</text>

        <rect x={NOTFDA_X} y={HEADER_Y} width={NOTFDA_W} height={HEADER_H} rx="8"
          fill="#FAEEDA" stroke="#854F0B" strokeWidth="0.5" />
        <text x={NOTFDA_X + NOTFDA_W / 2} y={HEADER_Y + HEADER_H / 2} textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="13" fontWeight="500" fill="#633806">Not FDA-approved</text>

        {/* Data rows */}
        {rows.map((row, i) => {
          const ry = ROWS_Y + i * ROW_H;
          const rMid = ry + ROW_H / 2;
          const isOdd = i % 2 === 0; // rows 1,3,5 = even index 0,2,4

          return (
            <g key={i}>
              {/* Alternating row backgrounds */}
              {isOdd && (
                <>
                  <rect x={LABEL_X} y={ry} width={LABEL_W} height={ROW_H} fill="#F8F7F4" />
                  <rect x={FDA_X} y={ry} width={FDA_W} height={ROW_H} fill="#E1F5EE" opacity="0.5" />
                  <rect x={NOTFDA_X} y={ry} width={NOTFDA_W} height={ROW_H} fill="#FAEEDA" opacity="0.5" />
                </>
              )}

              {/* Separator line */}
              <line x1={LABEL_X} y1={ry} x2={NOTFDA_X + NOTFDA_W} y2={ry}
                stroke="#E5E2DB" strokeWidth="0.5" />

              {/* Row label */}
              <text x={LABEL_X + 10} y={rMid} textAnchor="start" dominantBaseline="central"
                fontFamily={font} fontSize="12" fontWeight="500" fill="#444441">{row.label}</text>

              {/* FDA value */}
              <text x={FDA_X + 12} y={rMid} textAnchor="start" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill="#085041">{row.fda}</text>

              {/* Not FDA value */}
              <text x={NOTFDA_X + 12} y={rMid} textAnchor="start" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill="#633806">{row.notFda}</text>
            </g>
          );
        })}

        {/* Bottom border of table */}
        <line x1={LABEL_X} y1={ROWS_Y + rows.length * ROW_H}
          x2={NOTFDA_X + NOTFDA_W} y2={ROWS_Y + rows.length * ROW_H}
          stroke="#E5E2DB" strokeWidth="0.5" />

        {/* Note box */}
        <rect x="40" y={NOTE_Y} width="600" height="24" rx="8"
          fill="#FAEEDA" stroke="#854F0B" strokeWidth="0.5" />
        <text x="340" y={NOTE_Y + 12} textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#633806">
          Not FDA-approved does not mean unsafe — many widely-used peptides fall in this category
        </text>

        {/* Source */}
        <text x="340" y="386" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#888" opacity="0.5">
          Sources: FDA.gov · International Journal of Molecular Sciences
        </text>
      </svg>
    </div>
  );
}
