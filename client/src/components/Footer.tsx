import { Rocket, Twitter, MessageCircle, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl text-white">
                FISCH<span className="text-primary">DEX</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              The premier marketplace for luxury virtual vessels and rare cosmetic skins. 
              Track values, analyze demand, and build your dream fleet.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white">Community</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">
                <a 
                  href="https://discord.gg/VgB5b2s3U4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                  data-testid="link-community-discord"
                >
                  Discord Server
                </a>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">Value Spreadsheet (For lower tiers, coming soon)</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 FischDex. All rights reserved. Not affiliated with any game developers.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
