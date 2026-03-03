"use client";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [caseDropdownOpen, setCaseDropdownOpen] = useState(false);

  const practiceAreas = [
    { name: "Computer Crimes", slug: "computer-crimes" },
    { name: "DUI / DWI", slug: "dui" },
    { name: "Assault & Battery", slug: "assault-battery" },
    { name: "Drug Possession & Distribution", slug: "drug-crimes" },
    { name: "Robbery", slug: "robbery" },
    { name: "Homicide & Murder", slug: "homicide" },
    { name: "Sexual Assault", slug: "sexual-assault" },
    { name: "Burglary & Breaking & Entering", slug: "burglary" },
    { name: "Larceny & Theft", slug: "larceny-theft" },
    { name: "Firearms & Weapons", slug: "firearms" },
    { name: "Shoplifting", slug: "shoplifting" },
    { name: "Destruction of Property", slug: "destruction-property" },
    { name: "Threats & Stalking", slug: "threats-stalking" },
    { name: "Disorderly Conduct", slug: "disorderly-conduct" },
    { name: "Prostitution", slug: "prostitution" },
    { name: "Conspiracy", slug: "conspiracy" },
  ];

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Virginia Court Lawyer Logo" className="h-12 w-auto" />
          <div>
            <div className="text-xl font-serif tracking-tight">Virginia Court Lawyer</div>
            <div className="text-xs text-gold -mt-1">D.J. Rivera, Esq.</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/about" className="hover:text-gold transition">About</Link>
          <Link href="/practice-areas" className="hover:text-gold transition">Practice Areas</Link>

          {/* Case Studies Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => setCaseDropdownOpen(!caseDropdownOpen)}
              className="flex items-center gap-1 hover:text-gold transition"
            >
              Case Studies <ChevronDown size={16} />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block pt-2 w-64">
              <div className="bg-white text-navy rounded-2xl shadow-xl py-4 px-2 border border-slate-100">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/case-studies/${area.slug}`}
                    className="block px-6 py-3 hover:bg-slate-100 rounded-xl transition"
                    onClick={() => setCaseDropdownOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/locations" className="hover:text-gold transition">Locations</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu (with submenu) */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/20 py-6">
          <div className="flex flex-col items-center gap-6 text-lg">
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/practice-areas" onClick={() => setMobileOpen(false)}>Practice Areas</Link>
            
            <div className="w-full px-8">
              <div className="font-medium text-gold mb-3">Case Studies</div>
              {practiceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/case-studies/${area.slug}`}
                  className="block py-3 pl-6 text-slate-300 hover:text-white transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {area.name}
                </Link>
              ))}
            </div>

            <Link href="/locations" onClick={() => setMobileOpen(false)}>Locations</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
