import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Federal Criminal Defense Attorney | D.J. Rivera | Eastern District of Virginia",
  description: "Experienced federal criminal defense in the Eastern District of Virginia (EDVA) and Western District. Drug trafficking, fraud, firearms, cybercrime, and RICO defense. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function FederalCrimesPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Federal Criminal Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Federal prosecution is fundamentally different from state prosecution. Federal prosecutors have virtually unlimited resources, mandatory minimum sentences apply in most cases, and conviction rates exceed 90%. The Eastern District of Virginia — known as the &quot;Rocket Docket&quot; — moves cases to trial faster than almost any other federal court in the country. You need experienced federal defense counsel from day one.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Federal Court in Virginia</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia has two federal judicial districts: the Eastern District of Virginia (EDVA), which covers Richmond, Norfolk, Alexandria, and Newport News; and the Western District of Virginia (WDVA), which covers Roanoke, Charlottesville, and Abingdon. The EDVA — particularly the Alexandria Division — is one of the most demanding federal courts in the country, with strict scheduling orders and judges who expect thorough preparation from defense counsel.</p>
          <p className="text-lg text-slate-700 leading-relaxed">D.J. Rivera is admitted to practice in the Eastern District of Virginia and has experience defending clients in federal court. His background in computer engineering and Internet law through iCyberLaw — Rivera Law Group makes him particularly well-suited to defend federal cybercrime, fraud, and computer-related offenses.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Federal Charges D.J. Rivera Defends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Federal Drug Trafficking', desc: '21 U.S.C. § 841 — mandatory minimums of 5–40 years based on drug type and quantity. Federal drug cases often involve wiretaps, confidential informants, and multi-defendant indictments.' },
              { title: 'Federal Firearms Offenses', desc: '18 U.S.C. § 922(g) (felon in possession) and § 924(c) (use in drug trafficking) — mandatory consecutive sentences that can add decades to a sentence.' },
              { title: 'Federal Cybercrime', desc: 'Computer Fraud and Abuse Act (18 U.S.C. § 1030), wire fraud, identity theft, and child exploitation offenses. D.J. Rivera\'s computer engineering background provides a critical advantage in these technically complex cases.' },
              { title: 'Federal Fraud', desc: 'Wire fraud (18 U.S.C. § 1343), mail fraud (§ 1341), bank fraud (§ 1344), and healthcare fraud — each carrying up to 20–30 years. Federal fraud cases involve complex financial evidence and expert testimony.' },
              { title: 'Federal Conspiracy', desc: '18 U.S.C. § 371 and 21 U.S.C. § 846 — conspiracy charges allow the government to hold defendants responsible for the acts of co-conspirators. D.J. Rivera challenges the scope of the alleged conspiracy and the sufficiency of the evidence.' },
              { title: 'RICO', desc: '18 U.S.C. § 1962 — the Racketeer Influenced and Corrupt Organizations Act carries up to 20 years per count and allows the government to charge entire criminal enterprises. RICO cases are among the most complex in federal criminal law.' },
              { title: 'Federal Sex Offenses', desc: 'Child pornography (18 U.S.C. § 2252), sex trafficking (§ 1591), and interstate travel for sex offenses — these charges carry mandatory minimum sentences and lifetime sex offender registration.' },
              { title: 'Money Laundering', desc: '18 U.S.C. § 1956 — money laundering charges are frequently added to drug trafficking and fraud cases, doubling the defendant\'s exposure. D.J. Rivera challenges the government\'s tracing of alleged proceeds.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-slate-200 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Why Federal Defense Is Different</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Federal Sentencing Guidelines:</strong> Federal sentences are governed by the United States Sentencing Guidelines (USSG), which calculate a recommended sentence based on the offense level and the defendant&apos;s criminal history. Understanding the Guidelines — and how to argue for downward departures and variances — is essential to achieving the best possible outcome in federal court.</p>
            <p><strong className="text-navy">Mandatory minimum sentences:</strong> Many federal offenses carry mandatory minimum sentences that the judge cannot reduce, regardless of mitigating circumstances. D.J. Rivera evaluates every avenue for avoiding mandatory minimums — including safety valve provisions in drug cases and substantial assistance motions.</p>
            <p><strong className="text-navy">Grand jury investigations:</strong> Federal cases often begin with a grand jury investigation that can last months or years before charges are filed. D.J. Rivera advises clients who have received grand jury subpoenas or who believe they are under federal investigation, helping them protect their rights before charges are filed.</p>
            <p><strong className="text-navy">Plea negotiations:</strong> The vast majority of federal cases resolve through plea agreements. D.J. Rivera negotiates aggressively for the most favorable plea terms — including cooperation agreements, safety valve provisions, and binding plea agreements that limit the court&apos;s sentencing discretion.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Under Federal Investigation or Facing Federal Charges?</h2>
          <p className="text-xl mb-10">Federal prosecution moves fast. Contact D.J. Rivera immediately — 24/7 — for a confidential consultation. Every day matters.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
