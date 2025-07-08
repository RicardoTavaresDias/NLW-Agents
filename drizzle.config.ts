import { defineConfig } from "drizzle-kit"
import { env } from "./src/env.ts"


export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/**.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL
  }
})

// 1° comand: npx drizzle-kit generate
// 2° comand: npx drizzle-kit migrate 
// 3° comand: npx drizzle-kit studio