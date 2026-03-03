import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Kelly v. Commonwealth of Virginia | Virginia Drug Possession Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia law requires proof of knowing possession for drug charges; mere presence is insufficient for conviction.",
};

export default function KellyVCommonwealthOfVirginiaCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Kelly v. Commonwealth of Virginia</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Drug Possession Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-250, it is unlawful for any person to possess a controlled substance unless obtained through a valid prescription or authorized by law. The statute prohibits possession of illegal drugs and outlines the elements requiring proof that the defendant knowingly and intentionally possessed the substance. Virginia's drug possession laws align with federal statutes such as 21 U.S.C. § 844, which criminalizes possession of controlled substances without lawful authority. Understanding these elements is crucial for defendants to challenge the prosecution's evidence effectively.</p>

      <p>In this case, the defendant was charged with possession of a controlled substance after law enforcement discovered illegal drugs during a vehicle search. The prosecution alleged that the defendant knowingly possessed the drugs found in the vehicle, while the defense argued that the defendant lacked knowledge of the presence of the substances and did not exercise control over them. The factual dispute centered on whether the defendant had constructive possession or was merely present at the scene.</p>

      <p>The court held that mere presence near contraband is insufficient for conviction; the prosecution must prove knowing and intentional possession. The ruling emphasized the necessity of establishing control or dominion over the drugs to satisfy the possession element. This decision reinforces protections for defendants by requiring the Commonwealth to present clear evidence of possession, thereby influencing how possession charges are litigated in Virginia and guiding defense strategies in similar cases.</p>

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
