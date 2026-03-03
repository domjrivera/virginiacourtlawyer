import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Lawlor v. Commonwealth | Virginia Sexual Assault Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms sexual assault conviction, highlighting consent and evidence requirements under § 18.2-61.",
};

export default function LawlorVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Lawlor v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Sexual Assault Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-61, sexual assault is defined as engaging in sexual intercourse or sexual acts with another person without their consent, through force, threat, or incapacity. The statute requires proof that the defendant intentionally committed the act without the victim’s voluntary agreement. Virginia’s sexual assault laws align with federal statutes such as 18 U.S.C. § 2241, which criminalize aggravated sexual abuse, emphasizing the absence of consent and use of force. Understanding these elements is crucial for defendants to evaluate the prosecution’s burden and potential defenses.</p>

      <p>In this case, the defendant was charged with sexual assault after an alleged non-consensual encounter. The prosecution argued that the victim did not consent and that the defendant used force to accomplish the act. The defense contended that the encounter was consensual and challenged the credibility of the victim’s testimony. Evidence included witness statements and forensic reports, which the court considered in assessing the facts surrounding the alleged assault.</p>

      <p>The court held that the evidence was sufficient to support a finding of non-consent and upheld the conviction under Virginia Code § 18.2-61. The ruling emphasized the importance of evaluating the totality of circumstances, including victim testimony and corroborating evidence, in sexual assault cases. This case reinforces the high evidentiary standard required for conviction and highlights the critical role of consent in Virginia sexual assault prosecutions, serving as a key precedent for defense strategies in similar cases.</p>

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
