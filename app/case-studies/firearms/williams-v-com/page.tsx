import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Williams v. Com. | Virginia Firearms Offenses Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court confirms constructive possession meets unlawful firearm possession elements under § 18.2-308.",
};

export default function WilliamsVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Williams v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Firearms Offenses</p>
      </div>

      <p>Under Virginia Code § 18.2-308, it is unlawful for certain individuals to possess firearms, including convicted felons and those subject to protective orders. The statute prohibits the possession, transportation, or carrying of firearms by these restricted persons, with the Commonwealth bearing the burden to prove both the defendant's status and possession beyond a reasonable doubt. Virginia's firearms laws align with federal statutes such as 18 U.S.C. § 922(g), which similarly restrict firearm possession by prohibited individuals, emphasizing public safety and crime prevention.</p>

      <p>In this case, the defendant was charged with unlawful possession of a firearm after police discovered a handgun in his vehicle during a traffic stop. The prosecution argued the defendant was a convicted felon, thus prohibited from possessing firearms under Virginia law. The defense contended that the firearm was not in the defendant’s immediate control and challenged the sufficiency of evidence regarding possession, asserting that mere presence near the weapon did not establish unlawful possession.</p>

      <p>The court held that constructive possession suffices to establish unlawful possession under § 18.2-308, emphasizing that control over the area where the firearm is found can meet the possession element. This ruling underscores the importance for defendants to challenge the prosecution’s evidence of possession, particularly in cases involving vehicles or shared spaces. The decision serves as a critical precedent in Virginia, clarifying that possession need not be physical but may be inferred from circumstances, impacting defense strategies in firearms offenses.</p>

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
