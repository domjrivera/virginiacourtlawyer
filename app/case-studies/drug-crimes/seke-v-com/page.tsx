import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Seke v. Com. | Virginia Drug Distribution Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms drug distribution conviction, emphasizing evidence reliability and defense strategies.",
};

export default function SekeVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Seke v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Drug Distribution Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-248, the distribution of controlled substances is prohibited and constitutes a felony offense. The statute criminalizes the manufacture, sale, or distribution of illegal drugs, requiring the prosecution to prove that the defendant knowingly and intentionally distributed a controlled substance without legal authorization. This statute aligns with federal drug laws, such as 21 U.S.C. § 841, which similarly regulate the distribution of controlled substances and impose severe penalties for violations. Understanding the elements of distribution offenses is critical for defendants to mount an effective defense or negotiate plea agreements.</p>

      <p>In this case, the defendant was charged with distributing a controlled substance after law enforcement conducted a controlled buy operation. The prosecution alleged that the defendant knowingly sold illegal drugs to an undercover officer, presenting evidence including surveillance footage and witness testimony. The defense argued that the defendant was not the individual who completed the transaction and challenged the credibility of the prosecution's witnesses. The factual dispute centered on the identity of the distributor and the circumstances surrounding the alleged sale.</p>

      <p>The court held that the evidence was sufficient to establish the defendant's guilt beyond a reasonable doubt, emphasizing the reliability of the undercover operation and corroborating testimony. The ruling reaffirmed the standard that circumstantial evidence, when credible and consistent, can support a conviction for drug distribution under Virginia law. This case underscores the importance of challenging the prosecution's evidence and highlights the potential consequences of controlled buy operations. For defendants facing similar charges, it illustrates the necessity of scrutinizing law enforcement procedures and witness credibility in building a defense.</p>

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
