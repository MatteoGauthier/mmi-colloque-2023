import { defineCollection, z } from "astro:content"

const topic = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),

    speakers: z.array(
      z.object({
        name: z.string(),
      })
    ),

    live: z.object({
      url: z.string(),
      title: z.string(),
    }),
  }),
})

export const collections = { topic }
