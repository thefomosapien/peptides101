export const peptides = [
  {
    id: "bpc-157",
    name: "BPC-157",
    aka: "Body Protection Compound",
    category: "Recovery & Healing",
    icon: "🩹",
    fdaApproved: false,
    popularity: 95,
    description:
      "A peptide derived from human gastric juice. Studied for its role in accelerating tissue repair, reducing inflammation, and supporting gut healing.",
    benefits: [
      "Tissue & wound repair",
      "Gut health support",
      "Joint & tendon recovery",
      "Reduced inflammation",
    ],
    considerations:
      "Animal studies are promising but large-scale human clinical trials are still needed. Some researchers have raised theoretical concerns about promoting blood vessel growth in precancerous cells.",
    studies: [
      {
        title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine",
        journal: "Musculoskeletal Journal of HSS",
        year: 2025,
      },
      {
        title: "BPC-157 and tissue repair mechanisms",
        journal: "Current Pharmaceutical Design",
        year: 2022,
      },
    ],
    goals: ["recovery", "gut", "inflammation"],
  },
  {
    id: "semaglutide",
    name: "Semaglutide",
    aka: "GLP-1 Receptor Agonist",
    category: "Weight Management",
    icon: "⚖️",
    fdaApproved: true,
    popularity: 99,
    description:
      "An FDA-approved peptide used in medications like Ozempic and Wegovy. It mimics a natural hormone that regulates appetite and blood sugar levels.",
    benefits: [
      "Appetite regulation",
      "Blood sugar control",
      "Significant weight loss",
      "Cardiovascular benefits",
    ],
    considerations:
      "This is a prescription medication with well-documented side effects including nausea and GI issues. Requires medical supervision.",
    studies: [
      {
        title: "GLP-1 Receptor Agonists and Cardiovascular Disease in Type 2 Diabetes",
        journal: "Journal of Diabetes Research",
        year: 2018,
      },
      {
        title: "Semaglutide efficacy in obesity management",
        journal: "New England Journal of Medicine",
        year: 2021,
      },
    ],
    goals: ["weight", "metabolic"],
  },
  {
    id: "cjc-1295",
    name: "CJC-1295",
    aka: "Growth Hormone Releasing Hormone",
    category: "Anti-Aging & Performance",
    icon: "⚡",
    fdaApproved: false,
    popularity: 82,
    description:
      "A synthetic analog of growth hormone-releasing hormone. It stimulates the pituitary gland to produce more growth hormone, which can support muscle growth, fat loss, and recovery.",
    benefits: [
      "Increased growth hormone",
      "Improved muscle mass",
      "Enhanced fat metabolism",
      "Better sleep quality",
    ],
    considerations:
      "Removed from FDA-approved compounding list in 2023. Often paired with Ipamorelin. Requires careful dosing under medical guidance.",
    studies: [
      {
        title: "Modified GRF analogs and growth hormone secretion",
        journal: "Journal of Clinical Endocrinology",
        year: 2020,
      },
      {
        title: "CJC-1295/Ipamorelin combination therapy outcomes",
        journal: "Peptides Journal",
        year: 2019,
      },
    ],
    goals: ["muscle", "anti-aging", "performance", "sleep"],
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    aka: "Growth Hormone Secretagogue",
    category: "Anti-Aging & Performance",
    icon: "🧬",
    fdaApproved: false,
    popularity: 85,
    description:
      "A selective growth hormone secretagogue that stimulates growth hormone release with fewer side effects than other GH peptides. Considered one of the safest in its class.",
    benefits: [
      "Growth hormone release",
      "Muscle recovery",
      "Improved bone density",
      "Anti-aging effects",
    ],
    considerations:
      "Not FDA-approved for compounding. Generally considered to have a mild side-effect profile. Best used under physician supervision.",
    studies: [
      {
        title: "Ipamorelin: selective GH secretagogue profile",
        journal: "European Journal of Endocrinology",
        year: 2021,
      },
    ],
    goals: ["muscle", "anti-aging", "recovery"],
  },
  {
    id: "tb-500",
    name: "Thymosin Beta-4",
    aka: "TB-500",
    category: "Recovery & Healing",
    icon: "💪",
    fdaApproved: false,
    popularity: 78,
    description:
      "A naturally occurring peptide found in most human cells. It plays a key role in wound healing, cell migration, and tissue repair.",
    benefits: [
      "Accelerated wound healing",
      "Reduced scar tissue",
      "Improved flexibility",
      "Cardiac tissue repair",
    ],
    considerations:
      "Not FDA-approved. Research is still mostly preclinical. Sometimes combined with BPC-157 in recovery-focused protocols.",
    studies: [
      {
        title: "Thymosin β4 promotes wound healing and tissue regeneration",
        journal: "Annals of the New York Academy of Sciences",
        year: 2022,
      },
    ],
    goals: ["recovery", "inflammation", "performance"],
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    aka: "Copper Peptide",
    category: "Skin & Anti-Aging",
    icon: "✨",
    fdaApproved: false,
    popularity: 75,
    description:
      "A naturally occurring copper complex found in human plasma. Widely used in skincare for its ability to promote collagen synthesis and skin repair.",
    benefits: [
      "Skin rejuvenation",
      "Collagen production",
      "Wound healing",
      "Hair growth support",
    ],
    considerations:
      "Available topically in many skincare products. Injectable forms are not FDA-approved. Topical forms are generally well-tolerated.",
    studies: [
      {
        title: "GHK-Cu peptide in skin remodeling",
        journal: "International Journal of Molecular Sciences",
        year: 2023,
      },
    ],
    goals: ["anti-aging", "skin"],
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    aka: "GHRH Analog",
    category: "Body Composition",
    icon: "🏋️",
    fdaApproved: true,
    popularity: 70,
    description:
      "An FDA-approved growth hormone-releasing hormone analog, originally indicated for reducing excess abdominal fat in HIV patients. Now gaining wider attention for body composition benefits.",
    benefits: [
      "Visceral fat reduction",
      "Improved body composition",
      "Growth hormone stimulation",
      "Generally well-tolerated",
    ],
    considerations:
      "FDA-approved for a specific indication. Considered one of the safer prescription peptide options. Requires a physician's prescription.",
    studies: [
      {
        title: "Tesamorelin long-term tolerability in lipodystrophy",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: 2010,
      },
      {
        title: "Tesamorelin effects on visceral adipose tissue",
        journal: "HIV Medicine",
        year: 2008,
      },
    ],
    goals: ["weight", "muscle", "performance"],
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    aka: "Anti-Obesity Drug Fragment",
    category: "Weight Management",
    icon: "🔥",
    fdaApproved: false,
    popularity: 72,
    description:
      "A modified fragment of human growth hormone that targets fat metabolism. It works by stimulating the breakdown of stored fat while preventing new fat accumulation.",
    benefits: [
      "Fat metabolism boost",
      "No impact on blood sugar",
      "Non-hormonal action",
      "Targeted fat reduction",
    ],
    considerations:
      "Not FDA-approved. Limited human clinical data. Has GRAS (Generally Recognized As Safe) status as a food supplement in some formulations.",
    studies: [
      {
        title: "AOD-9604 effects on fat metabolism",
        journal: "Obesity Research",
        year: 2019,
      },
    ],
    goals: ["weight", "metabolic"],
  },
  {
    id: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    aka: "Immune Modulator",
    category: "Immune Support",
    icon: "🛡️",
    fdaApproved: false,
    popularity: 65,
    description:
      "A peptide naturally produced by the thymus gland. It helps modulate and strengthen the immune system's response to infections and disease.",
    benefits: [
      "Immune system boost",
      "Antiviral support",
      "Cancer therapy adjunct",
      "Chronic infection management",
    ],
    considerations:
      "Approved in over 30 countries outside the U.S. for various conditions. Not FDA-approved in the U.S. but extensively studied internationally.",
    studies: [
      {
        title: "Thymosin Alpha-1 in immune modulation",
        journal: "Expert Opinion on Biological Therapy",
        year: 2021,
      },
    ],
    goals: ["immune", "inflammation"],
  },
  {
    id: "collagen-peptides",
    name: "Collagen Peptides",
    aka: "Hydrolyzed Collagen",
    category: "Skin, Joints & General",
    icon: "🦴",
    fdaApproved: true,
    popularity: 90,
    description:
      "Widely available as dietary supplements. Collagen peptides support skin elasticity, joint health, and bone strength. They're the most accessible peptide for the general public.",
    benefits: [
      "Skin elasticity",
      "Joint support",
      "Bone strength",
      "Hair & nail health",
    ],
    considerations:
      "Generally considered very safe with minimal side effects. Available over-the-counter. No prescription needed. The most beginner-friendly peptide.",
    studies: [
      {
        title: "Collagen peptide supplementation and sarcopenia in elderly men",
        journal: "British Journal of Nutrition",
        year: 2015,
      },
      {
        title: "Oral collagen peptide supplementation and skin health",
        journal: "Journal of Cosmetic Dermatology",
        year: 2020,
      },
    ],
    goals: ["anti-aging", "skin", "recovery"],
  },
  {
    id: "selank",
    name: "Selank",
    aka: "Nootropic Anxiolytic Peptide",
    category: "Cognitive & Immune",
    icon: "🧠",
    fdaApproved: false,
    popularity: 60,
    description:
      "A synthetic peptide derived from the naturally occurring immunomodulatory peptide tuftsin. Originally developed in Russia, Selank is studied for its anxiolytic and nootropic effects, potentially enhancing cognitive function while reducing anxiety without sedation.",
    benefits: [
      "Anxiety reduction",
      "Cognitive enhancement",
      "Immune system modulation",
      "Mood stabilization",
    ],
    considerations:
      "Approved in Russia as a prescription medication but not FDA-approved in the U.S. Most human studies originate from Russian research institutions. Available primarily as a nasal spray. Generally considered to have a favorable safety profile in existing studies.",
    studies: [
      {
        title: "Selank anxiolytic activity and effects on BDNF expression",
        journal: "Bulletin of Experimental Biology and Medicine",
        year: 2018,
      },
      {
        title: "Immunomodulatory properties of Selank peptide",
        journal: "Russian Journal of Immunology",
        year: 2020,
      },
    ],
    goals: ["performance", "immune"],
  },
  {
    id: "epithalon",
    name: "Epithalon (Epitalon)",
    aka: "Telomerase-Activating Peptide",
    category: "Anti-Aging & Performance",
    icon: "🔄",
    fdaApproved: false,
    popularity: 55,
    description:
      "A synthetic tetrapeptide based on the natural epithalamin peptide produced by the pineal gland. Epithalon is studied for its ability to activate telomerase, the enzyme responsible for maintaining telomere length, which is associated with cellular aging and longevity.",
    benefits: [
      "Telomerase activation",
      "Cellular longevity support",
      "Improved sleep regulation",
      "Antioxidant properties",
    ],
    considerations:
      "Not FDA-approved. Research is primarily based on animal studies and small human trials. Long-term effects of telomerase activation are still being investigated. Should only be used under medical supervision.",
    studies: [
      {
        title: "Epithalon peptide and telomerase activation in human somatic cells",
        journal: "Bulletin of Experimental Biology and Medicine",
        year: 2003,
      },
      {
        title: "Epitalon effects on biomarkers of aging",
        journal: "Advances in Gerontology",
        year: 2019,
      },
    ],
    goals: ["anti-aging"],
  },
  {
    id: "pt-141",
    name: "PT-141 (Bremelanotide)",
    aka: "Melanocortin Receptor Agonist",
    category: "Sexual Health",
    icon: "💗",
    fdaApproved: true,
    popularity: 68,
    description:
      "An FDA-approved peptide marketed as Vyleesi for the treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women. PT-141 works through the melanocortin receptor system in the brain rather than the vascular system, making it a unique approach to sexual dysfunction.",
    benefits: [
      "FDA-approved treatment for HSDD",
      "Works through central nervous system",
      "On-demand dosing",
      "Non-hormonal mechanism",
    ],
    considerations:
      "FDA-approved specifically for premenopausal women with HSDD. Side effects may include nausea, flushing, and headache. Not intended for daily use. Requires a prescription and proper medical evaluation.",
    studies: [
      {
        title: "Bremelanotide for hypoactive sexual desire disorder: RECONNECT study",
        journal: "Obstetrics & Gynecology",
        year: 2019,
      },
      {
        title: "Efficacy and safety of bremelanotide in premenopausal women",
        journal: "Journal of Women's Health",
        year: 2021,
      },
    ],
    goals: ["performance"],
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    aka: "Growth Hormone Releasing Factor",
    category: "Anti-Aging & Performance",
    icon: "🌙",
    fdaApproved: false,
    popularity: 74,
    description:
      "A synthetic analog of growth hormone-releasing hormone (GHRH) consisting of the first 29 amino acids of the natural GHRH molecule. Sermorelin stimulates the pituitary gland to naturally produce and release growth hormone, supporting anti-aging, muscle development, and improved sleep quality.",
    benefits: [
      "Natural growth hormone stimulation",
      "Improved sleep quality",
      "Enhanced muscle recovery",
      "Anti-aging support",
    ],
    considerations:
      "Was previously FDA-approved (as Geref) but the manufacturer discontinued it for commercial reasons — not safety concerns. Now available through compounding pharmacies. Considered one of the milder GH-stimulating peptides with a well-established safety history.",
    studies: [
      {
        title: "Sermorelin therapy and growth hormone deficiency in adults",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: 2018,
      },
      {
        title: "Effects of sermorelin on sleep, body composition, and IGF-1 levels",
        journal: "Clinical Endocrinology",
        year: 2020,
      },
    ],
    goals: ["anti-aging", "muscle", "sleep"],
  },
  {
    id: "kpv",
    name: "KPV",
    aka: "Alpha-MSH Fragment Peptide",
    category: "Immune Support",
    icon: "🌿",
    fdaApproved: false,
    popularity: 52,
    description:
      "A tripeptide fragment derived from alpha-melanocyte-stimulating hormone (alpha-MSH). KPV has potent anti-inflammatory properties and is being researched for its potential to calm inflammatory responses in the gut and throughout the body, supporting immune balance.",
    benefits: [
      "Anti-inflammatory action",
      "Gut health support",
      "Immune system balance",
      "Skin inflammation relief",
    ],
    considerations:
      "Not FDA-approved. Research is still in early stages, with most data from in vitro and animal studies. Often used orally or topically for gut and skin inflammation. Should be used under the guidance of a knowledgeable healthcare provider.",
    studies: [
      {
        title: "KPV anti-inflammatory effects in colitis models",
        journal: "Journal of Biological Chemistry",
        year: 2017,
      },
      {
        title: "Alpha-MSH-derived peptides and inflammatory bowel disease",
        journal: "Peptides",
        year: 2022,
      },
    ],
    goals: ["inflammation", "gut", "immune"],
  },
];

export const categories = [
  "all",
  ...new Set(peptides.map((p) => p.category)),
];
