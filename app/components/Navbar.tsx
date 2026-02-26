"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Virginia Court Lawyer Logo" className="h-12 w-auto" />
          <div>
            <div className="text-xl font-serif tracking-tight">Virginia Court Lawyer</div>
            <div className="text-xs text-gold -mt-1">D.J. Rivera, Esq.</div>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/about" className="hover:text-gold transition">About</Link>
          <Link href="/practice-areas" className="hover:text-gold transition">Practice Areas</Link>
          <Link href="/locations" className="hover:text-gold transition">Locations</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          <Menu size={28} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/20 py-4">
          <div className="flex flex-col items-center gap-6 text-lg">
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/practice-areas" onClick={() => setMobileOpen(false)}>Practice Areas</Link>
            <Link href="/locations" onClick={() => setMobileOpen(false)}>Locations</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
