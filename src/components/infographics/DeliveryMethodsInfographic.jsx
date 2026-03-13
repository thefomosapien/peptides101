export default function DeliveryMethodsInfographic() {
  const font = "'Outfit', sans-serif";

  // 4 columns: w=138, gap=16. Total=4*138+3*16=552+48=600. Margins=40 each side.
  const methods = [
    {
      label: 'Injection',
      absorption: '90–100%',
      speed: '15–30 min',
      common1: 'Most therapeutic',
      common2: 'peptides',
      ease: 2,
      fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041', sub: '#0F6E56',
    },
    {
      label: 'Oral capsules',
      absorption: '10–40%',
      speed: '1–2 hours',
      common1: 'Collagen,',
      common2: 'oral BPC-157',
      ease: 5,
      fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C', sub: '#185FA5',
    },
    {
      label: 'Sublingual',
      absorption: '50–70%',
      speed: '30–60 min',
      common1: 'Selank,',
      common2: 'GH peptides',
      ease: 4,
      fill: '#FAECE7', stroke: '#993C1D', text: '#712B13', sub: '#993C1D',
    },
    {
      label: 'Topical',
      absorption: 'Local area',
      speed: 'Varies',
      common1: 'GHK-Cu,',
      common2: 'collagen creams',
      ease: 5,
      fill: '#FBEAF0', stroke: '#993556', text: '#72243E', sub: '#993556',
    },
  ];

  const COL_W = 138;
  const COL_GAP = 16;
  const COL_Y = 48;
  const COL_H = 372;

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginTop: 24 }}>
      <svg width="100%" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="480" fill="#FAFAF8" />

        {methods.map((m, i) => {
          const x = 40 + i * (COL_W + COL_GAP);
          const cx = x + COL_W / 2;

          // Ease dots: 5 circles, r=5, spaced 14 apart, centered at cx
          const dotCx0 = cx - 28; // first dot center

          return (
            <g key={i}>
              {/* Column background */}
              <rect x={x} y={COL_Y} width={COL_W} height={COL_H} rx="8"
                fill={m.fill} stroke={m.stroke} strokeWidth="0.5" />

              {/* Method name */}
              <text x={cx} y={COL_Y + 34} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={m.text}>{m.label}</text>

              {/* Separator */}
              <line x1={x + 12} y1={COL_Y + 50} x2={x + COL_W - 12} y2={COL_Y + 50}
                stroke={m.stroke} strokeWidth="0.5" opacity="0.4" />

              {/* Absorption */}
              <text x={cx} y={COL_Y + 72} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={m.stroke} opacity="0.7">Absorption</text>
              <text x={cx} y={COL_Y + 90} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="12" fontWeight="500" fill={m.text}>{m.absorption}</text>

              {/* Speed */}
              <text x={cx} y={COL_Y + 116} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={m.stroke} opacity="0.7">Speed</text>
              <text x={cx} y={COL_Y + 134} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="12" fontWeight="500" fill={m.text}>{m.speed}</text>

              {/* Common for */}
              <text x={cx} y={COL_Y + 160} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={m.stroke} opacity="0.7">Common for</text>
              <text x={cx} y={COL_Y + 178} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={m.text}>{m.common1}</text>
              <text x={cx} y={COL_Y + 194} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={m.text}>{m.common2}</text>

              {/* Ease */}
              <text x={cx} y={COL_Y + 228} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={m.stroke} opacity="0.7">Ease of use</text>

              {/* Ease dots */}
              {[0, 1, 2, 3, 4].map((d) => (
                <circle key={d}
                  cx={dotCx0 + d * 14}
                  cy={COL_Y + 254}
                  r="5"
                  fill={d < m.ease ? m.stroke : 'none'}
                  stroke={m.stroke}
                  strokeWidth={d < m.ease ? 0 : 0.8}
                  opacity={d < m.ease ? 0.85 : 0.3}
                />
              ))}
            </g>
          );
        })}

        {/* Note */}
        <text x="340" y="446" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#5F5E5A" opacity="0.6">
          Absorption rates are approximate and vary by peptide and individual factors
        </text>

        {/* Source */}
        <text x="340" y="464" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#888" opacity="0.5">
          Source: Journal of Controlled Release · Pharmaceutics (MDPI)
        </text>
      </svg>
    </div>
  );
}
