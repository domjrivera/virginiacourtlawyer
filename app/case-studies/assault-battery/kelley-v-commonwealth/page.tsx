import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Kelley v. Commonwealth | Virginia Assault and Battery Defense Lawyer – D.J. Rivera, Esq.",
  description: "Kelley v. Commonwealth clarifies intent requirements for assault and battery convictions in Virginia.",
};

export default function KelleyVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Kelley v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Assault and Battery Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-57, assault and battery is defined as the willful and unlawful touching or striking of another person against their will. The statute criminalizes both the attempt and completion of such acts, requiring proof that the defendant intentionally caused bodily harm or offensive contact. Assault and battery charges in Virginia can range from misdemeanors to felonies depending on the severity of injury and circumstances, paralleling federal assault statutes such as 18 U.S.C. § 113. Understanding the elements—intent, unlawful touching, and lack of consent—is crucial for defendants navigating these charges.</p>

      <p>In this case, the defendant was charged with assault and battery following an altercation where the prosecution alleged that the defendant struck the victim without provocation. The defendant contended that the contact was accidental and denied any intent to harm, arguing that the physical interaction was incidental during a crowded event. The Commonwealth presented witness testimony and medical evidence to establish that the defendant’s actions were deliberate and caused injury to the victim.</p>

      <p>The court held that the evidence sufficiently demonstrated the defendant’s intentional and unlawful touching, affirming the assault and battery conviction. The ruling emphasized the necessity of proving intent beyond mere contact, clarifying that accidental or incidental contact does not meet the statutory threshold. This case underscores the importance of challenging the element of intent in assault and battery prosecutions and serves as a precedent for evaluating the sufficiency of evidence in similar Virginia cases.</p>

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
