import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Campbell v. Commonwealth, Record No. 1443-05-4 (Va. App. 12/19/2006) | Virginia Sexual Assault Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms sexual assault conviction, highlighting consent and evidentiary standards under Va. Code § 18.2-61.",
};

export default function CampbellVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Campbell v. Commonwealth, Record No. 1443-05-4 (Va. App. 12/19/2006)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Sexual Assault Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-61, sexual assault is defined as engaging in sexual intercourse or sexual acts with another person without their consent, through force, intimidation, or when the victim is incapable of consent. The statute requires the prosecution to prove beyond a reasonable doubt that the defendant intentionally committed the act without the victim’s voluntary agreement. Virginia’s sexual assault laws align closely with federal statutes such as 18 U.S.C. § 2241, which criminalizes aggravated sexual abuse, emphasizing the absence of consent and use of force or coercion as critical elements.</p>

      <p>In this case, the defendant was charged with sexual assault following an alleged non-consensual sexual encounter. The prosecution argued that the defendant used force to overcome the victim’s resistance, while the defense contended that the encounter was consensual and that the victim’s testimony was inconsistent. The factual dispute centered on whether the victim had the capacity and willingness to consent, and whether the defendant’s actions met the statutory definition of sexual assault under Virginia law.</p>

      <p>The court upheld the conviction, finding sufficient evidence that the defendant acted without the victim’s consent and employed force or intimidation. The ruling reinforced the importance of evaluating the totality of circumstances when determining consent and clarified evidentiary standards for corroborating victim testimony. This case serves as a significant precedent for Virginia criminal defense by illustrating the rigorous scrutiny courts apply to consent issues in sexual assault prosecutions, guiding defense strategies in challenging the prosecution’s proof of non-consent.</p>

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
