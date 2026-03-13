export default function HeroOverviewInfographic() {
  const font = "'Outfit', sans-serif";

  const categories = [
    { label: 'Recovery',   p1: 'BPC-157',        p2: 'TB-500',         x: 44,  fill: '#E1F5EE', stroke: '#0F6E56', text: '#085041', sub: '#0F6E56' },
    { label: 'Weight',     p1: 'Semaglutide',    p2: 'AOD-9604',       x: 164, fill: '#FAECE7', stroke: '#993C1D', text: '#712B13', sub: '#993C1D' },
    { label: 'Anti-aging', p1: 'CJC-1295',       p2: 'GHK-Cu',         x: 284, fill: '#E6F1FB', stroke: '#185FA5', text: '#0C447C', sub: '#185FA5' },
    { label: 'Immune',     p1: 'Thymosin \u03b1-1', p2: 'Selank',      x: 404, fill: '#FBEAF0', stroke: '#993556', text: '#72243E', sub: '#993556' },
    { label: 'Skin',       p1: 'Collagen',       p2: 'GHK-Cu',         x: 524, fill: '#FAEEDA', stroke: '#854F0B', text: '#633806', sub: '#854F0B' },
  ];

  // Peptide chain: 6 circles r=7, spaced 24px apart, centered in card
  const peptideCircles = [129, 153, 177, 201, 225, 249];
  // Protein chain: 9 circles r=5, spaced 18px apart
  const proteinCircles = [419, 437, 455, 473, 491, 509, 527, 545, 563];

  // Wave pattern: even indices sit slightly higher, odd indices lower (6px offset)
  const pCY  = (i) => i % 2 === 0 ? 133 : 139;
  const prCY = (i) => i % 2 === 0 ? 133 : 139;

  const stats = [
    { val: '100+',       label: 'FDA-approved peptides',  cx: 138 },
    { val: 'Since 1921', label: 'Starting with insulin',  cx: 340 },
    { val: '7,000+',     label: 'Naturally in your body', cx: 542 },
  ];

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #E5E2DB', marginTop: 40 }}>
      <svg width="100%" viewBox="0 0 680 454" xmlns="http://www.w3.org/2000/svg">

        {/* ── Title ── */}
        <text x="340" y="22" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="14" fontWeight="500" fill="#1A1A1A">What are peptides?</text>
        <text x="340" y="40" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">
          Small chains of amino acids that signal your cells
        </text>

        {/* ── SECTION 1: Peptide vs Protein ── */}

        {/* Teal card – Peptide */}
        <rect x="44" y="56" width="290" height="118" rx="8" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5" />
        <text x="189" y="77" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="14" fontWeight="500" fill="#085041">Peptide</text>
        <text x="189" y="95" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#0F6E56">2–50 amino acids</text>

        {/* Peptide amino chain – wave pattern */}
        {peptideCircles.map((cx, i) => (
          <circle key={i} cx={cx} cy={pCY(i)} r="7"
            fill="#0F6E56" fillOpacity="0.28" stroke="#0F6E56" strokeWidth="1" />
        ))}
        {peptideCircles.slice(0, -1).map((cx, i) => (
          <line key={i}
            x1={cx + 7} y1={pCY(i)}
            x2={peptideCircles[i + 1] - 7} y2={pCY(i + 1)}
            stroke="#0F6E56" strokeWidth="1.2" opacity="0.35" />
        ))}

        {/* Gray card – Protein */}
        <rect x="346" y="56" width="290" height="118" rx="8" fill="#F1EFE8" stroke="#5F5E5A" strokeWidth="0.5" />
        <text x="491" y="77" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="14" fontWeight="500" fill="#444441">Protein</text>
        <text x="491" y="95" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">50–2,000+ amino acids</text>

        {/* Protein amino chain – wave pattern */}
        {proteinCircles.map((cx, i) => (
          <circle key={i} cx={cx} cy={prCY(i)} r="5"
            fill="#5F5E5A" fillOpacity="0.22" stroke="#5F5E5A" strokeWidth="0.8" />
        ))}
        {proteinCircles.slice(0, -1).map((cx, i) => (
          <line key={i}
            x1={cx + 5} y1={prCY(i)}
            x2={proteinCircles[i + 1] - 5} y2={prCY(i + 1)}
            stroke="#5F5E5A" strokeWidth="1" opacity="0.35" />
        ))}

        {/* Trailing dots – decreasing size & opacity to show chain continues */}
        <circle cx="578" cy="139" r="3"   fill="#5F5E5A" fillOpacity="0.22" stroke="#5F5E5A" strokeWidth="0.6" opacity="0.40" />
        <circle cx="587" cy="133" r="2.5" fill="#5F5E5A" opacity="0.25" />
        <circle cx="595" cy="139" r="2"   fill="#5F5E5A" opacity="0.15" />

        {/* ── Divider 1 ── */}
        <line x1="44" y1="192" x2="636" y2="192" stroke="#E5E2DB" strokeWidth="0.5" />
        <text x="340" y="207" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#A3A3A3">Five key categories</text>

        {/* ── SECTION 2: Five Category Cards ── */}
        {categories.map((c) => (
          <g key={c.label}>
            <rect x={c.x} y="220" width="112" height="90" rx="8"
              fill={c.fill} stroke={c.stroke} strokeWidth="0.5" />
            <text x={c.x + 56} y="240" textAnchor="middle" dominantBaseline="central"
              fontFamily={font} fontSize="12" fontWeight="500" fill={c.text}>{c.label}</text>
            <text x={c.x + 56} y="258" textAnchor="middle" dominantBaseline="central"
              fontFamily={font} fontSize="11" fontWeight="400" fill={c.sub}>{c.p1}</text>
            <text x={c.x + 56} y="276" textAnchor="middle" dominantBaseline="central"
              fontFamily={font} fontSize="11" fontWeight="400" fill={c.sub}>{c.p2}</text>
          </g>
        ))}

        {/* ── Divider 2 ── */}
        <line x1="44" y1="326" x2="636" y2="326" stroke="#E5E2DB" strokeWidth="0.5" />
        <text x="340" y="340" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fontWeight="400" fill="#A3A3A3">By the numbers</text>

        {/* ── SECTION 3: Stat Cards ── */}
        {stats.map((s) => (
          <g key={s.val}>
            <rect x={s.cx - 94} y="352" width="188" height="74" rx="8"
              fill="#F1EFE8" stroke="#5F5E5A" strokeWidth="0.5" />
            <text x={s.cx} y="374" textAnchor="middle" dominantBaseline="central"
              fontFamily={font} fontSize="15" fontWeight="500" fill="#444441">{s.val}</text>
            <text x={s.cx} y="395" textAnchor="middle" dominantBaseline="central"
              fontFamily={font} fontSize="11" fontWeight="400" fill="#5F5E5A">{s.label}</text>
          </g>
        ))}

        {/* Source */}
        <text x="340" y="440" textAnchor="middle" dominantBaseline="central"
          fontFamily={font} fontSize="11" fill="#A3A3A3" opacity="0.8">
          Sources: FDA.gov · National Center for Biotechnology Information
        </text>
      </svg>
    </div>
  );
}
