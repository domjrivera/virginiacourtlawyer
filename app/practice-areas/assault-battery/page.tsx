import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Assault & Battery Lawyer | §18.2-57 & §18.2-57.2 Defense",
  description: "Experienced defense for assault, battery, and domestic assault charges in Richmond, Henrico, Chesterfield, Hanover, Alexandria, Arlington, Fairfax & Prince William courts.",
  keywords: ["Richmond assault lawyer", "Northern Virginia battery attorney", "Virginia Code 18.2-57", "domestic assault defense", "Fairfax assault lawyer", "D.J. Rivera"],
};

export default function AssaultBatteryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Assault & Battery Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-57 (General) & § 18.2-57.2 (Domestic) • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-57 — Assault and Battery (General)</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who commits a simple assault or assault and battery is guilty of a Class 1 misdemeanor... [full text as provided by official source, including hate-crime enhancement and protections for law enforcement, school employees, etc.]
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-57.2 — Assault and Battery Against a Family or Household Member</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who commits an assault and battery against a family or household member is guilty of a Class 1 misdemeanor. Third or subsequent offense within 20 years = Class 6 felony.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties & Defense Strategies</h2>
      <p><strong>Typical penalties:</strong> Up to 12 months jail + fine (Class 1 misdemeanor) • Felony on repeat domestic cases.</p>
      <p className="mt-6"><strong>Strong defenses:</strong> Self-defense, defense of others, lack of bodily injury, false accusation, insufficient evidence, mutual combat, or constitutional challenges.</p>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Free Consultation – Fight Your Assault Charge Today
        </Link>
      </div>
    </div>
  );
}
