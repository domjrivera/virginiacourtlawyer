import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Larceny & Theft Lawyer | §18.2-95 & §18.2-96 Defense",
  description: "Aggressive defense for grand larceny, petit larceny, and all theft charges in Richmond, Henrico, Chesterfield, Hanover, Alexandria, Arlington, Fairfax & Prince William.",
  keywords: ["Richmond grand larceny lawyer", "Northern Virginia theft attorney", "Virginia Code 18.2-95", "Fairfax petit larceny defense", "D.J. Rivera"],
};

export default function LarcenyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Larceny & Theft Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-95 (Grand) & § 18.2-96 (Petit) • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-95 — Grand Larceny</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who commits simple larceny not from the person of another of goods and chattels of the value of $1,000 or more... shall be guilty of grand larceny.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-96 — Petit Larceny</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who commits simple larceny not from the person of another of goods and chattels of the value of less than $1,000 shall be guilty of petit larceny.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li><strong>Grand Larceny:</strong> Class 5 felony (up to 10 years)</li>
        <li><strong>Petit Larceny:</strong> Class 1 misdemeanor (up to 12 months jail)</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Value of property under $1,000 threshold</li>
        <li>Lack of intent to permanently deprive</li>
        <li>Claim of right or ownership dispute</li>
        <li>Illegal search and seizure</li>
        <li>First-offender diversion programs</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Get Your Free Consultation – Protect Your Record
        </Link>
      </div>
    </div>
  );
}
