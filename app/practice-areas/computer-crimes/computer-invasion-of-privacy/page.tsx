import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia Computer Invasion of Privacy Defense | § 18.2-152.5 | D.J. Rivera, Esq.",
  description: "Charged with computer invasion of privacy under Virginia Code § 18.2-152.5? D.J. Rivera — D.Eng. Cybersecurity, CISSP, CEH — provides expert defense in Richmond and Northern Virginia.",
  keywords: "Virginia computer invasion of privacy lawyer, § 18.2-152.5 defense, computer privacy attorney Virginia, unauthorized data access defense",
};

export default function ComputerInvasionOfPrivacyPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Computer Invasion of Privacy</span>
          </div>
          <div className="inline-block bg-crimson text-white text-xs font-bold px-3 py-1 rounded mb-4">Virginia Code § 18.2-152.5</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Virginia Computer Invasion of Privacy Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Virginia's computer invasion of privacy statute targets the unauthorized examination of personal information through a computer. What begins as a misdemeanor can escalate to a felony when financial records are involved or when the information is used to commit another crime. D.J. Rivera provides the technical and legal expertise to challenge these charges at every level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — 24/7</Link>
            <Link href="/case-studies/computer-crimes" className="inline-block border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded text-lg font-medium transition">View Case Studies</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">What Is Computer Invasion of Privacy?</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Virginia Code § 18.2-152.5 — Computer Invasion of Privacy</p>
            <p className="text-slate-700 leading-relaxed">
              It shall be unlawful for any person to use a computer or computer network to examine without authority any employment, salary, credit, or any other financial or personal information relating to any other person. "Examination" includes the copying of such information. The intent to examine is sufficient; no further use or disclosure of the information is required for the offense to be complete.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Unlike computer fraud or computer trespass, computer invasion of privacy does not require any damage, alteration, or theft of data. The mere act of examining personal information about another person without authority — even if the information is not copied, shared, or used — is sufficient to constitute the offense. This makes § 18.2-152.5 one of the broadest and most easily charged computer crime statutes in Virginia.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The statute is frequently charged in cases involving employees who access co-workers' personnel files, individuals who access ex-partners' accounts, and professionals who look up client or patient information beyond the scope of their authorized access. It is also commonly charged alongside identity theft and stalking offenses.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties for Computer Invasion of Privacy</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Maximum Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Examination of personal information</td>
                  <td className="px-6 py-4 text-slate-600">Class 3 Misdemeanor</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to $500 fine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Examination of financial/employment records</td>
                  <td className="px-6 py-4 text-slate-600">Class 2 Misdemeanor</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 6 months / $1,000 fine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Repeat offense or used in another crime</td>
                  <td className="px-6 py-4 text-slate-600">Class 6 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–5 years / $2,500 fine</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Note:</strong> Even a misdemeanor conviction for computer invasion of privacy can have serious professional consequences — particularly for healthcare workers, financial professionals, and government employees with security clearances. A felony conviction is career-ending in many fields.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Scope of Authorization</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The central defense in most computer invasion of privacy cases is whether the defendant had authority to access the information. Authorization is not always clearly defined — employees often have broad system access that may implicitly include access to information beyond their specific job function. D.J. Rivera examines the defendant's role, the system's access controls, and the employer's policies to establish that the defendant's access was within the scope of their authorization.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Lack of Intent to Examine</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The statute requires an intent to examine personal information. Inadvertent access — such as stumbling upon personal information while conducting an authorized search — does not constitute computer invasion of privacy. D.J. Rivera develops evidence of the defendant's purpose and the context of the access to demonstrate that any viewing of personal information was incidental rather than intentional.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Challenging the Definition of "Personal Information"</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The statute covers "employment, salary, credit, or any other financial or personal information." The scope of what constitutes "personal information" is not unlimited. Publicly available information, information the defendant had a legitimate interest in accessing, and information that does not relate to a specific identifiable person may fall outside the statute's coverage.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Fourth Amendment Suppression</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Evidence of the alleged examination — typically access logs, forensic analysis of browser history, or system audit trails — must be obtained through constitutionally valid means. D.J. Rivera scrutinizes every search warrant and investigative technique used to obtain this evidence and files suppression motions where appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">Why D.J. Rivera for Computer Privacy Defense</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Computer invasion of privacy cases turn on technical evidence — access logs, audit trails, and forensic analysis of system activity. D.J. Rivera's GCFE certification and D.Eng. in Cybersecurity Analytics give him the expertise to challenge this evidence at the same level as the investigators who collected it. He understands how access control systems work, how audit logs are generated and can be misinterpreted, and how to present technical defenses to a judge and jury in clear, compelling terms.</p>
            <div className="flex flex-wrap gap-2">
              {['D.Eng. Cybersecurity (GWU)', 'CISSP', 'GCFE', 'CEH', 'US Cyber Command', 'Virginia & Federal Courts'].map((badge) => (
                <span key={badge} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Related Computer Crime Charges</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/practice-areas/computer-crimes/computer-trespass', title: 'Computer Trespass', code: '§ 18.2-152.4' },
              { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Computer Fraud', code: '§ 18.2-152.3' },
              { href: '/practice-areas/computer-crimes/harassment-by-computer', title: 'Harassment by Computer', code: '§ 18.2-152.7:1' },
              { href: '/practice-areas/computer-crimes/identity-theft', title: 'Identity Theft', code: '18 U.S.C. § 1028' },
              { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'CFAA', code: '18 U.S.C. § 1030' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Computer Privacy Charges in Virginia?</h2>
          <p className="text-lg mb-8 text-red-100">D.J. Rivera is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
