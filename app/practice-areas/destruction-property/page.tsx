import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Destruction of Property Lawyer | §18.2-137 Defense",
  description: "Experienced defense for malicious wounding of property, vandalism, and destruction of property charges across Greater Richmond and Northern Virginia.",
  keywords: ["Richmond destruction of property lawyer", "Northern Virginia vandalism attorney", "Virginia Code 18.2-137", "Fairfax property damage defense", "D.J. Rivera"],
};

export default function DestructionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Destruction of Property Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-137 • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">The Law: Virginia Code § 18.2-137</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who willfully and maliciously causes damage to any personal or real property, or who causes damage to any property for the purpose of injuring the owner or occupant thereof, shall be guilty of a Class 1 misdemeanor if the damage is less than $1,000; or a Class 6 felony if the damage is $1,000 or more.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>Damage &lt; $1,000: Class 1 misdemeanor</li>
        <li>Damage ≥ $1,000: Class 6 felony</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Lack of malice or intent (accident, recklessness only)</li>
        <li>Value of damage disputed or under $1,000</li>
        <li>Self-defense of property or others</li>
        <li>Insufficient evidence linking you to the damage</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Free Consultation – Protect Your Future
        </Link>
      </div>
    </div>
  );
}
