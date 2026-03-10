import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia Harassment by Computer Defense | § 18.2-152.7:1 | D.J. Rivera, Esq.",
  description: "Charged with harassment by computer or cyberstalking under Virginia Code § 18.2-152.7:1? D.J. Rivera provides expert criminal defense in Richmond and Northern Virginia. Free consultation 24/7.",
  keywords: "Virginia harassment by computer lawyer, cyberstalking defense attorney Virginia, § 18.2-152.7:1 defense, online harassment criminal defense Virginia",
};

export default function HarassmentByComputerPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Harassment by Computer</span>
          </div>
          <div className="inline-block bg-crimson text-white text-xs font-bold px-3 py-1 rounded mb-4">Virginia Code § 18.2-152.7:1</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Virginia Harassment by Computer Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Virginia's harassment by computer statute is one of the most broadly written criminal statutes in the Commonwealth. A single text message, email, or social media post can result in criminal charges. These cases frequently involve disputed facts, First Amendment issues, and complex questions about online communication. D.J. Rivera provides aggressive, technically informed defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — 24/7</Link>
            <Link href="/case-studies/computer-crimes" className="inline-block border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded text-lg font-medium transition">View Case Studies</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">What Is Harassment by Computer Under Virginia Law?</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Virginia Code § 18.2-152.7:1 — Harassment by Computer</p>
            <p className="text-slate-700 leading-relaxed">
              If any person, with the intent to coerce, intimidate, or harass any person, shall use a computer or computer network to communicate obscene, vulgar, profane, lewd, lascivious, or indecent language, or make any suggestion or proposal of an obscene nature, or threaten any illegal or immoral act, he is guilty of a Class 1 misdemeanor.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Virginia's harassment by computer statute is intentionally broad. It covers any electronic communication — email, text message, social media post, direct message, online forum post, or any other computer-mediated communication — that uses language the prosecution characterizes as obscene, vulgar, profane, lewd, lascivious, or indecent, or that makes a suggestion of an obscene nature or threatens an illegal or immoral act.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The statute's breadth creates significant First Amendment concerns. Courts have consistently held that the government cannot criminalize speech merely because it is offensive or unpleasant. The intent element — requiring proof of intent to coerce, intimidate, or harass — is the primary constitutional safeguard, and it is also the primary defense in most harassment by computer prosecutions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties and Enhancement</h2>
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
                  <td className="px-6 py-4 font-medium text-navy">Harassment by Computer (first offense)</td>
                  <td className="px-6 py-4 text-slate-600">Class 1 Misdemeanor</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 12 months / $2,500 fine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Repeat offense or aggravating factors</td>
                  <td className="px-6 py-4 text-slate-600">Enhanced Misdemeanor / Possible Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Enhanced penalties</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">If charged with stalking (§ 18.2-60.3)</td>
                  <td className="px-6 py-4 text-slate-600">Class 1 Misdemeanor / Class 6 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 5 years (felony)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Federal cyberstalking (18 U.S.C. § 2261A)</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 5 years federal prison</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Important:</strong> Harassment by computer charges are frequently accompanied by protective orders, which can restrict your ability to communicate with certain people and go to certain places. Violating a protective order is a separate criminal offense. Contact D.J. Rivera immediately if you have been served with a protective order.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies for Harassment by Computer</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. First Amendment Defense</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The First Amendment protects a broad range of speech, including speech that is offensive, vulgar, or unpleasant. The government cannot criminalize speech merely because the recipient found it distressing. D.J. Rivera challenges harassment by computer charges on First Amendment grounds where the alleged communication constitutes protected expression rather than a true threat or targeted harassment campaign.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Challenging the Intent Element</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The statute requires proof of specific intent — the intent to coerce, intimidate, or harass. Venting frustration, expressing anger, or engaging in heated argument does not constitute harassment by computer unless the defendant specifically intended to coerce, intimidate, or harass the recipient. D.J. Rivera develops evidence of the defendant's actual purpose and the context of the communication to challenge the intent element.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Authentication and Attribution Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The prosecution must prove that the defendant was the person who sent the alleged harassing communication. In many cases, the evidence of attribution is weaker than it appears — accounts can be shared, hacked, or impersonated. D.J. Rivera scrutinizes the technical evidence used to attribute the communication to the defendant, including IP address logs, device forensics, and account authentication records.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Context and Relationship</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The meaning and impact of a communication cannot be assessed in isolation — it must be understood in the context of the relationship between the parties and the history of their communications. A statement that appears threatening out of context may be clearly hyperbolic or figurative when the full context is presented. D.J. Rivera develops a complete factual record of the parties' relationship and communication history to provide the court with the full context.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">Why Technical Expertise Matters in Harassment Cases</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Harassment by computer cases depend heavily on digital evidence — screenshots, metadata, IP logs, and device forensics. D.J. Rivera's cybersecurity credentials allow him to challenge the authenticity and attribution of this evidence at a technical level that most defense attorneys cannot match. He understands how digital communications are routed, stored, and authenticated, and he knows how to identify weaknesses in the prosecution's technical case.</p>
            <div className="flex flex-wrap gap-2">
              {['D.Eng. Cybersecurity (GWU)', 'CISSP', 'GCFE', 'CEH', 'First Amendment Defense', 'Digital Evidence Expert'].map((badge) => (
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
              { href: '/practice-areas/threats-stalking', title: 'Threats & Stalking', code: '§ 18.2-60 / § 18.2-60.3' },
              { href: '/practice-areas/computer-crimes/computer-invasion-of-privacy', title: 'Computer Invasion of Privacy', code: '§ 18.2-152.5' },
              { href: '/practice-areas/computer-crimes/computer-trespass', title: 'Computer Trespass', code: '§ 18.2-152.4' },
              { href: '/practice-areas/computer-crimes/online-solicitation-of-a-minor', title: 'Online Solicitation of a Minor', code: '§ 18.2-374.3' },
              { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Computer Fraud', code: '§ 18.2-152.3' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Harassment by Computer Charges in Virginia?</h2>
          <p className="text-lg mb-8 text-red-100">D.J. Rivera is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
