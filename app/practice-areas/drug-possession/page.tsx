import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Drug Possession Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for simple possession charges under Virginia Code § 18.2-250 and § 18.2-250.1 in Richmond, Henrico, Chesterfield, Northern VA. First offender programs, deferred dispositions, and aggressive trial defense.",
};

export default function DrugPossessionPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Drug Possession Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">A drug possession conviction in Virginia can result in jail time, a suspended driver&apos;s license, and a permanent criminal record that follows you for life. D.J. Rivera fights to protect your future — from challenging the search to pursuing first-offender programs that can keep your record clean.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Drug Possession Law</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 18.2-250 makes it unlawful to knowingly or intentionally possess a controlled substance. The severity of the charge depends on the Schedule of the drug involved. Schedule I and II drugs (heroin, cocaine, methamphetamine, fentanyl, MDMA) carry the most serious penalties. Schedule III, IV, and V drugs carry progressively lesser penalties. Marijuana possession is now legal for adults in Virginia under certain circumstances, but possession of more than the legal limit, or possession with intent to distribute, remains a criminal offense.</p>
          <p className="text-lg text-slate-700 leading-relaxed">The prosecution must prove that the defendant (1) knowingly and intentionally (2) possessed (3) a controlled substance. Each element is subject to challenge. Constructive possession — where the drugs were found in a shared space rather than on the defendant&apos;s person — is particularly vulnerable to attack.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Drug Possession Penalties in Virginia</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Drug / Schedule</th>
                  <th className="px-6 py-4 text-left font-medium">Code</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['Schedule I or II (heroin, cocaine, meth, fentanyl)', '§ 18.2-250', 'Class 5 Felony', 'Up to 10 years / $2,500 fine'],
                  ['Schedule III (anabolic steroids, some benzos)', '§ 18.2-250', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Schedule IV (Xanax, Valium)', '§ 18.2-250', 'Class 2 Misdemeanor', 'Up to 6 months / $1,000 fine'],
                  ['Schedule V', '§ 18.2-250', 'Class 3 Misdemeanor', 'Up to $500 fine'],
                  ['Schedule VI', '§ 18.2-250', 'Class 4 Misdemeanor', 'Up to $250 fine'],
                  ['Marijuana (> 1 oz, < 1 lb)', '§ 4.1-1100', 'Civil Penalty', '$25 fine (no criminal record)'],
                  ['Marijuana (≥ 1 lb)', '§ 18.2-248.1', 'Class 5 Felony', 'Up to 10 years'],
                  ['Possession of Drug Paraphernalia', '§ 54.1-3466', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                ].map(([drug, code, cls, penalty]) => (
                  <tr key={drug} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{drug}</td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{code}</td>
                    <td className="px-6 py-4 text-slate-600">{cls}</td>
                    <td className="px-6 py-4 text-crimson font-medium">{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3 italic">A drug possession conviction also results in a 6-month driver&apos;s license suspension under Virginia law, regardless of whether a vehicle was involved.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Drug Possession Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Suppression of evidence — Fourth Amendment:</strong> The most powerful defense in drug possession cases is often a motion to suppress the evidence. If police conducted an unlawful search — without a warrant, without consent, or without a valid exception to the warrant requirement — the drugs found during that search cannot be used against you. D.J. Rivera analyzes every search and seizure for constitutional violations.</p>
            <p><strong className="text-navy">Challenging constructive possession:</strong> If drugs were found in a shared space (a car with multiple occupants, a shared apartment, a common area), the prosecution must prove that you knew the drugs were there and that you exercised dominion and control over them. This is often difficult to prove beyond a reasonable doubt.</p>
            <p><strong className="text-navy">Chain of custody and lab analysis:</strong> The prosecution must prove that the substance seized was actually a controlled substance and that it was properly handled from seizure to trial. D.J. Rivera reviews lab reports, analyst certifications, and chain of custody documentation for any deficiencies.</p>
            <p><strong className="text-navy">First Offender Program (§ 18.2-251):</strong> Virginia&apos;s first offender statute allows first-time drug possession defendants to have their charges deferred upon completion of drug education, community service, and a period of probation. Upon successful completion, the charge is dismissed and the record is eligible for expungement. D.J. Rivera evaluates eligibility for this program in every applicable case.</p>
            <p><strong className="text-navy">Lack of knowledge:</strong> The prosecution must prove that you knowingly possessed the controlled substance. If you were unaware that the substance was a controlled drug — for example, if someone placed drugs in your bag without your knowledge — this is a complete defense.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Frequently Asked Questions — Virginia Drug Possession</h2>
          <div className="space-y-6">
            {[
              { q: 'Can a drug possession charge be expunged in Virginia?', a: 'If you successfully complete the First Offender Program under § 18.2-251, your charge will be dismissed and you may petition for expungement. Convictions, however, generally cannot be expunged in Virginia unless you receive an absolute pardon. This makes avoiding a conviction — through the first offender program, a plea to a lesser charge, or an acquittal — critically important.' },
              { q: 'Is marijuana possession still illegal in Virginia?', a: 'Possession of up to one ounce of marijuana by adults 21 and older is now legal in Virginia. Possession of more than one ounce but less than one pound is a civil penalty ($25 fine). Possession of one pound or more is a felony. Possession by minors and possession in certain locations (schools, etc.) remains illegal.' },
              { q: 'What is the difference between possession and possession with intent to distribute?', a: 'Simple possession is for personal use. Possession with intent to distribute (PWID) is charged when the prosecution believes the drugs were intended for sale. Factors that suggest PWID include the quantity of drugs, the presence of scales or packaging materials, large amounts of cash, and text messages discussing sales. PWID carries far more severe penalties than simple possession.' },
              { q: 'Will a drug conviction affect my federal student financial aid?', a: 'A conviction for a drug offense that occurred while you were receiving federal student aid can make you ineligible for future federal financial aid. This is another critical reason to fight a drug possession charge aggressively rather than simply pleading guilty.' },
            ].map(({ q, a }) => (
              <div key={q} className="border border-slate-200 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-navy mb-3">{q}</h3>
                <p className="text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Charged with Drug Possession in Virginia?</h2>
          <p className="text-xl mb-10">A drug conviction can follow you for life. D.J. Rivera will fight to protect your record, your license, and your future. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
