import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Hulcher v. Com. | Virginia Shoplifting Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia shoplifting law requires intent to deprive; concealment and exit without payment support conviction.",
};

export default function HulcherVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Hulcher v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Shoplifting Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-103, shoplifting is defined as the unlawful taking of goods from a mercantile establishment with the intent to deprive the owner of their value. The statute prohibits knowingly obtaining or exerting unauthorized control over merchandise while intending to permanently or temporarily deprive the merchant of possession. To prove shoplifting, the prosecution must establish the defendant’s intent and the unauthorized taking or control of property. This state law aligns with federal statutes addressing theft and property crimes, emphasizing the protection of commercial property rights.</p>

      <p>In this case, the defendant was charged with shoplifting after allegedly removing merchandise from a retail store without payment. The prosecution presented evidence that the defendant concealed items and exited the store, arguing this demonstrated intent to steal. The defendant contended that the items were mistakenly taken or intended to be paid for later, challenging the prosecution’s assertion of criminal intent. The factual dispute centered on whether the defendant knowingly and intentionally deprived the store of its property.</p>

      <p>The court held that the evidence was sufficient to establish the defendant’s intent to steal, affirming the conviction under § 18.2-103. The ruling emphasized that concealment of merchandise and exit from the store without payment can support an inference of intent to deprive the owner. This case underscores the importance of intent in shoplifting prosecutions and clarifies that defendants must present credible evidence to rebut such inferences. For Virginia defendants, the decision highlights the critical role of intent and the potential consequences of actions perceived as theft.</p>

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
