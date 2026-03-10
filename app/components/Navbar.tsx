"use client";
import Link from "next/link";
import { Menu, ChevronDown, ChevronRight, X } from "lucide-react";
import { useState, useRef } from "react";

const practiceAreas = [
  { name: "Computer Crimes", slug: "computer-crimes", highlight: true, hasSub: true },
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

const computerCrimesVirginia = [
  { name: "Computer Fraud", slug: "computer-fraud", code: "\u00a7 18.2-152.3" },
  { name: "Computer Trespass / Hacking", slug: "computer-trespass", code: "\u00a7 18.2-152.4" },
  { name: "Computer Invasion of Privacy", slug: "computer-invasion-of-privacy", code: "\u00a7 18.2-152.5" },
  { name: "Theft of Computer Services", slug: "theft-of-computer-services", code: "\u00a7 18.2-152.6" },
  { name: "Harassment by Computer", slug: "harassment-by-computer", code: "\u00a7 18.2-152.7:1" },
  { name: "Possession of Child Pornography", slug: "possession-of-child-pornography", code: "\u00a7 18.2-374.1:1" },
  { name: "Online Solicitation of Minor", slug: "online-solicitation-of-a-minor", code: "\u00a7 18.2-374.3" },
];

const computerCrimesFederal = [
  { name: "Computer Fraud & Abuse Act", slug: "computer-fraud-and-abuse-act", code: "18 U.S.C. \u00a7 1030" },
  { name: "Wire Fraud", slug: "wire-fraud", code: "18 U.S.C. \u00a7 1343" },
  { name: "Identity Theft", slug: "identity-theft", code: "18 U.S.C. \u00a7\u00a7 1028 & 1028A" },
  { name: "Criminal Copyright Infringement", slug: "criminal-copyright-infringement", code: "17 U.S.C. \u00a7 506" },
  { name: "Federal Child Pornography", slug: "federal-child-pornography", code: "18 U.S.C. \u00a7 2252A" },
  { name: "Coercion & Enticement of Minor", slug: "coercion-enticement-of-minor", code: "18 U.S.C. \u00a7 2422(b)" },
];

const resources = [
  { name: "Know Your Rights", href: "/know-your-rights" },
  { name: "FAQ", href: "/faq" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [computerCrimesOpen, setComputerCrimesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [mobileComputerOpen, setMobileComputerOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const practiceLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const computerLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePracticeEnter = () => {
    if (practiceLeaveTimer.current) clearTimeout(practiceLeaveTimer.current);
    setPracticeOpen(true);
  };
  const handlePracticeLeave = () => {
    practiceLeaveTimer.current = setTimeout(() => {
      setPracticeOpen(false);
      setComputerCrimesOpen(false);
    }, 150);
  };
  const handleComputerEnter = () => {
    if (computerLeaveTimer.current) clearTimeout(computerLeaveTimer.current);
    if (practiceLeaveTimer.current) clearTimeout(practiceLeaveTimer.current);
    setComputerCrimesOpen(true);
  };
  const handleComputerLeave = () => {
    computerLeaveTimer.current = setTimeout(() => {
      setComputerCrimesOpen(false);
    }, 150);
  };

  const closeAll = () => {
    setPracticeOpen(false);
    setComputerCrimesOpen(false);
    setMobileOpen(false);
  };

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
            onMouseEnter={handlePracticeEnter}
            onMouseLeave={handlePracticeLeave}
          >
            <button className="flex items-center gap-1 hover:text-gold transition py-2">
              Practice Areas <ChevronDown size={16} />
            </button>

            {practiceOpen && (
              <div className="absolute top-full left-0 pt-1 z-50 flex">
                {/* Primary practice areas list */}
                <div className="w-64 bg-white text-navy rounded-2xl shadow-xl py-4 px-2 border border-slate-100 max-h-[80vh] overflow-y-auto">
                  <Link
                    href="/practice-areas"
                    className="block px-6 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-crimson transition"
                    onClick={closeAll}
                  >
                    All Practice Areas &rarr;
                  </Link>
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    {practiceAreas.map((area) => (
                      <div
                        key={area.slug}
                        className="relative"
                        onMouseEnter={area.hasSub ? handleComputerEnter : undefined}
                        onMouseLeave={area.hasSub ? handleComputerLeave : undefined}
                      >
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          className={`flex items-center justify-between px-6 py-2.5 hover:bg-slate-50 rounded-xl transition text-sm ${area.highlight ? 'text-crimson font-semibold' : ''}`}
                          onClick={closeAll}
                        >
                          <span>{area.highlight && <span className="mr-1">&#9889;</span>}{area.name}</span>
                          {area.hasSub && <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Computer Crimes mega-menu flyout */}
                {computerCrimesOpen && (
                  <div
                    className="ml-1 w-[520px] bg-white text-navy rounded-2xl shadow-2xl py-5 px-4 border border-slate-100"
                    onMouseEnter={handleComputerEnter}
                    onMouseLeave={handleComputerLeave}
                  >
                    <div className="flex items-center justify-between mb-3 px-2">
                      <div>
                        <p className="text-xs font-bold text-crimson uppercase tracking-widest">Computer Crimes Defense</p>
                        <p className="text-xs text-slate-500 mt-0.5">D.J. Rivera &mdash; D.Eng. Cybersecurity &middot; CISSP &middot; CEH &middot; GCFE</p>
                      </div>
                      <Link
                        href="/practice-areas/computer-crimes"
                        className="text-xs text-crimson font-semibold hover:underline flex-shrink-0"
                        onClick={closeAll}
                      >
                        Overview &rarr;
                      </Link>
                    </div>
                    <div className="border-t border-slate-100 pt-4 grid grid-cols-2 gap-x-4">
                      {/* Virginia column */}
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Virginia Statutes</p>
                        {computerCrimesVirginia.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/practice-areas/computer-crimes/${item.slug}`}
                            className="block px-2 py-2 rounded-lg hover:bg-slate-50 transition"
                            onClick={closeAll}
                          >
                            <p className="text-sm font-medium text-navy leading-tight">{item.name}</p>
                            <p className="text-xs text-slate-400 font-mono mt-0.5">{item.code}</p>
                          </Link>
                        ))}
                      </div>
                      {/* Federal column */}
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Federal Statutes</p>
                        {computerCrimesFederal.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/practice-areas/computer-crimes/${item.slug}`}
                            className="block px-2 py-2 rounded-lg hover:bg-slate-50 transition"
                            onClick={closeAll}
                          >
                            <p className="text-sm font-medium text-navy leading-tight">{item.name}</p>
                            <p className="text-xs text-slate-400 font-mono mt-0.5">{item.code}</p>
                          </Link>
                        ))}
                        {/* Landmark case badge */}
                        <div className="mt-3 mx-2 bg-crimson/10 border border-crimson/20 rounded-lg p-2">
                          <p className="text-xs text-crimson font-semibold leading-tight">&#9878; Only attorney to beat FBI &amp; DOJ in federal jury trial</p>
                          <p className="text-xs text-slate-500 mt-0.5">United States v. Cassim</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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

            {/* Practice Areas accordion */}
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
                  <Link href="/practice-areas" className="block py-2 text-gold text-sm" onClick={() => setMobileOpen(false)}>All Practice Areas &rarr;</Link>

                  {/* Computer Crimes nested accordion */}
                  <div>
                    <button
                      className="w-full flex justify-between items-center py-2 text-sm text-crimson font-semibold"
                      onClick={() => setMobileComputerOpen(!mobileComputerOpen)}
                    >
                      <span>&#9889; Computer Crimes</span>
                      <ChevronDown size={14} className={`transition-transform ${mobileComputerOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileComputerOpen && (
                      <div className="pl-3 py-1 space-y-0.5 border-l border-crimson/30 ml-1">
                        <Link href="/practice-areas/computer-crimes" className="block py-1.5 text-xs text-gold font-semibold" onClick={() => setMobileOpen(false)}>
                          Overview &rarr;
                        </Link>
                        <p className="text-xs text-slate-400 uppercase tracking-wider pt-1 pb-0.5">Virginia Statutes</p>
                        {computerCrimesVirginia.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/practice-areas/computer-crimes/${item.slug}`}
                            className="block py-1.5 text-xs text-slate-300"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name} <span className="text-slate-500 font-mono">{item.code}</span>
                          </Link>
                        ))}
                        <p className="text-xs text-slate-400 uppercase tracking-wider pt-2 pb-0.5">Federal Statutes</p>
                        {computerCrimesFederal.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/practice-areas/computer-crimes/${item.slug}`}
                            className="block py-1.5 text-xs text-slate-300"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name} <span className="text-slate-500 font-mono">{item.code}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* All other practice areas */}
                  {practiceAreas.filter((a) => !a.hasSub).map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="block py-2 text-sm text-slate-300"
                      onClick={() => setMobileOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources accordion */}
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
              Free Consultation &mdash; 24/7
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
