import { Anchor, Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Marketplace" },
    { href: "/credits", label: "Members" }, // Placeholder
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-lg group-hover:bg-primary/80 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              <Rocket className="w-5 h-5 text-background fill-background transform -rotate-45" />
            </div>
            <span className="font-display font-bold text-xl tracking-wide bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              FISCH<span className="text-primary">DEX</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={cn(
                  "relative text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary cursor-pointer py-2",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}>
                  {link.label}
                  {location === link.href && (
                    <span className="absolute -bottom-[21px] left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_rgba(14,165,233,1)]" />
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Auth Button (Mock) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm border border-white/10 transition-all hover:scale-105 active:scale-95">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background p-4 space-y-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div 
                className="block px-4 py-3 rounded-lg hover:bg-white/5 text-base font-bold uppercase tracking-wide cursor-pointer text-muted-foreground hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5">
            <button className="w-full py-3 rounded-lg bg-primary text-background font-bold uppercase tracking-wide">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
