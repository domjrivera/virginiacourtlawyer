import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Keyes v. Com. | Virginia Threats and Stalking Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia law criminalizes threats and stalking when repeated conduct causes reasonable fear of harm.",
};

export default function KeyesVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Keyes v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Threats and Stalking Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-60, it is unlawful to threaten another person with bodily harm or to engage in stalking behavior that causes the victim to fear for their safety. The statute defines threats as intentional acts that place another in reasonable apprehension of death or bodily injury. Stalking, codified under § 18.2-60.3, involves a pattern of conduct directed at a specific person that would cause a reasonable person to feel terrorized, frightened, or intimidated. These laws aim to protect individuals from harassment and threats, with federal counterparts found in statutes addressing interstate stalking and threats, such as 18 U.S.C. § 2261A, which criminalizes stalking across state lines or involving interstate commerce.</p>

      <p>In this case, the defendant was charged with making threats and engaging in stalking behavior against the alleged victim. The prosecution presented evidence that the defendant sent repeated messages and made statements that caused the victim to fear for their safety. The defendant argued that the communications were not intended as threats and that there was no pattern of conduct amounting to stalking. The prosecution countered by emphasizing the cumulative effect of the defendant’s actions and the victim’s reasonable perception of fear.</p>

      <p>The court held that the defendant’s conduct met the statutory definitions of both threats and stalking under Virginia law. It reasoned that the repeated communications and the victim’s credible fear satisfied the elements required for conviction. This ruling underscores the importance of the victim’s perspective in threat and stalking cases and affirms that a pattern of conduct, even if individually ambiguous, can constitute criminal behavior. For defendants, this case highlights the need to understand how repeated actions may be legally interpreted as threatening or stalking, impacting defense strategies in similar cases.</p>

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
