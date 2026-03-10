import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Destruction of Property Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for destruction of property, vandalism, and malicious mischief charges under Virginia Code § 18.2-137. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function DestructionPropertyPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Destruction of Property Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Destruction of property charges in Virginia range from misdemeanors to serious felonies depending on the value of the property damaged. D.J. Rivera defends clients against these charges and works to minimize the consequences.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Destruction of Property Law — § 18.2-137</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 18.2-137 makes it unlawful to intentionally damage or destroy any property belonging to another person. The charge is classified as a misdemeanor or felony based on the value of the property damaged. Malicious destruction (intentional) is treated more seriously than unlawful destruction (reckless or negligent). Virginia also has specific statutes for destruction of religious property (§ 18.2-127) and destruction of government property, which carry enhanced penalties.</p>
          <p className="text-lg text-slate-700 leading-relaxed">In addition to criminal penalties, a conviction for destruction of property requires the defendant to pay restitution for the full value of the damage. D.J. Rivera negotiates to minimize restitution obligations and, where possible, to resolve the case through civil restitution rather than criminal conviction.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Destruction of Property Penalties in Virginia</h2>
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
                  ['Malicious Destruction (< $1,000)', '§ 18.2-137', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Malicious Destruction (≥ $1,000)', '§ 18.2-137', 'Class 6 Felony', 'Up to 5 years'],
                  ['Unlawful Destruction (< $1,000)', '§ 18.2-137', 'Class 3 Misdemeanor', 'Up to $500 fine'],
                  ['Unlawful Destruction (≥ $1,000)', '§ 18.2-137', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Destruction of Religious Property', '§ 18.2-127', 'Class 6 Felony', 'Up to 5 years'],
                  ['Graffiti / Defacing Property', '§ 18.2-138.1', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine + cleanup costs'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Destruction of Property</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Challenging intent (malicious vs. unlawful):</strong> The distinction between malicious destruction (intentional) and unlawful destruction (reckless or negligent) significantly affects the penalty. D.J. Rivera challenges the prosecution&apos;s evidence of malicious intent and argues for the lesser unlawful destruction charge where appropriate.</p>
            <p><strong className="text-navy">Challenging the value of the damage:</strong> The felony threshold is $1,000 in damage. D.J. Rivera challenges the prosecution&apos;s valuation of the damage and, where possible, argues that the value falls below the felony threshold.</p>
            <p><strong className="text-navy">Civil resolution:</strong> In many destruction of property cases, the alleged victim&apos;s primary interest is compensation for the damage, not criminal prosecution. D.J. Rivera negotiates civil resolutions — payment of restitution in exchange for the alleged victim&apos;s cooperation in seeking a reduced charge or dismissal.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Destruction of Property Charges in Virginia?</h2>
          <p className="text-xl mb-10">D.J. Rivera will work to resolve your case with minimal consequences. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
