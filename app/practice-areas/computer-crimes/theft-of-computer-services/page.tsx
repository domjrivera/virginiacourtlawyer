import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia Theft of Computer Services Defense | § 18.2-152.6 | D.J. Rivera, Esq.",
  description: "Charged with theft of computer services under Virginia Code § 18.2-152.6? D.J. Rivera — D.Eng. Cybersecurity, CISSP, CEH — defends these charges in Richmond and Northern Virginia.",
  keywords: "Virginia theft of computer services lawyer, § 18.2-152.6 defense, unauthorized computer use attorney Virginia, computer services theft defense",
};

export default function TheftOfComputerServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Theft of Computer Services</span>
          </div>
          <div className="inline-block bg-crimson text-white text-xs font-bold px-3 py-1 rounded mb-4">Virginia Code § 18.2-152.6</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Virginia Theft of Computer Services Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Virginia Code § 18.2-152.6 criminalizes the unauthorized use of computer systems and networks to obtain services without payment or authorization. These charges frequently arise in employment contexts, cloud computing disputes, and cases involving unauthorized use of network resources. D.J. Rivera provides expert technical and legal defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — 24/7</Link>
            <Link href="/case-studies/computer-crimes" className="inline-block border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded text-lg font-medium transition">View Case Studies</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">What Is Theft of Computer Services?</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Virginia Code § 18.2-152.6 — Theft of Computer Services</p>
            <p className="text-slate-700 leading-relaxed">
              It shall be unlawful for any person to use a computer or computer network, without authority and with the intent to obtain computer services, to obtain such services. A violation of this section shall be punishable as a Class 6 felony.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Theft of computer services is distinct from computer fraud and computer trespass in that it focuses specifically on the unauthorized use of computer resources — processing power, storage, bandwidth, software services, or network access — rather than the theft of data or the causing of damage. The statute covers situations where a person uses a computer system or network without authorization to obtain services they did not pay for or were not authorized to use.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Common examples include using an employer's cloud computing resources for personal cryptocurrency mining, accessing a paid software service using another person's credentials, using a company's network bandwidth for unauthorized purposes, and accessing computing resources through exploited vulnerabilities to perform computationally intensive tasks.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties and Classification</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Charge</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Prison</th>
                  <th className="px-6 py-4 text-left font-medium">Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Theft of Computer Services (Virginia)</td>
                  <td className="px-6 py-4 text-slate-600">Class 6 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–5 years</td>
                  <td className="px-6 py-4 text-slate-600">Up to $2,500</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">CFAA — Unauthorized Access (federal)</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 5–20 years</td>
                  <td className="px-6 py-4 text-slate-600">Substantial</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Wire Fraud (if electronic comms used)</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 20 years</td>
                  <td className="px-6 py-4 text-slate-600">Substantial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">Authorization and Scope of Use</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The "without authority" element is the primary defense in theft of computer services cases. Employees who use employer computing resources for personal tasks may have implicit authorization based on company culture, prior practice, or ambiguous policies. D.J. Rivera examines the defendant's authorization carefully, including the terms of any acceptable use policy, the employer's actual enforcement practices, and whether the defendant had reason to believe their use was permitted.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">Valuation of Services</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The prosecution must prove that the defendant obtained "computer services" of value. The valuation of computing resources — particularly in cases involving cloud computing, cryptocurrency mining, or network bandwidth — is highly technical and frequently disputed. D.J. Rivera retains technical experts to challenge the prosecution's valuation methodology.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">Intent Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The statute requires intent to obtain computer services without authority. Inadvertent use of resources beyond one's authorization — such as a misconfigured script that consumes more resources than intended — does not constitute theft of computer services. D.J. Rivera develops evidence of the defendant's purpose and the technical context of the alleged unauthorized use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">Technical Expertise for Computer Services Defense</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Theft of computer services cases require an attorney who understands cloud computing architectures, network resource accounting, and the technical details of how computing services are measured and billed. D.J. Rivera's engineering background — B.S. Computer Engineering, M.S. IT (Virginia Tech), D.Eng. Cybersecurity (GWU) — gives him the foundation to understand and challenge the technical evidence in these cases.</p>
            <div className="flex flex-wrap gap-2">
              {['D.Eng. Cybersecurity (GWU)', 'B.S. Computer Engineering', 'M.S. IT — Virginia Tech', 'CISSP', 'CEH', 'GCFE'].map((badge) => (
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
              { href: '/practice-areas/computer-crimes/computer-trespass', title: 'Computer Trespass', code: '§ 18.2-152.4' },
              { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Computer Fraud', code: '§ 18.2-152.3' },
              { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'CFAA', code: '18 U.S.C. § 1030' },
              { href: '/practice-areas/computer-crimes/wire-fraud', title: 'Wire Fraud', code: '18 U.S.C. § 1343' },
              { href: '/practice-areas/computer-crimes/computer-invasion-of-privacy', title: 'Computer Invasion of Privacy', code: '§ 18.2-152.5' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Computer Services Theft Charges?</h2>
          <p className="text-lg mb-8 text-red-100">D.J. Rivera is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
