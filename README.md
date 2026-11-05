# BrandStory — Web Developer Technical Assessment

A responsive digital marketing landing page for **BrandStory Solutions Pvt. Ltd.**, developed for the Junior Associate – Web Developer technical assessment. The implementation follows the supplied desktop Figma screenshots and uses the provided design assets.

## Project setup

### Requirements

- Node.js **20.9 or later**; Node.js 22 LTS is recommended.
- npm, included with Node.js.

Run the following commands from the project directory containing `package.json`:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is occupied, use the local URL printed in the terminal.

No environment variables, database, API keys, or backend services are required for local setup.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with live updates. |
| `npm run lint` | Run ESLint checks. |
| `npm run build` | Create an optimized production build. |
| `npm start` | Serve the production build; run `npm run build` first. |

To run the production version locally:

```bash
npm run build
npm start
```

The `@/` import alias maps to `src/` through `jsconfig.json`. Keep this configuration file in the project root; restart the development server after changing it.

## Technologies used

| Technology | Usage |
| --- | --- |
| Next.js 16.4.4 | App Router, page metadata, optimized images, and production builds. |
| React 19.3.0 | Modular components, state, accordions, and carousel controls. |
| JavaScript / JSX | Application and component implementation. |
| Tailwind CSS 4 | Utility styles, with the installed Tailwind Turbopack loader configured in `next.config.mjs`. |
| Custom CSS | Design tokens, section styling, gradients, responsive layouts, and interaction states in `globals.css`. |
| Lucide React | Interface icons. Supplied design icons are reused where available. |
| ESLint 9 | Code checks using the Next.js configuration. |

Dependencies are declared in `package.json`, with resolved versions recorded in `package-lock.json`.

## Folder structure

```text
brandstory/
├── public/
│   └── assets/
│       ├── backgrounds/       # Hero, statistics, and service-location graphics
│       ├── icons/             # Service icons, arrows, and location pin
│       ├── illustrations/     # About and strategy illustrations
│       ├── images/            # Team and case-study photographs
│       ├── logos/             # Client logos
│       ├── partner-badges/    # Partner strip and supplied social icons
│       └── source/            # Original supplied exports
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles, design tokens, and breakpoints
│   │   ├── layout.js          # Root layout and page metadata
│   │   └── page.js            # Landing-page composition
│   ├── components/
│   │   ├── layout/            # Header and Footer
│   │   ├── sections/          # Individual landing-page sections
│   │   └── ui/                # Shared UI, including SectionHeading
│   ├── data/
│   │   └── siteData.js        # Content, asset references, and link collections
│   └── lib/                   # Reserved utilities directory
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

Sections are separated into Hero, BrandCarousel, Services, About, WhyChooseUs, TrustSection, Statistics, Team, FAQ, CaseStudies, and Locations components. Content collections are maintained in `src/data/siteData.js`; some individual links and text remain within their corresponding components.

The existing empty `Button.jsx`, `Container.jsx`, and `utils.js` files are retained as scaffold placeholders.

## Assumptions made

### Design and responsiveness

- Only one desktop design was supplied. Desktop screenshots are the visual reference; tablet and mobile layouts were adapted independently using CSS breakpoints.
- Desktop spacing follows the reference proportions, with section-specific adjustments made during review. Smaller screens use stacked content, fewer card columns, and manually scrollable galleries instead of shrinking the desktop layout.
- The case-study section adjusts to desktop viewport height to keep its heading, controls, and images together while preserving image aspect ratios.
- Supplied images, SVGs, logos, backgrounds, and partner graphics are reused. Existing asset filenames and source exports are retained.
- HK Grotesk font files were not supplied. The main font stack requests HK Grotesk and falls back to Arial, Helvetica, and sans-serif. Exact typography may therefore differ from Figma. The FAQ answer uses a serif treatment to follow its visible screenshot styling.

### Content and interactions

- Only the first expanded answer was provided for both the “What Sets Us Apart” accordion and the FAQ section. Missing answers are stored as `null` and display a contact link when opened; company claims were not invented. Replace these values in `siteData.js` when final copy is available.
- Both accordions initially open their first item and allow one item to be open at a time.
- Three team photographs were supplied. Images are repeated in the team gallery to reproduce the reviewed desktop composition with a larger center image and partially visible neighboring images.
- Client-logo rows and image galleries use manual scrolling or navigation. No automatic carousel playback is implemented, and scrollbars are visually hidden.
- The case-study arrows cycle image order when all three images fit on desktop. On smaller screens, they scroll the gallery; touch and keyboard navigation are also supported.
- The repeated “Satisfied Clients” statistics label, the “Meet Our Expart Team” heading, and the 2025 copyright year are preserved from the design rather than editorially changed.

### Links and scope

- This is a presentation landing page without a backend or form-submission service. Contact actions use the configured email or telephone links, and service/location links lead to external BrandStory pages where configured.
- External destinations are maintained separately from this assessment and may change. Review them before deployment; several contact actions intentionally open the visitor’s email application.
- The implementation is in Next.js, as specified for this project; it is not packaged as a WordPress theme or plugin.

## Review before submission

- Run `npm run lint` and `npm run build`.
- Review desktop, tablet, and mobile layouts, including widths around 320px, 375px, 789px, 1024px, and 1512px.
- Check navigation, accordion buttons, gallery arrows, touch scrolling, keyboard focus, and contact links.
- Confirm all supplied assets load and review external link destinations.
- Replace missing accordion copy and add the licensed design font files if they become available.

These are suggested submission checks, not a claim that every browser or viewport has been verified.
