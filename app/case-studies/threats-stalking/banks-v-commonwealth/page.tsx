import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Banks v. Commonwealth | Virginia Threats and Stalking Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia courts uphold stalking convictions when repeated contact and threats cause reasonable fear.",
};

export default function BanksVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Banks v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Threats and Stalking Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-60, it is unlawful to threaten bodily harm or to engage in stalking, which includes repeated and unwanted contact or conduct causing fear of harm. The statute requires the prosecution to prove that the defendant intentionally threatened another person or engaged in a pattern of behavior that placed the victim in reasonable fear of death, criminal sexual assault, or bodily injury. These offenses are designed to protect individuals from harassment and intimidation, and they parallel federal laws such as the Violence Against Women Act, which addresses stalking and threats across state lines. Understanding these elements is crucial for defendants to mount an effective defense against charges of threats or stalking in Virginia courts.</p>

      <p>In this case, the defendant was charged with making threats and stalking a former acquaintance. The prosecution alleged that the defendant repeatedly contacted the victim despite clear requests to cease communication, culminating in statements perceived as threatening physical harm. The defendant argued that the communications were not intended to threaten but were attempts to reconcile or clarify misunderstandings. The factual dispute centered on whether the defendant’s conduct met the statutory threshold for causing reasonable fear in the victim.</p>

      <p>The court held that the evidence was sufficient to support a conviction under Virginia Code § 18.2-60, emphasizing that the pattern of repeated contact combined with threatening language satisfied the elements of stalking and threats. The ruling underscored the importance of the victim’s reasonable perception of fear rather than the defendant’s subjective intent. This case serves as a significant precedent for Virginia criminal defense by clarifying how courts assess the totality of circumstances in stalking and threat cases, highlighting the need for defendants to carefully consider their communications and behavior.</p>

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
