# Peptides101.info — Project Context for Claude Code

## Project Overview
Peptides101.info is an educational website about peptide therapy. The goal is to make peptides accessible and understandable for everyday people — no jargon, no hype, just honest education backed by real research. The site also serves as a lead generation / affiliate revenue tool by connecting visitors with peptide providers.

## Tech Stack
- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: CSS Modules (one `.module.css` per component)
- **Fonts**: Fraunces (display/serif) + Outfit (body/sans) via Google Fonts
- **Deployment target**: Vercel (static site)
- **Domain**: peptides101.info

## Design System

### Colors
| Token          | Value     | Usage                          |
|----------------|-----------|--------------------------------|
| `--bg`         | #FAFAF7   | Page background                |
| `--bg-warm`    | #F3F1EC   | Subtle section backgrounds     |
| `--bg-card`    | #FFFFFF   | Card backgrounds               |
| `--bg-card-alt`| #F7F6F2   | Alternate card / muted areas   |
| `--accent`     | #0D7C66   | Primary green accent           |
| `--accent-light`| #E8F5F1  | Light accent backgrounds       |
| `--accent-dark`| #065446   | Hover states / emphasis        |
| `--orange`     | #E8723A   | Warnings / considerations      |
| `--amber`      | #C6890E   | "Not FDA Approved" badges      |
| `--amber-light`| #FFF8E8   | Amber background tint          |
| `--red`        | #D94F4F   | Disclaimer / alerts            |
| `--red-light`  | #FDF0F0   | Red background tint            |
| `--text`       | #1A1A1A   | Primary text                   |
| `--text-mid`   | #4A4A4A   | Secondary text                 |
| `--text-dim`   | #7A7A7A   | Tertiary text                  |
| `--text-muted` | #A3A3A3   | Muted / placeholder text       |
| `--border`     | #E5E2DB   | Borders                        |
| `--border-light`| #EDEBE6  | Subtle borders                 |

### Typography
- **Display font**: `'Fraunces', Georgia, serif` — used for h1, h2, section titles, and the logo
- **Body font**: `'Outfit', 'Helvetica Neue', sans-serif` — used for everything else
- Headings use font-weight 500 (not bold). Body text uses 350-400.
- The tone is warm, approachable, and editorial — like a well-designed health magazine.

### Component Patterns
- Cards: white bg, 1px border `--border-light`, border-radius 14px, subtle box-shadow
- Badges: small rounded pills with colored background tints
- Buttons: Primary = solid `--accent` bg, white text, 12px radius. Secondary = white bg, accent border.
- Sections: generous padding (60px vertical), max-width 820-1100px depending on content type

## Architecture

### Pages (src/pages/)
Each page is its own route:
- `HomePage.jsx` — Hero + inline Learn + Peptide Guide preview + CTA
- `LearnPage.jsx` — Peptides 101 accordion articles
- `GuidePage.jsx` — Full peptide guide with category filters
- `QuizPage.jsx` — Interactive quiz → personalized results
- `ResearchPage.jsx` — Study summaries with journal citations
- `FDAPage.jsx` — FDA approval explainer + status lists

### Shared Components (src/components/)
- `Nav.jsx` — Sticky top nav with logo + tab links
- `Footer.jsx` — Disclaimer + copyright + links
- `PeptideCard.jsx` — Expandable peptide info card (used in Guide + Quiz results)
- `InfographicPlaceholder.jsx` — Dashed-border placeholder for future AI-generated graphics
- `CTABanner.jsx` — Affiliate call-to-action block
- `FDABadge.jsx` — Small colored badge showing approval status

### Data (src/data/)
- `peptides.js` — Array of all peptide objects (name, description, FDA status, studies, goals, etc.)
- `quizQuestions.js` — Quiz question/option definitions with tag mappings

### Infographic Placeholders
There are 7 infographic placeholder locations across the site. Each has an `id`, `title`, and `description` that defines what the graphic should contain. When AI-generated images are ready, they replace the `<InfographicPlaceholder>` component with an `<img>` tag pointing to `/assets/infographics/[id].png`.

Placeholder IDs and content specs:
1. `hero-overview` — "What Are Peptides?" visual showing amino acid chains, peptide vs protein size, key categories
2. `how-peptides-work` — Signaling pathway diagram: absorption → receptors → biological response
3. `delivery-methods` — Side-by-side comparison of injection, oral, sublingual, topical with absorption rates
4. `safety-spectrum` — Risk gradient from FDA-approved → physician-prescribed → gray market → unregulated
5. `peptide-categories` — Visual map of all categories with popular peptides in each
6. `research-timeline` — Timeline from insulin (1921) to 100+ approved peptides today
7. `fda-approval-process` — Step-by-step flowchart of FDA approval (preclinical → Phase I/II/III → market)
8. `fda-comparison` — Side-by-side: approved vs non-approved differences in testing, regulation, access

## Content Guidelines
- Write at a 6th-8th grade reading level. No medical jargon without explanation.
- Always be honest about what IS and ISN'T proven by research.
- Never make direct health claims. Use language like "studies suggest" and "may support."
- Every peptide entry should include: benefits, considerations/risks, and at least one real study citation.
- The site is NOT medical advice — this must be clear in the footer disclaimer and reinforced contextually.

## Monetization
- Primary: Affiliate "Find a Peptide Provider" CTA buttons linking to telehealth platforms
- Secondary: Potential email capture on quiz results ("Get your full guide emailed to you")
- Tertiary: Future sponsored content or premium membership
- All affiliate relationships must be disclosed clearly near the CTA

## SEO Considerations
- Each page should have proper `<title>` and meta description
- Use semantic HTML (h1, h2, h3, article, section, nav)
- Infographic images should have descriptive alt text
- Target keywords: "what are peptides", "peptide therapy", "peptides 101", "FDA approved peptides", "best peptides for [goal]"

## Important Notes
- The medical disclaimer in the footer is legally required and must appear on every page
- FDA status data should be easy to update as regulations change
- The quiz does NOT provide medical advice — it suggests peptides to *learn more about*
- All study citations reference real published research from real journals
