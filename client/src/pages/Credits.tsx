import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { SiRoblox, SiDiscord } from "react-icons/si";

const teamMembers = [
  {
    roblox: "killstealer_s",
    discord: "killstealer_s",
  }
];

export default function Credits() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-white">
      <Navigation />
      
      <main className="flex-grow container max-w-2xl mx-auto px-4 md:px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            SITE <span className="text-primary">MEMBERS</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            FISCHDEX was brought to life by these dedicated creators.
          </p>
        </motion.div>

        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 overflow-hidden hover-elevate transition-all">
                <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 group hover:border-primary/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <SiRoblox className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-0.5">Roblox</p>
                      <p className="text-white font-medium">{member.roblox}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 group hover:border-primary/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#5865F2]/10 flex items-center justify-center">
                      <SiDiscord className="w-5 h-5 text-[#5865F2]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-0.5">Discord</p>
                      <p className="text-white font-medium">{member.discord}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
