import { defineCollection, z } from "astro:content";
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
      url: z.string(),
      prior: z.string().nullable(),
      next: z.string().nullable(),
    }),
});
export const collections = {
  posts: postsCollection,
};
