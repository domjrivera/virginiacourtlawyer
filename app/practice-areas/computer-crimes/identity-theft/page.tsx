import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Federal Identity Theft Defense | 18 U.S.C. §§ 1028 & 1028A | D.J. Rivera, Esq.",
  description: "Facing federal identity theft or aggravated identity theft charges in Virginia? D.J. Rivera provides aggressive defense against § 1028A mandatory minimum sentences in Richmond and Northern Virginia.",
  keywords: "federal identity theft defense attorney Virginia, aggravated identity theft lawyer, 18 USC 1028A mandatory minimum defense, identity theft attorney Richmond Northern Virginia",
};

export default function IdentityTheftPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Identity Theft</span>
          </div>
          <div className="inline-block bg-navy border border-white/30 text-white text-xs font-bold px-3 py-1 rounded mb-4">18 U.S.C. §§ 1028 & 1028A — Federal</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Federal Identity Theft &amp; Aggravated Identity Theft Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Aggravated identity theft under 18 U.S.C. § 1028A carries a mandatory 2-year consecutive sentence that even a federal judge cannot reduce or suspend. This mandatory minimum makes the charge one of the most dangerous in the federal criminal code. D.J. Rivera provides aggressive defense focused on defeating the underlying predicate offense and challenging the "use" element.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — 24/7</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">Federal Identity Theft Law</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-6">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">18 U.S.C. § 1028 — Identity Theft</p>
            <p className="text-slate-700 leading-relaxed">Knowingly and without lawful authority producing, transferring, possessing, or using a means of identification of another person with intent to commit, or to aid or abet, or in connection with, any unlawful activity that constitutes a violation of Federal law, or that constitutes a felony under any applicable State or local law.</p>
          </div>
          <div className="bg-slate-50 border-l-4 border-crimson rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-crimson uppercase tracking-widest mb-3">18 U.S.C. § 1028A — Aggravated Identity Theft (Mandatory Minimum)</p>
            <p className="text-slate-700 leading-relaxed">Whoever, during and in relation to any felony violation enumerated in subsection (c), knowingly transfers, possesses, or uses, without lawful authority, a means of identification of another person shall, in addition to the punishment provided for such felony, be sentenced to a term of imprisonment of 2 years. The court shall not place on probation any person convicted of a violation of this section. No term of imprisonment imposed on a person under this section shall run concurrently with any other term of imprisonment imposed on the person under any other provision of law.</p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The critical distinction between § 1028 and § 1028A is the mandatory nature of the sentence. Under § 1028A, the 2-year sentence is mandatory, consecutive to any other sentence, and cannot be suspended, reduced, or run concurrently. A defendant convicted of wire fraud and aggravated identity theft, for example, will serve the wire fraud sentence plus an additional mandatory 2 years — regardless of what the judge thinks is appropriate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Charge</th>
                  <th className="px-6 py-4 text-left font-medium">Maximum Prison</th>
                  <th className="px-6 py-4 text-left font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">§ 1028 Identity Theft (basic)</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 15 years</td>
                  <td className="px-6 py-4 text-slate-600">Depends on type of ID document</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">§ 1028A Aggravated Identity Theft</td>
                  <td className="px-6 py-4 text-crimson font-medium">2 years mandatory minimum (consecutive)</td>
                  <td className="px-6 py-4 text-slate-600">Cannot be suspended or run concurrently</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Virginia Identity Theft (§ 18.2-186.3)</td>
                  <td className="px-6 py-4 text-crimson font-medium">Class 4 Felony — up to 10 years</td>
                  <td className="px-6 py-4 text-slate-600">State charge; may be charged alongside federal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>The § 1028A Trap:</strong> Prosecutors frequently add aggravated identity theft counts as leverage in plea negotiations. Even if the underlying fraud charge is relatively minor, the mandatory 2-year consecutive sentence under § 1028A dramatically increases the stakes. Defeating the aggravated identity theft count — or the underlying predicate offense — is often the most important strategic goal in these cases.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Defeating the Predicate Offense</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Aggravated identity theft under § 1028A requires a conviction on a predicate felony offense — typically wire fraud, computer fraud, or another enumerated offense. If the predicate offense is defeated, the § 1028A charge falls with it. D.J. Rivera focuses on defeating the predicate offense as the primary strategy for avoiding the mandatory minimum sentence.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Challenging the "Use" Element — Flores-Figueroa</h3>
              <p className="text-lg text-slate-700 leading-relaxed">In <em>Flores-Figueroa v. United States</em> (2009), the Supreme Court held that § 1028A requires proof that the defendant knew the means of identification belonged to a real person — not just that they used a means of identification. This "knowledge" requirement is a powerful defense in cases where the defendant used a randomly generated number, a fictitious identity, or a means of identification without knowing it belonged to an actual person.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Challenging Attribution of the Identification Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The prosecution must prove that the defendant personally used the means of identification — not merely that the identification was used by someone in a scheme the defendant participated in. In cases involving multiple defendants or complex fraud schemes, the attribution of specific acts of identity use to a particular defendant is frequently contested.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Digital Evidence Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Identity theft prosecutions depend heavily on digital evidence — computer forensics, financial records, IP logs, and email communications. D.J. Rivera's GCFE certification and D.Eng. in Cybersecurity Analytics give him the technical expertise to challenge this evidence at the same level as the federal forensic examiners who collected it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">Federal Defense Experience That Matters</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Identity theft cases in Northern Virginia are prosecuted in the Eastern District of Virginia — one of the most aggressive federal districts in the country. D.J. Rivera has tried and won federal cases in EDVA, giving him the experience and familiarity with EDVA procedures that is essential for an effective federal defense. His technical background allows him to challenge the digital evidence that forms the backbone of every identity theft prosecution.</p>
            <div className="flex flex-wrap gap-2">
              {['EDVA Federal Court Experience', 'D.Eng. Cybersecurity (GWU)', 'GCFE', 'CISSP', 'CEH', 'Federal Trial Victory vs. FBI & DOJ'].map((badge) => (
                <span key={badge} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/practice-areas/computer-crimes/wire-fraud', title: 'Wire Fraud', code: '18 U.S.C. § 1343' },
              { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'CFAA', code: '18 U.S.C. § 1030' },
              { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Virginia Computer Fraud', code: '§ 18.2-152.3' },
              { href: '/practice-areas/computer-crimes/computer-invasion-of-privacy', title: 'Computer Invasion of Privacy', code: '§ 18.2-152.5' },
              { href: '/practice-areas/federal-crimes', title: 'Federal Crimes Overview', code: 'All Federal Offenses' },
              { href: '/practice-areas/computer-crimes', title: 'All Computer Crimes', code: 'Overview' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block border border-slate-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition">
                <p className="font-semibold text-navy text-sm mb-1">{item.title}</p>
                <p className="text-xs text-slate-500 font-mono">{item.code}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Shield className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl font-serif mb-4">Facing Identity Theft Charges in Virginia?</h2>
          <p className="text-lg mb-8 text-red-100">The mandatory minimum in § 1028A makes early intervention critical. D.J. Rivera is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
