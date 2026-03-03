import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Blankenship v. Commonwealth | Virginia Assault and Battery Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms assault and battery conviction, emphasizing intent and lack of consent under § 18.2-57.",
};

export default function BlankenshipVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Blankenship v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Assault and Battery Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-57, assault and battery is defined as the unlawful application of force to another person, either by physical contact or by an act that places the victim in reasonable apprehension of bodily harm. The statute requires proof that the defendant intentionally or recklessly caused offensive or harmful contact without consent. Virginia law distinguishes between simple assault and assault and battery, with the latter involving actual physical contact. Federal counterparts, such as 18 U.S.C. § 113, similarly criminalize assault and battery but generally apply in federal jurisdictions or specific contexts involving federal interests.</p>

      <p>In this case, the defendant was charged with assault and battery following an altercation in which the prosecution alleged that he struck the victim without provocation. The defendant contended that the contact was accidental and occurred during a mutual physical confrontation initiated by the victim. Evidence included witness testimony and medical reports documenting minor injuries consistent with the alleged battery. The defense argued lack of intent and disputed the characterization of the contact as unlawful under the statute.</p>

      <p>The court held that the evidence was sufficient to establish the defendant’s intentional application of force, affirming the conviction under Virginia Code § 18.2-57. The ruling emphasized the importance of intent and the victim’s lack of consent in sustaining an assault and battery charge. This case underscores the necessity for defendants to challenge the prosecution’s proof of unlawful contact and intent, providing a critical precedent for defending against similar charges in Virginia courts. It clarifies that even minor physical contact can constitute assault and battery if proven intentional and non-consensual.</p>

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
