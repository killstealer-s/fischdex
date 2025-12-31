import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiRoblox, SiDiscord } from "react-icons/si";

const teamMembers = [
  {
    id: "lead",
    name: "Lead Developer",
    roblox: "@ExampleRoblox",
    discord: "example#0000",
    description: "Architect and lead developer of the FISCHDEX platform."
  },
  {
    id: "design",
    name: "Head Designer",
    roblox: "@DesignRoblox",
    discord: "designer#1111",
    description: "Creator of the unique visual identity and gaming-themed UI."
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
            SITE <span className="text-primary">CREDITS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            FISCHDEX was brought to life by these dedicated creators.
          </p>
        </motion.div>

        <Tabs defaultValue={teamMembers[0].id} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/5 border border-white/10 p-1">
              {teamMembers.map((member) => (
                <TabsTrigger 
                  key={member.id} 
                  value={member.id}
                  className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-background font-bold uppercase tracking-wider text-xs"
                >
                  {member.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {teamMembers.map((member) => (
            <TabsContent key={member.id} value={member.id}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">{member.name}</CardTitle>
                    <p className="text-muted-foreground mt-2">{member.description}</p>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/5 group hover:border-primary/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <SiRoblox className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-0.5">Roblox Username</p>
                        <p className="text-white font-medium">{member.roblox}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/5 group hover:border-primary/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-[#5865F2]/10 flex items-center justify-center">
                        <SiDiscord className="w-6 h-6 text-[#5865F2]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-0.5">Discord Username</p>
                        <p className="text-white font-medium">{member.discord}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
