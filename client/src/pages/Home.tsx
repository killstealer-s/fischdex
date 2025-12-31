import { useState } from "react";
import { useItems } from "@/hooks/use-items";
import { ItemCard } from "@/components/ItemCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Loader2, Search, Filter, Ship, PaintBucket } from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "all" | "boat" | "skin";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("boat");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Fetch only what's needed based on tab (if 'all', we might want to fetch both, but let's just fetch by type for now to keep it clean, or modify hook)
  // Since the hook takes optional type, undefined returns all.
  const queryType = activeTab === "all" ? undefined : activeTab;
  const { data: items, isLoading, error } = useItems(queryType);

  // Client-side filtering for search
  const filteredItems = items?.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-white">
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden flex items-center justify-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://pixabay.com/get/gdb8ef1caeeff3d98903e4b9da23bb5bd671eec19f9a196eb86848599157c73565a926934990c9f091031e1121d849c698d26bd89ce8ab78bebc2a2d4c62aa02a_1280.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-2 tracking-tight">
              FISCH<span className="text-primary">DEX</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-light">100% community driven value list</p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-md mx-auto mt-8"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </div>
      {/* Main Content Area */}
      <main className="flex-grow container max-w-7xl mx-auto px-4 md:px-6 py-8 relative z-20 -mt-20">
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-background/80 backdrop-blur-md border border-white/10 p-1 rounded-2xl flex gap-1 shadow-2xl">
            <Tab 
              active={activeTab === "boat"} 
              onClick={() => setActiveTab("boat")} 
              icon={<Ship className="w-4 h-4" />}
            >
              Boats
            </Tab>
            <Tab 
              active={activeTab === "skin"} 
              onClick={() => setActiveTab("skin")} 
              icon={<PaintBucket className="w-4 h-4" />}
            >
              Skins
            </Tab>
          </div>
        </div>

        {/* Grid Content */}
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-400 bg-red-500/5 rounded-3xl border border-red-500/20">
            <h3 className="text-xl font-bold mb-2">System Error</h3>
            <p>Unable to retrieve market data. Please try again later.</p>
          </div>
        ) : filteredItems?.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
              <Filter className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems?.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Tab({ children, active, onClick, icon }: { children: React.ReactNode, active: boolean, onClick: () => void, icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-xl font-display font-bold uppercase tracking-wider text-sm transition-all duration-200 flex items-center gap-2",
        active 
          ? "bg-primary text-background shadow-[0_0_20px_rgba(14,165,233,0.3)]" 
          : "text-muted-foreground hover:text-white hover:bg-white/5"
      )}
    >
      {icon}
      {children}
    </button>
  );
}
