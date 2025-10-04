import z from "zod";

export const ArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  summary: z.string().nullable(),
  content: z.string(),
  author: z.string(),
  category: z.string(),
  image_url: z.string().nullable(),
  is_featured: z.boolean(),
  is_published: z.boolean(),
  published_at: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const CreateArticleSchema = z.object({
  title: z.string().min(1),
  summary: z.string().optional(),
  content: z.string().min(1),
  author: z.string().min(1),
  category: z.string().min(1),
  image_url: z.string().url().optional(),
  is_featured: z.boolean().default(false),
});

export type Article = z.infer<typeof ArticleSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type CreateArticle = z.infer<typeof CreateArticleSchema>;
