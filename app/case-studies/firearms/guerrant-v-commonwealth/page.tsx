import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Guerrant v. Commonwealth | Virginia Firearms Offenses Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms unlawful firearm possession conviction, clarifying possession standards under Va. Code § 18.2-308.",
};

export default function GuerrantVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Guerrant v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Firearms Offenses</p>
      </div>

      <p>Under Virginia Code § 18.2-308, it is unlawful for certain individuals to possess firearms, including those convicted of felonies or subject to specific restraining orders. The statute outlines the elements of unlawful possession, requiring proof that the defendant knowingly possessed a firearm while prohibited by law. This state law aligns with federal statutes such as 18 U.S.C. § 922(g), which similarly restrict firearm possession by convicted felons and other disqualified persons. Understanding these provisions is crucial for defendants facing firearms charges in Virginia, as violations carry significant criminal penalties.</p>

      <p>In this case, the defendant was charged with unlawful possession of a firearm after authorities discovered a handgun in his possession despite a prior felony conviction. The prosecution argued that the defendant knowingly possessed the firearm in violation of Virginia law. The defense contended that the defendant did not have actual possession or knowledge of the firearm, challenging the sufficiency of the evidence supporting the possession element. The factual dispute centered on whether the defendant exercised control or awareness over the firearm found.</p>

      <p>The court held that the evidence was sufficient to establish the defendant's knowing possession of the firearm, affirming the conviction under Virginia Code § 18.2-308. The ruling emphasized that constructive possession, where the defendant has dominion and control over the firearm even if not physically holding it, satisfies the possession element. This decision reinforces the broad interpretation of possession in Virginia firearms cases, underscoring the importance for defendants to challenge both actual and constructive possession claims. The case serves as a critical precedent for defense strategies in unlawful firearm possession prosecutions.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Firearms Offenses charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/firearms" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Firearms Offenses Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
