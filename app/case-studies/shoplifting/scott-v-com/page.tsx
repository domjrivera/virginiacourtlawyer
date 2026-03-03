import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Scott v. Com. | Virginia Shoplifting Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court confirms that proving intent is essential for shoplifting convictions under Va. Code § 18.2-103.",
};

export default function ScottVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Scott v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Shoplifting Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-103, shoplifting is defined as the unlawful taking of goods from a merchant with the intent to deprive the owner of their value. The statute prohibits knowingly removing merchandise from a store without paying the full price, and the prosecution must prove intent to steal beyond a reasonable doubt. This offense is classified as a misdemeanor, but repeated violations can lead to felony charges under Virginia law. Federally, similar offenses are addressed under theft statutes, but Virginia’s code specifically targets retail theft to protect local businesses.</p>

      <p>In this case, the defendant was charged with shoplifting after allegedly removing merchandise from a retail store without payment. The prosecution presented evidence including surveillance footage and eyewitness testimony to establish the defendant’s intent to steal. The defense argued that the defendant mistakenly believed the items were free or intended to pay but was distracted. The factual dispute centered on whether the defendant had the requisite criminal intent at the time of taking the goods.</p>

      <p>The court ruled in favor of the prosecution, finding sufficient evidence to prove the defendant’s intent to unlawfully deprive the merchant of the merchandise’s value. The decision emphasized the importance of intent in shoplifting cases and clarified that mistaken belief must be reasonable to negate criminal liability. This ruling underscores the necessity for defendants to present credible evidence challenging intent and serves as a precedent for future cases involving disputed mens rea in retail theft prosecutions in Virginia.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Shoplifting Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/shoplifting" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Shoplifting Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
