import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const items = pgTable("items", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'skin' or 'boat'
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull(),
  value: text("value").notNull(), // e.g., "1.5M", "500k"
  demand: text("demand").notNull(), // e.g., "High", "Low", "Medium"
  status: text("status").notNull(), // e.g., "Stable", "Rising", "Dropping"
  
  // Boat specifics (nullable for skins)
  speed: integer("speed"),
  steering: integer("steering"),
  acceleration: text("acceleration"),
  
  // Skin specifics (nullable for boats)
  rodName: text("rod_name"),
  isCC: integer("is_cc").default(0), // 0 for false, 1 for true
});

// === BASE SCHEMAS ===
export const insertItemSchema = createInsertSchema(items).omit({ id: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Item = typeof items.$inferSelect;
export type InsertItem = z.infer<typeof insertItemSchema>;

export type ItemResponse = Item;
export type ItemsListResponse = Item[];

export interface ItemsQueryParams {
  type?: 'skin' | 'boat';
}
