# Peptides101.info

An educational website about peptide therapy — making peptides accessible and understandable for everyone.

## Quick Start

```bash
npm install
npm run dev
```

## Building with Claude Code

This project is designed to be built out with Claude Code. See:

- **`CLAUDE.md`** — Full project context, design system, architecture, and content guidelines
- **`PROMPTS.md`** — Step-by-step prompts to feed Claude Code, in order, to build out the complete site

## Tech Stack

- React 18 + Vite
- React Router v6
- CSS Modules
- Fraunces + Outfit fonts

## Project Structure

```
src/
├── components/     # Shared UI components
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── PeptideCard.jsx
│   ├── InfographicPlaceholder.jsx
│   ├── CTABanner.jsx
│   └── FDABadge.jsx
├── pages/          # Route-level page components
│   ├── HomePage.jsx
│   ├── LearnPage.jsx
│   ├── GuidePage.jsx
│   ├── QuizPage.jsx
│   ├── ResearchPage.jsx
│   └── FDAPage.jsx
├── data/           # Content data files
│   ├── peptides.js
│   ├── quizQuestions.js
│   ├── studies.js
│   └── learnTopics.js
├── styles/         # Global styles
│   └── global.css
├── assets/         # Images and infographics
│   └── infographics/
├── App.jsx
└── main.jsx
```

## Deployment

Configured for Vercel. Connect the repo and it deploys automatically.

## License

All rights reserved.
