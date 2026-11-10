# Portfolio

A personal site for a designer or developer: a counted preloader, an
oversized name, a services marquee, a selected-work grid with parallax and a
cursor-following label, an about teaser, an expanding services list, rotating
testimonials and a contact section with a working form. Each project has a
case-study page with a next-project link, and there is a full about page.

## Run it

```sh
bun install
bun run dev        # http://localhost:5173
bun run build      # dist/client (assets) + dist/portfolio/index.js (Worker)
```

## Make it yours

- `src/data/site.ts` is the whole site: your name, role, location, socials,
  projects, services, certifications, experience and education. Images live in
  `public/images`; each project has one cover and the case-study page crops it
  for detail shots until you add more.
- `src/app/pages/*` are the three pages; `src/app/components/motion.tsx` holds
  the reusable animation pieces (masked line reveals, parallax, magnetic
  buttons, the rotating badge).
- `src/styles.css` holds the tokens: a paper canvas, ink text, one electric
  accent, Bricolage Grotesque for display type. Everything rounded is a
  squircle via `corner-shape`; true circles use `.round`.
- `src/worker/index.ts` receives the contact form at `/api/contact`. Forward
  it to your inbox with an email API (key in Sites → Secrets) or save it to D1.

Motion respects `prefers-reduced-motion`, and the preloader runs once per tab.

## Deploy with Freebuff Sites

`deploy.json` points at the build output. After `bun run build`, deploy with
the `sites_deploy` tool from this directory.

## Deploy to GitHub Pages

GitHub Pages serves static files only, so this build skips the Worker and
uses the repository base path:

```sh
bun run build:pages   # dist-pages/, with 404.html for client-side routes
```

`.github/workflows/deploy-pages.yml` builds and deploys on every push to
`main`. Pages must be switched on once in **Settings → Pages → Build and
deployment → Source: GitHub Actions**; the default workflow token cannot
enable it. The site is served from `https://<user>.github.io/PortfolioAyush/`,
which is why `PAGES_BASE` in `vite.config.ts` matters — update it if the repo
is renamed.

On Pages there is no server, so the contact form cannot post. It shows an
inline fallback with a prefilled mailto link instead.
