import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Homicide & Murder Lawyer | §18.2-31 & §18.2-32 Defense",
  description: "Aggressive defense for capital murder, first-degree, and second-degree murder charges in Greater Richmond and Northern Virginia courts. D.J. Rivera fights for your life and freedom.",
  keywords: ["Richmond murder lawyer", "Northern Virginia homicide attorney", "Virginia Code 18.2-32", "Fairfax murder defense", "capital murder lawyer Virginia", "D.J. Rivera"],
};

export default function HomicidePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Homicide & Murder Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-31 (Capital Murder) & § 18.2-32 (1st & 2nd Degree) • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-32 — First and Second Degree Murder</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Murder, other than capital murder, is a Class 2 felony. Murder in the second degree is a Class 3 felony. Capital murder is punishable as a Class 1 felony.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-31 — Capital Murder</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        The willful, deliberate, and premeditated killing of any person in the commission of abduction, robbery, rape, sodomy, object sexual penetration, or other enumerated offenses, or the killing of a law-enforcement officer, firefighter, or multiple victims, among other circumstances.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li><strong>Capital Murder:</strong> Death or life imprisonment (no parole)</li>
        <li><strong>First Degree Murder:</strong> 20 years to life</li>
        <li><strong>Second Degree Murder:</strong> 5–40 years</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">D.J. Rivera’s Defense Strategies</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Self-defense / defense of others / castle doctrine</li>
        <li>Lack of premeditation or malice (reducing to manslaughter)</li>
        <li>Insufficient evidence / mistaken identity / alibi</li>
        <li>Suppression of statements or forensic evidence</li>
        <li>Negotiating plea to lesser charges in Richmond & Northern VA courts</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl mb-6">Facing a Homicide Charge in Virginia?</h3>
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Get Your Free Consultation Immediately – 24/7
        </Link>
      </div>
    </div>
  );
}
