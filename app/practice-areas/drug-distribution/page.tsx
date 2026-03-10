import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Drug Distribution & Trafficking Defense | D.J. Rivera | Richmond & Northern VA",
  description: "Aggressive defense for drug distribution, PWID, and drug trafficking charges under Virginia Code § 18.2-248. Mandatory minimum sentence challenges. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function DrugDistributionPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Drug Distribution &amp; Trafficking Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Drug distribution and trafficking charges in Virginia carry mandatory minimum prison sentences, asset forfeiture, and federal prosecution risk. D.J. Rivera provides the aggressive, experienced defense these serious charges demand.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Drug Distribution Law — § 18.2-248</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 18.2-248 makes it unlawful to manufacture, sell, give, distribute, or possess with intent to distribute (PWID) a controlled substance. The penalties depend on the Schedule of the drug and the quantity involved. For Schedule I and II drugs — which include heroin, cocaine, methamphetamine, fentanyl, and MDMA — the mandatory minimum sentences are severe, and the maximum sentences can reach 40 years or life imprisonment for large quantities.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Virginia also has a separate drug trafficking statute (§ 18.2-248.01) for large-scale distribution operations, and federal charges under 21 U.S.C. § 841 are frequently brought in Northern Virginia&apos;s Eastern District. The intersection of state and federal drug law makes it essential to have an attorney with experience in both systems.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Drug Distribution Penalties in Virginia</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense</th>
                  <th className="px-6 py-4 text-left font-medium">Code</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['Distribution of Schedule I/II (1st)', '§ 18.2-248', 'Felony', '5–40 years / up to $500,000 fine'],
                  ['Distribution of Schedule I/II (2nd)', '§ 18.2-248', 'Felony', '5 years mandatory minimum / up to life'],
                  ['Distribution of Schedule III', '§ 18.2-248', 'Class 5 Felony', 'Up to 10 years / $2,500 fine'],
                  ['Distribution of Schedule IV', '§ 18.2-248', 'Class 6 Felony', 'Up to 5 years / $2,500 fine'],
                  ['PWID Schedule I/II', '§ 18.2-248', 'Felony', '5–40 years'],
                  ['Distribution near school/park', '§ 18.2-255', 'Enhanced Felony', 'Mandatory additional 1–5 years'],
                  ['Distribution to minor', '§ 18.2-255', 'Enhanced Felony', 'Mandatory additional 10 years'],
                  ['Drug Trafficking (large quantity)', '§ 18.2-248.01', 'Felony', '20 years mandatory minimum (heroin/cocaine)'],
                  ['Federal Distribution (21 U.S.C. § 841)', 'Federal', 'Federal Felony', '5–40 years (mandatory mins apply)'],
                ].map(([offense, code, cls, penalty]) => (
                  <tr key={offense} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{offense}</td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{code}</td>
                    <td className="px-6 py-4 text-slate-600">{cls}</td>
                    <td className="px-6 py-4 text-crimson font-medium">{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Drug Distribution Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Suppression of evidence:</strong> Drug distribution cases often arise from controlled buys, wiretaps, and search warrants. D.J. Rivera scrutinizes every aspect of the investigation — from the reliability of the confidential informant to the sufficiency of the warrant affidavit — to identify grounds for suppression.</p>
            <p><strong className="text-navy">Challenging the intent to distribute:</strong> The prosecution must prove not just possession, but intent to distribute. D.J. Rivera challenges the government&apos;s evidence of intent — quantity, packaging, scales, cash, and text messages — and presents alternative explanations consistent with personal use.</p>
            <p><strong className="text-navy">Confidential informant issues:</strong> Many drug distribution cases rely heavily on the testimony of confidential informants (CIs) who are often motivated by their own criminal charges. D.J. Rivera aggressively challenges CI credibility, prior criminal history, and the reliability of their controlled buy operations.</p>
            <p><strong className="text-navy">Entrapment:</strong> In cases involving undercover officers or CIs, entrapment may be a viable defense if the government induced the defendant to commit a crime they were not predisposed to commit. D.J. Rivera evaluates the government&apos;s conduct in every undercover operation.</p>
            <p><strong className="text-navy">Federal vs. state prosecution strategy:</strong> In Northern Virginia, federal prosecutors frequently pick up state drug cases for federal prosecution, where mandatory minimums are often harsher. D.J. Rivera&apos;s experience in both state and federal court allows him to develop a comprehensive defense strategy that accounts for both possibilities.</p>
            <p><strong className="text-navy">Substantial assistance / cooperation:</strong> In cases where the evidence is overwhelming, D.J. Rivera evaluates whether cooperation with the government in exchange for a reduced sentence is in the client&apos;s best interest — and negotiates the best possible terms.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Drug Distribution Charges in Virginia?</h2>
          <p className="text-xl mb-10">These charges carry mandatory minimum sentences. Every day matters. Contact D.J. Rivera immediately for a confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
