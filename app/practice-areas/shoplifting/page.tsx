import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Shoplifting Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for shoplifting and concealment of merchandise charges under Virginia Code § 18.2-103. First-offender programs, deferred dispositions, and record protection. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function ShopliftingPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Shoplifting Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">A shoplifting conviction in Virginia — even for a first offense — creates a permanent criminal record that can affect employment, housing, and professional licensing. D.J. Rivera fights to protect your record and your future.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Shoplifting Law — § 18.2-103</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 18.2-103 makes it unlawful to willfully conceal or take possession of merchandise in a store with the intent to convert it to one&apos;s own use without paying the full purchase price. The statute also covers altering price tags, transferring merchandise between containers, and assisting another person in shoplifting. The charge is treated as larceny, so the penalty depends on the value of the merchandise: petit larceny (misdemeanor) for items worth less than $1,000, and grand larceny (felony) for items worth $1,000 or more.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Many shoplifting cases involve loss prevention officers who detain suspects before they leave the store. The detention must be based on probable cause, and the manner of detention must be reasonable. D.J. Rivera evaluates the legality of the detention and any statements made during it.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Shoplifting Penalties in Virginia</h2>
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
                  ['Shoplifting / Concealment (< $1,000)', '§ 18.2-103', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Shoplifting / Concealment (≥ $1,000)', '§ 18.2-103', 'Class U Felony', '1–20 years'],
                  ['Organized Retail Theft (≥ $200)', '§ 18.2-103.1', 'Class 6 Felony', 'Up to 5 years'],
                  ['Organized Retail Theft (≥ $1,000)', '§ 18.2-103.1', 'Class 5 Felony', 'Up to 10 years'],
                  ['Civil Demand by Merchant', 'Civil', 'Civil Liability', 'Up to $350 + merchandise value'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies &amp; Record Protection</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Challenging intent:</strong> Shoplifting requires proof of willful intent to steal. Accidentally walking out with unpaid merchandise, forgetting an item in a bag, or a genuine misunderstanding about the price are all situations where intent cannot be proven. D.J. Rivera develops intent defenses based on the specific facts.</p>
            <p><strong className="text-navy">Challenging the detention and evidence:</strong> Loss prevention officers must have probable cause to detain a suspect and must conduct the detention in a reasonable manner. Statements made during an improper detention may be suppressed. D.J. Rivera evaluates the legality of every detention.</p>
            <p><strong className="text-navy">Deferred disposition and first-offender programs:</strong> For first-time offenders, D.J. Rivera negotiates for deferred dispositions or diversion programs that allow the charge to be dismissed upon completion of community service, a theft awareness program, and a period of good behavior. This protects the client&apos;s record from a permanent conviction.</p>
            <p><strong className="text-navy">Expungement:</strong> If the charge is dismissed — through a deferred disposition or an acquittal — D.J. Rivera assists clients in petitioning for expungement to remove the arrest record from public view.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Shoplifting Charges in Virginia?</h2>
          <p className="text-xl mb-10">Even a misdemeanor shoplifting conviction can affect your job and housing. D.J. Rivera will fight to keep your record clean. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
