# Claude Code Prompt: Generate All Infographics

## Instructions
Copy this entire prompt into Claude Code from the project root. It references the
HeroInfographic.jsx component as the established visual style. Make sure that file
is already in your project at `src/components/infographics/HeroInfographic.jsx`
before running this prompt.

---

## The Prompt

```
Read CLAUDE.md for the full design system. Then read
src/components/infographics/HeroInfographic.jsx — this is the established visual
style for ALL infographics on the site. Study its patterns carefully because every
infographic you create must match this exact visual language.

Here is the visual style guide extracted from HeroInfographic.jsx that you MUST
follow for every infographic:

VISUAL LANGUAGE RULES:
- All infographics are React components that render pure SVG with a viewBox
- Background: site bg color #FAFAF7 with a subtle dot-grid pattern overlay
- Typography: Fraunces (serif) for headings/labels/stats, Outfit (sans) for
  body text/descriptions/small labels
- Nodes/circles: Use soft glows (larger transparent circle behind solid circle)
  with a small inner highlight circle for dimensionality
- Color coding: Use the site's palette — accent green #0D7C66 for primary
  elements, #E8723A orange for warnings, #3B6FC0 blue for informational,
  #C6890E amber for caution, #C4567A rose for highlights
- Cards/containers: White fill, 1px colored stroke, rounded corners (rx=12),
  with a 0.04 opacity color overlay for tinting
- Connectors: 2.5px lines with 0.3 opacity, rounded linecaps
- Dividers: Dashed lines with the border color #E5E2DB
- Stat bars: White rounded rectangles with border, containing Fraunces numbers
  and Outfit labels
- Source attribution: Small 9px text at bottom center, 0.6 opacity
- Watermark: "peptides101.info" in Fraunces, bottom-right, 0.35 opacity
- Animations: Staggered entrance using CSS keyframes (fadeNodeIn for nodes,
  slideUp for cards/sections), 0.3-0.5s duration, ease-out timing, sequential
  delays starting from 0.1s
- Font imports: Include the Google Fonts link element for Fraunces + Outfit
  inside the component

RESPONSIVE RULES:
- Use an SVG viewBox so the graphic scales fluidly with container width
- Wrap each SVG in a container div with width: 100%, borderRadius: 16px,
  border: 1px solid #E5E2DB, overflow: hidden
- All text must remain readable at mobile widths (375px) — test that no text
  overlaps or gets clipped when the SVG scales down
- Minimum font sizes: 9px for source text, 10px for labels, 12px for
  category names, 15px+ for stat numbers, 20px for titles
- Do NOT use fixed pixel widths on the container — only on the SVG viewBox
- For very information-dense infographics, set a minHeight on the container
  div so it doesn't crush too small on mobile

FILE STRUCTURE:
Create each infographic as its own file in src/components/infographics/:
- HeroInfographic.jsx (already exists — do not modify)
- HowPeptidesWorkInfographic.jsx
- DeliveryMethodsInfographic.jsx
- SafetySpectrumInfographic.jsx
- PeptideCategoriesInfographic.jsx
- ResearchTimelineInfographic.jsx
- FDAApprovalProcessInfographic.jsx
- FDAComparisonInfographic.jsx

Also create src/components/infographics/index.js that exports all of them.

Then update every page that currently uses <InfographicPlaceholder> to import
and render the real infographic component instead. Keep the InfographicPlaceholder
component in the codebase — it's still useful as a fallback. The infographic
component should accept a className prop for additional styling from the parent.

Here are the exact specifications for each infographic:

---

INFOGRAPHIC 1: HowPeptidesWorkInfographic.jsx
ID: how-peptides-work
PLACEMENT: LearnPage — inside the "What Are Peptides?" accordion
ASPECT RATIO: viewBox "0 0 860 400"
TITLE: "How Peptides Work in Your Body"

CONTENT — show a left-to-right 4-step signaling pathway:
Step 1 — "Peptide Enters Body" — Show a syringe/pill icon (simple SVG shapes,
not emoji) with small peptide chain nodes entering a simplified body outline
Step 2 — "Finds Target Receptor" — Show the peptide chain approaching a cell
membrane (curved line) with a receptor shape (Y-shape or keyhole) on the surface
Step 3 — "Activates Cell Signal" — Show the receptor activating with radiating
signal lines/ripples inside the cell, use accent green glow effects
Step 4 — "Biological Response" — Show 3-4 outcome icons in small cards:
muscle fiber for "Muscle Growth", shield for "Immune Response", wrench for
"Tissue Repair", flame for "Fat Metabolism"

Connect the 4 steps with arrow connectors (use the same line style as
HeroInfographic bonds but with arrowheads). Number each step in a small
circle. Include a small note at the bottom: "Simplified illustration —
actual mechanisms vary by peptide type"

---

INFOGRAPHIC 2: DeliveryMethodsInfographic.jsx
ID: delivery-methods
PLACEMENT: LearnPage — inside the "How Do People Take Them?" accordion
ASPECT RATIO: viewBox "0 0 860 420"
TITLE: "Peptide Delivery Methods Compared"

CONTENT — show 4 columns, one for each delivery method:
Column 1 — "Injection (Subcutaneous)" — Simple syringe icon, color: accent green
  - Absorption: "High (90-100%)"
  - Speed: "Fast (15-30 min)"
  - Common for: "Most therapeutic peptides"
  - Ease: 2/5 dots filled

Column 2 — "Oral Capsules" — Pill capsule icon, color: blue
  - Absorption: "Low-Moderate (10-40%)"
  - Speed: "Slow (1-2 hours)"
  - Common for: "Collagen, BPC-157 oral"
  - Ease: 5/5 dots filled

Column 3 — "Sublingual Drops" — Droplet under tongue icon, color: orange
  - Absorption: "Moderate (50-70%)"
  - Speed: "Moderate (30-60 min)"
  - Common for: "Selank, some GH peptides"
  - Ease: 4/5 dots filled

Column 4 — "Topical Cream" — Tube/jar icon, color: rose
  - Absorption: "Targeted (local area)"
  - Speed: "Varies"
  - Common for: "GHK-Cu, collagen creams"
  - Ease: 5/5 dots filled

For the "Ease" rating, use filled vs empty small circles (like a 5-dot rating).
Add a note at bottom: "Absorption rates are approximate and vary by specific
peptide and individual factors"

---

INFOGRAPHIC 3: SafetySpectrumInfographic.jsx
ID: safety-spectrum
PLACEMENT: LearnPage — inside the "Are They Safe?" accordion
ASPECT RATIO: viewBox "0 0 860 380"
TITLE: "The Peptide Safety Spectrum"

CONTENT — show a horizontal gradient bar from green (left/safest) to red
(right/riskiest) with 4 tiers positioned along it:

Tier 1 (far left, green): "FDA-Approved Prescription"
  - Examples: Semaglutide, Tesamorelin, Insulin
  - Note: "Rigorous clinical trials completed"
  - Icon: Shield with checkmark

Tier 2 (center-left, accent green): "Physician-Prescribed Compounded"
  - Examples: BPC-157, CJC-1295 + Ipamorelin
  - Note: "Medical oversight, pharmacy-sourced"
  - Icon: Medical cross

Tier 3 (center-right, amber): "OTC Supplements"
  - Examples: Collagen peptides, GHK-Cu topicals
  - Note: "Generally safe, less regulation"
  - Icon: Bottle/supplement

Tier 4 (far right, red): "Unregulated / Gray Market"
  - Examples: "Research-only" online peptides
  - Note: "Unknown purity, no oversight"
  - Icon: Warning triangle

Below the spectrum bar, add a tip box: "Wherever you fall on this spectrum,
consulting a physician is always recommended"

---

INFOGRAPHIC 4: PeptideCategoriesInfographic.jsx
ID: peptide-categories
PLACEMENT: GuidePage — above the filter buttons
ASPECT RATIO: viewBox "0 0 860 340"
TITLE: "Peptide Categories at a Glance"

CONTENT — show a hub-and-spoke diagram with "Peptides" in a large central
circle (accent green), and 5 category circles radiating outward connected
by lines. This is a different layout from the HeroInfographic's linear
category cards — here it's a radial/network layout:

Center: Large circle with "Peptides" label and a small amino chain icon
Spoke 1 (top-left): Recovery — green — BPC-157, TB-500, Thymosin β4
Spoke 2 (top-right): Weight — orange — Semaglutide, AOD-9604
Spoke 3 (right): Anti-Aging — blue — CJC-1295, Ipamorelin, GHK-Cu
Spoke 4 (bottom-right): Immune — rose — Thymosin α-1, Selank
Spoke 5 (bottom-left): Skin & Joints — amber — Collagen, GHK-Cu

Each spoke circle should be smaller than center, color-tinted, with the
category icon, name, and peptide names listed below. Use curved or straight
connector lines from center to each spoke with the category color.

---

INFOGRAPHIC 5: ResearchTimelineInfographic.jsx
ID: research-timeline
PLACEMENT: ResearchPage — above the study list
ASPECT RATIO: viewBox "0 0 860 300"
TITLE: "A Century of Peptide Science"

CONTENT — horizontal timeline from left to right with 6 milestone markers:

1921 — "Insulin Discovered" — "First peptide isolated for medical use"
1953 — "Oxytocin Synthesized" — "First peptide chemically synthesized"
1977 — "Somatostatin Produced" — "First peptide made via recombinant DNA"
2005 — "50 FDA Approvals" — "Peptide drugs hit mainstream medicine"
2017 — "Semaglutide Approved" — "GLP-1 revolution begins"
2024 — "100+ Approved" — "Peptides now 10% of all drug approvals"

Use a horizontal line as the timeline base. Each milestone is a node (circle)
on the line with a vertical stem connecting to a card above or below
(alternate above/below for visual interest). Cards should have the year
prominently in Fraunces, the event name in bold Outfit, and description
in lighter Outfit. Color the nodes with a gradient from muted (older) to
accent green (recent) to show progression.

---

INFOGRAPHIC 6: FDAApprovalProcessInfographic.jsx
ID: fda-approval-process
PLACEMENT: FDAPage — below the page subtitle
ASPECT RATIO: viewBox "0 0 860 400"
TITLE: "How a Peptide Gets FDA Approval"

CONTENT — horizontal flowchart with 6 connected stages, left to right:

Stage 1: "Discovery" — Beaker icon — "Peptide identified and isolated"
  - Timeline: "2-5 years"

Stage 2: "Preclinical" — Microscope icon — "Lab and animal testing"
  - Timeline: "1-3 years"

Stage 3: "Phase I Trial" — Small people icon (10-50) — "Safety testing
  in small group"
  - Timeline: "1-2 years"

Stage 4: "Phase II Trial" — Medium people icon (100-300) — "Efficacy in
  larger group"
  - Timeline: "1-3 years"

Stage 5: "Phase III Trial" — Large people icon (1000+) — "Large-scale
  confirmation"
  - Timeline: "2-4 years"

Stage 6: "FDA Review & Approval" — Shield/checkmark icon — "NDA submitted
  and reviewed"
  - Timeline: "1-2 years"

Connect stages with arrow lines. Below the flowchart, add a summary bar:
"Total timeline: 8-15 years | Average cost: $1-2 billion | Success rate: ~12%"

Use green intensity that increases left to right (muted at Discovery,
full accent green at Approval) to show progression toward approval.

---

INFOGRAPHIC 7: FDAComparisonInfographic.jsx
ID: fda-comparison
PLACEMENT: FDAPage — between the explainer boxes and the two-column list
ASPECT RATIO: viewBox "0 0 860 420"
TITLE: "FDA-Approved vs. Non-Approved: What's Different?"

CONTENT — two-column comparison table with visual elements:

Left column header: "✅ FDA-Approved" (green tinted)
Right column header: "⚠️ Not FDA-Approved" (amber tinted)

Comparison rows (5 rows):
Row 1 — "Clinical Testing"
  Left: "Phase I, II, III trials in thousands of patients"
  Right: "Often limited to animal studies or small trials"

Row 2 — "Quality Control"
  Left: "Manufactured under strict FDA cGMP standards"
  Right: "Varies widely — pharmacy compounded to unregulated"

Row 3 — "Access"
  Left: "Prescription from any licensed physician"
  Right: "Compounding pharmacies, online, or international"

Row 4 — "Cost"
  Left: "Often covered by insurance"
  Right: "Typically out-of-pocket, $100-500+/month"

Row 5 — "Safety Data"
  Left: "Extensive long-term safety profiles"
  Right: "Limited — risk/benefit less established"

Use alternating row backgrounds (white and very subtle warm gray). Put a
small icon at the start of each row. Add a bottom note: "Not FDA-approved
does not mean unsafe — it means the full approval process hasn't been
completed. Many widely-used peptides fall in this category."

---

AFTER CREATING ALL 7 NEW INFOGRAPHICS:

1. Create src/components/infographics/index.js exporting all 8 infographics

2. Update each page to replace InfographicPlaceholder with the real component:
   - src/pages/HomePage.jsx: Replace the hero placeholder with HeroInfographic
   - src/pages/LearnPage.jsx: Replace placeholders inside accordion items with
     HowPeptidesWorkInfographic, DeliveryMethodsInfographic, and
     SafetySpectrumInfographic (match by infographic id to the correct topic)
   - src/pages/GuidePage.jsx: Replace placeholder with PeptideCategoriesInfographic
   - src/pages/ResearchPage.jsx: Replace placeholder with ResearchTimelineInfographic
   - src/pages/FDAPage.jsx: Replace placeholders with FDAApprovalProcessInfographic
     and FDAComparisonInfographic

3. Test every page at desktop (1200px) and mobile (375px) widths to make sure
   no text overlaps or gets cut off. If any infographic has readability issues
   at small widths, adjust font sizes or simplify the layout for that specific
   component.

4. Make sure all animations still play smoothly and that there are no console
   errors or warnings.
```
