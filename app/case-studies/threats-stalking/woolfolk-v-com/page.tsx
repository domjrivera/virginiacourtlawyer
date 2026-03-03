import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Woolfolk v. Com. | Virginia Threats and Stalking Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court confirms that threats and repeated conduct causing fear constitute stalking under § 18.2-60.",
};

export default function WoolfolkVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Woolfolk v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Threats and Stalking Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-60, it is unlawful to threaten bodily harm or commit acts of stalking against another person. The statute prohibits knowingly and willfully making threats or engaging in a course of conduct that places a person in reasonable fear of death, criminal sexual assault, or bodily injury. Elements include the defendant’s intent, the nature of the threat or conduct, and the victim’s reasonable fear. These provisions align with federal laws addressing interstate stalking and threats, emphasizing protection from harassment and intimidation.</p>

      <p>In this case, the defendant was charged with making repeated threats and engaging in stalking behavior toward the victim. The prosecution alleged that the defendant sent threatening messages and followed the victim, causing significant fear and distress. The defense argued that the communications were not intended as threats and that the defendant’s actions did not constitute a course of conduct sufficient to meet the statutory definition of stalking under Virginia law.</p>

      <p>The court held that the evidence supported the conclusion that the defendant’s actions constituted both threats and stalking as defined by Virginia Code § 18.2-60. The ruling emphasized the importance of the victim’s reasonable perception of fear and the defendant’s intent to cause such fear. This case reinforces the protections available to victims and underscores the necessity for defendants to understand the serious consequences of threatening or harassing conduct under Virginia law.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Threats and Stalking Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/threats-stalking" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Threats and Stalking Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
