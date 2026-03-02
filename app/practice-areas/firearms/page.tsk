import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Firearms Lawyer | State & Federal §18.2-308.1 & 18 U.S.C. §922 Defense",
  description: "Aggressive defense for state weapons charges and federal felon-in-possession / 924(c) charges in Richmond and Northern Virginia (EDVA).",
  keywords: ["Richmond firearms lawyer", "Northern Virginia federal gun attorney", "18 USC 922(g) defense", "Virginia Code 18.2-308.1", "Fairfax brandishing lawyer", "D.J. Rivera"],
};

export default function FirearmsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Firearms & Weapons Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-308.1 & § 18.2-282 (State) • 18 U.S.C. § 922 & § 924 (Federal) • D.J. Rivera, Esq.</p>
      </div>

      {/* === STATE SECTION (unchanged) === */}
      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-308.1 — Weapons on School Property</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        It shall be unlawful for any person to possess any firearm or other weapon on school property or at any school-sponsored event.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-282 — Brandishing a Firearm</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        It shall be unlawful for any person to point, hold, or brandish a firearm in such a manner as to reasonably induce fear in the mind of another.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">State Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>School Property: Class 1 misdemeanor or felony</li>
        <li>Brandishing: Class 1 misdemeanor (up to 12 months jail)</li>
      </ul>

      {/* === FEDERAL SECTION === */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mt-24 mb-12">Federal Firearms Charges (EDVA)</h2>
      <p className="text-lg mb-10">Northern Virginia clients are frequently charged federally under these statutes.</p>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 922(g) — Felon in Possession of a Firearm</h3>
          <p className="text-lg">Prohibits convicted felons from possessing firearms. Up to 10 years federal prison.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 924(c) — Use of Firearm During Crime of Violence</h3>
          <p className="text-lg">Mandatory minimum 5–25+ years consecutive sentence.</p>
        </div>
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Free Consultation – State or Federal Firearms Charge
        </Link>
      </div>
    </div>
  );
}
