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
      value: '650',
      demand: '9/10',
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
      value: '170',
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
      name: 'Captains Goldfish',
      imageUrl: '/images/captains_goldfish.png',
      value: '100',
      demand: '4/10',
      status: 'Stable',
      speed: 200,
      steering: 80,
      acceleration: '1',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Dreadcurrent',
      imageUrl: '/images/dreadcurrent.png',
      value: '100',
      demand: '4/10',
      status: 'Stable',
      speed: 300,
      steering: 30,
      acceleration: '0.2',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Frostbite',
      imageUrl: '/images/frostbite.png',
      value: '95',
      demand: '8/10',
      status: 'Stable',
      speed: 299,
      steering: 100,
      acceleration: '1.5',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Sushi Rider',
      imageUrl: '/images/sushi_rider.png',
      value: '90',
      demand: '6/10',
      status: 'Stable',
      speed: 230,
      steering: 150,
      acceleration: '1.6',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Riptide',
      imageUrl: '/images/riptide.png',
      value: '85',
      demand: '6/10',
      status: 'Stable',
      speed: 287,
      steering: 110,
      acceleration: '1.33',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Inky Pal',
      imageUrl: '/images/inky_pal.png',
      value: '85',
      demand: '6/10',
      status: 'Stable',
      speed: 200,
      steering: 30,
      acceleration: '0.6',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Pantheress',
      imageUrl: '/images/pantheress.png',
      value: '80',
      demand: '7/10',
      status: 'Doing Well',
      speed: 285,
      steering: 100,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Corruptor',
      imageUrl: '/images/corruptor.png',
      value: '65',
      demand: '7/10',
      status: 'Stable',
      speed: 299,
      steering: 130,
      acceleration: '1.2',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Skygold Sprinter',
      imageUrl: '/images/skygold_sprinter.png',
      value: '65',
      demand: '4/10',
      status: 'Stable',
      speed: 240,
      steering: 80,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Krampus Curse',
      imageUrl: '/images/krampus_curse.png',
      value: '60',
      demand: '6/10',
      status: 'Stable',
      speed: 295,
      steering: 120,
      acceleration: '1.6',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Purrari',
      imageUrl: '/images/purrari.png',
      value: '55',
      demand: '7/10',
      status: 'Stable',
      speed: 250,
      steering: 150,
      acceleration: '1',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Orange Unicycle',
      imageUrl: '/images/orange_unicycle.png',
      value: '50',
      demand: '7/10',
      status: 'Stable',
      speed: 180,
      steering: 70,
      acceleration: '0.3',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Cobalt Corsair',
      imageUrl: '/images/cobalt_corsair.png',
      value: '50',
      demand: '3/10',
      status: 'Stable',
      speed: 245,
      steering: 70,
      acceleration: '0.7',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Dreadmarrow',
      imageUrl: '/images/dreadmarrow.png',
      value: '50',
      demand: '6/10',
      status: 'Stable',
      speed: 200,
      steering: 105,
      acceleration: '0.85',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Volcanic Speedboat',
      imageUrl: '/images/volcanic_speedboat.png',
      value: '50',
      demand: '2/10',
      status: 'Stable',
      speed: 210,
      steering: 35,
      acceleration: '0.6',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Gleeb 9000',
      imageUrl: '/images/gleeb_9000.png',
      value: '45',
      demand: '5/10',
      status: 'Stable',
      speed: 297,
      steering: 90,
      acceleration: '1.3',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Ivorous',
      imageUrl: '/images/ivorous.png',
      value: '40',
      demand: '6/10',
      status: 'Stable',
      speed: 293,
      steering: 120,
      acceleration: '1.11',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Mecha Ray',
      imageUrl: '/images/mecha_ray.png',
      value: '40',
      demand: '6/10',
      status: 'Stable',
      speed: 288,
      steering: 100,
      acceleration: '0.78',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Novaris',
      imageUrl: '/images/novaris.png',
      value: '40',
      demand: '5/10',
      status: 'Stable',
      speed: 285,
      steering: 100,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Love Crasher',
      imageUrl: '/images/love_crasher.png',
      value: '40',
      demand: '3/10',
      status: 'Stable',
      speed: 190,
      steering: 35,
      acceleration: '0.6',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Nemesis',
      imageUrl: '/images/nemesis.png',
      value: '35',
      demand: '5/10',
      status: 'Stable',
      speed: 285,
      steering: 101,
      acceleration: '1.23',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Toro Veloce',
      imageUrl: '/images/toro_veloce.png',
      value: '35',
      demand: '4/10',
      status: 'Stable',
      speed: 240,
      steering: 80,
      acceleration: '0.6',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Scorpferno',
      imageUrl: '/images/scorpferno.png',
      value: '35',
      demand: '6/10',
      status: 'Stable',
      speed: 295,
      steering: 111,
      acceleration: '1.35',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Celestial Cruiser',
      imageUrl: '/images/celestial_cruiser.png',
      value: '35',
      demand: '3/10',
      status: 'Stable',
      speed: 230,
      steering: 80,
      acceleration: '0.4',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Gravedigger',
      imageUrl: '/images/gravedigger.png',
      value: '35',
      demand: '5/10',
      status: 'Stable',
      speed: 287,
      steering: 120,
      acceleration: '0.9',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Hollywave Cruiser',
      imageUrl: '/images/hollywave_cruiser.png',
      value: '30',
      demand: '3/10',
      status: 'Stable',
      speed: 230,
      steering: 30,
      acceleration: '0.2',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Popsicle Jetski',
      imageUrl: '/images/popsicle_jetski.png',
      value: '30',
      demand: '5/10',
      status: 'Stable',
      speed: 250,
      steering: 95,
      acceleration: '0.7',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Fishscale Waverider',
      imageUrl: '/images/fishscale_waverider.png',
      value: '30',
      demand: '4/10',
      status: 'Stable',
      speed: 230,
      steering: 80,
      acceleration: '0.4',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Mawrider',
      imageUrl: '/images/mawrider.png',
      value: '30',
      demand: '4/10',
      status: 'Dropping',
      speed: 235,
      steering: 80,
      acceleration: '0.6',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Gondola',
      imageUrl: '/images/gondola.png',
      value: '30',
      demand: '5/10',
      status: 'Stable',
      speed: 230,
      steering: 60,
      acceleration: '0.4',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Macabre Mistress',
      imageUrl: '/images/macabre_mistress.png',
      value: '30',
      demand: '5/10',
      status: 'Stable',
      speed: 285,
      steering: 150,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Candy Crawlie',
      imageUrl: '/images/candy_crawlie.png',
      value: '25',
      demand: '7/10',
      status: 'Stable',
      speed: 250,
      steering: 200,
      acceleration: '1.55',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Mega Seal',
      imageUrl: '/images/mega_seal.png',
      value: '25',
      demand: '7/10',
      status: 'Stable',
      speed: 244,
      steering: 77,
      acceleration: '1.12',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Sharkie Floatie',
      imageUrl: '/images/sharkie_floatie.png',
      value: '25',
      demand: '6/10',
      status: 'Stable',
      speed: 245,
      steering: 150,
      acceleration: '1.2',
    });

    await storage.createItem({
      type: 'boat',
      name: "Widow's Veil",
      imageUrl: '/images/widows_veil.png',
      value: '25',
      demand: '5/10',
      status: 'Stable',
      speed: 290,
      steering: 120,
      acceleration: '0.8',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Bunny Jetski',
      imageUrl: '/images/bunny_jetski.png',
      value: '25',
      demand: '5/10',
      status: 'Stable',
      speed: 245,
      steering: 80,
      acceleration: '0.9',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Banana Cruiser',
      imageUrl: '/images/banana_cruiser.png',
      value: '20',
      demand: '5/10',
      status: 'Stable',
      speed: 240,
      steering: 110,
      acceleration: '1.1',
    });

    await storage.createItem({
      type: 'boat',
      name: 'Atlantean Jetski',
      imageUrl: '/images/atlantean_jetski.png',
      value: '20',
      demand: '3/10',
      status: 'Stable',
      speed: 210,
      steering: 80,
      acceleration: '0.8',
    });

    // Skins
    await storage.createItem({
      type: 'skin',
      name: "Cthulu's Revenge",
      imageUrl: '/images/cthulus_revenge.png',
      value: '1200',
      demand: '5/10',
      status: 'Stable',
      rodName: 'Great Dreamer Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Puff of Heaven',
      imageUrl: '/images/puff_of_heaven.png',
      value: '900',
      demand: '6/10',
      status: 'Stable',
      rodName: "Heaven's Rod",
    });

    await storage.createItem({
      type: 'skin',
      name: 'Cyanic Demonride',
      imageUrl: '/images/cyanic_demonride.png',
      value: '450',
      demand: '8/10',
      status: 'Stable',
      rodName: 'Trident Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Fuchsia Fidelity',
      imageUrl: '/images/fuchsia_fidelity.png',
      value: '230',
      demand: '7/10',
      status: 'Stable',
      rodName: 'Trident Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Dreamline',
      imageUrl: '/images/dreamline.png',
      value: '210',
      demand: '6/10',
      status: 'Stable',
      rodName: 'Seraphic Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Seraphic Rainbow',
      imageUrl: '/images/seraphic_rainbow.png',
      value: '190',
      demand: '5/10',
      status: 'Stable',
      rodName: 'Seraphic Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'The Reaper',
      imageUrl: '/images/the_reaper.png',
      value: '150',
      demand: '8/10',
      status: 'Stable',
      rodName: 'Onirifalx',
    });

    await storage.createItem({
      type: 'skin',
      name: "Aurelia's Grace",
      imageUrl: '/images/the_reaper.png',
      value: '150',
      demand: '6/10',
      status: 'Stable',
      rodName: 'Seraphic Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Scarwing',
      imageUrl: '/images/aurelias_grace.png',
      value: '150',
      demand: '8/10',
      status: 'Stable',
      rodName: 'Duskwire',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Monsleeper',
      imageUrl: '/images/scarwing.png',
      value: '100',
      demand: '7/10',
      status: 'Unstable',
      rodName: 'Great Dreamer Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Heavyblade of Glory',
      imageUrl: '/images/monsleeper.png',
      value: '100',
      demand: '8/10',
      status: 'Stable',
      rodName: 'Tryhard Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Roslit Leviathan',
      imageUrl: '/images/heavyblade_of_glory.png',
      value: '100',
      demand: '3/10',
      status: 'Stable',
      rodName: "Leviathan's Fang Rod",
    });

    await storage.createItem({
      type: 'skin',
      name: 'Crypted Ivory',
      imageUrl: '/images/roslit_leviathan.png',
      value: '75',
      demand: '7/10',
      status: 'Stable',
      rodName: 'Elder Mossripper Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Inkling Overseer',
      imageUrl: '/images/crypted_ivory.png',
      value: '70',
      demand: '2/10',
      status: 'Stable',
      rodName: 'Verdant Shear Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Meowtastic Tower',
      imageUrl: '/images/inkling_overseer.png',
      value: '70',
      demand: '7.5/10',
      status: 'Stable',
      rodName: 'Seraphic Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Silkbane',
      imageUrl: '/images/meowtastic_tower.png',
      value: '70',
      demand: '8/10',
      status: 'Doing Well',
      rodName: 'Great Dreamer Rod',
      isCC: 1,
    });

    await storage.createItem({
      type: 'skin',
      name: 'Wings of Ruin',
      imageUrl: '/images/silkbane.png',
      value: '70',
      demand: '6/10',
      status: 'Stable',
      rodName: 'Seraphic Rod',
      isCC: 1,
    });

    await storage.createItem({
      type: 'skin',
      name: 'Umbral Vengeance',
      imageUrl: '/images/wings_of_ruin.png',
      value: '65',
      demand: '6/10',
      status: 'Stable',
      rodName: 'Dreambreaker',
    });

    await storage.createItem({
      type: 'skin',
      name: "Sanzu's Embrace",
      imageUrl: '/images/umbral_vengeance.png',
      value: '60',
      demand: '6/10',
      status: 'Stable',
      rodName: 'Onirifalx',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Celestial Prismheart',
      imageUrl: '/images/sanzus_embrace.png',
      value: '60',
      demand: '6/10',
      status: 'Stable',
      rodName: 'Seraphic Rod',
    });

    await storage.createItem({
      type: 'skin',
      name: 'Soulful Omen',
      imageUrl: '/images/celestial_prismheart.png',
      value: '55',
      demand: '6/10',
      status: 'Stable',
      rodName: 'Seraphic Rod',
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
