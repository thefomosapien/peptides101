export default function HowPeptidesWorkInfographic() {
  const font = "'Outfit', sans-serif";

  // 4 boxes: w=132, gap=24. Total=4*132+3*24=600. Side margins=40 each.
  const steps = [
    { num: '1', title: 'Enters body',       line1: 'Via injection, oral,', line2: 'or topical',         x: 40,  fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041' },
    { num: '2', title: 'Finds receptor',    line1: 'Targets specific',    line2: 'cell receptors',      x: 196, fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C' },
    { num: '3', title: 'Activates signal',  line1: 'Triggers cellular',   line2: 'response',            x: 352, fill: '#EAF3DE', stroke: '#3B6D11', text: '#27500A' },
    { num: '4', title: 'Biological effect', line1: 'Healing, growth,',    line2: 'or regulation',       x: 508, fill: '#FAECE7', stroke: '#993C1D', text: '#712B13' },
  ];

  const BOX_W = 132;
  const BOX_Y = 112;
  const BOX_H = 148;
  const CIRCLE_Y = 76;
  const ARROW_Y = BOX_Y + BOX_H / 2; // 186

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginTop: 24 }}>
      <svg width="100%" viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="320" fill="#FAFAF8" />

        {steps.map((s, i) => {
          const cx = s.x + BOX_W / 2;
          return (
            <g key={i}>
              {/* Number badge */}
              <circle cx={cx} cy={CIRCLE_Y} r="16" fill={s.stroke} />
              <text x={cx} y={CIRCLE_Y} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="14" fontWeight="500" fill="#fff">{s.num}</text>

              {/* Dashed connector: circle bottom → box top */}
              <line x1={cx} y1={CIRCLE_Y + 16} x2={cx} y2={BOX_Y}
                stroke={s.stroke} strokeWidth="0.8" strokeDasharray="3 2" />

              {/* Step box */}
              <rect x={s.x} y={BOX_Y} width={BOX_W} height={BOX_H} rx="8"
                fill={s.fill} stroke={s.stroke} strokeWidth="0.5" />
              <text x={cx} y={BOX_Y + 36} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={s.text}>{s.title}</text>
              <text x={cx} y={BOX_Y + 62} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={s.stroke}>{s.line1}</text>
              <text x={cx} y={BOX_Y + 80} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={s.stroke}>{s.line2}</text>

              {/* Arrow to next step */}
              {i < steps.length - 1 && (() => {
                const ax1 = s.x + BOX_W + 3;
                const ax2 = steps[i + 1].x - 4;
                return (
                  <g>
                    <line x1={ax1} y1={ARROW_Y} x2={ax2 - 6} y2={ARROW_Y}
                      stroke="#C8C5BF" strokeWidth="1.5" />
                    <polygon points={`${ax2 - 6},${ARROW_Y - 5} ${ax2},${ARROW_Y} ${ax2 - 6},${ARROW_Y + 5}`}
                      fill="#C8C5BF" />
                  </g>
                );
              })()}
            </g>
          );
        })}

        {/* Source */}
        <text x="340" y="294" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#888" opacity="0.5">
          Source: National Institutes of Health — peptide pharmacology overview
        </text>
      </svg>
    </div>
  );
}
