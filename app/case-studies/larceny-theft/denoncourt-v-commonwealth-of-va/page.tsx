import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Denoncourt v. Commonwealth Of Va. | Virginia Larceny and Theft Defense Lawyer – D.J. Rivera, Esq.",
  description: "This case clarifies the importance of intent in Virginia larceny charges and defense strategies.",
};

export default function DenoncourtVCommonwealthOfVaCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Denoncourt v. Commonwealth Of Va.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Larceny and Theft Defense</p>
      </div>

      <p>Under Virginia law, larceny is governed by Virginia Code § 18.2-95, which prohibits the unlawful taking of another person's property with the intent to permanently deprive them of it. The offense requires proof that the defendant knowingly took and carried away property without the owner's consent. Virginia's larceny statutes align closely with federal theft laws, such as those found in 18 U.S.C. § 641, which criminalize theft of government property, though state law typically addresses personal property theft within its jurisdiction. Understanding the elements of larceny is critical for defendants to mount an effective defense, particularly regarding intent and consent.</p>

      <p>In this case, the defendant was charged with larceny after allegedly taking property from a retail establishment without payment. The prosecution argued that the defendant intentionally concealed merchandise with the intent to steal, citing surveillance footage and witness testimony. Conversely, the defense contended that the defendant lacked the requisite intent to permanently deprive the owner, suggesting that the actions were accidental or misunderstood. The factual dispute centered on whether the defendant knowingly intended to commit theft or whether the circumstances indicated a lack of criminal intent.</p>

      <p>The court held that the evidence sufficiently demonstrated the defendant's intent to commit larceny under Virginia Code § 18.2-95, affirming the conviction. The ruling emphasized that intent can be inferred from conduct, such as concealing merchandise and attempting to leave without payment. This case underscores the importance of intent in larceny prosecutions and illustrates that circumstantial evidence can satisfy this element. For defendants, the decision highlights the necessity of challenging the prosecution's proof of intent and the value of presenting alternative explanations for the alleged conduct.</p>

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
