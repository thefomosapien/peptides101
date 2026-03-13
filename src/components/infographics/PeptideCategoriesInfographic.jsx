export default function PeptideCategoriesInfographic() {
  const font = "'Outfit', sans-serif";

  // 5 cards: w=112, gap=8. Total=5*112+4*8=560+32=592. Margins=44 each side.
  const categories = [
    {
      label: 'Recovery',
      p1: 'BPC-157',
      p2: 'TB-500',
      p3: 'Thymosin \u03b24',
      fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041', sub: '#0F6E56',
    },
    {
      label: 'Weight',
      p1: 'Semaglutide',
      p2: 'AOD-9604',
      p3: 'Tirzepatide',
      fill: '#FAECE7', stroke: '#993C1D', text: '#712B13', sub: '#993C1D',
    },
    {
      label: 'Anti-aging',
      p1: 'CJC-1295',
      p2: 'GHK-Cu',
      p3: 'Ipamorelin',
      fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C', sub: '#185FA5',
    },
    {
      label: 'Immune',
      p1: 'Thymosin \u03b1-1',
      p2: 'Selank',
      p3: 'LL-37',
      fill: '#FBEAF0', stroke: '#993556', text: '#72243E', sub: '#993556',
    },
    {
      label: 'Skin & joints',
      p1: 'Collagen',
      p2: 'GHK-Cu',
      p3: 'BPC-157',
      fill: '#FAEEDA', stroke: '#854F0B', text: '#633806', sub: '#854F0B',
    },
  ];

  const CARD_W = 112;
  const CARD_GAP = 8;
  const CARD_Y = 60;
  const CARD_H = 232;

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginBottom: 24 }}>
      <svg width="100%" viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="340" fill="#FAFAF8" />

        {/* Header */}
        <text x="340" y="36" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="14" fontWeight="500" fill="#444441">
          Five key peptide categories
        </text>

        {categories.map((c, i) => {
          const x = 44 + i * (CARD_W + CARD_GAP);
          const cx = x + CARD_W / 2;

          return (
            <g key={i}>
              <rect x={x} y={CARD_Y} width={CARD_W} height={CARD_H} rx="8"
                fill={c.fill} stroke={c.stroke} strokeWidth="0.5" />

              {/* Category name */}
              <text x={cx} y={CARD_Y + 30} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={c.text}>{c.label}</text>

              {/* Separator */}
              <line x1={x + 12} y1={CARD_Y + 48} x2={x + CARD_W - 12} y2={CARD_Y + 48}
                stroke={c.stroke} strokeWidth="0.5" opacity="0.4" />

              {/* Peptides label */}
              <text x={cx} y={CARD_Y + 68} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={c.stroke} opacity="0.7">Examples</text>

              {/* Peptide names */}
              <text x={cx} y={CARD_Y + 92} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={c.text}>{c.p1}</text>
              <text x={cx} y={CARD_Y + 112} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={c.text}>{c.p2}</text>
              <text x={cx} y={CARD_Y + 132} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={c.text}>{c.p3}</text>
            </g>
          );
        })}

        {/* Source */}
        <text x="340" y="318" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#888" opacity="0.5">
          Source: Published peptide research literature
        </text>
      </svg>
    </div>
  );
}
