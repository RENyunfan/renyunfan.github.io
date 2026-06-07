import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    image: z.string().optional(),
    kind: z.enum(["paper", "award", "role", "milestone", "other"]).default("other"),
    link: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    venue: z.string(),
    authors: z.array(z.string()),
    summary: z.string().optional(),
    image: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    status: z.string().optional(),
    category: z.enum(["published", "student-project"]).default("published"),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      )
      .default([]),
    order: z.number().default(100),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profile" }),
  schema: z
    .object({
      title: z.string(),
      role: z.string().optional(),
      organizations: z.array(z.object({ name: z.string(), url: z.string().optional() })).default([]),
      profiles: z
        .array(z.object({ label: z.string().optional(), url: z.string(), icon: z.string().optional() }))
        .default([]),
    })
    .passthrough(),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    group: z.enum(["faculty", "phd-master", "visiting-researcher", "undergraduate-intern"]),
    title: z.string().optional(),
    photo: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().optional(),
    highest_degree: z.string().optional(),
    affiliation: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { news, people, profile, projects, publications };
