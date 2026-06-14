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
  site: 'https://jackcashman03.github.io',

  // No `base` needed: the repo is named `jackcashman03.github.io` (a USER site),
  // so the blog is served from the root. (If you ever move it into a project repo
  // like `blog`, the site would live at /blog and you'd uncomment the next line.)
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
