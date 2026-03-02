import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Disorderly Conduct Lawyer | §18.2-415 Defense",
  description: "Strong defense for disorderly conduct, public intoxication, and fighting charges in Greater Richmond and Northern Virginia courts.",
  keywords: ["Richmond disorderly conduct lawyer", "Northern Virginia public intoxication attorney", "Virginia Code 18.2-415", "Fairfax disorderly conduct defense", "D.J. Rivera"],
};

export default function DisorderlyConductPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Disorderly Conduct Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-415 • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">The Law: Virginia Code § 18.2-415</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        A person is guilty of disorderly conduct if, with the intent to cause public inconvenience, annoyance, or alarm, or recklessly creating a risk thereof, he engages in fighting or threatening, or in violent or tumultuous behavior, or makes unreasonable noise, or uses abusive language.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>Class 1 misdemeanor (up to 12 months jail + $2,500 fine)</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Protected speech (First Amendment)</li>
        <li>No public inconvenience or alarm caused</li>
        <li>Insufficient evidence of intent or recklessness</li>
        <li>Police overreach or false report</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Free Consultation – Clear Your Record
        </Link>
      </div>
    </div>
  );
}
