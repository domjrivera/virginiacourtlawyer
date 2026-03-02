import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Prostitution Lawyer | §18.2-346 Defense",
  description: "Discreet and aggressive defense for prostitution, solicitation, and keeping a bawdy place charges in Richmond, Henrico, Chesterfield, Hanover, Alexandria, Arlington, Fairfax & Prince William.",
  keywords: ["Richmond prostitution lawyer", "Northern Virginia solicitation attorney", "Virginia Code 18.2-346", "Fairfax sex crime defense", "D.J. Rivera"],
};

export default function ProstitutionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Prostitution Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-346 • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">The Law: Virginia Code § 18.2-346</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who, for money or its equivalent, commits adultery, fornication, or any act of sexual intercourse, or engages in oral or anal sex, or any act of sexual gratification involving the sex organs of one person and the mouth or anus of another shall be guilty of prostitution.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>First offense: Class 1 misdemeanor</li>
        <li>Subsequent offenses: Class 6 felony</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Insufficient evidence of money exchange</li>
        <li>Entrapment by law enforcement</li>
        <li>Misidentification or mistaken identity</li>
        <li>Illegal search or sting operation violations</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Confidential Consultation – Protect Your Reputation
        </Link>
      </div>
    </div>
  );
}
