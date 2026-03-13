export default function FDAApprovalProcessInfographic() {
  const font = "'Outfit', sans-serif";

  // 6 stages: w=91, gap=10. Total=6*91+5*10=546+50=596. Margins=42 each side.
  const stages = [
    { label: 'Discovery',   duration: '2–5 years',  fill: '#F1EFE8', stroke: '#5F5E5A', text: '#444441' },
    { label: 'Preclinical', duration: '1–3 years',  fill: '#F1EFE8', stroke: '#5F5E5A', text: '#444441' },
    { label: 'Phase I',     duration: '1–2 years',  fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C' },
    { label: 'Phase II',    duration: '1–3 years',  fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C' },
    { label: 'Phase III',   duration: '2–4 years',  fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041' },
    { label: 'FDA review',  duration: '1–2 years',  fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041' },
  ];

  const BOX_W = 91;
  const BOX_GAP = 10;
  const BOX_Y = 56;
  const BOX_H = 180;
  const ARROW_Y = BOX_Y + BOX_H / 2; // 146

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginBottom: 24 }}>
      <svg width="100%" viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="360" fill="#FAFAF8" />

        {stages.map((s, i) => {
          const x = 42 + i * (BOX_W + BOX_GAP);
          const cx = x + BOX_W / 2;

          return (
            <g key={i}>
              {/* Stage box */}
              <rect x={x} y={BOX_Y} width={BOX_W} height={BOX_H} rx="8"
                fill={s.fill} stroke={s.stroke} strokeWidth="0.5" />

              {/* Step number circle */}
              <circle cx={cx} cy={BOX_Y + 28} r="14" fill={s.stroke} opacity="0.15" />
              <text x={cx} y={BOX_Y + 28} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={s.text}>{i + 1}</text>

              {/* Stage name */}
              <text x={cx} y={BOX_Y + 80} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="12" fontWeight="500" fill={s.text}>{s.label}</text>

              {/* Duration */}
              <text x={cx} y={BOX_Y + 110} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={s.stroke}>{s.duration}</text>

              {/* Arrow to next stage */}
              {i < stages.length - 1 && (() => {
                const ax1 = x + BOX_W + 2;
                const ax2 = x + BOX_W + BOX_GAP - 3;
                return (
                  <g>
                    <line x1={ax1} y1={ARROW_Y} x2={ax2 - 5} y2={ARROW_Y}
                      stroke="#C8C5BF" strokeWidth="1.2" />
                    <polygon
                      points={`${ax2 - 5},${ARROW_Y - 4} ${ax2},${ARROW_Y} ${ax2 - 5},${ARROW_Y + 4}`}
                      fill="#C8C5BF" />
                  </g>
                );
              })()}
            </g>
          );
        })}

        {/* Summary bar */}
        <rect x="42" y="256" width="596" height="52" rx="8"
          fill="#F1EFE8" stroke="#5F5E5A" strokeWidth="0.5" />
        <text x="340" y="282" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="12" fontWeight="500" fill="#444441">
          Total: 8–15 years  ·  Cost: $1–2 billion  ·  Success rate: ~12%
        </text>

        {/* Source */}
        <text x="340" y="334" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#888" opacity="0.5">
          Sources: FDA.gov · ClinicalTrials.gov · Tufts Center for Drug Development
        </text>
      </svg>
    </div>
  );
}
