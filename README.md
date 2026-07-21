# MAQ Software Website

The MAQ Software website is a single-page application built with React, TypeScript, Vite, React Router, and Fluent UI.

## Run locally

### Prerequisites

- Node.js 20.19 or newer
- npm (included with Node.js)

### Setup

```bash
git clone https://github.com/maqsoftware/MAQSoftwareWebsite-New.git
cd MAQSoftwareWebsite-New
npm ci
npm run dev
```

Vite opens the site at [http://localhost:5173](http://localhost:5173). Stop the server with `Ctrl+C`.

No environment variables are required for normal local development.

## Code structure

```text
.
├── public/              Static images, logos, documents, redirects, and favicons
├── src/
│   ├── components/      Shared UI, layout, cards, buttons, and section components
│   ├── data/            Content and structured data used by pages
│   ├── lib/             Small shared utilities
│   ├── pages/           Route-level page components
│   ├── App.tsx          Application routes and shared page layout
│   ├── main.tsx         React entry point and global providers
│   ├── styles.css       Global styles
│   └── theme.ts         Fluent UI theme configuration
├── tests/site/          Playwright site and link tests
├── index.html           Vite HTML entry point
├── netlify.toml         Netlify build and security-header configuration
├── playwright.config.ts Playwright test configuration
└── vite.config.ts       Local development and production build configuration
```

Add new routes in `src/App.tsx`. Put route-level content in `src/pages`, reusable UI in `src/components`, and static files that should be served as-is in `public`.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run test:site` | Run the local desktop and mobile Playwright checks |
| `npm run test:external` | Check external links |
| `npm run test:site:report` | Open the most recent Playwright HTML report |

For a first Playwright run, install Chromium once:

```bash
npx playwright install chromium
```

## Create a pull request

1. Start from an up-to-date `main` branch:

   ```bash
   git switch main
   git pull origin main
   git switch -c feature/short-description
   ```

2. Make a focused change, then verify it:

   ```bash
   npm run build
   npm run test:site
   ```

3. Commit and push your branch:

   ```bash
   git add <changed-files>
   git commit -m "Describe the change"
   git push -u origin feature/short-description
   ```

4. Open the repository on GitHub and create a pull request into `main`. Include a short summary, testing notes, and screenshots for visual changes. Keep the PR focused and address the automated build check and review feedback before merging.

## Development notes

- Use React Router links or navigation for internal pages so navigation stays within the SPA.
- Reuse existing components and Fluent UI theme tokens before adding new patterns.
- Check changes at desktop and mobile widths.
- Do not commit generated folders such as `node_modules/` or `dist/`.
- Production builds are generated with `npm run build`; pushes to `main` are deployed through GitHub Actions.

If local dependencies become inconsistent, remove `node_modules`, run `npm ci` again, and restart the development server.
