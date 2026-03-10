import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Prostitution Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for prostitution, solicitation, and sex trafficking charges under Virginia Code § 18.2-346 and § 18.2-357. Confidential consultation. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function ProstitutionPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Prostitution &amp; Solicitation Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Prostitution and solicitation charges in Virginia carry criminal penalties and significant collateral consequences including public arrest records and sex offender registration in certain cases. D.J. Rivera provides discreet, aggressive defense for all prostitution-related charges.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Confidential Consultation — 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Prostitution Law Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 18.2-346 makes it a Class 1 misdemeanor to offer to perform or engage in sexual acts for money or its equivalent. Both the person offering sexual services and the person soliciting them can be charged. Virginia also criminalizes keeping, residing in, or visiting a bawdy place (§ 18.2-347), and taking money from a prostitute&apos;s earnings (§ 18.2-357). Sex trafficking — compelling another person to engage in prostitution — is a serious felony under § 18.2-357.1.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Many prostitution arrests arise from undercover police operations — both in person and online. D.J. Rivera scrutinizes the conduct of undercover officers for entrapment and challenges the sufficiency of the evidence in cases based on online communications.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Prostitution &amp; Solicitation Penalties in Virginia</h2>
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
                  ['Prostitution / Solicitation', '§ 18.2-346', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Soliciting Minor for Prostitution', '§ 18.2-346', 'Class 6 Felony', 'Up to 5 years'],
                  ['Keeping a Bawdy Place', '§ 18.2-347', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Receiving Money from Prostitution', '§ 18.2-357', 'Class 4 Felony', '2–10 years'],
                  ['Sex Trafficking (adult)', '§ 18.2-357.1', 'Class 5 Felony', '1–10 years'],
                  ['Sex Trafficking (minor)', '§ 18.2-357.1', 'Class 3 Felony', '5–20 years'],
                  ['Federal Sex Trafficking (18 U.S.C. § 1591)', 'Federal', 'Federal Felony', '15 years to life (minor)'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Prostitution &amp; Solicitation Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Entrapment:</strong> Many prostitution arrests arise from undercover police operations. Entrapment occurs when law enforcement induces a person to commit a crime they were not predisposed to commit. D.J. Rivera evaluates the conduct of undercover officers and challenges cases where the police created the criminal opportunity rather than merely responding to it.</p>
            <p><strong className="text-navy">Challenging the sufficiency of the offer:</strong> Prostitution requires an actual offer to perform sexual acts for money. Ambiguous communications — particularly in online sting operations — may not constitute a legally sufficient offer. D.J. Rivera challenges the prosecution&apos;s interpretation of the alleged communications.</p>
            <p><strong className="text-navy">Digital evidence challenges:</strong> Online prostitution stings rely on text messages, emails, and website communications. D.J. Rivera, with his background in computer engineering and Internet law, is uniquely qualified to challenge the authenticity, attribution, and context of digital communications in these cases.</p>
            <p><strong className="text-navy">Protecting privacy and minimizing public exposure:</strong> D.J. Rivera understands that privacy is a paramount concern in prostitution cases. He works to resolve cases discreetly, minimize public court appearances, and protect clients from unnecessary public exposure.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Prostitution or Solicitation Charges in Virginia?</h2>
          <p className="text-xl mb-10">Your privacy matters. D.J. Rivera provides discreet, aggressive defense. Confidential consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Confidential Consultation</Link>
        </div>
      </section>
    </div>
  );
}
