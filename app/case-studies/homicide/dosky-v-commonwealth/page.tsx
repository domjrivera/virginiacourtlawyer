import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Dosky v. Commonwealth | Virginia Homicide Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms second-degree murder conviction, clarifying intent requirements under state homicide law.",
};

export default function DoskyVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Dosky v. Commonwealth</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Homicide Defense</p>
      </div>

      <p>Under Virginia law, homicide offenses are governed primarily by Virginia Code §§ 18.2-32 through 18.2-36, which define and differentiate between first-degree murder, second-degree murder, and voluntary or involuntary manslaughter. First-degree murder requires proof of willfulness, deliberation, and premeditation, while second-degree murder involves intentional killing without premeditation. Manslaughter covers killings committed in the heat of passion or through reckless conduct. These statutes align with federal homicide laws but often include state-specific elements and sentencing guidelines that affect prosecution and defense strategies in Virginia courts.</p>

      <p>In this case, the defendant was charged with second-degree murder following an altercation that resulted in the victim's death. The prosecution alleged that the defendant intentionally caused the fatal injury without premeditation, while the defense argued that the killing was accidental and lacked intent. Evidence included witness testimony and forensic reports, which the defense contended did not conclusively establish the defendant’s intent to kill. The factual dispute centered on whether the defendant’s actions met the statutory criteria for second-degree murder or a lesser offense.</p>

      <p>The court held that the evidence was sufficient to support a conviction for second-degree murder, emphasizing the defendant’s intentional act that led to the victim’s death despite the absence of premeditation. The ruling clarified the application of intent and deliberation elements under Virginia Code § 18.2-32, reinforcing the prosecution’s burden to prove intent beyond a reasonable doubt. This case is significant for Virginia criminal defense as it underscores the importance of challenging the prosecution’s evidence on intent and highlights the nuanced distinctions between degrees of homicide in Virginia law.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Homicide Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/homicide" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Homicide Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
