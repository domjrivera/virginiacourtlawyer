import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Green v. Commonwealth | Virginia Assault and Battery Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court upholds assault and battery conviction, emphasizing intent and unlawful contact under Va. Code § 18.2-57.",
};

export default function GreenVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Green v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Assault and Battery Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-57, assault and battery is defined as the willful and unlawful touching or striking of another person against their will. The statute requires proof that the defendant intentionally caused bodily harm or offensive physical contact. Assault and battery in Virginia is a misdemeanor offense, punishable by fines and potential jail time. Federal law similarly prohibits assault under 18 U.S.C. § 113, but Virginia’s statute governs state-level prosecutions and emphasizes the non-consensual nature of the contact.</p>

      <p>In this case, the defendant was charged with assault and battery after an altercation at a public event where the prosecution alleged the defendant struck the victim without provocation. The defendant argued that the contact was accidental and occurred during a crowded situation, denying any intent to harm. Witness testimony and video evidence were presented, with the prosecution asserting that the defendant’s actions were deliberate and unprovoked, constituting a clear violation of the statute.</p>

      <p>The court held that the evidence sufficiently demonstrated the defendant’s intentional and unlawful contact with the victim, affirming the conviction under Virginia Code § 18.2-57. The ruling underscores the importance of intent and non-consensual contact in assault and battery cases, reinforcing that accidental contact in crowded settings may not absolve liability if intent is proven. This case serves as a critical precedent for defense attorneys to carefully evaluate the context and intent behind physical contact in similar misdemeanor assault charges.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Assault and Battery Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/assault-battery" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Assault and Battery Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
