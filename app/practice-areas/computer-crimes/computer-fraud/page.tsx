import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia Computer Fraud Defense | § 18.2-152.3 | D.J. Rivera, Esq.",
  description: "Charged with computer fraud under Virginia Code § 18.2-152.3? D.J. Rivera — D.Eng. Cybersecurity, CISSP, CEH — is Virginia's premier computer fraud defense attorney. Free consultation 24/7.",
  keywords: "Virginia computer fraud lawyer, § 18.2-152.3 defense, computer fraud attorney Richmond, Northern Virginia cybercrime defense",
};

export default function ComputerFraudPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Computer Fraud</span>
          </div>
          <div className="inline-block bg-crimson text-white text-xs font-bold px-3 py-1 rounded mb-4">Virginia Code § 18.2-152.3</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Virginia Computer Fraud Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Computer fraud charges under § 18.2-152.3 can result in felony convictions, prison sentences, and permanent damage to your career and reputation. D.J. Rivera — a Computer Engineer with a D.Eng. in Cybersecurity Analytics and six elite cybersecurity certifications — provides the technical and legal expertise your defense demands.
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
          <h2 className="text-3xl font-serif text-navy mb-6">What Is Computer Fraud Under Virginia Law?</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Virginia Code § 18.2-152.3 — Computer Fraud</p>
            <p className="text-slate-700 leading-relaxed">
              It shall be unlawful for any person to use a computer or computer network, without authority and with the intent to obtain property or services by false pretenses, embezzle or commit larceny, or convert the property of another, to: (i) obtain property or services of another; (ii) embezzle or commit larceny; or (iii) convert the property of another.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Virginia's computer fraud statute is broad and encompasses a wide range of conduct involving computers and networks. At its core, the offense requires three elements: (1) use of a computer or computer network; (2) without authority or in excess of authority; and (3) with the intent to obtain property, services, or money through fraud, embezzlement, larceny, or conversion.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The statute is frequently charged in cases involving unauthorized access to financial systems, manipulation of computer records for financial gain, online fraud schemes, and misuse of employer computer systems. It is also commonly charged alongside federal offenses such as wire fraud (18 U.S.C. § 1343) and the Computer Fraud and Abuse Act (18 U.S.C. § 1030).
          </p>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties for Computer Fraud in Virginia</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense Level</th>
                  <th className="px-6 py-4 text-left font-medium">Trigger</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Maximum Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Computer Fraud (High Value)</td>
                  <td className="px-6 py-4 text-slate-600">Property/services ≥ $1,000</td>
                  <td className="px-6 py-4 text-slate-600">Class 5 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–10 years / $2,500 fine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Computer Fraud (Lower Value)</td>
                  <td className="px-6 py-4 text-slate-600">Property/services &lt; $1,000</td>
                  <td className="px-6 py-4 text-slate-600">Class 6 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–5 years / $2,500 fine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Federal Wire Fraud (if charged)</td>
                  <td className="px-6 py-4 text-slate-600">Electronic communication used</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 20 years federal prison</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Federal CFAA (if charged)</td>
                  <td className="px-6 py-4 text-slate-600">Protected computer involved</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 20 years federal prison</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Important:</strong> Computer fraud charges frequently trigger parallel federal investigations. If you are contacted by the FBI, Secret Service, or any federal agency about computer fraud, do not speak to investigators without an attorney present. Contact D.J. Rivera immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Common Computer Fraud Scenarios in Virginia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Employee Misuse of Employer Systems', desc: 'Accessing employer computer systems beyond the scope of employment to obtain financial data, customer lists, or proprietary information. These cases frequently involve disputes about the scope of authorization and whether the employee\'s access was truly "without authority."' },
              { title: 'Online Fraud Schemes', desc: 'Using computers or the internet to conduct phishing attacks, advance fee fraud, auction fraud, or other schemes to obtain money or property by false pretenses. These cases often involve both state and federal charges.' },
              { title: 'Financial System Manipulation', desc: 'Unauthorized access to banking, payroll, or accounting systems to redirect funds, alter records, or obtain financial information. These cases typically involve significant monetary amounts and carry the most serious penalties.' },
              { title: 'Identity-Based Computer Fraud', desc: 'Using another person\'s credentials to access computer systems and obtain property or services. These cases frequently overlap with identity theft charges under both Virginia and federal law.' },
              { title: 'Business Competitor Espionage', desc: 'Accessing a competitor\'s computer systems to obtain trade secrets, customer data, or proprietary information. These cases can also involve federal trade secret charges under the Defend Trade Secrets Act.' },
              { title: 'Disgruntled Employee Sabotage', desc: 'Former employees who access former employer systems after termination to obtain data or cause damage. The "without authority" element is often clear in these cases, making the intent element the primary defense focus.' },
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
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies for Virginia Computer Fraud Charges</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Challenging the "Without Authority" Element</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The most powerful defense in computer fraud cases is challenging whether the defendant's access was truly "without authority." Authorization in computer systems is rarely binary — it exists on a spectrum. An employee who has broad system access may have implicitly authorized access to areas beyond their specific job function. A contractor who is given credentials may have authorization that extends beyond the narrow task they were hired to perform. After the Supreme Court's decision in <em>Van Buren v. United States</em> (2021), the scope of "exceeding authorized access" under federal law was significantly narrowed, and Virginia courts have begun applying similar reasoning to state computer fraud charges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Challenging the Intent Element</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Computer fraud requires proof of specific intent — the intent to obtain property by false pretenses, embezzle, commit larceny, or convert property. Accessing a computer system out of curiosity, to expose a security vulnerability, or to recover one's own property does not constitute computer fraud. D.J. Rivera develops intent defenses by scrutinizing the defendant's purpose and the context of the access, and presenting evidence that the defendant lacked the required fraudulent intent.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Suppression of Digital Evidence</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The Fourth Amendment applies to digital searches and seizures. Law enforcement must obtain a warrant supported by probable cause before seizing computers, accessing email accounts, or obtaining data from third-party service providers. Warrants must be sufficiently specific — general warrants authorizing seizure of all digital devices are frequently overbroad. D.J. Rivera scrutinizes every search warrant in computer fraud cases and files suppression motions where the warrant was deficient or improperly executed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Challenging Digital Forensic Evidence</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                D.J. Rivera's D.Eng. in Cybersecurity Analytics and GCFE (GIAC Certified Forensic Examiner) certification give him the technical expertise to challenge the government's digital forensic evidence at the same level as the investigators who collected it. He reviews forensic reports for methodological errors, challenges the integrity of forensic images through hash value analysis, scrutinizes chain of custody documentation, and identifies alternative explanations for the digital evidence that are consistent with innocence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">5. IP Address and Attribution Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                In many computer fraud cases, the government's primary evidence linking the defendant to the offense is an IP address. D.J. Rivera challenges IP address attribution by demonstrating that an IP address identifies a network connection — not a specific person. Dynamic IP assignment, shared networks (home WiFi, public hotspots), VPN usage, and the possibility of unauthorized use of the defendant's network can all undermine the government's attribution evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rivera */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-serif mb-4">Why D.J. Rivera for Computer Fraud Defense</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Most criminal defense attorneys approach computer fraud cases the same way they approach any other fraud case — by challenging the prosecution's evidence through cross-examination and legal argument. D.J. Rivera does all of that, and more. His B.S. in Computer Engineering, M.S. in Information Technology (Virginia Tech), and D.Eng. in Cybersecurity Analytics (George Washington University) give him the technical foundation to understand and challenge the government's digital evidence at the deepest level.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                His six elite cybersecurity certifications — CISSP, CEH, GCFE, GPEN, GCIH, and GSLC — are the same credentials held by the FBI cyber investigators and federal forensic examiners building the case against you. He has defended critical computer networks for the United States Marine Corps under US Cyber Command. He is the only attorney in the United States to have won a federal jury trial against the FBI and DOJ in a computer-related federal criminal case.
              </p>
              <div className="flex flex-wrap gap-2">
                {['D.Eng. Cybersecurity (GWU)', 'CISSP', 'CEH', 'GCFE', 'GPEN', 'GCIH', 'US Cyber Command', 'Federal Trial Victory vs. FBI & DOJ'].map((badge) => (
                  <span key={badge} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Charges */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Related Computer Crime Charges</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'CFAA — Federal Hacking', code: '18 U.S.C. § 1030' },
              { href: '/practice-areas/computer-crimes/wire-fraud', title: 'Wire Fraud', code: '18 U.S.C. § 1343' },
              { href: '/practice-areas/computer-crimes/identity-theft', title: 'Identity Theft', code: '18 U.S.C. § 1028' },
              { href: '/practice-areas/computer-crimes/computer-trespass', title: 'Computer Trespass', code: '§ 18.2-152.4' },
              { href: '/practice-areas/computer-crimes/theft-of-computer-services', title: 'Theft of Computer Services', code: '§ 18.2-152.6' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Computer Fraud Charges in Virginia?</h2>
          <p className="text-lg mb-8 text-red-100">
            Time is critical. Do not speak to investigators without an attorney. D.J. Rivera is available 24/7 for a free, confidential consultation.
          </p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">
            Get Your Free Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
}
