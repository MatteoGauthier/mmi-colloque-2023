import { defineCollection, z } from "astro:content"

// const blog = defineCollection({
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // Transform string to Date object
//     pubDate: z
//       .string()
//       .or(z.date())
//       .transform((val) => new Date(val)),
//     updatedDate: z
//       .string()
//       .optional()
//       .transform((str) => (str ? new Date(str) : undefined)),
//     heroImage: z.string().optional(),
//   }),
// })

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
