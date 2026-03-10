import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Burglary Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for burglary, breaking and entering, and home invasion charges under Virginia Code § 18.2-89 through § 18.2-94. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function BurglaryPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Burglary &amp; Breaking and Entering Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Burglary charges in Virginia range from Class 3 misdemeanors to Class 2 felonies carrying up to life in prison. The specific charge depends on the time of day, the type of structure, and whether a deadly weapon was used. D.J. Rivera builds aggressive defenses for all burglary-related charges.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Burglary Law Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia distinguishes between several types of burglary offenses based on the circumstances. Common law burglary (§ 18.2-89) — breaking and entering a dwelling house at night with intent to commit a felony — is a Class 3 felony. Statutory burglary (§ 18.2-90 and § 18.2-91) covers a broader range of structures and times of day. Home invasion (§ 18.2-90 with a deadly weapon) is among the most serious property crimes in Virginia, carrying up to life in prison.</p>
          <p className="text-lg text-slate-700 leading-relaxed">The &quot;intent to commit a crime&quot; element is critical — the prosecution must prove not just that the defendant entered the structure, but that they did so with the specific intent to commit a felony or larceny inside. This element is often the most vulnerable part of the government&apos;s case.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Burglary Penalties in Virginia</h2>
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
                  ['Common Law Burglary (dwelling, night)', '§ 18.2-89', 'Class 3 Felony', '5–20 years'],
                  ['Statutory Burglary (dwelling, any time)', '§ 18.2-90', 'Class 3 Felony', '5–20 years'],
                  ['Statutory Burglary w/ Deadly Weapon', '§ 18.2-90', 'Class 2 Felony', '20 years to life'],
                  ['Statutory Burglary (non-dwelling)', '§ 18.2-91', 'Class 6 Felony', 'Up to 5 years'],
                  ['Statutory Burglary (non-dwelling, weapon)', '§ 18.2-91', 'Class 2 Felony', '20 years to life'],
                  ['Breaking and Entering (intent to commit misdemeanor)', '§ 18.2-92', 'Class 6 Felony', 'Up to 5 years'],
                  ['Possession of Burglary Tools', '§ 18.2-94', 'Class 5 Felony', 'Up to 10 years'],
                  ['Trespassing', '§ 18.2-119', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Burglary Charges</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Challenging intent:</strong> Burglary requires proof of intent to commit a crime at the time of entry. If the defendant entered without criminal intent — for example, if they believed they had permission to enter — the burglary charge fails. D.J. Rivera challenges the prosecution&apos;s evidence of intent at every stage.</p>
            <p><strong className="text-navy">Consent and permission:</strong> If the defendant had actual or apparent permission to enter the structure, the &quot;breaking and entering&quot; element cannot be proven. D.J. Rivera investigates the relationship between the defendant and the property owner to develop a consent defense.</p>
            <p><strong className="text-navy">Misidentification:</strong> Burglary cases often rely on surveillance footage, fingerprint evidence, and eyewitness identification. D.J. Rivera challenges the reliability of each type of identification evidence and presents alternative explanations for the defendant&apos;s presence at the scene.</p>
            <p><strong className="text-navy">Negotiating reduced charges:</strong> In appropriate cases, D.J. Rivera negotiates for a reduction to trespassing or grand larceny, which carry significantly lower penalties than burglary and do not carry the same stigma of a home invasion conviction.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Burglary Charges in Virginia?</h2>
          <p className="text-xl mb-10">Burglary convictions carry years to life in prison. Contact D.J. Rivera immediately for a confidential, free consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
