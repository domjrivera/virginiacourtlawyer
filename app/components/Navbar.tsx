"use client";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";

const practiceAreas = [
  { name: "Computer Crimes", slug: "computer-crimes", highlight: true },
  { name: "DUI / DWI", slug: "dui" },
  { name: "Assault & Battery", slug: "assault-battery" },
  { name: "Drug Possession", slug: "drug-possession" },
  { name: "Drug Distribution", slug: "drug-distribution" },
  { name: "Federal Crimes", slug: "federal-crimes" },
  { name: "Robbery", slug: "robbery" },
  { name: "Homicide & Murder", slug: "homicide" },
  { name: "Sexual Assault", slug: "sexual-assault" },
  { name: "Burglary", slug: "burglary" },
  { name: "Larceny & Theft", slug: "larceny-theft" },
  { name: "Firearms & Weapons", slug: "firearms" },
  { name: "Shoplifting", slug: "shoplifting" },
  { name: "Threats & Stalking", slug: "threats-stalking" },
  { name: "Disorderly Conduct", slug: "disorderly-conduct" },
  { name: "Destruction of Property", slug: "destruction-property" },
  { name: "Prostitution", slug: "prostitution" },
  { name: "Conspiracy", slug: "conspiracy" },
  { name: "Juvenile Offenses", slug: "juvenile-offenses" },
  { name: "Expungement", slug: "expungement" },
];

const resources = [
  { name: "Know Your Rights", href: "/know-your-rights" },
  { name: "FAQ", href: "/faq" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

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
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link href="/about" className="hover:text-gold transition">About</Link>

          {/* Practice Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPracticeOpen(true)}
            onMouseLeave={() => setPracticeOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gold transition py-2">
              Practice Areas <ChevronDown size={16} />
            </button>
            {practiceOpen && (
              <div className="absolute top-full left-0 pt-1 w-64 z-50">
                <div className="bg-white text-navy rounded-2xl shadow-xl py-4 px-2 border border-slate-100 max-h-[80vh] overflow-y-auto">
                  <Link href="/practice-areas" className="block px-6 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-crimson transition">
                    All Practice Areas →
                  </Link>
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/practice-areas/${area.slug}`}
                        className={`block px-6 py-2.5 hover:bg-slate-50 rounded-xl transition text-sm ${area.highlight ? 'text-crimson font-semibold' : ''}`}
                        onClick={() => setPracticeOpen(false)}
                      >
                        {area.highlight && <span className="mr-1">⚡</span>}{area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gold transition py-2">
              Resources <ChevronDown size={16} />
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 pt-1 w-52 z-50">
                <div className="bg-white text-navy rounded-2xl shadow-xl py-4 px-2 border border-slate-100">
                  {resources.map(({ name, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-6 py-2.5 hover:bg-slate-50 rounded-xl transition text-sm"
                      onClick={() => setResourcesOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/locations" className="hover:text-gold transition">Locations</Link>
          <Link href="/contact" className="bg-crimson hover:bg-red-700 text-white px-5 py-2 rounded transition font-medium">
            Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/20 py-6 max-h-screen overflow-y-auto">
          <div className="flex flex-col gap-2 px-6 text-base">
            <Link href="/about" className="py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>About</Link>

            <div>
              <button
                className="w-full flex justify-between items-center py-3 border-b border-white/10"
                onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
              >
                <span>Practice Areas</span>
                <ChevronDown size={16} className={`transition-transform ${mobilePracticeOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePracticeOpen && (
                <div className="pl-4 py-2 space-y-1">
                  <Link href="/practice-areas" className="block py-2 text-gold text-sm" onClick={() => setMobileOpen(false)}>All Practice Areas →</Link>
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className={`block py-2 text-sm ${area.highlight ? 'text-gold font-semibold' : 'text-slate-300'}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex justify-between items-center py-3 border-b border-white/10"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                <span>Resources</span>
                <ChevronDown size={16} className={`transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-4 py-2 space-y-1">
                  {resources.map(({ name, href }) => (
                    <Link key={href} href={href} className="block py-2 text-sm text-slate-300" onClick={() => setMobileOpen(false)}>
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/locations" className="py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>Locations</Link>
            <Link href="/contact" className="mt-4 bg-crimson text-white text-center py-4 rounded-xl font-medium" onClick={() => setMobileOpen(false)}>
              Free Consultation — 24/7
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
