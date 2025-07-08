import { z } from "zod"

const envSchema = z.object({
  POST: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith("postgresql://")
})

export const env = envSchema.parse(process.env)