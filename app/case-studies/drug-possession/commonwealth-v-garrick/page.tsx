import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Commonwealth v. Garrick | Virginia Drug Possession Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia drug possession convictions require proof of knowing control; mere proximity is insufficient under § 18.2-250.",
};

export default function CommonwealthVGarrickCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Commonwealth v. Garrick</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Drug Possession Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-250, it is unlawful for any person to possess a controlled substance unless obtained through a valid prescription or authorized by law. The statute defines possession as having actual or constructive control over the drug, and the prosecution must prove beyond a reasonable doubt that the defendant knowingly and intentionally possessed the substance. Virginia’s drug possession laws align with federal counterparts under the Controlled Substances Act, which similarly criminalizes unauthorized possession of narcotics and other controlled substances. Understanding these elements is critical for defendants to challenge the sufficiency of evidence or the legality of the search and seizure that led to the charge.</p>

      <p>In this case, the defendant was charged with possession of a controlled substance after police discovered illegal drugs during a vehicle search. The prosecution alleged that the defendant knowingly possessed the drugs found in the car, while the defense argued that the defendant lacked knowledge and control over the substances, asserting that they belonged to another occupant. The factual dispute centered on whether the defendant had constructive possession and whether the search complied with constitutional requirements.</p>

      <p>The court held that the evidence was insufficient to prove the defendant’s knowing possession beyond a reasonable doubt, emphasizing the necessity of establishing control and awareness of the drugs. The ruling underscored the importance of challenging the prosecution’s evidence on possession and the circumstances of the search. This decision serves as a significant precedent for Virginia defendants, highlighting that mere proximity to contraband is not enough for conviction and reinforcing protections against unlawful searches and seizures in drug possession cases.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Drug Possession Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/drug-possession" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Drug Possession Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
