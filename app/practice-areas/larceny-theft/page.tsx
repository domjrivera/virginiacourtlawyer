import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Larceny & Theft Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for grand larceny, petit larceny, embezzlement, and fraud charges under Virginia Code § 18.2-95 and § 18.2-96. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function LarcenyTheftPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Larceny &amp; Theft Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Theft charges in Virginia — from petit larceny to grand larceny and embezzlement — can result in jail time, a permanent criminal record, and lasting damage to your reputation and career. D.J. Rivera provides experienced defense for all theft-related charges.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Larceny Law Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia divides larceny into two categories based on the value of the property stolen. Grand larceny (§ 18.2-95) involves theft of property worth $1,000 or more, theft of a firearm regardless of value, or theft directly from a person of property worth $5 or more. Petit larceny (§ 18.2-96) covers theft of property worth less than $1,000 not taken directly from a person, or theft from a person of property worth less than $5. Grand larceny is a felony; petit larceny is a misdemeanor.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Virginia also has specific statutes for embezzlement (§ 18.2-111), larceny by false pretenses (§ 18.2-178), credit card theft (§ 18.2-192), and identity theft (§ 18.2-186.3). These offenses carry penalties similar to larceny but involve distinct elements that require tailored defense strategies.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Larceny &amp; Theft Penalties in Virginia</h2>
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
                  ['Grand Larceny (≥ $1,000)', '§ 18.2-95', 'Class U Felony', '1–20 years (or up to 12 months jail)'],
                  ['Grand Larceny (firearm)', '§ 18.2-95', 'Class U Felony', '1–20 years (or up to 12 months jail)'],
                  ['Grand Larceny (from person ≥ $5)', '§ 18.2-95', 'Class U Felony', '1–20 years (or up to 12 months jail)'],
                  ['Petit Larceny (< $1,000)', '§ 18.2-96', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Embezzlement (≥ $1,000)', '§ 18.2-111', 'Class U Felony', '1–20 years'],
                  ['Embezzlement (< $1,000)', '§ 18.2-111', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Larceny by False Pretenses (≥ $1,000)', '§ 18.2-178', 'Class U Felony', '1–20 years'],
                  ['Identity Theft (≥ $1,000)', '§ 18.2-186.3', 'Class 5 Felony', 'Up to 10 years'],
                  ['Credit Card Theft', '§ 18.2-192', 'Class 6 Felony', 'Up to 5 years'],
                  ['Receiving Stolen Property (≥ $1,000)', '§ 18.2-108', 'Class U Felony', '1–20 years'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Larceny &amp; Theft Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Challenging intent:</strong> Larceny requires proof of intent to permanently deprive the owner of their property. If the defendant intended to return the property, or if the taking was the result of a misunderstanding or mistake, the intent element cannot be proven. D.J. Rivera develops intent defenses based on the specific facts of each case.</p>
            <p><strong className="text-navy">Challenging the value of the property:</strong> The distinction between grand larceny (felony) and petit larceny (misdemeanor) turns entirely on the value of the property stolen. D.J. Rivera challenges the prosecution&apos;s valuation evidence and, where appropriate, argues for a reduction to petit larceny.</p>
            <p><strong className="text-navy">Claim of right:</strong> If the defendant genuinely believed they had a legal right to the property — for example, in a dispute over ownership — the claim of right defense may negate the intent to steal. This defense is particularly relevant in embezzlement and business dispute cases.</p>
            <p><strong className="text-navy">Negotiating restitution and deferred disposition:</strong> In many larceny cases, particularly for first-time offenders, D.J. Rivera negotiates for a deferred disposition or suspended sentence conditioned on payment of restitution. Successful completion results in a reduced charge or dismissal, protecting the client&apos;s record.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Larceny or Theft Charges in Virginia?</h2>
          <p className="text-xl mb-10">A theft conviction can damage your career and reputation for years. D.J. Rivera will fight to protect your record. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
