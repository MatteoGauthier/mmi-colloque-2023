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
    poster: z.object({
      title: z.string(),
      firstContent: z.string(),
      img: z.string(),
    }),
    publication: z.object({
      title: z.string(),
      firstContent: z.string(),
      secondContent: z.string(),
      thirdContent: z.string(),
    }),

    information: z.object({
      title: z.string(),
      firstContent: z.string(),
      stats: z.object({
        value: z.number(),
        label: z.string(),
      }),
      secondContent: z.string(),
    }),
  }),
})

const page = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = { topic, page }
