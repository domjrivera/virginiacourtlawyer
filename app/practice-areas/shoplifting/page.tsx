import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Firearms Lawyer | §18.2-308.1 & §18.2-282 Defense",
  description: "Experienced defense for brandishing a firearm, school property weapons charges, concealed carry violations, and all firearms offenses in Greater Richmond and Northern Virginia.",
  keywords: ["Richmond firearms lawyer", "Northern Virginia brandishing attorney", "Virginia Code 18.2-308.1", "Fairfax weapons defense", "D.J. Rivera"],
};

export default function FirearmsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Firearms & Weapons Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-308.1 (School Property) & § 18.2-282 (Brandishing) • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-308.1 — Weapons on School Property</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        It shall be unlawful for any person to possess any firearm or other weapon on school property or at any school-sponsored event.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-282 — Brandishing a Firearm</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        It shall be unlawful for any person to point, hold, or brandish a firearm in such a manner as to reasonably induce fear in the mind of another.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li><strong>School Property:</strong> Class 1 misdemeanor or felony depending on prior record</li>
        <li><strong>Brandishing:</strong> Class 1 misdemeanor (up to 12 months jail)</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Lack of intent to induce fear</li>
        <li>Self-defense or defense of property</li>
        <li>Constitutional Second Amendment challenges</li>
        <li>Improper stop or search</li>
        <li>Negotiating reduced charges or expungement eligibility</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Free Consultation – Defend Your Rights
        </Link>
      </div>
    </div>
  );
}
