import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sutton v. Com. | Virginia Sexual Assault Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court upholds sexual assault conviction, highlighting the legal importance of consent under state law.",
};

export default function SuttonVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Sutton v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Sexual Assault Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-61, sexual assault is defined as engaging in sexual intercourse with another person against their will through force, threat, or incapacitation. The statute requires the prosecution to prove that the defendant intentionally committed the act without the victim's consent. Virginia law aligns with federal statutes such as 18 U.S.C. § 2241, which similarly criminalize sexual acts without consent, emphasizing the protection of bodily autonomy and personal safety. Understanding the elements of sexual assault is critical for defendants to mount an effective defense or negotiate charges.</p>

      <p>In this case, the defendant was charged with sexual assault after an alleged incident where the victim claimed non-consensual intercourse occurred. The prosecution argued that the defendant used force or intimidation to overcome the victim's resistance. Conversely, the defense contended that the encounter was consensual and challenged the credibility of the victim’s testimony. The factual dispute centered on the presence or absence of consent and whether any coercion was involved.</p>

      <p>The court held that the evidence presented was sufficient to establish the absence of consent beyond a reasonable doubt, affirming the conviction. The ruling underscored the importance of evaluating all testimonial and physical evidence in sexual assault cases. This decision reinforces the stringent standards Virginia courts apply to consent and highlights the necessity for defendants to present clear, corroborative evidence when contesting such charges. It serves as a precedent emphasizing the judiciary's commitment to protecting victims while ensuring fair trials.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Sexual Assault Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/sexual-assault" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Sexual Assault Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
