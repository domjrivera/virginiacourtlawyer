import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Garland v. Com. | Virginia Larceny and Theft Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms larceny conviction, emphasizing proof of intent through conduct like concealment.",
};

export default function GarlandVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Garland v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Larceny and Theft Defense</p>
      </div>

      <p>Under Virginia law, larceny is governed primarily by Virginia Code § 18.2-95, which prohibits the unlawful taking of another's property with the intent to permanently deprive the owner of it. The statute requires proof of the taking and carrying away of personal property without consent and with criminal intent. Larceny offenses vary in degree based on the value of the property stolen, with higher penalties for thefts exceeding certain thresholds. These provisions align with federal theft statutes, such as 18 U.S.C. § 641, which criminalize the theft of government property but differ in scope and application.</p>

      <p>In this case, the defendant was charged with larceny after allegedly taking merchandise from a retail establishment without payment. The prosecution argued that the defendant intentionally concealed items and exited the store to deprive the owner permanently of the goods. The defense contended that the defendant lacked intent to steal, asserting that the items were mistakenly taken or intended to be paid for later. The factual dispute centered on the defendant's state of mind and the circumstances surrounding the alleged taking.</p>

      <p>The court held that the evidence was sufficient to establish the defendant's intent to steal, affirming the larceny conviction. The ruling emphasized that intent can be inferred from conduct, such as concealment and departure from the premises without payment. This case underscores the importance of the prosecution's burden to prove criminal intent beyond a reasonable doubt and highlights the challenges defendants face in disputing intent in theft cases. The decision serves as a critical precedent for Virginia criminal defense attorneys in advising clients and formulating defense strategies in larceny prosecutions.</p>

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
