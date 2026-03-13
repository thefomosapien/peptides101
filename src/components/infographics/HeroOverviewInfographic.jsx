export default function HeroOverviewInfographic() {
  const font = "'Outfit', sans-serif";

  // Section 2 – category cards
  const categories = [
    { label: 'Recovery',   p1: 'BPC-157',      p2: 'TB-500',       x: 44,  fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041', sub: '#0F6E56' },
    { label: 'Weight',     p1: 'Semaglutide',   p2: 'AOD-9604',     x: 164, fill: '#FAECE7', stroke: '#993C1D', text: '#712B13', sub: '#993C1D' },
    { label: 'Anti-aging', p1: 'CJC-1295',      p2: 'GHK-Cu',       x: 284, fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C', sub: '#185FA5' },
    { label: 'Immune',     p1: 'Thymosin \u03b1-1', p2: 'Selank',   x: 404, fill: '#FBEAF0', stroke: '#993556', text: '#72243E', sub: '#993556' },
    { label: 'Skin',       p1: 'Collagen',      p2: 'GHK-Cu',       x: 524, fill: '#FAEEDA', stroke: '#854F0B', text: '#633806', sub: '#854F0B' },
  ];

  // Peptide chain circles: 6 circles, r=7, centers spaced 24 apart, centered at x=189, y=130
  const peptideCircles = [129, 153, 177, 201, 225, 249];
  // Protein chain circles: 9 circles, r=5, centers spaced 18 apart, centered at x=491, y=130
  const proteinCircles = [419, 437, 455, 473, 491, 509, 527, 545, 563];

  // Stat cards: 3 cards, w=188, gap=14, x1=44, x2=246, x3=448
  const stats = [
    { val: '100+',       label: 'FDA-approved peptides',    cx: 138 },
    { val: 'Since 1921', label: 'Starting with insulin',    cx: 340 },
    { val: '7,000+',     label: 'Naturally in your body',   cx: 542 },
  ];

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginTop: 40 }}>
      <svg width="100%" viewBox="0 0 680 510" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="510" fill="#FAFAF8" />

        {/* ── SECTION 1: Peptide vs Protein ── */}

        {/* Teal card – Peptide */}
        <rect x="44" y="40" width="290" height="128" rx="8" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5" />
        <text x="189" y="65" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="14" fontWeight="500" fill="#085041">Peptide</text>
        <text x="189" y="84" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="11" fontWeight="400" fill="#0F6E56">2–50 amino acids</text>

        {/* Peptide amino chain */}
        {peptideCircles.map((cx, i) => (
          <circle key={i} cx={cx} cy="128" r="7" fill="#0F6E56" fillOpacity="0.28" stroke="#0F6E56" strokeWidth="1" />
        ))}
        {peptideCircles.slice(0, -1).map((cx, i) => (
          <line key={i} x1={cx + 7} y1="128" x2={peptideCircles[i + 1] - 7} y2="128" stroke="#0F6E56" strokeWidth="1.5" />
        ))}

        {/* Gray card – Protein */}
        <rect x="346" y="40" width="290" height="128" rx="8" fill="#F1EFE8" stroke="#5F5E5A" strokeWidth="0.5" />
        <text x="491" y="65" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="14" fontWeight="500" fill="#444441">Protein</text>
        <text x="491" y="84" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">50–2,000+ amino acids</text>

        {/* Protein amino chain */}
        {proteinCircles.map((cx, i) => (
          <circle key={i} cx={cx} cy="128" r="5" fill="#5F5E5A" fillOpacity="0.22" stroke="#5F5E5A" strokeWidth="0.8" />
        ))}
        {proteinCircles.slice(0, -1).map((cx, i) => (
          <line key={i} x1={cx + 5} y1="128" x2={proteinCircles[i + 1] - 5} y2="128" stroke="#5F5E5A" strokeWidth="1" />
        ))}
        <text x="578" y="130" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="13" fill="#5F5E5A" opacity="0.7">\u00b7\u00b7\u00b7</text>

        {/* ── SECTION 2: Five Category Cards ── */}
        {categories.map((c) => (
          <g key={c.label}>
            <rect x={c.x} y="190" width="112" height="90" rx="8" fill={c.fill} stroke={c.stroke} strokeWidth="0.5" />
            <text x={c.x + 56} y="213" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="12" fontWeight="500" fill={c.text}>{c.label}</text>
            <text x={c.x + 56} y="234" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="11" fontWeight="400" fill={c.sub}>{c.p1}</text>
            <text x={c.x + 56} y="252" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="11" fontWeight="400" fill={c.sub}>{c.p2}</text>
          </g>
        ))}

        {/* ── SECTION 3: Stat Cards ── */}
        {/* Cards: w=188, gap=14, x1=44, x2=246, x3=448 */}
        {stats.map((s) => (
          <g key={s.val}>
            <rect x={s.cx - 94} y="302" width="188" height="86" rx="8" fill="#F1EFE8" stroke="#5F5E5A" strokeWidth="0.5" />
            <text x={s.cx} y="332" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="22" fontWeight="500" fill="#444441">{s.val}</text>
            <text x={s.cx} y="360" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">{s.label}</text>
          </g>
        ))}

        {/* Source */}
        <text x="340" y="460" textAnchor="middle" dominantBaseline="central" fontFamily={font} fontSize="11" fill="#888" opacity="0.5">
          Sources: FDA.gov · National Center for Biotechnology Information
        </text>
      </svg>
    </div>
  );
}
