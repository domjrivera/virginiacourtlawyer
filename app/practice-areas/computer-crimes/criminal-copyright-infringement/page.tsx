import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Criminal Copyright Infringement Defense | 17 U.S.C. § 506 | D.J. Rivera, Esq.",
  description: "Facing criminal copyright infringement charges? D.J. Rivera is the ONLY attorney in the US to beat the FBI & DOJ in a federal criminal copyright jury trial (United States v. Cassim). Free consultation 24/7.",
  keywords: "criminal copyright infringement defense attorney Virginia, 17 USC 506 lawyer, federal copyright crime defense, music piracy defense attorney EDVA",
};

export default function CriminalCopyrightInfringementPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Criminal Copyright Infringement</span>
          </div>
          <div className="inline-block bg-navy border border-white/30 text-white text-xs font-bold px-3 py-1 rounded mb-4">17 U.S.C. § 506 / 18 U.S.C. § 2319 — Federal</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Criminal Copyright Infringement Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            D.J. Rivera is the <strong className="text-gold">only attorney in the United States</strong> to have won a federal jury trial against the FBI and the U.S. Department of Justice in a federal criminal copyright infringement case. That victory — <em>United States v. Cassim</em>, tried in the Eastern District of Virginia — makes him uniquely qualified to defend criminal copyright charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — 24/7</Link>
          </div>
        </div>
      </section>

      {/* Landmark Victory Banner */}
      <section className="bg-crimson text-white py-10">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6">
          <Award className="w-14 h-14 text-white flex-shrink-0" />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-red-200 mb-1">Landmark Federal Jury Trial Victory — United States v. Cassim</div>
            <p className="text-white leading-relaxed">
              D.J. Rivera represented the alleged leader of the world's most prolific Internet music piracy group, prosecuted by the FBI and DOJ in the Eastern District of Virginia. Rivera's deep technical knowledge of Internet technology, peer-to-peer networks, copyright law, and digital evidence provided the decisive advantage — resulting in the <strong>first and only defense victory</strong> against the FBI and DOJ in a federal criminal copyright infringement jury trial. The case was covered by the BBC, New York Times, Washington Post, and Federal Computer Weekly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">Criminal Copyright Infringement Law</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">17 U.S.C. § 506(a) — Criminal Infringement</p>
            <p className="text-slate-700 leading-relaxed">
              Any person who willfully infringes a copyright shall be punished as provided under section 2319 of title 18, if the infringement was committed — (A) for purposes of commercial advantage or private financial gain; (B) by the reproduction or distribution, including by electronic means, during any 180-day period, of 1 or more copies or phonorecords of 1 or more copyrighted works, which have a total retail value of more than $1,000; or (C) by the distribution of a work being prepared for commercial distribution, by making it available on a computer network accessible to members of the public.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Criminal copyright infringement is distinct from civil copyright infringement in two critical ways: it requires proof of willfulness, and it requires either commercial motivation or distribution of works with a total retail value exceeding $1,000 in a 180-day period. The willfulness requirement is the primary battleground in most criminal copyright prosecutions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Criminal copyright cases frequently involve peer-to-peer file sharing networks, online piracy groups, and digital distribution of copyrighted content. The government typically builds these cases through online monitoring of file sharing networks, undercover operations, and cooperation with copyright holders who provide evidence of the infringement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties for Criminal Copyright Infringement</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense</th>
                  <th className="px-6 py-4 text-left font-medium">Maximum Prison</th>
                  <th className="px-6 py-4 text-left font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Infringement for commercial advantage (1st offense)</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 5 years</td>
                  <td className="px-6 py-4 text-slate-600">18 U.S.C. § 2319(b)(1)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Infringement for commercial advantage (repeat)</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 10 years</td>
                  <td className="px-6 py-4 text-slate-600">18 U.S.C. § 2319(b)(2)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Distribution of pre-release works</td>
                  <td className="px-6 py-4 text-crimson font-medium">Up to 3 years</td>
                  <td className="px-6 py-4 text-slate-600">18 U.S.C. § 2319(c)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Forfeiture and restitution</td>
                  <td className="px-6 py-4 text-crimson font-medium">Full retail value of infringed works</td>
                  <td className="px-6 py-4 text-slate-600">Can be substantial in large-scale cases</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Challenging Willfulness</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The willfulness requirement is the most important element in criminal copyright cases. The prosecution must prove that the defendant knew their conduct constituted copyright infringement and intentionally engaged in it anyway. Good faith belief that the conduct was lawful — including belief that the content was in the public domain, that a license existed, or that fair use applied — is a complete defense to willfulness. D.J. Rivera develops evidence of the defendant's good faith belief and the absence of willful infringement.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Technical Challenges to Digital Evidence</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Criminal copyright cases built on peer-to-peer network monitoring depend on technical evidence that is frequently more complex than it appears. IP address attribution, the identification of specific files as infringing copies, and the determination of the retail value of the infringed works are all subject to technical challenge. D.J. Rivera's expertise in Internet technology and digital forensics allows him to challenge this evidence at a level that most defense attorneys cannot match — as demonstrated by his victory in <em>United States v. Cassim</em>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. Challenging the Valuation of Infringed Works</h3>
              <p className="text-lg text-slate-700 leading-relaxed">The prosecution must prove that the infringed works had a total retail value exceeding $1,000 in a 180-day period. The methodology used to calculate this value — particularly in cases involving digital content that is freely available through legitimate streaming services — is frequently contested. D.J. Rivera challenges the prosecution's valuation methodology and retains independent experts where appropriate.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Attribution and Identity Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">In online piracy cases, the government typically identifies defendants through IP addresses and online handles. D.J. Rivera challenges the government's attribution methodology, demonstrating that an IP address identifies a network connection — not a specific person — and that online handles can be used by multiple individuals or can be spoofed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">The Only Attorney to Win This Fight</h2>
            <p className="text-slate-300 leading-relaxed mb-4">No other attorney in the United States has won a federal jury trial against the FBI and DOJ in a criminal copyright infringement case. D.J. Rivera did it in the Eastern District of Virginia — the same district where most Virginia federal copyright cases are prosecuted. His victory in <em>United States v. Cassim</em> was built on his deep technical knowledge of Internet technology, peer-to-peer networks, and digital evidence — knowledge that he brings to every criminal copyright defense.</p>
            <p className="text-slate-300 leading-relaxed mb-6">The case was covered by the BBC, the New York Times, the Washington Post, and Federal Computer Weekly. It established D.J. Rivera as the preeminent defense attorney for criminal copyright infringement cases in the United States.</p>
            <div className="flex flex-wrap gap-2">
              {['United States v. Cassim — EDVA Victory', 'FBI & DOJ Defeated at Trial', 'D.Eng. Cybersecurity (GWU)', 'Internet Technology Expert', 'Digital Evidence Expert', 'BBC / NYT / WaPo Coverage'].map((badge) => (
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
              { href: '/practice-areas/computer-crimes/wire-fraud', title: 'Wire Fraud', code: '18 U.S.C. § 1343' },
              { href: '/practice-areas/computer-crimes/identity-theft', title: 'Identity Theft', code: '18 U.S.C. § 1028' },
              { href: '/practice-areas/computer-crimes/computer-trespass', title: 'Computer Trespass', code: '§ 18.2-152.4' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Criminal Copyright Charges?</h2>
          <p className="text-lg mb-8 text-red-100">D.J. Rivera — the only attorney to beat the FBI and DOJ in a federal criminal copyright trial — is available 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
