import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // 列表卡片封面图：public/ 下的路径（如 '/covers/foo.png'）或完整图片 URL
    cover: z.string().optional(),
    // 封面图的 alt 文本，不写则用文章标题
    coverAlt: z.string().optional(),
  }),
});

const talk = defineCollection({
  loader: glob({ base: './src/content/talk', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    update: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, talk };

