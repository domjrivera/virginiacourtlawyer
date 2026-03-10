import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia Online Solicitation of a Minor Defense | § 18.2-374.3 | D.J. Rivera, Esq.",
  description: "Charged with online solicitation of a minor under Virginia Code § 18.2-374.3? D.J. Rivera provides aggressive defense including entrapment and predisposition challenges in Virginia and federal courts.",
  keywords: "Virginia online solicitation of minor lawyer, § 18.2-374.3 defense attorney, internet solicitation minor defense Virginia, entrapment defense online solicitation",
};

export default function OnlineSolicitationOfAMinorPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Online Solicitation of a Minor</span>
          </div>
          <div className="inline-block bg-crimson text-white text-xs font-bold px-3 py-1 rounded mb-4">Virginia Code § 18.2-374.3</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Virginia Online Solicitation of a Minor Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Online solicitation charges frequently arise from undercover law enforcement operations where no actual minor was involved. These cases present powerful entrapment and predisposition defenses that require an attorney with both the legal knowledge and the technical expertise to challenge the government's investigation. D.J. Rivera provides that defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Confidential Consultation — 24/7</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">Virginia Online Solicitation Law</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Virginia Code § 18.2-374.3 — Use of Communications Systems to Facilitate Offenses Involving Children</p>
            <p className="text-slate-700 leading-relaxed">
              It shall be unlawful for any person 18 years of age or older to use a communications system, including but not limited to computers or computer networks or bulletin boards, or any other electronic means, for the purposes of soliciting, with lascivious intent, any person he knows or has reason to believe is a child younger than 15 years of age to knowingly and intentionally: (i) expose his sexual or genital parts to any child to whom he is not legally married or propose that any such child expose his sexual or genital parts to such person; (ii) propose that any such child feel or fondle the sexual or genital parts of such person or propose that such person feel or fondle the sexual or genital parts of any such child; (iii) propose to such child the performance of an act of sexual intercourse or any act constituting an offense under § 18.2-361; or (iv) entice, allure, persuade, or invite any such child to enter any vehicle, room, house, or other place, for any of the purposes set forth in the preceding clauses.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Virginia's online solicitation statute is one of the most aggressively enforced computer crime laws in the Commonwealth. The statute applies to solicitation of any person the defendant "knows or has reason to believe" is a child — meaning that undercover law enforcement officers posing as minors can form the basis of a prosecution even when no actual child was involved.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The statute is tiered by the age of the alleged victim: solicitation of a child under 15 carries the most serious penalties, while solicitation of a child between 15 and 18 carries somewhat lesser penalties. The statute also covers attempts — meaning that the offense is complete when the solicitation is made, regardless of whether any meeting or sexual contact occurred.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties for Online Solicitation of a Minor</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Prison</th>
                  <th className="px-6 py-4 text-left font-medium">Sex Offender Registration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Solicitation of child under 15</td>
                  <td className="px-6 py-4 text-slate-600">Class 5 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–10 years</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Solicitation of child 15–17</td>
                  <td className="px-6 py-4 text-slate-600">Class 6 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–5 years</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">With intent to commit contact offense</td>
                  <td className="px-6 py-4 text-slate-600">Class 4 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">2–10 years</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Federal Enticement (18 U.S.C. § 2422(b))</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">10 years to life (mandatory min.)</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Critical:</strong> Online solicitation charges almost always result in immediate arrest and frequently trigger parallel federal investigations. Do not speak to law enforcement without an attorney. Contact D.J. Rivera immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Entrapment Defense</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Entrapment is a complete defense to online solicitation charges when law enforcement induced the defendant to commit an offense he was not predisposed to commit. Virginia and federal courts recognize the entrapment defense, but it requires proof that: (1) the government induced the defendant to commit the offense; and (2) the defendant was not predisposed to commit the offense before the government's inducement. D.J. Rivera develops entrapment defenses by scrutinizing the undercover operation's methodology, the sequence of communications, and who initiated the sexual content of the conversation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Lack of Lascivious Intent</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The statute requires "lascivious intent" — a specific sexual intent directed at the alleged minor. Conversations that are ambiguous, that began innocuously and escalated through the undercover officer's direction, or that were clearly fantasy or roleplay rather than genuine solicitation may not satisfy the lascivious intent element. D.J. Rivera analyzes the full context of the communications to challenge the prosecution's characterization of the defendant's intent.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Authentication and Attribution</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The prosecution must prove that the defendant was the person who engaged in the alleged solicitation. In cases involving shared devices, hacked accounts, or anonymous communications, D.J. Rivera challenges the technical evidence used to attribute the communications to the defendant. His cybersecurity expertise allows him to identify weaknesses in the government's attribution methodology that most defense attorneys would miss.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Challenging the Undercover Operation</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Undercover online solicitation operations must be conducted within constitutional limits. Law enforcement cannot manufacture crimes by aggressively pursuing targets who show no predisposition to offend. D.J. Rivera scrutinizes the entire undercover operation — the platform used, the profile created, the communications initiated by law enforcement, and the techniques used to escalate the conversation — to identify constitutional violations and entrapment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">Why D.J. Rivera for Online Solicitation Defense</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Online solicitation cases are built on digital evidence — chat logs, IP records, device forensics, and undercover communications. D.J. Rivera's technical expertise allows him to challenge this evidence at the same level as the investigators who collected it. His experience in federal court — including the Eastern District of Virginia, one of the most aggressive federal districts in the country — gives him the trial experience these cases demand.</p>
            <div className="flex flex-wrap gap-2">
              {['D.Eng. Cybersecurity (GWU)', 'GCFE', 'CEH', 'CISSP', 'EDVA Federal Court Experience', 'Entrapment Defense'].map((badge) => (
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
              { href: '/practice-areas/computer-crimes/coercion-enticement-of-minor', title: 'Federal Enticement of Minor', code: '18 U.S.C. § 2422(b)' },
              { href: '/practice-areas/computer-crimes/possession-of-child-pornography', title: 'Possession of Child Pornography', code: '§ 18.2-374.1:1' },
              { href: '/practice-areas/computer-crimes/federal-child-pornography', title: 'Federal Child Pornography', code: '18 U.S.C. § 2252A' },
              { href: '/practice-areas/computer-crimes/harassment-by-computer', title: 'Harassment by Computer', code: '§ 18.2-152.7:1' },
              { href: '/practice-areas/sexual-assault', title: 'Sexual Assault Defense', code: 'Overview' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Online Solicitation Charges? Act Now.</h2>
          <p className="text-lg mb-8 text-red-100">Do not speak to investigators. D.J. Rivera is available 24/7 for a confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get a Confidential Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
