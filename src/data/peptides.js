export const peptides = [
  // ──────────────────────────────────────────────
  // EXISTING PEPTIDES (updated with deliveryMethod, isBlend, consolidated categories)
  // ──────────────────────────────────────────────
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "cjc-1295",
    name: "CJC-1295",
    aka: "Growth Hormone Releasing Hormone",
    category: "Anti-Aging & Longevity",
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    aka: "Growth Hormone Secretagogue",
    category: "Anti-Aging & Longevity",
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
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
        title: "Thymosin \u03B24 promotes wound healing and tissue regeneration",
        journal: "Annals of the New York Academy of Sciences",
        year: 2022,
      },
    ],
    goals: ["recovery", "inflammation", "performance"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    aka: "Copper Peptide",
    category: "Skin & Beauty",
    icon: "\u2728",
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
    deliveryMethod: "Topical or subcutaneous injection",
    isBlend: false,
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    aka: "GHRH Analog",
    category: "Weight Management",
    icon: "\uD83C\uDFCB\uFE0F",
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    aka: "Anti-Obesity Drug Fragment",
    category: "Weight Management",
    icon: "\uD83D\uDD25",
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    aka: "Immune Modulator",
    category: "Immune & Inflammation",
    icon: "\uD83D\uDEE1\uFE0F",
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "collagen-peptides",
    name: "Collagen Peptides",
    aka: "Hydrolyzed Collagen",
    category: "Skin & Beauty",
    icon: "\uD83E\uDDB4",
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
    deliveryMethod: "Oral supplement",
    isBlend: false,
  },
  {
    id: "selank",
    name: "Selank",
    aka: "Nootropic Anxiolytic Peptide",
    category: "Sleep & Cognitive",
    icon: "\uD83E\uDDE0",
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
    deliveryMethod: "Nasal spray",
    isBlend: false,
  },
  {
    id: "epithalon",
    name: "Epithalon (Epitalon)",
    aka: "Telomerase-Activating Peptide",
    category: "Anti-Aging & Longevity",
    icon: "\uD83D\uDD04",
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
    goals: ["anti-aging", "sleep"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "pt-141",
    name: "PT-141 (Bremelanotide)",
    aka: "Melanocortin Receptor Agonist",
    category: "Hormonal & Reproductive",
    icon: "\uD83D\uDC97",
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
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    aka: "Growth Hormone Releasing Factor",
    category: "Anti-Aging & Longevity",
    icon: "\uD83C\uDF19",
    fdaApproved: false,
    popularity: 74,
    description:
      "A synthetic analog of growth hormone-releasing hormone (GHRH) consisting of the first 29 amino acids of the natural GHRH molecule. Was previously FDA-approved (as Geref) for growth hormone deficiency diagnosis before being discontinued for commercial reasons. Still widely available through compounding pharmacies. Considered one of the safer growth hormone peptides because it works with the body's natural feedback loop.",
    benefits: [
      "Natural growth hormone stimulation",
      "Improved sleep quality",
      "Enhanced muscle recovery",
      "Anti-aging support",
    ],
    considerations:
      "Was previously FDA-approved (as Geref) but the manufacturer discontinued it for commercial reasons \u2014 not safety concerns. Now available through compounding pharmacies. Considered one of the milder GH-stimulating peptides with a well-established safety history.",
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
    goals: ["anti-aging", "muscle", "sleep", "performance"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "kpv",
    name: "KPV",
    aka: "Alpha-MSH Fragment Peptide",
    category: "Immune & Inflammation",
    icon: "\uD83C\uDF3F",
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
    deliveryMethod: "Oral capsule or subcutaneous injection",
    isBlend: false,
  },

  // ──────────────────────────────────────────────
  // NEW INDIVIDUAL PEPTIDES
  // ──────────────────────────────────────────────
  {
    id: "mots-c",
    name: "MOTS-c",
    aka: "Mitochondrial-Derived Peptide",
    category: "Anti-Aging & Longevity",
    icon: "\u26A1",
    fdaApproved: false,
    popularity: 78,
    description:
      "A 16-amino acid peptide encoded by mitochondrial DNA. Research suggests it regulates energy metabolism, improves insulin sensitivity, and enhances exercise performance. Your body naturally produces it during exercise, but levels decline with age. Preclinical studies show improved glucose metabolism and endurance in mice, including in old age. Not FDA-approved, prohibited by WADA in sports. No completed human clinical trials yet.",
    benefits: [
      "Metabolic regulation",
      "Insulin sensitivity",
      "Exercise performance",
      "Anti-aging potential",
    ],
    considerations:
      "Not FDA-approved and prohibited by WADA. All published data comes from preclinical and animal studies. No completed human clinical trials. Should only be used under medical supervision.",
    studies: [
      {
        title: "MOTS-c is an exercise-induced mitochondrial-encoded regulator of physical decline",
        journal: "Nature Communications",
        year: 2021,
      },
      {
        title: "MOTS-c: A promising mitochondrial-derived peptide for therapeutic exploitation",
        journal: "Frontiers in Endocrinology",
        year: 2023,
      },
      {
        title: "MOTS-c restores mitochondrial respiration in type 2 diabetic heart",
        journal: "Frontiers in Physiology",
        year: 2025,
      },
    ],
    goals: ["metabolic", "performance", "anti-aging"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "5-amino-1mq",
    name: "5-Amino-1MQ",
    aka: "NNMT Inhibitor",
    category: "Weight Management",
    icon: "\uD83D\uDCA7",
    fdaApproved: false,
    popularity: 74,
    description:
      "Technically a small molecule (not a peptide), but widely marketed alongside peptide therapies. It blocks the enzyme NNMT, which plays a role in fat storage and metabolic regulation. By inhibiting NNMT, it may increase NAD+ levels and activate SIRT1 (the \"longevity gene\"). Animal studies showed reduced body mass without appetite changes. Can be taken orally \u2014 unusual for this class. Still experimental with limited human data.",
    benefits: [
      "Fat metabolism",
      "NAD+ support",
      "Muscle preservation",
      "Non-stimulant",
    ],
    considerations:
      "Not FDA-approved. Technically a small molecule, not a peptide. Animal data is promising but human clinical data is very limited. Long-term safety profile is not established.",
    studies: [
      {
        title: "Nicotinamide N-methyltransferase knockdown protects against diet-induced obesity",
        journal: "Nature",
        year: 2014,
      },
      {
        title: "NNMT inhibition increases NAD+ levels and enhances sirtuin-mediated mitochondrial function",
        journal: "Aging Cell",
        year: 2020,
      },
    ],
    goals: ["weight", "metabolic", "anti-aging"],
    deliveryMethod: "Oral capsule",
    isBlend: false,
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    aka: "Triple Hormone Receptor Agonist (GIP/GLP-1/Glucagon)",
    category: "Weight Management",
    icon: "\uD83C\uDFAF",
    fdaApproved: false,
    popularity: 88,
    description:
      "Developed by Eli Lilly, this is the first triple-action hormone receptor agonist, targeting GIP, GLP-1, and glucagon receptors simultaneously. Phase 2 trials showed up to 24% average body weight reduction in 48 weeks \u2014 the highest reported for any obesity medication at the time. Phase 3 trials showed up to 28.7% weight loss. Currently in multiple Phase 3 clinical trials with results expected through 2026. Not yet FDA-approved but could be the next major weight loss drug after Ozempic/Wegovy and Mounjaro/Zepbound.",
    benefits: [
      "Significant weight loss",
      "Blood sugar control",
      "Cardiovascular improvements",
      "Triple hormone action",
    ],
    considerations:
      "Not yet FDA-approved. Still in Phase 3 clinical trials. Side effects in trials included nausea, diarrhea, and vomiting (similar to other GLP-1 drugs). Must be prescribed and monitored by a physician.",
    studies: [
      {
        title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity",
        journal: "New England Journal of Medicine",
        year: 2023,
      },
      {
        title: "Retatrutide: A Game Changer in Obesity Pharmacotherapy",
        journal: "Pharmaceuticals",
        year: 2025,
      },
      {
        title: "Retatrutide delivered weight loss of up to 71.2 lbs in Phase 3",
        journal: "Eli Lilly Press Release",
        year: 2025,
      },
    ],
    goals: ["weight", "metabolic"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "ss-31",
    name: "SS-31 (Elamipretide)",
    aka: "Elamipretide / Bendavia",
    category: "Anti-Aging & Longevity",
    icon: "\uD83D\uDD0B",
    fdaApproved: false,
    popularity: 55,
    description:
      "A synthetic tetrapeptide that targets mitochondria by binding to cardiolipin, a phospholipid in the inner mitochondrial membrane. Designed to stabilize mitochondrial function, reduce oxidative stress, and improve ATP production. Has been in Phase 2/3 clinical trials for mitochondrial myopathy, Barth syndrome, and heart failure. Some trials failed to meet primary endpoints, but showed improvements in fatigue and exercise capacity. One of the more scientifically rigorous peptides with extensive clinical trial data.",
    benefits: [
      "Mitochondrial protection",
      "Energy production",
      "Reduced oxidative stress",
      "Exercise tolerance",
    ],
    considerations:
      "Not FDA-approved. Some Phase 3 trials did not meet their primary endpoints. Still under active investigation for multiple conditions. Should only be used in a clinical or research setting.",
    studies: [
      {
        title: "Improving mitochondrial function with SS-31 reverses age-related redox stress",
        journal: "Free Radical Biology and Medicine",
        year: 2019,
      },
      {
        title: "SS-31 treatment ameliorates cardiac mitochondrial morphology in Barth syndrome",
        journal: "Scientific Reports",
        year: 2024,
      },
      {
        title: "Randomized dose-escalation trial of elamipretide in adults with primary mitochondrial myopathy",
        journal: "Neurology",
        year: 2018,
      },
    ],
    goals: ["anti-aging", "performance", "recovery"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "semax",
    name: "Semax",
    aka: "Synthetic ACTH Fragment",
    category: "Sleep & Cognitive",
    icon: "\uD83E\uDDE0",
    fdaApproved: false,
    popularity: 62,
    description:
      "A synthetic peptide derived from ACTH (adrenocorticotropic hormone). Developed in Russia and approved there for stroke recovery and cognitive enhancement. Studied for improving memory, focus, and neuroprotection. May increase BDNF (brain-derived neurotrophic factor). Administered as a nasal spray. Not FDA-approved in the U.S.",
    benefits: [
      "Cognitive enhancement",
      "Neuroprotection",
      "Focus & memory",
      "BDNF support",
    ],
    considerations:
      "Not FDA-approved in the U.S. Approved in Russia for specific neurological conditions. Most research originates from Russian institutions. Limited Western clinical trial data.",
    studies: [
      {
        title: "Semax and its analogs in the treatment of CNS diseases",
        journal: "Neurochemical Journal",
        year: 2018,
      },
    ],
    goals: ["performance"],
    deliveryMethod: "Nasal spray",
    isBlend: false,
  },
  {
    id: "dsip",
    name: "DSIP",
    aka: "Delta Sleep Inducing Peptide",
    category: "Sleep & Cognitive",
    icon: "\uD83D\uDE34",
    fdaApproved: false,
    popularity: 52,
    description:
      "A naturally occurring neuropeptide involved in sleep regulation. Research suggests it may help normalize sleep patterns, reduce stress-related cortisol, and improve overall sleep quality. Used in clinical settings in some countries for insomnia and stress management. Limited but promising human data.",
    benefits: [
      "Sleep quality",
      "Stress reduction",
      "Cortisol regulation",
      "Recovery support",
    ],
    considerations:
      "Not FDA-approved. Research is limited and mostly from older studies. Mechanism of action is not fully understood. Should be used under physician supervision.",
    studies: [
      {
        title: "Delta sleep-inducing peptide (DSIP): an update",
        journal: "Peptides",
        year: 2003,
      },
    ],
    goals: ["sleep", "recovery"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "kisspeptin",
    name: "Kisspeptin",
    aka: "Kisspeptin-10 / Kisspeptin-54",
    category: "Hormonal & Reproductive",
    icon: "\uD83E\uDDEC",
    fdaApproved: false,
    popularity: 48,
    description:
      "A neuropeptide that plays a crucial role in regulating reproductive hormones, including GnRH, LH, and FSH. Being studied for fertility treatments, low testosterone, and hormonal balance. Shows promise as a more physiological alternative to traditional hormone therapies.",
    benefits: [
      "Hormone regulation",
      "Fertility support",
      "Testosterone optimization",
      "Reproductive health",
    ],
    considerations:
      "Not FDA-approved. Most research is in early clinical stages. Primarily studied in academic and fertility clinic settings. Requires medical supervision and hormone monitoring.",
    studies: [
      {
        title: "Kisspeptin in the control of reproductive function",
        journal: "Physiological Reviews",
        year: 2017,
      },
    ],
    goals: ["performance"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "melanotan-ii",
    name: "Melanotan II",
    aka: "MT-2 / Tanning Peptide",
    category: "Skin & Beauty",
    icon: "\u2600\uFE0F",
    fdaApproved: false,
    popularity: 70,
    description:
      "A synthetic analog of alpha-melanocyte-stimulating hormone. Primarily used for skin tanning without UV exposure. Also has effects on appetite suppression and libido. Carries significant safety concerns including nausea, cardiovascular effects, and potential link to melanoma in existing moles. Widely available but controversial.",
    benefits: [
      "Skin pigmentation",
      "UV-free tanning",
      "Appetite suppression",
      "Libido effects",
    ],
    considerations:
      "CARRIES MORE RISK than most peptides. Nausea is very common. May darken existing moles, raising concerns about masking melanoma. Cardiovascular effects reported. Not recommended without physician oversight.",
    studies: [
      {
        title: "Melanotan II: a review of safety",
        journal: "Journal of the European Academy of Dermatology",
        year: 2019,
      },
    ],
    goals: ["skin"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "nad-plus",
    name: "NAD+",
    aka: "NAD+ / Coenzyme",
    category: "Anti-Aging & Longevity",
    icon: "\uD83D\uDD0B",
    fdaApproved: false,
    popularity: 85,
    description:
      "Not technically a peptide but a coenzyme found in every cell. Widely offered alongside peptide therapy for its role in energy metabolism, DNA repair, and cellular aging. Available as IV infusions, injections, or oral precursors (NMN, NR). Levels decline significantly with age. Often combined with peptide protocols.",
    benefits: [
      "Cellular energy",
      "DNA repair",
      "Anti-aging",
      "Brain function",
    ],
    considerations:
      "Not FDA-approved as a therapeutic peptide but available as a dietary supplement. IV infusions can be uncomfortable. Quality and dosing vary widely between providers. More research needed on optimal delivery methods.",
    studies: [
      {
        title: "NAD+ metabolism and its roles in cellular processes during aging",
        journal: "Nature Reviews Molecular Cell Biology",
        year: 2021,
      },
    ],
    goals: ["anti-aging", "performance", "metabolic"],
    deliveryMethod: "Multiple forms (IV, injection, oral)",
    isBlend: false,
  },
  {
    id: "oxytocin",
    name: "Oxytocin",
    aka: "The Bonding Hormone",
    category: "Hormonal & Reproductive",
    icon: "\uD83E\uDDE1",
    fdaApproved: true,
    popularity: 60,
    description:
      "A naturally occurring peptide hormone involved in social bonding, stress reduction, and sexual function. FDA-approved as Pitocin for labor induction. Increasingly used off-label in wellness settings for anxiety, social connection, and relationship therapy. Available as nasal spray or injection.",
    benefits: [
      "Social bonding",
      "Stress reduction",
      "Mood support",
      "Relationship wellness",
    ],
    considerations:
      "FDA-approved only for labor induction (as Pitocin). Off-label wellness uses are not FDA-approved. Side effects can include nausea and changes in heart rate. Should be administered under medical guidance.",
    studies: [
      {
        title: "Oxytocin modulation of neural circuits for social cognition",
        journal: "Biological Psychiatry",
        year: 2016,
      },
    ],
    goals: ["sleep", "recovery"],
    deliveryMethod: "Nasal spray or injection",
    isBlend: false,
  },
  {
    id: "vip",
    name: "VIP",
    aka: "Vasoactive Intestinal Peptide",
    category: "Immune & Inflammation",
    icon: "\uD83C\uDF2C\uFE0F",
    fdaApproved: false,
    popularity: 42,
    description:
      "A neuropeptide with broad anti-inflammatory and immune-modulating effects. Being studied for chronic inflammatory conditions, mold toxicity/CIRS (Chronic Inflammatory Response Syndrome), pulmonary hypertension, and gut health. Used as a nasal spray in some clinical protocols.",
    benefits: [
      "Anti-inflammatory",
      "Immune modulation",
      "Gut health",
      "Respiratory support",
    ],
    considerations:
      "Not FDA-approved. Research is ongoing and limited to small studies. Primarily used in integrative medicine settings for CIRS and inflammatory conditions. Requires physician supervision.",
    studies: [
      {
        title: "Vasoactive intestinal peptide as an anti-inflammatory mediator",
        journal: "Current Pharmaceutical Design",
        year: 2011,
      },
    ],
    goals: ["immune", "inflammation", "gut"],
    deliveryMethod: "Nasal spray or subcutaneous injection",
    isBlend: false,
  },
  {
    id: "thymalin",
    name: "Thymalin",
    aka: "Thymus Extract Peptide",
    category: "Immune & Inflammation",
    icon: "\uD83E\uDDEA",
    fdaApproved: false,
    popularity: 40,
    description:
      "A peptide complex derived from the thymus gland, developed in Russia by the same researchers behind Epithalon. Studied for immune system restoration, particularly in aging populations. Used in some countries for immune deficiency, post-surgical recovery, and as an anti-aging therapy.",
    benefits: [
      "Immune restoration",
      "Anti-aging",
      "Post-surgical recovery",
      "T-cell function",
    ],
    considerations:
      "Not FDA-approved. Research is primarily from Russian institutions. Limited Western clinical data. Should only be used under medical supervision.",
    studies: [
      {
        title: "Thymalin peptides and immune function in aging",
        journal: "Advances in Gerontology",
        year: 2010,
      },
    ],
    goals: ["immune", "anti-aging"],
    deliveryMethod: "Intramuscular injection",
    isBlend: false,
  },
  {
    id: "cartalax",
    name: "Cartalax",
    aka: "Cartilage Peptide Bioregulator",
    category: "Recovery & Healing",
    icon: "\uD83E\uDDB4",
    fdaApproved: false,
    popularity: 35,
    description:
      "A short peptide bioregulator (Ala-Glu-Asp) developed by the Khavinson research group in Russia. Studied for cartilage and musculoskeletal support. May help regulate gene expression related to cartilage repair. Very limited Western research but used in Russian integrative medicine protocols.",
    benefits: [
      "Cartilage support",
      "Joint health",
      "Musculoskeletal repair",
      "Bioregulation",
    ],
    considerations:
      "Not FDA-approved. Very limited Western clinical data. Research primarily from the Khavinson group in Russia. Considered experimental outside of Russian integrative medicine.",
    studies: [
      {
        title: "Short peptides and cartilage tissue regulation",
        journal: "Advances in Gerontology",
        year: 2015,
      },
    ],
    goals: ["recovery"],
    deliveryMethod: "Oral capsule",
    isBlend: false,
  },
  {
    id: "cagrilinitide",
    name: "Cagrilintide",
    aka: "Amylin Receptor Agonist",
    category: "Weight Management",
    icon: "\uD83D\uDCC9",
    fdaApproved: false,
    popularity: 65,
    description:
      "A long-acting amylin analog being developed by Novo Nordisk. Amylin is a hormone co-secreted with insulin that helps regulate appetite and gastric emptying. Being studied in combination with semaglutide (CagriSema) for enhanced weight loss. Phase 3 trials ongoing.",
    benefits: [
      "Appetite regulation",
      "Enhanced weight loss",
      "Blood sugar control",
      "Combination potential",
    ],
    considerations:
      "Not FDA-approved. Currently in Phase 3 clinical trials. Being developed as a combination therapy with semaglutide. Side effects in trials were similar to other GLP-1 class medications.",
    studies: [
      {
        title: "Cagrilintide plus semaglutide for obesity",
        journal: "New England Journal of Medicine",
        year: 2024,
      },
    ],
    goals: ["weight", "metabolic"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "igf-1-lr3",
    name: "IGF-1 LR3",
    aka: "Insulin-like Growth Factor 1 Long R3",
    category: "Performance & Muscle",
    icon: "\uD83D\uDCAA",
    fdaApproved: false,
    popularity: 68,
    description:
      "A modified version of IGF-1 with a longer half-life. IGF-1 itself is a hormone similar to insulin that plays a role in muscle growth, recovery, and cellular repair. The LR3 variant is more potent and longer-lasting. Used in bodybuilding and performance communities. Carries risks including hypoglycemia and potential cancer cell growth stimulation.",
    benefits: [
      "Muscle growth",
      "Recovery",
      "Cellular repair",
      "Performance enhancement",
    ],
    considerations:
      "Significant safety concerns. Can cause hypoglycemia. Theoretical risk of stimulating cancer cell growth. Must be used under careful medical supervision. Banned by WADA.",
    studies: [
      {
        title: "IGF-1 in skeletal muscle growth and repair",
        journal: "Journal of Cell Science",
        year: 2019,
      },
    ],
    goals: ["muscle", "performance", "recovery"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "hgh-frag",
    name: "HGH Fragment 176-191",
    aka: "HGH Frag 176-191 / AOD-9604 precursor",
    category: "Weight Management",
    icon: "\u2702\uFE0F",
    fdaApproved: false,
    popularity: 60,
    description:
      "A fragment of human growth hormone (amino acids 176-191) that specifically targets fat metabolism without the growth-promoting effects of full HGH. Related to AOD-9604 (which is a modified version of this fragment). May stimulate lipolysis and inhibit lipogenesis.",
    benefits: [
      "Targeted fat loss",
      "No growth effects",
      "Metabolic support",
      "Lipolysis stimulation",
    ],
    considerations:
      "Not FDA-approved. Limited human clinical data. Does not provide the muscle-building or anti-aging effects of full growth hormone. Should only be used under medical supervision.",
    studies: [
      {
        title: "C-terminal fragment of human growth hormone and fat metabolism",
        journal: "Obesity Research",
        year: 2001,
      },
    ],
    goals: ["weight", "metabolic"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "glutathione",
    name: "Glutathione",
    aka: "Master Antioxidant",
    category: "Skin & Beauty",
    icon: "\u2728",
    fdaApproved: false,
    popularity: 82,
    description:
      "Not a peptide but a tripeptide (three amino acids: glutamate, cysteine, glycine) that functions as the body's most important antioxidant. Available as IV infusions, injections, oral supplements, and topical. Often included in peptide therapy protocols for detoxification, skin brightening, and overall cellular health. Levels decline with age, stress, and illness.",
    benefits: [
      "Antioxidant protection",
      "Detoxification",
      "Skin brightening",
      "Immune support",
    ],
    considerations:
      "Not FDA-approved as a therapeutic but available as a dietary supplement. IV infusions are popular but expensive. Oral bioavailability is debated \u2014 liposomal forms may absorb better. Generally well-tolerated.",
    studies: [
      {
        title: "Glutathione in health and disease",
        journal: "Journal of Clinical Investigation",
        year: 2018,
      },
    ],
    goals: ["anti-aging", "skin", "immune"],
    deliveryMethod: "Multiple forms (IV, injection, oral, topical)",
    isBlend: false,
  },

  // ──────────────────────────────────────────────
  // PART 3: SHR SERIES, KLOW, G5K, HMG
  // ──────────────────────────────────────────────
  {
    id: "shr-series",
    name: "SHR Series (SHR-1P, SHR-2P, SHR-3P)",
    aka: "Compounded GLP-1 Peptides",
    category: "Weight Management",
    icon: "\uD83D\uDCC8",
    fdaApproved: false,
    popularity: 75,
    description:
      "A series of compounded peptides related to GLP-1 receptor activation, available through select compounding pharmacies. SHR-1P is the entry level, SHR-2P is mid-strength, and SHR-3P is the strongest formulation. These emerged as alternatives when FDA-approved GLP-1 drugs faced shortages. Regulatory status is evolving and varies by jurisdiction.",
    benefits: [
      "Appetite control",
      "Weight management",
      "Blood sugar regulation",
      "GLP-1 pathway activation",
    ],
    considerations:
      "Not FDA-approved. Regulatory status is uncertain and evolving. Quality and formulation may vary between compounding pharmacies. Requires medical supervision and monitoring.",
    studies: [
      {
        title: "Semaglutide efficacy in obesity management",
        journal: "New England Journal of Medicine",
        year: 2021,
      },
    ],
    goals: ["weight", "metabolic"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "klow",
    name: "KLOW",
    aka: "Compounded Weight Management Peptide",
    category: "Weight Management",
    icon: "\uD83C\uDF31",
    fdaApproved: false,
    popularity: 55,
    description:
      "A proprietary compounded formulation used in weight management protocols. Often combined with other peptides in named stacks like the Hollywood Stack. Specific formulation varies by compounding pharmacy.",
    benefits: [
      "Weight management support",
      "Appetite control",
      "Metabolic support",
    ],
    considerations:
      "Not FDA-approved. Proprietary formulation with limited published research. Quality may vary between compounding pharmacies. Requires medical supervision.",
    studies: [
      {
        title: "GLP-1 Receptor Agonists and Cardiovascular Disease in Type 2 Diabetes",
        journal: "Journal of Diabetes Research",
        year: 2018,
      },
    ],
    goals: ["weight", "metabolic"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: false,
  },
  {
    id: "g5k",
    name: "G5K / G5K-Cu",
    aka: "GHK-Cu Variant / Copper Peptide Complex",
    category: "Skin & Beauty",
    icon: "\uD83E\uDDE4",
    fdaApproved: false,
    popularity: 50,
    description:
      "A variant or branded formulation related to GHK-Cu copper peptide complexes. Used for skin rejuvenation, wound healing, and anti-aging protocols. The copper component supports collagen synthesis and tissue repair. Available in various concentrations.",
    benefits: [
      "Skin rejuvenation",
      "Collagen support",
      "Wound healing",
      "Anti-aging",
    ],
    considerations:
      "Not FDA-approved. Similar safety profile to GHK-Cu. Formulation and concentration may vary by provider. Topical forms are generally well-tolerated.",
    studies: [
      {
        title: "GHK-Cu peptide in skin remodeling",
        journal: "International Journal of Molecular Sciences",
        year: 2023,
      },
    ],
    goals: ["skin", "anti-aging"],
    deliveryMethod: "Topical or subcutaneous injection",
    isBlend: false,
  },
  {
    id: "hmg",
    name: "HMG 75 IU",
    aka: "Human Menopausal Gonadotropin",
    category: "Hormonal & Reproductive",
    icon: "\uD83E\uDDEC",
    fdaApproved: true,
    popularity: 45,
    description:
      "A combination of FSH and LH hormones used primarily in fertility treatments. FDA-approved for specific reproductive indications. Used off-label in some men's health protocols alongside peptide therapy to maintain fertility during testosterone or peptide protocols.",
    benefits: [
      "Fertility support",
      "Hormone production",
      "LH/FSH stimulation",
      "Testicular function",
    ],
    considerations:
      "FDA-approved for specific fertility indications only. Off-label use should be supervised by a reproductive endocrinologist or men's health specialist. Can cause hormonal fluctuations.",
    studies: [
      {
        title: "Bremelanotide Injection: MedlinePlus Drug Information",
        journal: "MedlinePlus/NLM",
        year: 2019,
      },
    ],
    goals: ["performance"],
    deliveryMethod: "Intramuscular injection",
    isBlend: false,
  },

  // ──────────────────────────────────────────────
  // BLENDS & STACKS
  // ──────────────────────────────────────────────
  {
    id: "wolverine-blend",
    name: "Wolverine Blend",
    aka: "BPC-157 & TB-500 Combination",
    category: "Recovery & Healing",
    icon: "\uD83D\uDC3B",
    fdaApproved: false,
    popularity: 88,
    description:
      "The most popular peptide blend in the recovery space. Combines BPC-157's gut and tissue healing with TB-500's systemic wound healing and flexibility benefits. Named for its reputed ability to supercharge recovery. Widely used by athletes and biohackers.",
    benefits: [
      "Accelerated recovery",
      "Tissue repair",
      "Reduced inflammation",
      "Joint & tendon support",
    ],
    considerations:
      "Neither component is FDA-approved. Combining two experimental peptides adds complexity. Should only be used under physician guidance. Quality of blends varies significantly between compounding pharmacies.",
    studies: [
      {
        title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine",
        journal: "Musculoskeletal Journal of HSS",
        year: 2025,
      },
      {
        title: "Thymosin \u03B24 promotes wound healing and tissue regeneration",
        journal: "Annals of the New York Academy of Sciences",
        year: 2022,
      },
    ],
    goals: ["recovery", "inflammation", "performance"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: true,
  },
  {
    id: "cjc-ipamorelin-blend",
    name: "CJC/Ipamorelin Blend",
    aka: "Growth Hormone Releasing Blend",
    category: "Anti-Aging & Longevity",
    icon: "\uD83D\uDE80",
    fdaApproved: false,
    popularity: 90,
    description:
      "The most widely prescribed growth hormone peptide combination. CJC-1295 amplifies GH release while Ipamorelin provides a clean, selective GH pulse. Together they synergize for greater GH output than either alone, with fewer side effects than other GH options.",
    benefits: [
      "Enhanced GH release",
      "Muscle growth",
      "Fat loss",
      "Sleep improvement",
    ],
    considerations:
      "Neither component is FDA-approved. Both were removed from the FDA compounding list. Requires careful dosing and timing. Should only be used under medical supervision with hormone level monitoring.",
    studies: [
      {
        title: "CJC-1295/Ipamorelin combination therapy outcomes",
        journal: "Peptides Journal",
        year: 2019,
      },
      {
        title: "Ipamorelin: selective GH secretagogue profile",
        journal: "European Journal of Endocrinology",
        year: 2021,
      },
    ],
    goals: ["muscle", "anti-aging", "sleep", "performance"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: true,
  },
  {
    id: "tesamorelin-ipamorelin-blend",
    name: "Tesamorelin/Ipamorelin Blend",
    aka: "GH Optimization Blend",
    category: "Weight Management",
    icon: "\uD83C\uDFC6",
    fdaApproved: false,
    popularity: 76,
    description:
      "Combines FDA-approved Tesamorelin (for visceral fat reduction) with the clean GH pulse of Ipamorelin. Often considered a premium GH stack with a better safety profile than CJC-based blends since Tesamorelin has FDA approval history.",
    benefits: [
      "Visceral fat reduction",
      "GH optimization",
      "Body composition",
      "Well-tolerated",
    ],
    considerations:
      "While Tesamorelin is FDA-approved individually, the blend itself is not. Ipamorelin is not FDA-approved. Requires physician supervision and monitoring of GH/IGF-1 levels.",
    studies: [
      {
        title: "Tesamorelin long-term tolerability in lipodystrophy",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        year: 2010,
      },
      {
        title: "Ipamorelin: selective GH secretagogue profile",
        journal: "European Journal of Endocrinology",
        year: 2021,
      },
    ],
    goals: ["weight", "muscle", "performance"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: true,
  },
  {
    id: "beauty-blend",
    name: "Beauty Blend",
    aka: "GHK-Cu & KPV Combination",
    category: "Skin & Beauty",
    icon: "\uD83C\uDF38",
    fdaApproved: false,
    popularity: 64,
    description:
      "Combines the collagen-stimulating, skin-repairing effects of GHK-Cu with KPV's anti-inflammatory properties. Targets skin rejuvenation from two angles: building new collagen while reducing the inflammation that accelerates aging.",
    benefits: [
      "Skin rejuvenation",
      "Collagen support",
      "Anti-inflammatory",
      "Hair & nail health",
    ],
    considerations:
      "Neither component is FDA-approved. Combining two experimental peptides increases complexity. Topical forms are generally better tolerated than injections. Consult a dermatologist or physician before starting.",
    studies: [
      {
        title: "GHK-Cu peptide in skin remodeling",
        journal: "International Journal of Molecular Sciences",
        year: 2023,
      },
      {
        title: "KPV anti-inflammatory effects in colitis models",
        journal: "Journal of Biological Chemistry",
        year: 2017,
      },
    ],
    goals: ["skin", "anti-aging", "inflammation"],
    deliveryMethod: "Topical or subcutaneous injection",
    isBlend: true,
  },
  {
    id: "glow-blend",
    name: "Glow Blend",
    aka: "GHK-Cu, BPC-157 & TB-500 Triple",
    category: "Skin & Beauty",
    icon: "\u2728",
    fdaApproved: false,
    popularity: 70,
    description:
      "A three-peptide combination targeting comprehensive tissue repair and skin health. GHK-Cu handles collagen/skin, BPC-157 handles gut and tissue healing, and TB-500 provides systemic wound healing. Popular in aesthetics-focused clinics.",
    benefits: [
      "Skin health",
      "Tissue repair",
      "Gut healing",
      "Overall rejuvenation",
    ],
    considerations:
      "No components are FDA-approved. A three-peptide blend significantly increases complexity and potential interactions. Requires careful medical oversight. Quality varies between compounding sources.",
    studies: [
      {
        title: "GHK-Cu peptide in skin remodeling",
        journal: "International Journal of Molecular Sciences",
        year: 2023,
      },
      {
        title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine",
        journal: "Musculoskeletal Journal of HSS",
        year: 2025,
      },
    ],
    goals: ["skin", "recovery", "gut", "anti-aging"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: true,
  },
  {
    id: "hollywood-stack",
    name: "Hollywood Stack",
    aka: "SHR-3P, KLOW, MOTS-C, 5-Amino-1MQ",
    category: "Weight Management",
    icon: "\uD83C\uDF1F",
    fdaApproved: false,
    popularity: 72,
    description:
      "A multi-compound stack targeting aggressive weight management from multiple angles \u2014 GLP-1 receptor activation, metabolic optimization, NNMT inhibition, and mitochondrial energy. Named for its popularity in entertainment industry wellness circles.",
    benefits: [
      "Aggressive weight loss",
      "Metabolic boost",
      "Energy enhancement",
      "Multi-pathway approach",
    ],
    considerations:
      "No components are FDA-approved. Combining four active compounds is complex and carries higher risk of interactions and side effects. Requires close medical monitoring. Not recommended for beginners.",
    studies: [
      {
        title: "Semaglutide efficacy in obesity management",
        journal: "New England Journal of Medicine",
        year: 2021,
      },
      {
        title: "Nicotinamide N-methyltransferase knockdown protects against diet-induced obesity",
        journal: "Nature",
        year: 2014,
      },
    ],
    goals: ["weight", "metabolic", "performance"],
    deliveryMethod: "Multiple forms",
    isBlend: true,
  },
  {
    id: "metabolic-forge-stack",
    name: "Metabolic Forge Stack",
    aka: "SHR-2P, CJC/Ipamorelin, Wolverine",
    category: "Performance & Muscle",
    icon: "\uD83D\uDD25",
    fdaApproved: false,
    popularity: 68,
    description:
      "A comprehensive stack combining GLP-1 activation for weight management, growth hormone optimization for body composition, and the recovery power of the Wolverine blend. Designed for active individuals seeking body recomposition.",
    benefits: [
      "Body recomposition",
      "GH optimization",
      "Enhanced recovery",
      "Fat loss + muscle support",
    ],
    considerations:
      "No components are FDA-approved. An extremely complex multi-peptide protocol. Requires comprehensive blood work and ongoing medical monitoring. Not suitable for beginners.",
    studies: [
      {
        title: "CJC-1295/Ipamorelin combination therapy outcomes",
        journal: "Peptides Journal",
        year: 2019,
      },
      {
        title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine",
        journal: "Musculoskeletal Journal of HSS",
        year: 2025,
      },
    ],
    goals: ["weight", "muscle", "recovery", "performance"],
    deliveryMethod: "Subcutaneous injection",
    isBlend: true,
  },
  {
    id: "miami-stack",
    name: "Miami Stack",
    aka: "SHR-3P, Melanotan, BPC-157, CJC/Ipa, MOTS-C",
    category: "Anti-Aging & Longevity",
    icon: "\uD83C\uDF34",
    fdaApproved: false,
    popularity: 66,
    description:
      "The \"everything\" stack targeting weight loss, skin tanning, recovery, growth hormone, and metabolic health simultaneously. Extremely complex \u2014 requires careful medical oversight due to the number of active compounds. Popular in Florida/coastal wellness clinics.",
    benefits: [
      "Weight management",
      "Skin pigmentation",
      "Recovery",
      "GH support",
    ],
    considerations:
      "No components are FDA-approved. Combining five active compounds carries significant risk. Melanotan II in particular has notable safety concerns. This is the most complex stack listed and is not recommended without experienced physician oversight.",
    studies: [
      {
        title: "Semaglutide efficacy in obesity management",
        journal: "New England Journal of Medicine",
        year: 2021,
      },
      {
        title: "MOTS-c is an exercise-induced mitochondrial-encoded regulator of physical decline",
        journal: "Nature Communications",
        year: 2021,
      },
    ],
    goals: ["weight", "skin", "recovery", "muscle", "metabolic"],
    deliveryMethod: "Multiple forms",
    isBlend: true,
  },
];

export const categories = [
  "all",
  ...new Set(peptides.filter((p) => !p.isBlend).map((p) => p.category)),
  "Blends & Stacks",
];
