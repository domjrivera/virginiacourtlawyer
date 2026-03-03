import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Manning v. Commonwealth | Virginia Larceny and Theft Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia larceny law requires proof of intent to steal; concealment and nonpayment can establish this intent.",
};

export default function ManningVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Manning v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Larceny and Theft Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-95, larceny is defined as the unlawful taking, carrying away, or withholding of another's personal property with the intent to permanently deprive the owner of it. The statute requires proof of the defendant's intent to steal and the actual taking of property without consent. Virginia law distinguishes larceny from related offenses such as embezzlement and robbery, and its elements align closely with federal theft statutes, which similarly criminalize the unauthorized appropriation of property. Understanding these elements is critical for defendants to challenge the sufficiency of the evidence or the intent requirement in larceny prosecutions.</p>

      <p>In this case, the defendant was charged with larceny after allegedly taking merchandise from a retail store without payment. The prosecution argued that the defendant intentionally concealed items and exited the store, demonstrating the requisite intent to steal. The defense contended that the defendant had no intent to permanently deprive the store of the property, asserting that the items were mistakenly taken or intended to be paid for later. The factual dispute centered on whether the defendant's actions met the statutory criteria for larceny under Virginia law.</p>

      <p>The court held that the evidence was sufficient to establish the defendant's intent to permanently deprive the owner of the property, affirming the larceny conviction. The ruling emphasized that intent can be inferred from the circumstances, such as concealment and failure to pay. This case underscores the importance of the prosecution's burden to prove intent beyond a reasonable doubt and highlights that defendants must present credible evidence to rebut such inferences. For Virginia criminal defense, this decision reinforces the need to scrutinize the factual basis for intent in theft cases and to challenge assumptions drawn from conduct alone.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Larceny and Theft Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/larceny-theft" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Larceny and Theft Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
