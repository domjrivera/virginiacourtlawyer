import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Poole v. Commonwealth | Virginia Sexual Assault Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court emphasizes proof of non-consent in sexual assault, highlighting defense strategies.",
};

export default function PooleVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Poole v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Sexual Assault Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-61, sexual assault is defined as engaging in sexual intercourse or sexual acts with another person without their consent, or through the use of force, threat, or incapacitation. The statute requires the prosecution to prove beyond a reasonable doubt that the defendant intentionally committed the act without the victim's voluntary agreement. Virginia law aligns with federal statutes such as 18 U.S.C. § 2241, which criminalizes aggravated sexual abuse, emphasizing the protection of bodily autonomy and consent. Understanding these elements is crucial for defendants to assess the nature of the charges and potential defenses.</p>

      <p>In this case, the defendant was charged with sexual assault following an incident where the alleged victim claimed non-consensual sexual contact. The prosecution argued that the defendant used force to overcome the victim’s resistance, while the defense contended that the encounter was consensual and challenged the credibility of the victim’s testimony. Evidence included witness statements and forensic reports, which the defense scrutinized to create reasonable doubt regarding the element of consent.</p>

      <p>The court held that the evidence presented was insufficient to prove beyond a reasonable doubt that the defendant lacked consent, emphasizing the necessity of clear and convincing proof of non-consent under Virginia law. This ruling underscores the importance of evaluating all evidence critically and affirms that mere allegations without corroborative proof may not satisfy the burden of proof. For defendants facing similar charges, this case highlights the potential to challenge consent-related elements and the critical role of thorough legal representation.</p>

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
