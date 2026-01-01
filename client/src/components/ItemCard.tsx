import { motion, AnimatePresence } from "framer-motion";
import { type Item } from "@shared/schema";
import { Zap, Anchor, Gauge, Move, ChevronsUp, TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const isBoat = item.type === "boat";

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const formattedName = item.name.replace(/\s+/g, "_");
    window.open(`https://fischipedia.org/wiki/${formattedName}`, "_blank");
  };

  // Status icon logic
  const StatusIcon = {
    "Overpays": TrendingUp,
    "Doing Well": TrendingUp,
    "Rising": TrendingUp,
    "Dropping": TrendingDown,
    "Stable": Minus
  }[item.status] || Minus;

  const statusColor = {
    "Overpays": "text-yellow-400",
    "Doing Well": "text-emerald-400",
    "Rising": "text-green-400",
    "Dropping": "text-red-400",
    "Stable": "text-gray-400"
  }[item.status] || "text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col h-full glow-card"
    >
      {/* C/C Badge */}
      {item.isCC && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest z-20 bg-red-600 text-white border border-red-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
          C/C
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden p-6 flex items-center justify-center">
        {/* Type Badge */}
        <div className={cn(
          "absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider z-10 border border-white/10 backdrop-blur-sm",
          isBoat ? "bg-blue-500/20 text-blue-300" : "bg-purple-500/20 text-purple-300"
        )}>
          {item.type}
        </div>

        {/* Floating Image */}
        <motion.img 
          src={item.imageUrl} 
          alt={item.name}
          className="w-full h-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-0"
          whileHover={{ scale: 1.1, rotate: isBoat ? -2 : 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />

        {/* Hover Overlay - Stats Reveal */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <div className="w-full space-y-4">
            {isBoat ? (
              // Boat Stats
              <div className="w-full space-y-4">
                <div className="space-y-3">
                  <StatRow icon={<Gauge className="w-4 h-4 text-cyan-400" />} label="Speed" value={item.speed} max={100} />
                  <StatRow icon={<Move className="w-4 h-4 text-emerald-400" />} label="Steering" value={item.steering} max={100} />
                  <StatRow icon={<ChevronsUp className="w-4 h-4 text-yellow-400" />} label="Accel" value={item.acceleration} max={100} />
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 bg-primary/10 border-primary/30 hover:bg-primary/20 text-white font-bold transition-all group/btn"
                  onClick={handleInfoClick}
                >
                  Additional Information
                  <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            ) : (
              // Skin Stats
              <div className="w-full space-y-4">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm uppercase font-bold tracking-wider mb-2">Equipable On</p>
                  <div className="flex items-center justify-center gap-2 text-purple-300 text-lg font-display">
                    <Anchor className="w-5 h-5" />
                    {item.rodName || "Universal"}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 bg-primary/10 border-primary/30 hover:bg-primary/20 text-white font-bold transition-all group/btn"
                  onClick={handleInfoClick}
                >
                  Additional Information
                  <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow bg-card relative z-10">
        <h3 className="text-xl font-bold text-white mb-1 truncate drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{item.name}</h3>
        
        <div className="grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Value</span>
            <span className="text-primary font-mono font-bold text-lg">{item.value}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Demand</span>
            <span className={cn("font-bold text-sm mt-1", 
              item.demand === "High" ? "text-orange-400" : 
              item.demand === "Low" ? "text-slate-400" : "text-yellow-400"
            )}>
              {item.demand}
            </span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Status</span>
            <div className="flex items-center gap-1 mt-1">
              <StatusIcon className={cn("w-4 h-4", statusColor)} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Helper for progress bars in stats
function StatRow({ icon, label, value, max = 100, displayValue }: { icon: React.ReactNode, label: string, value: number | string | null, max?: number, displayValue?: string }) {
  if (value === null) return null;
  
  // Use displayValue if provided, otherwise use value
  const textValue = displayValue !== undefined ? displayValue : String(value);
  
  // For the progress bar, we need a numeric value
  let numericValue = 0;
  if (typeof value === 'number') {
    numericValue = value;
  } else if (typeof value === 'string') {
    // Try to extract numeric part for progress bar
    numericValue = parseFloat(value) || 0;
    // If it's a decimal like 0.85, scale it for the 100-max bar if it's acceleration
    if (numericValue < 2 && numericValue > 0) numericValue *= 100;
  }
  
  const percentage = Math.min((numericValue / max) * 100, 100);
  
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-slate-300 uppercase font-bold tracking-wide">
        <div className="flex items-center gap-2">
          {icon}
          {label}
        </div>
        <span>{textValue}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-full bg-gradient-to-r from-primary to-cyan-300 rounded-full"
        />
      </div>
    </div>
  );
}
