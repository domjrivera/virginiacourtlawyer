import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Spear v. Com. | Virginia Drug Distribution Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms drug distribution conviction, highlighting evidence required to prove intent under Va. Code § 18.2-248.",
};

export default function SpearVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Spear v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Drug Distribution Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-248, the distribution of controlled substances is prohibited and constitutes a felony offense. The statute criminalizes knowingly or intentionally delivering, selling, or distributing any controlled substance, including Schedule I and II drugs, without proper authorization. To secure a conviction, the prosecution must prove the defendant's knowledge and intent to distribute the substance. This state law aligns with federal drug distribution statutes, such as 21 U.S.C. § 841, which similarly penalize the unlawful distribution of controlled substances, reflecting a coordinated effort to combat drug trafficking at both state and federal levels.</p>

      <p>In this case, the defendant was charged with distributing a controlled substance after law enforcement officers conducted a controlled buy. The prosecution alleged that the defendant knowingly sold narcotics to an undercover officer, presenting evidence including surveillance footage and witness testimony. The defense argued that the transaction was not a sale but a personal exchange and challenged the credibility of the prosecution's witnesses. The factual dispute centered on whether the defendant had the requisite intent to distribute or merely possessed the substance for personal use.</p>

      <p>The court held that the evidence sufficiently demonstrated the defendant's intent to distribute, affirming the conviction under Virginia Code § 18.2-248. The ruling emphasized the importance of corroborating evidence, such as surveillance and witness accounts, in establishing intent beyond a reasonable doubt. This case underscores the necessity for defendants to rigorously contest the prosecution's evidence and intent element in drug distribution charges. Its precedential value lies in clarifying evidentiary standards and reinforcing prosecutorial burdens, thereby guiding defense strategies in similar Virginia drug distribution cases.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Drug Distribution Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/drug-distribution" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Drug Distribution Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
