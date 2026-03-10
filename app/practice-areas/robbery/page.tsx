import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Robbery Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Aggressive defense for robbery and armed robbery charges under Virginia Code § 18.2-58 and § 18.2-58.1. Mandatory minimum sentence challenges. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function RobberyPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Robbery Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Robbery is one of the most serious felony charges in Virginia, carrying a mandatory minimum sentence of 5 years in prison. Armed robbery carries a mandatory minimum of 15 years. D.J. Rivera provides the aggressive, experienced defense that these life-altering charges demand.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Robbery Law — § 18.2-58</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Under Virginia Code § 18.2-58, robbery is defined as the taking of property from another person by force, threat, or intimidation, or by presenting a firearm or other deadly weapon. Virginia robbery is a felony punishable by imprisonment for life or any term not less than 5 years. The use of a firearm or simulated firearm elevates the mandatory minimum to 15 years for a first offense and 15 years for each subsequent offense — sentences that must be served consecutively.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Virginia does not distinguish between &quot;simple robbery&quot; and &quot;armed robbery&quot; in the way some states do — the use of a firearm is an enhancement that dramatically increases the mandatory minimum sentence. Carjacking (§ 18.2-58.1) is a separate offense carrying a mandatory minimum of 15 years.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Robbery Penalties in Virginia</h2>
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
                  ['Robbery (no firearm)', '§ 18.2-58', 'Felony', '5 years mandatory minimum / up to life'],
                  ['Robbery with Firearm (1st)', '§ 18.2-58', 'Felony', '15 years mandatory minimum'],
                  ['Robbery with Firearm (2nd+)', '§ 18.2-58', 'Felony', '15 years mandatory minimum (consecutive)'],
                  ['Carjacking', '§ 18.2-58.1', 'Felony', '15 years mandatory minimum'],
                  ['Attempted Robbery', '§ 18.2-26', 'Felony', '1–10 years'],
                  ['Conspiracy to Commit Robbery', '§ 18.2-22', 'Felony', 'Up to 10 years'],
                  ['Bank Robbery (federal)', '18 U.S.C. § 2113', 'Federal Felony', 'Up to 20 years (25 if armed)'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Robbery Charges</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Misidentification:</strong> Eyewitness misidentification is the leading cause of wrongful convictions. Robbery cases frequently rely on eyewitness testimony from victims who were under extreme stress during the crime. D.J. Rivera challenges identification evidence through cross-examination, expert testimony on eyewitness reliability, and analysis of the identification procedures used by police.</p>
            <p><strong className="text-navy">Alibi defense:</strong> If the defendant was not at the scene of the robbery, an alibi defense — supported by witnesses, surveillance footage, cell phone records, or other evidence — can be decisive. D.J. Rivera investigates and develops alibi evidence from the first consultation.</p>
            <p><strong className="text-navy">Challenging the use of force or threat:</strong> Robbery requires that property be taken by force, threat, or intimidation. If the alleged taking did not involve sufficient force or threat, the charge may be reduced to larceny. D.J. Rivera analyzes the specific facts to determine whether the force element can be challenged.</p>
            <p><strong className="text-navy">Challenging the firearm enhancement:</strong> The mandatory minimum sentence for robbery with a firearm is triggered by the use or display of a firearm or simulated firearm. D.J. Rivera challenges whether the object used was actually a firearm under Virginia law, and whether the defendant&apos;s conduct constituted &quot;use&quot; of the firearm within the meaning of the statute.</p>
            <p><strong className="text-navy">Negotiating reduced charges:</strong> In cases where the evidence is strong, D.J. Rivera negotiates aggressively for reduced charges — such as grand larceny or extortion — that carry significantly lower mandatory sentences than robbery.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Robbery Charges in Virginia?</h2>
          <p className="text-xl mb-10">With mandatory minimum sentences of 5–15 years, you cannot afford to wait. Contact D.J. Rivera immediately for a confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
