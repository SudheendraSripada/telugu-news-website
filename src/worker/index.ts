import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { cors } from "hono/cors";
import { CreateArticleSchema } from "@/shared/types";

const app = new Hono<{ Bindings: Env }>();

app.use("*", cors());

// Get all articles
app.get("/api/articles", async (c) => {
  const db = c.env.DB;
  const { category, featured } = c.req.query();
  
  let query = "SELECT * FROM articles WHERE is_published = 1";
  const params: any[] = [];
  
  if (category) {
    query += " AND category = ?";
    params.push(category);
  }
  
  if (featured === "true") {
    query += " AND is_featured = 1";
  }
  
  query += " ORDER BY published_at DESC";
  
  const { results } = await db.prepare(query).bind(...params).all();
  return c.json(results);
});

// Get single article by slug
app.get("/api/articles/:slug", async (c) => {
  const db = c.env.DB;
  const slug = c.req.param("slug");
  
  const { results } = await db.prepare("SELECT * FROM articles WHERE slug = ? AND is_published = 1").bind(slug).all();
  
  if (results.length === 0) {
    return c.json({ error: "Article not found" }, 404);
  }
  
  return c.json(results[0]);
});

// Get all categories
app.get("/api/categories", async (c) => {
  const db = c.env.DB;
  const { results } = await db.prepare("SELECT * FROM categories ORDER BY name").all();
  return c.json(results);
});

// Update article image
app.put("/api/articles/:id/image", async (c) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  const { image_url } = await c.req.json();
  
  const { success } = await db.prepare(`
    UPDATE articles SET image_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?
  `).bind(image_url, id).run();
  
  if (success) {
    return c.json({ message: "Article image updated successfully" });
  } else {
    return c.json({ error: "Failed to update article image" }, 500);
  }
});

// Create new article (admin)
app.post("/api/articles", zValidator("json", CreateArticleSchema), async (c) => {
  const db = c.env.DB;
  const data = c.req.valid("json");
  
  // Generate slug from title
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  const { success } = await db.prepare(`
    INSERT INTO articles (title, slug, summary, content, author, category, image_url, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    data.title,
    slug,
    data.summary || null,
    data.content,
    data.author,
    data.category,
    data.image_url || null,
    data.is_featured ? 1 : 0
  ).run();
  
  if (success) {
    return c.json({ message: "Article created successfully", slug });
  } else {
    return c.json({ error: "Failed to create article" }, 500);
  }
});

export default app;
