import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "McGowan v. Commonwealth | Virginia Assault and Battery Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia assault and battery law requires intentional unlawful contact; this case clarifies evidentiary standards and defenses.",
};

export default function McgowanVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">McGowan v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Assault and Battery Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-57, assault and battery is defined as the willful and unlawful touching or striking of another person against their will. The statute requires proof that the defendant intentionally caused bodily harm or offensive physical contact. This offense is a misdemeanor in Virginia, distinct from aggravated assault which involves serious bodily injury or use of a deadly weapon. Federal assault statutes, such as 18 U.S.C. § 113, similarly criminalize unlawful physical contact but often apply in different jurisdictional contexts. Understanding these elements is crucial for defendants to challenge the sufficiency of the prosecution's evidence or assert lawful justification.</p>

      <p>In this case, the defendant was charged with assault and battery following an altercation at a public event where the prosecution alleged the defendant struck the victim without provocation. The defendant contended that the contact was accidental and denied any intent to harm, arguing self-defense in response to the victim’s aggressive behavior. Witness testimony conflicted on whether the defendant’s actions were intentional or defensive, creating a factual dispute for the court to resolve. The prosecution relied on eyewitness accounts and medical reports indicating minor injuries consistent with battery.</p>

      <p>The court held that the evidence was sufficient to support a conviction for assault and battery, emphasizing that intentional unlawful contact need not cause serious injury to constitute the offense. The ruling clarified that even minimal physical contact, if willful and offensive, satisfies the statutory elements under Virginia law. This decision reinforces the prosecution’s burden to prove intent but affirms that defendants cannot avoid liability by claiming triviality of contact. For criminal defense practitioners, the case underscores the importance of challenging intent and presenting credible justification or accident defenses in assault and battery charges.</p>

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
