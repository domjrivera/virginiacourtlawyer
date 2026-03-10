import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Conspiracy Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for conspiracy charges under Virginia Code § 18.2-22 and federal conspiracy under 18 U.S.C. § 371. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function ConspiracyPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Conspiracy Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Conspiracy charges allow prosecutors to hold individuals responsible for crimes committed by others — even if the defendant never personally committed the underlying act. These charges are aggressively pursued in both state and federal court. D.J. Rivera provides experienced defense for all conspiracy charges.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Conspiracy Law — § 18.2-22</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Under Virginia Code § 18.2-22, a conspiracy is an agreement between two or more persons to commit a crime, combined with an overt act in furtherance of that agreement. The conspiracy charge is separate from the underlying crime — a person can be convicted of conspiracy even if the underlying crime was never completed. The penalty for conspiracy is generally the same as the penalty for the underlying offense, making conspiracy a powerful prosecutorial tool.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Federal conspiracy charges under 18 U.S.C. § 371 are particularly common in Northern Virginia, where federal prosecutors aggressively pursue drug trafficking, fraud, and organized crime cases. Federal conspiracy carries up to 5 years in prison, but conspiracy to commit a specific federal offense (such as drug trafficking or bank fraud) carries the same penalty as the underlying offense — which can mean decades in prison.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Conspiracy Penalties in Virginia</h2>
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
                  ['Conspiracy to commit felony', '§ 18.2-22', 'Felony', 'Same as underlying felony (up to 10 years)'],
                  ['Conspiracy to commit misdemeanor', '§ 18.2-22', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Conspiracy to commit murder', '§ 18.2-22', 'Class 3 Felony', '5–20 years'],
                  ['Conspiracy to commit robbery', '§ 18.2-22', 'Felony', 'Up to 10 years'],
                  ['Conspiracy to distribute drugs', '§ 18.2-256', 'Felony', 'Same as underlying drug offense'],
                  ['Federal Conspiracy (18 U.S.C. § 371)', 'Federal', 'Federal Felony', 'Up to 5 years'],
                  ['Federal Drug Conspiracy (21 U.S.C. § 846)', 'Federal', 'Federal Felony', 'Same as underlying drug offense'],
                  ['Federal RICO Conspiracy (18 U.S.C. § 1962)', 'Federal', 'Federal Felony', 'Up to 20 years'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Conspiracy Charges</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Challenging the agreement:</strong> Conspiracy requires proof of an actual agreement to commit a crime — not merely association with people who committed a crime. D.J. Rivera challenges the prosecution&apos;s evidence of an agreement and distinguishes between mere association and criminal conspiracy.</p>
            <p><strong className="text-navy">Challenging the overt act:</strong> Virginia conspiracy requires proof of an overt act in furtherance of the conspiracy. D.J. Rivera challenges whether the alleged overt act was actually committed and whether it was truly in furtherance of the alleged agreement.</p>
            <p><strong className="text-navy">Withdrawal from conspiracy:</strong> A defendant who withdraws from a conspiracy before the underlying crime is committed may have a complete defense to conspiracy charges. D.J. Rivera develops withdrawal defenses based on evidence that the defendant communicated their withdrawal to co-conspirators and took affirmative steps to thwart the conspiracy.</p>
            <p><strong className="text-navy">Challenging co-conspirator testimony:</strong> Conspiracy cases often rely heavily on the testimony of co-conspirators who have agreed to cooperate with the government in exchange for reduced sentences. D.J. Rivera aggressively cross-examines cooperating witnesses and challenges the reliability and credibility of their testimony.</p>
            <p><strong className="text-navy">Limiting scope of conspiracy:</strong> In multi-defendant conspiracy cases, D.J. Rivera works to limit the scope of the conspiracy attributed to his client, reducing the client&apos;s exposure to the acts of other co-conspirators.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Conspiracy Charges in Virginia?</h2>
          <p className="text-xl mb-10">Conspiracy charges can make you responsible for crimes you never committed. Contact D.J. Rivera immediately for a confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
