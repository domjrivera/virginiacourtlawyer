import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Armstrong v. Com. | Virginia Firearms Offenses Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court confirms unlawful firearm possession requires knowing possession by prohibited individuals under § 18.2-308.",
};

export default function ArmstrongVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Armstrong v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Firearms Offenses</p>
      </div>

      <p>Under Virginia Code § 18.2-308, it is unlawful for certain individuals to possess firearms, including those convicted of felonies or subject to protective orders. The statute outlines specific prohibitions and the elements necessary to establish unlawful possession, such as knowing possession and the defendant's status under the law. Virginia's firearm regulations parallel federal laws like 18 U.S.C. § 922(g), which also restrict firearm possession by prohibited persons, emphasizing the serious nature of these offenses and the potential for both state and federal prosecution.</p>

      <p>In this case, the defendant was charged with unlawful possession of a firearm after law enforcement discovered a handgun in his residence. The prosecution argued that the defendant was a convicted felon, thus prohibited from possessing firearms under Virginia law. The defendant contended that he did not knowingly possess the firearm, asserting that it belonged to another individual residing in the home and that he was unaware of its presence.</p>

      <p>The court held that the prosecution met its burden by proving the defendant's knowing possession of the firearm, emphasizing that constructive possession can be established through control over the premises and awareness of the weapon. This ruling underscores the importance of the knowledge element in firearm possession cases and clarifies that defendants cannot avoid liability by claiming ignorance when the firearm is found in their domain. The decision serves as a critical precedent for Virginia defendants, highlighting the need for robust defense strategies addressing possession and knowledge issues.</p>

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
