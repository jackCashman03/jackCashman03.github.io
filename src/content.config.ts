import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The "blog" collection: every Markdown file in src/content/blog/ becomes a post.
// To publish a new article you ONLY add a new .md file there — no code changes.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Set `draft: true` in a post's frontmatter to keep it out of the published site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
