export default function SafetySpectrumInfographic() {
  const font = "'Outfit', sans-serif";

  // 4 columns: w=138, gap=16. Total=4*138+3*16=600. Margins=40 each side.
  const tiers = [
    {
      label: 'FDA-approved',
      sub: 'prescription',
      ex1: 'Semaglutide',
      ex2: 'Tesamorelin',
      ex3: 'Insulin',
      note1: 'Rigorous clinical',
      note2: 'trials completed',
      fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041',
    },
    {
      label: 'Physician',
      sub: 'prescribed',
      ex1: 'BPC-157',
      ex2: 'CJC-1295',
      ex3: 'Ipamorelin',
      note1: 'Medical oversight,',
      note2: 'pharmacy-sourced',
      fill: '#EAF3DE', stroke: '#3B6D11', text: '#27500A',
    },
    {
      label: 'OTC',
      sub: 'supplements',
      ex1: 'Collagen',
      ex2: 'GHK-Cu topicals',
      ex3: '',
      note1: 'Generally safe,',
      note2: 'less regulation',
      fill: '#FAEEDA', stroke: '#854F0B', text: '#633806',
    },
    {
      label: 'Unregulated /',
      sub: 'gray market',
      ex1: 'Research-only',
      ex2: 'online peptides',
      ex3: '',
      note1: 'Unknown purity,',
      note2: 'no oversight',
      fill: '#FCEBEB', stroke: '#A32D2D', text: '#791F1F',
    },
  ];

  const COL_W   = 138;
  const COL_GAP = 16;
  const COL_Y   = 72;
  const COL_H   = 200;
  const ARROW_Y = COL_Y + COL_H / 2; // 172

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginTop: 24 }}>
      <svg width="100%" viewBox="0 0 680 372" xmlns="http://www.w3.org/2000/svg">

        {/* ── Title ── */}
        <text x="340" y="22" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="14" fontWeight="500" fill="#1A1A1A">The peptide safety spectrum</text>
        <text x="340" y="40" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">
          Not all peptides carry the same level of evidence
        </text>

        {/* ── Spectrum bar ── */}
        <line x1="116" y1="56" x2="566" y2="56" stroke="#E5E2DB" strokeWidth="0.8" />
        <text x="44" y="56" textAnchor="start" dominantBaseline="central"
          fontFamily={font} fontSize="12" fontWeight="500" fill="#0F6E56">← Safest</text>
        <text x="636" y="56" textAnchor="end" dominantBaseline="central"
          fontFamily={font} fontSize="12" fontWeight="500" fill="#A32D2D">Riskiest →</text>

        {tiers.map((t, i) => {
          const x  = 40 + i * (COL_W + COL_GAP);
          const cx = x + COL_W / 2;

          return (
            <g key={i}>
              {/* Column card */}
              <rect x={x} y={COL_Y} width={COL_W} height={COL_H} rx="8"
                fill={t.fill} stroke={t.stroke} strokeWidth="0.5" />

              {/* Tier label (two lines) */}
              <text x={cx} y={COL_Y + 26} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={t.text}>{t.label}</text>
              <text x={cx} y={COL_Y + 44} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="13" fontWeight="500" fill={t.text}>{t.sub}</text>

              {/* Separator 1 */}
              <line x1={x + 12} y1={COL_Y + 58} x2={x + COL_W - 12} y2={COL_Y + 58}
                stroke={t.stroke} strokeWidth="0.5" opacity="0.4" />

              {/* Examples – no label, just the names */}
              <text x={cx} y={COL_Y + 76} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={t.text}>{t.ex1}</text>
              <text x={cx} y={COL_Y + 92} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={t.text}>{t.ex2}</text>
              {t.ex3 && (
                <text x={cx} y={COL_Y + 108} textAnchor="middle" dominantBaseline="central"
                  fontFamily={font} fontSize="11" fontWeight="400" fill={t.text}>{t.ex3}</text>
              )}

              {/* Separator 2 */}
              <line x1={x + 12} y1={COL_Y + 128} x2={x + COL_W - 12} y2={COL_Y + 128}
                stroke={t.stroke} strokeWidth="0.5" opacity="0.4" />

              {/* Note */}
              <text x={cx} y={COL_Y + 148} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={t.stroke}>{t.note1}</text>
              <text x={cx} y={COL_Y + 164} textAnchor="middle" dominantBaseline="central"
                fontFamily={font} fontSize="11" fontWeight="400" fill={t.stroke}>{t.note2}</text>

              {/* Arrow to next tier – uses current tier's stroke at low opacity */}
              {i < tiers.length - 1 && (() => {
                const ax1 = x + COL_W + 3;
                const ax2 = x + COL_W + COL_GAP - 4;
                return (
                  <g>
                    <line x1={ax1} y1={ARROW_Y} x2={ax2 - 5} y2={ARROW_Y}
                      stroke={t.stroke} strokeWidth="1.5" opacity="0.35" />
                    <polygon
                      points={`${ax2 - 5},${ARROW_Y - 3} ${ax2},${ARROW_Y} ${ax2 - 5},${ARROW_Y + 3}`}
                      fill={t.stroke} opacity="0.35" />
                  </g>
                );
              })()}
            </g>
          );
        })}

        {/* ── Callout box ── */}
        <rect x="44" y="288" width="592" height="52" rx="8"
          fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5" />
        <text x="340" y="314" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="13" fontWeight="500" fill="#085041">
          Wherever you fall, consulting a physician is always recommended
        </text>

        {/* Source */}
        <text x="340" y="358" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#A3A3A3" opacity="0.8">
          Source: FDA.gov · USP · peer-reviewed clinical literature
        </text>
      </svg>
    </div>
  );
}
