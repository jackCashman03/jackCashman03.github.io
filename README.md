# Jack Cashman — blog

A minimalist personal blog built with [Astro](https://astro.build). Static,
fast, and Markdown-driven: every article is a single Markdown file, with support
for syntax-highlighted code, LaTeX math, images, light/dark mode, and an RSS feed.

## Writing a new post

1. Create a new file in `src/content/blog/`, e.g. `my-idea.md`.
2. Add frontmatter at the top:

   ```markdown
   ---
   title: My great idea
   description: A one-line summary (optional, used in RSS + previews).
   pubDate: 2026-06-20
   # updatedDate: 2026-06-25   # optional
   # draft: true               # optional — hides the post from the live site
   ---

   Your article body in **Markdown** goes here.
   ```

3. Write. The filename becomes the URL (`my-idea.md` → `/blog/my-idea/`), and the
   post appears automatically on the homepage and in the RSS feed, sorted by date.

That's it — no code changes, no templates to copy.

### Formatting reference

- **Code:** fenced blocks with a language get highlighting + a copy button:
  <code>```python</code> … <code>```</code>.
- **Math (LaTeX):** `$E = mc^2$` for inline, `$$ … $$` for display equations.
- **Images:** put files in `public/images/` and reference them with an absolute
  path: `![alt text](/images/photo.jpg)`. (For automatic resizing/optimization,
  Astro can process images placed in `src/assets/` and referenced relatively —
  see [Astro images](https://docs.astro.build/en/guides/images/).)

The post `src/content/blog/code-math-and-images.md` is a live cheat-sheet of all
of the above — read its source, then delete it whenever you like.

## Local development

```bash
nvm use            # uses Node from .nvmrc (run `nvm install` first time)
npm install        # first time only
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

## Customizing

- **Name, description, social links:** `src/consts.ts`
- **Homepage intro text:** `src/pages/index.astro`
- **Colors, fonts, spacing:** the design tokens at the top of `src/styles/global.css`

## Deployment (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` builds and publishes on every push
to `main`. To turn it on:

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`; the site deploys automatically.

### URL / repo naming

- For the root URL `https://jackcashman.github.io`, name the repo
  **`jackcashman.github.io`**.
- For a project repo (e.g. `blog`), the site lives at
  `https://jackcashman.github.io/blog/` — in that case uncomment `base: '/blog'`
  in `astro.config.mjs`.

### Custom domain (later)

When you buy a domain:

1. Set `site: 'https://yourdomain.com'` in `astro.config.mjs` (and remove `base`).
2. Add a file `public/CNAME` containing just `yourdomain.com`.
3. Point your domain's DNS at GitHub Pages (A/AAAA records for the apex, or a
   CNAME for `www`), then set the custom domain in **Settings → Pages**.
