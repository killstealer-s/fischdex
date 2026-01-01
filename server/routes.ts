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
      name: 'Curse IV',
      imageUrl: '/images/curse_iv.png',
      value: '675',
      demand: '8/10',
      status: 'Overpays',
      speed: 265,
      steering: 100,
      acceleration: '0.85', 
    });
    
    await storage.createItem({
      type: 'boat',
      name: 'Nocturne',
      imageUrl: '/images/nocturne.png',
      value: '525',
      demand: '9/10',
      status: 'Doing Well',
      speed: 275,
      steering: 105,
      acceleration: '0.85',
    });
    
    await storage.createItem({
      type: 'boat',
      name: 'Evangeline',
      imageUrl: '/images/evangeline.png',
      value: '440',
      demand: '9/10',
      status: 'Doing Well',
      speed: 270,
      steering: 105,
      acceleration: '0.9',
    });
    
    await storage.createItem({
      type: 'boat',
      name: 'Black Comet',
      imageUrl: '/images/black_comet.png',
      value: '350',
      demand: '8/10',
      status: 'Doing Well',
      speed: 270,
      steering: 105,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Pastel Impulse',
      imageUrl: '/images/pastel_impulse.png',
      value: '300',
      demand: '8/10',
      status: 'Doing Well',
      speed: 275,
      steering: 105,
      acceleration: '0.9',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Demonwake',
      imageUrl: '/images/demonwake.png',
      value: '260',
      demand: '7/10',
      status: 'Stable',
      speed: 265,
      steering: 105,
      acceleration: '0.9',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Kraken of the Void',
      imageUrl: '/images/kraken_of_the_void.png',
      value: '240',
      demand: '6/10',
      status: 'Stable',
      speed: 260,
      steering: 105,
      acceleration: '0.9',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Elysian Jolt',
      imageUrl: '/images/elysian_jolt.png',
      value: '230',
      demand: '6/10',
      status: 'Stable',
      speed: 260,
      steering: 100,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Violet Viper',
      imageUrl: '/images/violet_viper.png',
      value: '150',
      demand: '7/10',
      status: 'Stable',
      speed: 280,
      steering: 105,
      acceleration: '0.85',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Cthulu Boat',
      imageUrl: '/images/cthulu_boat.png',
      value: '150',
      demand: '3/10',
      status: 'Stable',
      speed: 265,
      steering: 90,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Meowmobile',
      imageUrl: '/images/meowmobile.png',
      value: '140',
      demand: '6/10',
      status: 'Stable',
      speed: 245,
      steering: 150,
      acceleration: '1.5',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Cuddly Claw',
      imageUrl: '/images/cuddly_claw.png',
      value: '140',
      demand: '7/10',
      status: 'Doing Well',
      speed: 235,
      steering: 150,
      acceleration: '1.55',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Curse III',
      imageUrl: '/images/curse_iii.png',
      value: '140',
      demand: '6/10',
      status: 'Stable',
      speed: 255,
      steering: 90,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Royal Yacht',
      imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe79b9b7?w=500&auto=format&fit=crop&q=60',
      value: '10M',
      demand: '5/10',
      status: 'Stable',
      speed: 60,
      steering: 50,
      acceleration: "50",
    });

    // Skins
    await storage.createItem({
      type: 'skin',
      name: 'Abyssal Void',
      imageUrl: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=500&auto=format&fit=crop&q=60',
      value: '5M',
      demand: '10/10',
      status: 'Rising',
      rodName: 'Abyssal Rod',
    });
    
    await storage.createItem({
      type: 'skin',
      name: 'Magma Flow',
      imageUrl: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=500&auto=format&fit=crop&q=60',
      value: '1.2M',
      demand: '6/10',
      status: 'Dropping',
      rodName: 'Magma Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Glacial Frost',
      imageUrl: 'https://images.unsplash.com/photo-1483664852095-d6cc6870705d?w=500&auto=format&fit=crop&q=60',
      value: '3M',
      demand: '7/10',
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
