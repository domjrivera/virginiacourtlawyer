import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Conley v. Commonwealth | Virginia Sexual Assault Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia sexual assault case underscores the importance of clear consent and evidentiary standards in defense.",
};

export default function ConleyVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Conley v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Sexual Assault Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-61, sexual assault is defined as sexual intercourse or sexual penetration against the will of the victim or with a victim incapable of consent. The statute criminalizes acts committed through force, threat, or when the victim is incapacitated. To secure a conviction, the Commonwealth must prove beyond a reasonable doubt that the defendant engaged in sexual acts without consent. Virginia’s sexual assault laws parallel federal statutes such as 18 U.S.C. § 2241, which also criminalize non-consensual sexual acts, emphasizing the protection of bodily autonomy and consent.</p>

      <p>In this case, the defendant was charged with sexual assault after an alleged non-consensual encounter. The prosecution presented evidence that the victim did not consent to the sexual act and that the defendant used force or intimidation. The defense argued that the encounter was consensual and challenged the credibility of the victim’s testimony. The factual dispute centered on the presence or absence of consent and whether the defendant’s actions met the statutory definition of sexual assault under Virginia law.</p>

      <p>The court held that the evidence was sufficient to support a conviction, emphasizing the victim’s testimony and corroborating facts indicating lack of consent. The ruling reinforced the principle that consent must be clear and voluntary, and that the absence of consent can be established through credible witness accounts and circumstances surrounding the incident. This case is significant for Virginia criminal defense as it highlights the critical role of consent in sexual assault prosecutions and the evidentiary standards required to defend against such charges effectively.</p>

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
