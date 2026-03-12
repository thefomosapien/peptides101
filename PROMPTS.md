# Claude Code Prompts for Peptides101.info

## How to Use This File
Copy each prompt below into Claude Code one at a time, in order. Each prompt builds
on the previous one. The CLAUDE.md file in the project root gives Claude Code all
the context it needs about the design system, architecture, and content guidelines.

---

## PHASE 1: Project Setup

### Prompt 1 — Initialize and Install
```
Read the CLAUDE.md file for full project context. Then install all dependencies
with npm install and verify the dev server starts with npm run dev. Fix any errors.
```

### Prompt 2 — Verify All Routes
```
Open the browser and navigate to every route: /, /learn, /guide, /quiz, /research,
/fda. Verify all pages render without errors and the nav links work correctly.
Fix any issues.
```

---

## PHASE 2: Polish & Responsive Design

### Prompt 3 — Mobile Responsive Pass
```
Do a full responsive pass on every page. The site needs to look great on mobile
(375px), tablet (768px), and desktop (1200px+). Key things to fix:
- Nav should collapse into a hamburger menu on mobile
- The peptide card grid should go single-column on mobile
- Hero text should scale down gracefully
- Quiz options should be full-width on mobile
- Footer should stack vertically on mobile
- All padding/margins should reduce on smaller screens
Use CSS modules for the responsive styles, not inline styles.
```

### Prompt 4 — Scroll-to-Top on Navigation
```
When users click a nav link and change pages, the page should scroll to the top.
Add this behavior to the router. Also add smooth scroll behavior to the HTML element.
```

### Prompt 5 — Page Transitions & Micro-animations
```
Add subtle entrance animations to page content. When a page loads, the heading and
content should fade in and slide up slightly. Use CSS animations, not a library.
Keep it subtle — 300ms duration, ease-out timing. Also add hover effects to all
cards (slight lift with shadow change) and buttons (slight scale).
```

---

## PHASE 3: SEO & Meta Tags

### Prompt 6 — Add Page-Level SEO
```
Install react-helmet-async. Add unique <title> and <meta description> tags to every
page. Use these titles:
- Home: "Peptides101.info — Peptide Education, Simplified"
- Learn: "Peptides 101 — What Are Peptides & How Do They Work?"
- Guide: "The Peptide Guide — 10 Most Popular Peptides Explained"
- Quiz: "Find Your Peptide Match — Free Interactive Quiz"
- Research: "Peptide Research — Real Studies from Medical Journals"
- FDA: "FDA Peptide Approval Status — What's Approved & What Isn't"

Write compelling meta descriptions (under 160 chars) for each page targeting the
keywords in CLAUDE.md. Also add Open Graph tags for social sharing.
```

### Prompt 7 — Semantic HTML Audit
```
Audit all pages and make sure we're using proper semantic HTML. Each page should
have exactly one h1. Use article, section, nav, main, footer, aside where
appropriate. Make sure all interactive elements are keyboard accessible. Add
aria-labels to icon-only buttons. Check that the accordion components in the
Learn page use proper aria-expanded attributes.
```

---

## PHASE 4: Content Enhancements

### Prompt 8 — Add More Peptides to the Database
```
Read src/data/peptides.js. Add 5 more peptides to the database following the exact
same data structure. Research and add these peptides:
1. Selank — a nootropic/anti-anxiety peptide
2. Epithalon (Epitalon) — a telomerase-activating anti-aging peptide
3. PT-141 (Bremelanotide) — FDA-approved for sexual dysfunction
4. Sermorelin — a growth hormone releasing peptide
5. KPV — an anti-inflammatory peptide

Make sure each has accurate FDA status, real study citations from real journals,
appropriate goal tags that work with the quiz, honest benefit descriptions, and
balanced considerations. PT-141 is FDA-approved; the rest are not.
```

### Prompt 9 — Add a Glossary Page
```
Create a new /glossary route and GlossaryPage component. It should be an
alphabetical list of peptide-related terms with plain-English definitions.
Include at least 25 terms like: amino acid, bioavailability, compounding pharmacy,
half-life, growth hormone secretagogue, subcutaneous injection, GLP-1, IGF-1,
peptide bond, off-label use, etc. Style it to match the rest of the site using
the design system in CLAUDE.md. Add it to the nav.
```

### Prompt 10 — Quiz Results Email Capture
```
On the quiz results page, add an email capture section between the results and the
CTA banner. It should say "Get your complete peptide guide delivered to your inbox"
with a simple email input field and submit button. For now just store the email in
localStorage and show a success message. Style it as a card that matches the design
system. This will be connected to a real email service later.
```

---

## PHASE 5: Infographic Integration

### Prompt 11 — Make Infographic Placeholders Image-Ready
```
Update the InfographicPlaceholder component to accept an optional `imageSrc` prop.
When imageSrc is provided, render an <img> tag with the image instead of the
placeholder UI. The image should be responsive, have a border-radius matching the
placeholder, and include descriptive alt text using the title prop. When imageSrc
is NOT provided, show the current dashed-border placeholder. This way I can drop in
images one at a time as I create them.
```

---

## PHASE 6: Affiliate & Monetization

### Prompt 12 — Create Provider Comparison Page
```
Create a new /providers route and ProvidersPage component. This will be an affiliate
page that compares peptide therapy providers. Create a comparison layout with 3-4
cards, each representing a provider. Each card should have: provider name, a brief
description, list of services offered, pricing range, a "Visit Provider" affiliate
button, and a pros/cons section. Use placeholder data for now (Provider A, B, C).
Include an affiliate disclosure at the top. Style to match the design system.
Add it to the nav as "Get Started" at the end.
```

### Prompt 13 — Add CTA Banners Throughout
```
Add a CTABanner component to the bottom of the Learn, Guide, Research, and FDA
pages — everywhere it makes sense to suggest a provider. Also add a smaller
inline CTA card after the 3rd peptide in the guide page. The inline version
should be more subtle — just a single line with a link, not the full banner.
```

---

## PHASE 7: Performance & Deployment

### Prompt 14 — Build Optimization
```
Run npm run build and check for any warnings or errors. Optimize the bundle:
- Make sure all images in the infographics folder would be lazy loaded
- Add code splitting with React.lazy() for each page route
- Ensure fonts are preloaded in the HTML head
- Add a simple loading spinner component for Suspense fallbacks
Verify the production build works with npm run preview.
```

### Prompt 15 — Deploy to Vercel
```
Create a vercel.json config file that handles SPA routing (rewrites all routes to
index.html). Make sure the build command and output directory are correctly set for
Vite. Add the configuration needed so that when I connect this repo to Vercel, it
deploys automatically. Also add a simple 404 page component that matches the design
system and routes back to home.
```

---

## PHASE 8: Future Enhancement Prompts

These are standalone prompts for later — use them whenever you're ready.

### Add a Blog Section
```
Create a /blog route with a BlogPage that shows article cards in a grid. Create a
/blog/:slug route for individual posts. Use a blogs.js data file with at least 3
starter articles about peptides. Each article should have a title, author, date,
reading time, excerpt, and full body content (stored as an array of paragraphs).
Style the blog post page like a clean editorial layout. Include a "Related Peptides"
sidebar that links to relevant entries in the peptide guide.
```

### Add Dark Mode Toggle
```
Add a dark/light mode toggle to the nav bar. Create a dark theme using CSS custom
properties (update all the color tokens in :root with a [data-theme="dark"] selector).
Persist the preference in localStorage. Default to the user's system preference using
prefers-color-scheme. The toggle should be a subtle sun/moon icon button.
```

### Add Search Functionality
```
Add a search icon to the nav that opens a search modal. The search should filter
across all peptide names, descriptions, benefits, and learn topics. Show results
grouped by type (Peptides, Articles, Research). Highlight matching text in results.
Close modal with Escape key or clicking outside.
```

### Add Comparison Tool
```
Create a /compare route where users can select 2-3 peptides side by side and see
their benefits, FDA status, studies, and considerations compared in a table format.
Add "Compare" checkboxes to each PeptideCard and a floating "Compare (N)" button
that appears when 2+ are selected.
```

### Add Analytics
```
Add Google Analytics 4 integration. Create a useAnalytics hook that tracks:
- Page views on route change
- Quiz completion events (with which peptides were recommended)
- CTA button clicks
- Accordion open/close events
- Time on page for each section
Use the GA4 measurement ID placeholder "G-XXXXXXXXXX" that I'll replace with my
real ID later.
```
