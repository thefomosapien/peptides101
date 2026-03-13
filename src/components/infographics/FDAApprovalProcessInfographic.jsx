export default function FDAApprovalProcessInfographic() {
  const font = "'Outfit', sans-serif";

  // 6 stages: w=85, gap=18. Total=6*85+5*18=510+90=600. Margins=40 each side.
  const stages = [
    { label: 'Discovery',   duration: '2–5 years',  fill: '#F1EFE8', stroke: '#5F5E5A', text: '#444441' },
    { label: 'Preclinical', duration: '1–3 years',  fill: '#F1EFE8', stroke: '#5F5E5A', text: '#444441' },
    { label: 'Phase I',     duration: '1–2 years',  fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C' },
    { label: 'Phase II',    duration: '1–3 years',  fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C' },
    { label: 'Phase III',   duration: '2–4 years',  fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041' },
    { label: 'FDA review',  duration: '1–2 years',  fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041' },
  ];

  const BOX_W  = 85;
  const BOX_GAP = 18;
  const BOX_Y  = 40;
  const BOX_H  = 116;
  const ARROW_Y = BOX_Y + BOX_H / 2; // 98

  // Opacity ramps from 0.70 on the first box to 1.0 on the last
  const fillOpacity = (i) => +(0.70 + i * 0.06).toFixed(2);

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginBottom: 24 }}>
      <svg width="100%" viewBox="0 0 680 268" xmlns="http://www.w3.org/2000/svg">

        {stages.map((s, i) => {
          const x  = 40 + i * (BOX_W + BOX_GAP);
          const cx = x + BOX_W / 2;

          return (
            <g key={i}>
              {/* Stage box – opacity builds as journey progresses */}
              <rect x={x} y={BOX_Y} width={BOX_W} height={BOX_H} rx="8"
                fill={s.fill} fillOpacity={fillOpacity(i)} stroke={s.stroke} strokeWidth="0.5" />

              {/* Step number circle – inside box at top */}
              <circle cx={cx} cy={BOX_Y + 22} r="14" fill={s.stroke} opacity="0.20" />
              <text x={cx} y={BOX_Y + 22} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={s.text}>{i + 1}</text>

              {/* Stage name */}
              <text x={cx} y={BOX_Y + 62} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="12" fontWeight="500" fill={s.text}>{s.label}</text>

              {/* Duration */}
              <text x={cx} y={BOX_Y + 84} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={s.stroke}>{s.duration}</text>

              {/* Arrow to next stage */}
              {i < stages.length - 1 && (() => {
                const ax1 = x + BOX_W + 2;
                const ax2 = x + BOX_W + BOX_GAP - 3;
                return (
                  <g>
                    <line x1={ax1} y1={ARROW_Y} x2={ax2 - 5} y2={ARROW_Y}
                      stroke={s.stroke} strokeWidth="1.2" opacity="0.45" />
                    <polygon
                      points={`${ax2 - 5},${ARROW_Y - 3} ${ax2},${ARROW_Y} ${ax2 - 5},${ARROW_Y + 3}`}
                      fill={s.stroke} opacity="0.45" />
                  </g>
                );
              })()}
            </g>
          );
        })}

        {/* Summary bar */}
        <rect x="40" y="174" width="600" height="46" rx="8"
          fill="#F1EFE8" stroke="#5F5E5A" strokeWidth="0.5" />

        {/* Split into 3 text elements so they don't overflow */}
        <text x="140" y="197" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="12" fontWeight="500" fill="#444441">Total: 8–15 years</text>
        <text x="340" y="197" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="12" fontWeight="500" fill="#444441">Cost: $1–2 billion</text>
        <text x="540" y="197" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="12" fontWeight="500" fill="#444441">Success rate: ~12%</text>

        {/* Source */}
        <text x="340" y="250" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#A3A3A3" opacity="0.8">
          Sources: FDA.gov · ClinicalTrials.gov · Tufts Center for Drug Development
        </text>
      </svg>
    </div>
  );
}
