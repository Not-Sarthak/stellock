import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://default:dwcgsi5kYpC4@ep-ancient-limit-a1bvyugp-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
});
