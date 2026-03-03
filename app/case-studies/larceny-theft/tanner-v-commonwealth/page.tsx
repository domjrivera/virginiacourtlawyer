import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Tanner v. Commonwealth, Record No. 2672-08-4 (Va. App. 1/19/2010) | Virginia Larceny and Theft Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms larceny conviction where concealment and leaving without paying prove criminal intent.",
};

export default function TannerVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Tanner v. Commonwealth, Record No. 2672-08-4 (Va. App. 1/19/2010)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Larceny and Theft Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-95, larceny is defined as the unlawful taking and carrying away of someone else's personal property with the intent to permanently deprive the owner of it. The statute requires proof of the defendant’s intent to steal and the actual taking of property without consent. Virginia law distinguishes between petit larceny and grand larceny based on the value of the property taken, with grand larceny involving property valued over $1,000. These elements align with federal theft statutes, which similarly require proof of intent and unauthorized taking to establish criminal liability.</p>

      <p>In this case, the defendant was charged with larceny after allegedly taking merchandise from a retail store without paying. The prosecution presented evidence that the defendant concealed items and exited the store, arguing this demonstrated intent to permanently deprive the owner of the goods. The defendant contended that the items were mistakenly taken or intended to be paid for later, challenging the prosecution’s assertion of criminal intent. The factual dispute centered on whether the defendant’s actions met the threshold for larceny under Virginia law.</p>

      <p>The court held that the evidence was sufficient to support a conviction for larceny, emphasizing that concealment of merchandise and departure from the store without payment constituted intent to steal. The ruling clarified that circumstantial evidence, such as behavior indicating an intent to permanently deprive, can satisfy the intent element required by § 18.2-95. This case underscores the importance for defendants to address the element of intent in larceny charges and highlights how courts may interpret actions like concealment and exit without payment as indicative of criminal intent in Virginia.</p>

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
