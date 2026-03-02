import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Drug Possession Lawyer | §18.2-250 Defense",
  description: "Aggressive defense for simple possession, PWID, and Schedule I–VI drug charges in Greater Richmond and Northern Virginia courts. §18.2-250 cases dismissed or reduced.",
  keywords: ["Richmond drug possession lawyer", "Northern Virginia drug attorney", "Virginia Code 18.2-250", "Fairfax marijuana defense", "Chesterfield possession lawyer", "D.J. Rivera"],
};

export default function DrugPossessionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Drug Possession Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-250 • All Schedules • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">The Law: Virginia Code § 18.2-250</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        It is unlawful for any person knowingly or intentionally to possess a controlled substance unless the substance was obtained directly from, or pursuant to, a valid prescription... Upon the prosecution of a person for a violation of this section, ownership or occupancy of premises or vehicle upon or in which a controlled substance was found shall not create a presumption that such person either knowingly or intentionally possessed such controlled substance.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties by Schedule</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>Schedule I/II (cocaine, fentanyl, heroin, meth): Class 5 felony</li>
        <li>Schedule III: Class 1 misdemeanor</li>
        <li>Schedule IV: Class 2 misdemeanor</li>
        <li>Schedule V/VI (including marijuana in many cases): Lower misdemeanor</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies D.J. Rivera Uses</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Illegal search & seizure (4th Amendment motions)</li>
        <li>Lack of knowledge or intent</li>
        <li>Constructive possession challenges</li>
        <li>Lab testing errors or chain of custody issues</li>
        <li>First-offender programs & diversion in Richmond & Northern VA courts</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Schedule Your Free Consultation Now
        </Link>
      </div>
    </div>
  );
}
