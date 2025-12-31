import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingItems = await storage.getItems();
  if (existingItems.length === 0) {
    console.log("Seeding database...");
    
    // Boats
    await storage.createItem({
      type: 'boat',
      name: 'Azure Speedster',
      imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7dd8d36?w=500&auto=format&fit=crop&q=60',
      value: '2.5M',
      demand: 'High',
      status: 'Rising',
      speed: 85,
      steering: 70,
      acceleration: 90,
    });
    
    await storage.createItem({
      type: 'boat',
      name: 'Ironclad Hauler',
      imageUrl: 'https://images.unsplash.com/photo-1544257750-572358f55058?w=500&auto=format&fit=crop&q=60',
      value: '500k',
      demand: 'Low',
      status: 'Stable',
      speed: 40,
      steering: 30,
      acceleration: 20,
    });
    
    await storage.createItem({
      type: 'boat',
      name: 'Royal Yacht',
      imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe79b9b7?w=500&auto=format&fit=crop&q=60',
      value: '10M',
      demand: 'Medium',
      status: 'Stable',
      speed: 60,
      steering: 50,
      acceleration: 50,
    });

    // Skins
    await storage.createItem({
      type: 'skin',
      name: 'Abyssal Void',
      imageUrl: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&auto=format&fit=crop&q=60',
      value: '5M',
      demand: 'Very High',
      status: 'Rising',
      rodName: 'Abyssal Rod',
    });
    
    await storage.createItem({
      type: 'skin',
      name: 'Magma Flow',
      imageUrl: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=500&auto=format&fit=crop&q=60',
      value: '1.2M',
      demand: 'Medium',
      status: 'Dropping',
      rodName: 'Magma Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Glacial Frost',
      imageUrl: 'https://images.unsplash.com/photo-1483664852095-d6cc6870705d?w=500&auto=format&fit=crop&q=60',
      value: '3M',
      demand: 'High',
      status: 'Stable',
      rodName: 'Ice Rod',
    });
    
    console.log("Database seeded successfully.");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedDatabase();

  app.get(api.items.list.path, async (req, res) => {
    try {
      const type = req.query.type as 'skin' | 'boat' | undefined;
      const items = await storage.getItems(type);
      res.json(items);
    } catch (error) {
       console.error("Error fetching items:", error);
       res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.items.get.path, async (req, res) => {
    const item = await storage.getItem(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  });

  app.post(api.items.create.path, async (req, res) => {
    try {
      const input = api.items.create.input.parse(req.body);
      const item = await storage.createItem(input);
      res.status(201).json(item);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
