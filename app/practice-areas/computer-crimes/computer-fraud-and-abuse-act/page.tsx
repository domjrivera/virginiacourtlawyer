import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: "CFAA Defense — Computer Fraud and Abuse Act | 18 U.S.C. § 1030 | D.J. Rivera, Esq.",
  description: "Facing federal CFAA charges under 18 U.S.C. § 1030? D.J. Rivera — D.Eng. Cybersecurity, CISSP, CEH, GCFE, US Cyber Command veteran — is Virginia's premier CFAA defense attorney. Free consultation 24/7.",
  keywords: "CFAA defense attorney Virginia, Computer Fraud Abuse Act lawyer, 18 USC 1030 defense, federal hacking defense attorney Northern Virginia Richmond",
};

export default function CFAAPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Computer Fraud and Abuse Act (CFAA)</span>
          </div>
          <div className="inline-block bg-navy border border-white/30 text-white text-xs font-bold px-3 py-1 rounded mb-4">18 U.S.C. § 1030 — Federal</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Computer Fraud and Abuse Act (CFAA) Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            The CFAA is the primary federal hacking statute — and one of the most broadly interpreted criminal laws in the United States. A CFAA prosecution can arise from conduct as simple as using a work computer for personal purposes. D.J. Rivera — the only attorney in the US to beat the FBI and DOJ in a federal jury trial — provides the technical and legal expertise these cases demand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — 24/7</Link>
            <Link href="/case-studies/computer-crimes" className="inline-block border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded text-lg font-medium transition">View Federal Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Landmark Victory */}
      <section className="bg-crimson text-white py-10">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6">
          <Award className="w-12 h-12 text-white flex-shrink-0" />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-red-200 mb-1">Landmark Federal Trial Victory</div>
            <p className="text-white leading-relaxed"><strong>United States v. Cassim</strong> — D.J. Rivera is the <strong>only attorney in the United States</strong> to have won a federal jury trial against the FBI and the U.S. Department of Justice in a federal criminal computer-related case, tried in the Eastern District of Virginia. His deep technical knowledge of Internet technology and digital evidence provided the decisive advantage.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">What Is the Computer Fraud and Abuse Act?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The Computer Fraud and Abuse Act (18 U.S.C. § 1030) is the primary federal statute governing unauthorized access to computers and computer networks. Originally enacted in 1986 to target hackers who broke into government and financial computer systems, the CFAA has been expanded repeatedly and now applies to virtually any computer connected to the internet — which, in practice, means almost every computer, smartphone, and networked device in existence.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The CFAA creates both criminal and civil liability. Federal prosecutors in the Eastern District of Virginia (EDVA) — one of the most aggressive federal districts in the country for computer crime prosecutions — use the CFAA to charge a wide range of conduct, from sophisticated nation-state level hacking to relatively minor unauthorized access to employer computer systems.
          </p>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">The Van Buren Decision — A Critical Defense Development</p>
            <p className="text-slate-700 leading-relaxed">
              In <em>Van Buren v. United States</em> (2021), the Supreme Court significantly narrowed the scope of the CFAA by holding that a person "exceeds authorized access" only when they access a part of a computer system to which their access is not permitted — not merely when they use authorized access for an unauthorized purpose. This decision eliminated many prosecutions that previously seemed straightforward, and it is now a central defense argument in CFAA cases.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">CFAA Offenses and Penalties</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense (§ 1030 Subsection)</th>
                  <th className="px-6 py-4 text-left font-medium">Description</th>
                  <th className="px-6 py-4 text-left font-medium">Maximum Prison</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['§ 1030(a)(1)', 'Obtaining national security information', 'Up to 10 years (20 years repeat)'],
                  ['§ 1030(a)(2)', 'Unauthorized access to obtain information', 'Up to 1–5 years'],
                  ['§ 1030(a)(3)', 'Unauthorized access to government computers', 'Up to 1–10 years'],
                  ['§ 1030(a)(4)', 'Computer fraud (access to further fraud)', 'Up to 5 years (10 years repeat)'],
                  ['§ 1030(a)(5)', 'Causing damage to protected computers', 'Up to 1–20 years'],
                  ['§ 1030(a)(6)', 'Trafficking in passwords', 'Up to 1 year (3 years repeat)'],
                  ['§ 1030(a)(7)', 'Extortion involving computers', 'Up to 5 years (10 years repeat)'],
                ].map(([sub, desc, penalty]) => (
                  <tr key={sub} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-mono text-xs text-navy font-medium">{sub}</td>
                    <td className="px-6 py-4 text-slate-600">{desc}</td>
                    <td className="px-6 py-4 text-crimson font-medium">{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Northern Virginia / EDVA Warning:</strong> The Eastern District of Virginia is one of the most aggressive federal districts in the country for CFAA prosecutions. It is home to the Pentagon, CIA, NSA, and numerous defense contractors, making it a priority jurisdiction for computer crime enforcement. If you are contacted by federal investigators in Northern Virginia, contact D.J. Rivera immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies for CFAA Charges</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. The Van Buren Authorization Defense</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                After <em>Van Buren v. United States</em> (2021), the CFAA's "exceeds authorized access" theory was significantly narrowed. A person does not exceed authorized access merely by using authorized access for an unauthorized purpose — they must access a part of the system to which their access was not permitted. D.J. Rivera applies this defense aggressively in cases involving employees who accessed employer systems for personal purposes, contractors who accessed systems beyond the scope of their specific task, and individuals who used authorized credentials to access information for unauthorized reasons.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Challenging the "Protected Computer" Element</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The CFAA applies only to "protected computers" — defined as computers used in or affecting interstate or foreign commerce or communication, or used by the federal government. In practice, virtually any internet-connected device qualifies, but the prosecution must still prove this element. In cases involving isolated systems or devices not connected to the internet, the "protected computer" element may be contested.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Challenging the Damage Threshold</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Many CFAA felony charges require proof of damage exceeding $5,000 during a one-year period. The prosecution typically relies on the victim's estimate of remediation costs, which frequently includes inflated figures. D.J. Rivera retains independent technical experts to challenge these valuations and, where appropriate, to reduce the alleged damage below the felony threshold.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Fourth Amendment Suppression</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Federal CFAA investigations frequently involve extensive digital surveillance — including pen register orders, wiretaps, search warrants for email accounts, and seizure of computers and devices. D.J. Rivera scrutinizes every warrant and court order for constitutional deficiencies and files suppression motions where the government's investigative techniques violated the Fourth Amendment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">5. Forensic Evidence Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                D.J. Rivera's GCFE certification and D.Eng. in Cybersecurity Analytics give him the technical expertise to challenge the government's forensic evidence at the same level as the federal forensic examiners who collected it. He reviews forensic reports for methodological errors, challenges IP attribution, scrutinizes network traffic analysis, and identifies alternative explanations for the digital evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Cpu className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">The Only Attorney to Beat the FBI &amp; DOJ in Federal Court</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              D.J. Rivera is the only attorney in the United States to have won a federal jury trial against the FBI and the U.S. Department of Justice in a federal criminal computer-related case. That victory — in the Eastern District of Virginia — was built on his deep technical knowledge of Internet technology, digital evidence, and computer forensics. It is the same knowledge he brings to every CFAA defense.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              His credentials — D.Eng. Cybersecurity Analytics (GWU), CISSP, CEH, GCFE, GPEN, GCIH, GSLC, US Cyber Command — are the same credentials held by the federal investigators and forensic examiners building the case against you. When D.J. Rivera challenges the government's digital evidence, he is doing so with the same technical vocabulary and depth of knowledge as the prosecution's own experts.
            </p>
            <div className="flex flex-wrap gap-2">
              {['D.Eng. Cybersecurity (GWU)', 'CISSP', 'CEH', 'GCFE', 'GPEN', 'GCIH', 'US Cyber Command', 'EDVA Federal Trial Victory'].map((badge) => (
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
              { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Virginia Computer Fraud', code: '§ 18.2-152.3' },
              { href: '/practice-areas/computer-crimes/computer-trespass', title: 'Virginia Computer Trespass', code: '§ 18.2-152.4' },
              { href: '/practice-areas/computer-crimes/wire-fraud', title: 'Wire Fraud', code: '18 U.S.C. § 1343' },
              { href: '/practice-areas/computer-crimes/identity-theft', title: 'Identity Theft', code: '18 U.S.C. § 1028' },
              { href: '/practice-areas/computer-crimes/criminal-copyright-infringement', title: 'Criminal Copyright', code: '17 U.S.C. § 506' },
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
          <h2 className="text-3xl font-serif mb-4">Facing CFAA Charges in Virginia?</h2>
          <p className="text-lg mb-8 text-red-100">Do not speak to federal investigators without an attorney. D.J. Rivera is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
