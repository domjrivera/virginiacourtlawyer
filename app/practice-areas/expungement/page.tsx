import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Expungement Attorney | Clear Your Criminal Record | D.J. Rivera",
  description: "Virginia expungement and record sealing for dismissed charges, acquittals, and deferred dispositions. D.J. Rivera, Esq. helps clients clear their criminal records. Free consultation 24/7.",
};

export default function ExpungementPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Expungement &amp; Record Sealing</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">An arrest record — even without a conviction — can appear on background checks and affect your employment, housing, and professional licensing. Virginia&apos;s expungement law allows certain records to be sealed from public view. D.J. Rivera helps clients navigate the expungement process and take back control of their future.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Expungement Law — § 19.2-392.2</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 19.2-392.2 allows a person to petition the circuit court to expunge (seal) their arrest record if: (1) the charge was dismissed; (2) the person was acquitted; (3) the person received an absolute pardon; or (4) the charge was a first-offense marijuana possession conviction (under the 2021 amendments). Virginia significantly expanded its expungement law in 2021, adding a new category of &quot;deferred disposition&quot; expungements for certain misdemeanor convictions.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Importantly, Virginia does not allow expungement of most criminal convictions — only dismissed charges, acquittals, and certain deferred dispositions. This makes it critical to fight charges aggressively at the outset rather than simply pleading guilty, as a conviction will generally remain on your record permanently.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">What Can Be Expunged in Virginia?</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Record Type</th>
                  <th className="px-6 py-4 text-left font-medium">Eligible for Expungement?</th>
                  <th className="px-6 py-4 text-left font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['Charge dismissed (nolle prosequi)', 'Yes', 'Petition required; court has discretion'],
                  ['Acquittal at trial', 'Yes', 'Petition required; court has discretion'],
                  ['Absolute pardon', 'Yes', 'Petition required'],
                  ['Deferred disposition (misdemeanor)', 'Yes (2021 law)', 'After successful completion of deferral period'],
                  ['First-offense marijuana possession conviction', 'Yes (2021 law)', 'Automatic for convictions before July 1, 2021'],
                  ['Misdemeanor conviction (general)', 'No', 'Virginia does not allow expungement of most convictions'],
                  ['Felony conviction', 'No', 'Virginia does not allow expungement of felony convictions'],
                  ['Juvenile adjudication', 'Limited', 'Separate process under § 16.1-306'],
                ].map(([type, eligible, notes]) => (
                  <tr key={type} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{type}</td>
                    <td className={`px-6 py-4 font-medium ${eligible.startsWith('Yes') ? 'text-green-600' : 'text-crimson'}`}>{eligible}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">The Virginia Expungement Process</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Step 1 — Eligibility review:</strong> D.J. Rivera reviews the client&apos;s complete criminal history to identify all records that are eligible for expungement. This includes charges that were dismissed, nolle prossed, or resulted in acquittal, as well as deferred dispositions that were successfully completed.</p>
            <p><strong className="text-navy">Step 2 — Petition filing:</strong> D.J. Rivera prepares and files the expungement petition in the circuit court where the charge was heard. The petition must include a copy of the charge, the disposition, and the petitioner&apos;s fingerprints.</p>
            <p><strong className="text-navy">Step 3 — Commonwealth&apos;s Attorney review:</strong> The Commonwealth&apos;s Attorney has the right to object to the expungement. D.J. Rivera responds to any objections and argues for the expungement at a hearing if necessary.</p>
            <p><strong className="text-navy">Step 4 — Court hearing and order:</strong> The circuit court holds a hearing and, if the petition is granted, enters an expungement order directing all agencies to seal the record. D.J. Rivera follows up to ensure the order is properly implemented by all relevant agencies.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Frequently Asked Questions — Virginia Expungement</h2>
          <div className="space-y-6">
            {[
              { q: 'Does expungement completely remove my record?', a: 'An expungement order in Virginia seals the record from public view — it will not appear on most background checks. However, certain government agencies (law enforcement, courts, some licensing boards) may still access sealed records. An expungement is not a complete erasure, but it significantly limits who can see the record.' },
              { q: 'How long does the expungement process take in Virginia?', a: 'The Virginia expungement process typically takes 3–6 months from petition filing to final order, depending on the court\'s docket and whether the Commonwealth\'s Attorney objects. D.J. Rivera works to move the process as quickly as possible.' },
              { q: 'Can I get my record expunged if I pleaded guilty?', a: 'Generally, no. Virginia does not allow expungement of criminal convictions, including guilty pleas. The only exceptions are first-offense marijuana possession convictions and certain deferred dispositions. This is why it is so important to fight charges aggressively rather than simply pleading guilty.' },
              { q: 'What is the difference between expungement and a pardon?', a: 'A pardon forgives the offense but does not seal the record. An expungement seals the record from public view but does not forgive the offense. An absolute pardon is one of the bases for seeking expungement in Virginia.' },
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
          <h2 className="text-4xl font-serif mb-6">Ready to Clear Your Virginia Criminal Record?</h2>
          <p className="text-xl mb-10">D.J. Rivera will review your eligibility and guide you through the expungement process. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
