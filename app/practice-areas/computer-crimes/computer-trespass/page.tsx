import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia Computer Trespass / Hacking Defense | § 18.2-152.4 | D.J. Rivera, Esq.",
  description: "Charged with computer trespass or hacking under Virginia Code § 18.2-152.4? D.J. Rivera — D.Eng. Cybersecurity, CISSP, CEH, GCFE — defends computer trespass cases in Richmond and Northern Virginia.",
  keywords: "Virginia computer trespass lawyer, hacking defense attorney Virginia, § 18.2-152.4 defense, unauthorized computer access Virginia",
};

export default function ComputerTrespassPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Computer Trespass / Hacking</span>
          </div>
          <div className="inline-block bg-crimson text-white text-xs font-bold px-3 py-1 rounded mb-4">Virginia Code § 18.2-152.4</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Virginia Computer Trespass &amp; Hacking Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Virginia's computer trespass statute — commonly called the "hacking" law — criminalizes unauthorized access to computer systems even when no data is stolen. A conviction can mean felony charges, prison time, and a permanent criminal record. D.J. Rivera brings unmatched technical and legal expertise to your defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">
              Free Consultation — 24/7
            </Link>
            <Link href="/case-studies/computer-crimes" className="inline-block border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded text-lg font-medium transition">
              View Computer Crime Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Statute */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">What Is Computer Trespass Under Virginia Law?</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Virginia Code § 18.2-152.4 — Computer Trespass</p>
            <p className="text-slate-700 leading-relaxed">
              It shall be unlawful for any person to use a computer or computer network, without authority and with the intent to: (i) temporarily or permanently remove, halt, or otherwise disable any computer data, computer programs, or computer software from a computer or computer network; (ii) cause a computer to malfunction, regardless of how long the malfunction persists; (iii) alter, disable, or erase any computer data, computer programs, or computer software; (iv) effect the creation or alteration of a financial instrument or of an electronic transfer of funds; (v) cause physical injury to the property of another; or (vi) make or cause to be made an unauthorized copy, in any form, of computer data, computer programs, or computer software.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Virginia's computer trespass statute is one of the broadest computer crime laws in the Commonwealth. Unlike computer fraud, which requires intent to obtain property, computer trespass can be charged for any unauthorized access to a computer system where the defendant intended to alter, damage, copy, or disrupt data or systems — even if the actual harm caused was minimal.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The statute covers a wide range of conduct, from sophisticated network intrusions to relatively minor acts such as copying files without permission, installing unauthorized software, or accessing a system to view data. The penalty depends on the damage caused, making the valuation of harm a critical issue in every computer trespass prosecution.
          </p>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties for Computer Trespass in Virginia</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Damage Caused</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Prison</th>
                  <th className="px-6 py-4 text-left font-medium">Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">No damage / minimal damage</td>
                  <td className="px-6 py-4 text-slate-600">Class 1 Misdemeanor</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 12 months</td>
                  <td className="px-6 py-4 text-slate-600">Up to $2,500</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Damage ≥ $1,000 or repeat offense</td>
                  <td className="px-6 py-4 text-slate-600">Class 6 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–5 years</td>
                  <td className="px-6 py-4 text-slate-600">Up to $2,500</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Damage to government/critical infrastructure</td>
                  <td className="px-6 py-4 text-slate-600">Class 5 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–10 years</td>
                  <td className="px-6 py-4 text-slate-600">Up to $2,500</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Federal CFAA (if charged)</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 20 years</td>
                  <td className="px-6 py-4 text-slate-600">Substantial</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            The valuation of damage is one of the most contested issues in computer trespass cases. The prosecution will typically rely on the victim's estimate of the cost to restore systems, recover data, or investigate the intrusion. D.J. Rivera challenges these valuations through independent technical analysis and expert testimony.
          </p>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Common Computer Trespass Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Security Research & Penetration Testing', desc: 'Security researchers and penetration testers who access systems without explicit written authorization face computer trespass charges even when their intent is to identify and report vulnerabilities. The absence of a formal authorization agreement is the critical issue in these cases.' },
              { title: 'Former Employee Access', desc: 'Employees who access former employer systems after termination — even to retrieve personal files — can face computer trespass charges. The moment employment ends, authorization to access employer systems typically ends as well.' },
              { title: 'Shared Account Access', desc: 'Using another person\'s login credentials — even with their permission — can constitute computer trespass if the account holder did not have authority to share access. Authorization is personal and non-transferable in most computer systems.' },
              { title: 'Unauthorized Software Installation', desc: 'Installing software on another person\'s computer without authorization — including monitoring software, keyloggers, or remote access tools — constitutes computer trespass even if no data is immediately accessed or damaged.' },
              { title: 'Network Intrusion', desc: 'Accessing a WiFi network without authorization, exploiting network vulnerabilities, or bypassing network security measures constitutes computer trespass regardless of what is done once access is gained.' },
              { title: 'Malware Deployment', desc: 'Creating, distributing, or deploying malware — including ransomware, viruses, and trojans — that causes damage to computer systems is among the most serious forms of computer trespass and is frequently charged as both a state and federal offense.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defense Strategies */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies for Computer Trespass Charges</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Authorization Defense — The Core Challenge</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Computer trespass requires access "without authority." Authorization in computer systems is complex and context-dependent. Implicit authorization — arising from the nature of the defendant's role, relationship with the system owner, or prior course of conduct — can negate the "without authority" element. After <em>Van Buren v. United States</em> (2021), the Supreme Court significantly narrowed the scope of "exceeding authorized access" under federal law, and Virginia courts have begun applying similar reasoning. D.J. Rivera scrutinizes every aspect of the authorization question, including the terms of service, employment agreements, and the technical architecture of the system.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Challenging the Damage Valuation</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The difference between a misdemeanor and a felony in computer trespass cases is often the valuation of damage caused. The prosecution typically relies on the victim's self-reported estimate of remediation costs, which frequently includes inflated figures for IT labor, security audits, and "lost productivity." D.J. Rivera retains independent technical experts to challenge these valuations, often reducing the alleged damage below the felony threshold.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Forensic Evidence Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                D.J. Rivera's GCFE (GIAC Certified Forensic Examiner) certification and D.Eng. in Cybersecurity Analytics give him the technical expertise to challenge the government's forensic evidence at the same level as the investigators who collected it. He reviews forensic reports for methodological errors, challenges the integrity of forensic images, scrutinizes log file analysis for misinterpretation, and identifies alternative explanations for the digital evidence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Intent Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Computer trespass requires proof of specific intent — the intent to alter, damage, copy, or disrupt data or systems. Accidental access, access to test a system's security posture without intent to cause harm, or access motivated by curiosity rather than malice may not satisfy the intent element. D.J. Rivera develops intent defenses by presenting evidence of the defendant's purpose and the context of the access.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">5. Fourth Amendment Suppression</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Law enforcement must obtain a warrant supported by probable cause before seizing computers and digital devices. Overbroad warrants — authorizing seizure of all digital devices in a location rather than specific devices related to the alleged offense — are a common basis for suppression motions in computer trespass cases. D.J. Rivera scrutinizes every search warrant and files suppression motions where the warrant was deficient or improperly executed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rivera Credentials */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-serif mb-4">The Technical Advantage in Computer Trespass Defense</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Computer trespass cases are won or lost on technical evidence — network logs, forensic disk images, access records, and system architecture documentation. Most defense attorneys cannot meaningfully challenge this evidence because they lack the technical background to understand it. D.J. Rivera is different.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                As a GIAC Certified Forensic Examiner (GCFE), Certified Ethical Hacker (CEH), and GIAC Penetration Tester (GPEN), D.J. Rivera understands exactly how computer intrusions are conducted, detected, and investigated — because he has the same training as the investigators. His D.Eng. in Cybersecurity Analytics from George Washington University and his experience defending critical networks for the US Marine Corps under US Cyber Command give him an unparalleled perspective on how to challenge the government's technical case.
              </p>
              <div className="flex flex-wrap gap-2">
                {['GCFE — Forensic Examiner', 'CEH — Ethical Hacker', 'GPEN — Penetration Tester', 'CISSP', 'D.Eng. Cybersecurity (GWU)', 'US Cyber Command'].map((badge) => (
                  <span key={badge} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Related Computer Crime Charges</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'CFAA — Federal Hacking', code: '18 U.S.C. § 1030' },
              { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Computer Fraud', code: '§ 18.2-152.3' },
              { href: '/practice-areas/computer-crimes/theft-of-computer-services', title: 'Theft of Computer Services', code: '§ 18.2-152.6' },
              { href: '/practice-areas/computer-crimes/computer-invasion-of-privacy', title: 'Computer Invasion of Privacy', code: '§ 18.2-152.5' },
              { href: '/practice-areas/computer-crimes/wire-fraud', title: 'Wire Fraud', code: '18 U.S.C. § 1343' },
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

      {/* CTA */}
      <section className="bg-crimson text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Shield className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl font-serif mb-4">Facing Computer Trespass or Hacking Charges in Virginia?</h2>
          <p className="text-lg mb-8 text-red-100">Do not speak to investigators without an attorney. D.J. Rivera is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">
            Get Your Free Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
}
