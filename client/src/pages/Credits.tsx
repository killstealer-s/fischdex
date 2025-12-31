import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiRoblox, SiDiscord } from "react-icons/si";

const teamMembers = [
  {
    name: "Developer",
    roblox: "@ExampleRoblox",
    discord: "example#0000",
    role: "Lead Developer"
  },
  {
    name: "Designer",
    roblox: "@DesignRoblox",
    discord: "designer#1111",
    role: "UI/UX Designer"
  }
];

export default function Credits() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-white">
      <Navigation />
      
      <main className="flex-grow container max-w-4xl mx-auto px-4 md:px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            THE <span className="text-primary">TEAM</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the talented individuals behind FISCHDEX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover-elevate transition-all overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{member.name}</CardTitle>
                      <p className="text-sm text-primary font-medium mt-1 uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                    <SiRoblox className="w-5 h-5 text-white/70" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Roblox</p>
                      <p className="text-sm text-white font-medium">{member.roblox}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                    <SiDiscord className="w-5 h-5 text-[#5865F2]" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Discord</p>
                      <p className="text-sm text-white font-medium">{member.discord}</p>
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
