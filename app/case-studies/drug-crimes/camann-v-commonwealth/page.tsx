import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Camann v. Commonwealth | Virginia Drug Possession Defense Lawyer – D.J. Rivera, Esq.",
  description: "This case clarifies Virginia drug possession law, emphasizing knowledge and control over contraband.",
};

export default function CamannVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Camann v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Drug Possession Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-250, it is unlawful for any person to possess controlled substances unless authorized by law. The statute prohibits the possession of narcotics, including cocaine and heroin, and requires the Commonwealth to prove beyond a reasonable doubt that the defendant knowingly and intentionally possessed the drug. Virginia’s drug possession laws align with federal statutes such as 21 U.S.C. § 844, which similarly criminalize possession without a prescription or lawful authority. These laws aim to deter illicit drug use and trafficking by imposing criminal penalties on unauthorized possession.</p>

      <p>In this case, the defendant was charged with possession of a controlled substance after police discovered narcotics during a lawful search of his vehicle. The prosecution alleged that the defendant knowingly possessed the drugs found in the car’s glove compartment. The defense argued that the defendant lacked knowledge of the drugs’ presence and therefore did not possess them knowingly. The factual dispute centered on whether the defendant had constructive possession or was merely unaware of the contraband.</p>

      <p>The court held that the evidence was sufficient to establish the defendant’s knowing possession based on his control over the vehicle and the location of the drugs. The ruling emphasized that constructive possession can be inferred when a defendant has dominion and control over the area where the drugs are found. This case underscores the importance of challenging the element of knowledge in drug possession charges and clarifies that mere presence near contraband is insufficient for conviction. It serves as a critical precedent for defendants asserting lack of knowledge in similar possession cases under Virginia law.</p>

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
