import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
    blog: defineCollection({
        loader: glob({
            base: './src/content/blog',
            pattern: '**/*.{md,mdx}',
        }),
        schema: z.object({
            title: z.string(),
            slug: z.string(),
            date: z.date(),
            description: z.string().max(200),
        }),
    }),
};