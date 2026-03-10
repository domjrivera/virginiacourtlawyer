import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Federal Wire Fraud Defense | 18 U.S.C. § 1343 | D.J. Rivera, Esq.",
  description: "Facing federal wire fraud charges under 18 U.S.C. § 1343 in Virginia? D.J. Rivera provides aggressive federal criminal defense in the Eastern District of Virginia and beyond. Free consultation 24/7.",
  keywords: "wire fraud defense attorney Virginia, 18 USC 1343 lawyer, federal wire fraud defense Richmond Northern Virginia, EDVA wire fraud attorney",
};

export default function WireFraudPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Wire Fraud</span>
          </div>
          <div className="inline-block bg-navy border border-white/30 text-white text-xs font-bold px-3 py-1 rounded mb-4">18 U.S.C. § 1343 — Federal</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Federal Wire Fraud Defense in Virginia</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Wire fraud is one of the most broadly charged federal offenses — prosecutors use it to reach almost any scheme involving electronic communications, from email to text messages to internet transactions. A conviction carries up to 20 years in federal prison. D.J. Rivera provides aggressive federal criminal defense in Virginia and the Eastern District of Virginia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — 24/7</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">What Is Federal Wire Fraud?</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">18 U.S.C. § 1343 — Wire Fraud</p>
            <p className="text-slate-700 leading-relaxed">
              Whoever, having devised or intending to devise any scheme or artifice to defraud, or for obtaining money or property by means of false or fraudulent pretenses, representations, or promises, transmits or causes to be transmitted by means of wire, radio, or television communication in interstate or foreign commerce, any writings, signs, signals, pictures, or sounds for the purpose of executing such scheme or artifice, shall be fined under this title or imprisoned not more than 20 years, or both.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Wire fraud has four elements that the prosecution must prove beyond a reasonable doubt: (1) the defendant devised or participated in a scheme to defraud; (2) the scheme involved a material misrepresentation or omission; (3) the defendant acted with specific intent to defraud; and (4) the defendant used wire communications in interstate commerce to further the scheme.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The statute's breadth is its most dangerous feature. Because virtually every modern communication — email, text message, social media message, phone call, internet transaction — involves wire communications in interstate commerce, wire fraud can be charged in connection with almost any fraud scheme. Federal prosecutors routinely add wire fraud counts to computer crime charges, making it one of the most common companion charges to CFAA violations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties for Wire Fraud</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Scenario</th>
                  <th className="px-6 py-4 text-left font-medium">Maximum Prison</th>
                  <th className="px-6 py-4 text-left font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Standard wire fraud</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 20 years</td>
                  <td className="px-6 py-4 text-slate-600">Per count; multiple counts common</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Wire fraud affecting financial institution</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 30 years</td>
                  <td className="px-6 py-4 text-slate-600">Enhanced penalty under § 1343</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Wire fraud during declared disaster/emergency</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 30 years</td>
                  <td className="px-6 py-4 text-slate-600">Enhanced penalty</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Forfeiture</td>
                  <td className="px-6 py-4 text-crimson font-medium">All proceeds of the fraud</td>
                  <td className="px-6 py-4 text-slate-600">Mandatory upon conviction</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Multiple Counts:</strong> Federal prosecutors frequently charge multiple wire fraud counts — one for each wire communication used in furtherance of the alleged scheme. A defendant charged with 10 counts of wire fraud faces a theoretical maximum of 200 years in federal prison. The number of counts dramatically affects the sentencing guidelines calculation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies for Wire Fraud</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Challenging the "Scheme to Defraud"</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The prosecution must prove the existence of a scheme to defraud — a plan to obtain money or property through material misrepresentations. Puffery, opinion, predictions about future events, and statements that are technically false but not material to the victim's decision are not sufficient to establish a scheme to defraud. D.J. Rivera scrutinizes the alleged misrepresentations to challenge whether they were material and whether they constituted a cognizable fraud scheme.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Challenging Specific Intent</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Wire fraud requires proof of specific intent to defraud — the defendant must have known the representations were false and intended to deceive the victim. Good faith belief in the truth of representations, even if those representations were ultimately incorrect, is a complete defense to wire fraud. D.J. Rivera develops evidence of the defendant's good faith belief and the absence of fraudulent intent.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Challenging the Wire Communication Element</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The prosecution must prove that the defendant used wire communications in interstate commerce to further the scheme. The wire communication must be used "for the purpose of executing" the scheme — incidental or unrelated wire communications are not sufficient. D.J. Rivera challenges the nexus between the alleged wire communications and the alleged fraud scheme.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Suppression of Electronic Evidence</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Wire fraud prosecutions depend heavily on electronic evidence — emails, text messages, financial records, and internet activity logs. This evidence must be obtained through constitutionally valid means. D.J. Rivera scrutinizes every warrant and subpoena used to obtain electronic evidence and files suppression motions where the government's investigative techniques violated the Fourth Amendment or the Electronic Communications Privacy Act.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">Federal Defense Experience in the Eastern District of Virginia</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Wire fraud charges in Northern Virginia are typically prosecuted in the Eastern District of Virginia (EDVA) — known as the "Rocket Docket" for its aggressive case management and rapid trial schedule. D.J. Rivera has tried and won cases in EDVA, giving him the courtroom experience and familiarity with EDVA judges and prosecutors that is essential for an effective federal defense.</p>
            <div className="flex flex-wrap gap-2">
              {['EDVA Federal Court Experience', 'Federal Trial Victory vs. FBI & DOJ', 'D.Eng. Cybersecurity (GWU)', 'CISSP', 'Digital Evidence Expert', 'White Collar Defense'].map((badge) => (
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
              { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'CFAA', code: '18 U.S.C. § 1030' },
              { href: '/practice-areas/computer-crimes/identity-theft', title: 'Identity Theft', code: '18 U.S.C. § 1028' },
              { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Virginia Computer Fraud', code: '§ 18.2-152.3' },
              { href: '/practice-areas/computer-crimes/criminal-copyright-infringement', title: 'Criminal Copyright', code: '17 U.S.C. § 506' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Federal Wire Fraud Charges in Virginia?</h2>
          <p className="text-lg mb-8 text-red-100">Do not speak to federal investigators without an attorney. D.J. Rivera is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
