import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Parker v. Com. | Virginia Threats and Stalking Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia law prohibits threats and stalking that cause reasonable fear; this case clarifies key elements for defense.",
};

export default function ParkerVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Parker v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Threats and Stalking Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-60, it is unlawful to make threats to commit bodily harm or to engage in stalking behavior that causes a reasonable fear of harm or emotional distress. The statute defines stalking as a course of conduct directed at a specific person that would cause a reasonable person to feel terrorized, frightened, or intimidated. These offenses carry serious penalties and are designed to protect individuals from harassment and threats to their safety. Federal laws, such as 18 U.S.C. § 2261A, similarly criminalize stalking and threats, providing a parallel framework for prosecuting such conduct.</p>

      <p>In this case, the defendant was charged with making threats and stalking after allegedly engaging in repeated unwanted contact and threatening communications toward the victim. The prosecution argued that the defendant's behavior caused the victim to fear for their safety, meeting the statutory elements of stalking and threats. The defense contended that the communications were not intended as threats and that the defendant’s actions did not constitute a course of conduct sufficient to support the charges.</p>

      <p>The court held that the evidence demonstrated a pattern of conduct that reasonably caused fear in the victim, satisfying the elements of stalking and threats under Virginia law. The ruling emphasized the importance of the victim’s perception and the context of the defendant’s actions in determining whether the statute applies. This case underscores the need for defendants to understand how repeated communications can be construed as threatening or stalking behavior, impacting the defense strategy in similar cases.</p>

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
