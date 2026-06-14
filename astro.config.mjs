// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // The public URL of your finished site. Used for sitemap + RSS absolute links.
  // When you get a custom domain, change this one line (e.g. 'https://jackcashman.dev').
  site: 'https://jackcashman.github.io',

  // If you deploy to GitHub Pages under a PROJECT repo (e.g. github.com/you/blog),
  // your site lives at /blog and you must uncomment the next line. If the repo is
  // named `jackcashman.github.io` (a USER site) OR you use a custom domain, leave it off.
  // base: '/blog',

  integrations: [sitemap()],

  markdown: {
    // LaTeX: $inline$ and $$block$$ math, rendered to HTML by KaTeX at build time.
    // Astro 6 takes remark/rehype plugins via a `unified({...})` processor.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    // Code highlighting via Shiki, with paired light/dark themes.
    // `defaultColor: false` lets our CSS pick the theme from <html data-theme>.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
  },
});
