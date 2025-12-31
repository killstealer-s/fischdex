import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center space-y-6 px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/5 border border-white/10 mb-4 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <AlertTriangle className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-white">
            Signal Lost
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The coordinates you're trying to reach don't exist in this sector. 
            Return to known space immediately.
          </p>
        </div>

        <Link href="/">
          <button className="mt-8 px-8 py-4 rounded-xl font-bold uppercase tracking-wider bg-primary text-background hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Return to Base
          </button>
        </Link>
      </div>
    </div>
  );
}
