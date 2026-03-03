import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Saunders v. Commonwealth | Virginia Firearms Offenses Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms conviction for unlawful firearm possession, highlighting knowledge element in defense.",
};

export default function SaundersVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Saunders v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Firearms Offenses</p>
      </div>

      <p>Under Virginia Code § 18.2-308, it is unlawful for certain individuals to possess firearms, including those convicted of felonies or subject to protective orders. The statute outlines specific prohibitions and the elements necessary to prove unlawful possession, such as knowing possession and the defendant’s disqualifying status. This law aligns with federal counterparts like 18 U.S.C. § 922(g), which similarly restrict firearm possession by prohibited persons to enhance public safety and reduce gun violence.</p>

      <p>In this case, the defendant was charged with unlawful possession of a firearm after law enforcement discovered a handgun during a search. The prosecution alleged the defendant was prohibited from possessing firearms due to a prior felony conviction. The defense argued that the defendant did not knowingly possess the weapon and challenged the sufficiency of the evidence regarding the defendant’s awareness and control over the firearm.</p>

      <p>The court held that the evidence was sufficient to establish the defendant’s knowing possession of the firearm, affirming the conviction under Virginia Code § 18.2-308. The ruling emphasized the importance of proving the defendant’s awareness and control over the weapon, clarifying the burden of proof in unlawful possession cases. This decision reinforces the necessity for defense attorneys to rigorously examine the knowledge element in firearm possession charges, impacting how similar cases are litigated in Virginia.</p>

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
