import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Raja v. Com. | Virginia Threats and Stalking Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia law criminalizes repeated threatening communications as stalking and threats under §§ 18.2-60 and 18.2-60.3.",
};

export default function RajaVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Raja v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Threats and Stalking Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-60, it is unlawful to make threats to kill, injure, or assault another person, and such threats must be communicated with the intent to intimidate or coerce. The statute requires that the threat be unequivocal, unconditional, and convey a serious intent to cause harm. Additionally, Virginia’s stalking laws under § 18.2-60.3 prohibit a pattern of conduct directed at a person that causes them reasonable fear of death, criminal sexual assault, or bodily injury. These state provisions align with federal statutes such as 18 U.S.C. § 875(c), which criminalizes interstate threats, emphasizing the seriousness of threatening behavior and stalking in protecting victims’ safety and peace of mind.</p>

      <p>In this case, the defendant was charged with making threats and stalking after allegedly sending repeated messages to the victim that contained violent language and implied harm. The prosecution argued that the defendant’s communications were intended to intimidate and caused the victim to fear for their safety. The defense contended that the messages were taken out of context and did not constitute a true threat or stalking behavior under Virginia law. The factual dispute centered on the nature of the communications and the defendant’s intent at the time of sending them.</p>

      <p>The court held that the evidence sufficiently demonstrated that the defendant’s messages constituted threats and stalking under Virginia Code §§ 18.2-60 and 18.2-60.3, emphasizing the importance of the victim’s perception of fear and the defendant’s intent to intimidate. This ruling reinforces that repeated communications conveying threats can meet the statutory criteria for stalking and threats, even absent explicit physical acts. For defendants, this case highlights the critical need to understand how communications may be interpreted as threatening and the legal consequences of such conduct in Virginia.</p>

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
