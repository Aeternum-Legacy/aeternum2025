import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const signupsTable = pgTable("signups_table", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  signedUpAt: timestamp("signed_up_at").notNull().defaultNow(),
});

export type InsertSignup = typeof signupsTable.$inferInsert;
export type SelectSignup = typeof signupsTable.$inferSelect;
