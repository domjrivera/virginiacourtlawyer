import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Assault & Battery Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Aggressive defense for assault, battery, and assault & battery charges in Virginia. § 18.2-57 and § 18.2-57.2 defense by D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function AssaultBatteryPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Assault &amp; Battery Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Assault and battery charges in Virginia range from Class 1 misdemeanors to serious felonies carrying years in prison. The distinction often turns on the identity of the alleged victim, the use of a weapon, and the severity of injury. D.J. Rivera builds aggressive defenses from the first consultation.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Understanding Virginia Assault &amp; Battery Law</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">In Virginia, &quot;assault&quot; and &quot;battery&quot; are distinct legal concepts that are often charged together. An assault is an intentional act that places another person in reasonable apprehension of an imminent harmful or offensive contact — no physical contact is required. A battery is the actual intentional, unwanted physical contact with another person. Virginia Code § 18.2-57 covers simple assault and assault and battery as Class 1 misdemeanors, but numerous enhancements can elevate the charge to a felony.</p>
          <p className="text-lg text-slate-700 leading-relaxed">The identity of the alleged victim is critically important in Virginia assault cases. Assaults against law enforcement officers, judges, correctional officers, firefighters, emergency medical personnel, teachers, and other protected classes carry significantly enhanced penalties, including mandatory minimum sentences and felony classifications.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Assault &amp; Battery Penalties in Virginia</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense</th>
                  <th className="px-6 py-4 text-left font-medium">Code</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['Simple Assault or A&B', '§ 18.2-57', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['A&B Against Law Enforcement', '§ 18.2-57(C)', 'Class 6 Felony', '6 months mandatory minimum / up to 5 years'],
                  ['A&B Against Teacher/School Employee', '§ 18.2-57(D)', 'Class 6 Felony', 'Up to 5 years'],
                  ['A&B Against Judge', '§ 18.2-57(E)', 'Class 5 Felony', 'Up to 10 years'],
                  ['Domestic Assault & Battery', '§ 18.2-57.2', 'Class 1 Misdemeanor (1st)', 'Up to 12 months / $2,500 fine'],
                  ['Domestic A&B (3rd in 20 years)', '§ 18.2-57.2', 'Class 6 Felony', 'Up to 5 years'],
                  ['Malicious Wounding', '§ 18.2-51', 'Class 5 Felony', '5–20 years'],
                  ['Unlawful Wounding', '§ 18.2-51', 'Class 6 Felony', 'Up to 5 years'],
                  ['Malicious Wounding (LE officer)', '§ 18.2-51.1', 'Felony', '5 years mandatory minimum'],
                  ['Aggravated Malicious Wounding', '§ 18.2-51.2', 'Class 2 Felony', '20 years to life'],
                ].map(([offense, code, cls, penalty]) => (
                  <tr key={offense} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{offense}</td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{code}</td>
                    <td className="px-6 py-4 text-slate-600">{cls}</td>
                    <td className="px-6 py-4 text-crimson font-medium">{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Virginia Assault Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Self-defense:</strong> Virginia recognizes the right to use reasonable force to defend yourself or others from imminent harm. The force used must be proportional to the threat. D.J. Rivera develops self-defense arguments by analyzing the specific circumstances, witness accounts, physical evidence, and the relative size and threat posed by the parties.</p>
            <p><strong className="text-navy">Defense of others:</strong> Virginia law permits the use of reasonable force to defend a third party from imminent harm. This defense is particularly relevant in domestic situations, bar fights, and altercations where the defendant intervened to protect someone else.</p>
            <p><strong className="text-navy">Challenging the alleged victim&apos;s credibility:</strong> In many assault cases, the outcome turns entirely on whose account the judge or jury believes. D.J. Rivera rigorously cross-examines the alleged victim, identifies inconsistencies in their statements, and presents evidence that undermines their credibility.</p>
            <p><strong className="text-navy">Lack of intent:</strong> Assault and battery require intentional conduct. Accidental contact, even if harmful, is not a battery. D.J. Rivera examines the facts carefully to identify whether the alleged contact was truly intentional or whether it was accidental or the result of a misunderstanding.</p>
            <p><strong className="text-navy">Consent:</strong> In certain contexts — such as contact sports — consent to physical contact is implied. D.J. Rivera evaluates whether the alleged victim&apos;s consent to participation in an activity defeats the battery charge.</p>
            <p><strong className="text-navy">Domestic violence cases — false allegations:</strong> Unfortunately, false or exaggerated assault allegations are common in domestic disputes, particularly during divorce or custody proceedings. D.J. Rivera has extensive experience identifying and exposing false allegations and protecting clients from unjust convictions.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Frequently Asked Questions — Virginia Assault</h2>
          <div className="space-y-6">
            {[
              { q: 'Can the alleged victim drop assault charges in Virginia?', a: 'In Virginia, the decision to prosecute belongs to the Commonwealth\'s Attorney, not the alleged victim. Even if the alleged victim recants or refuses to cooperate, the prosecutor can still proceed with the case using other evidence. However, an uncooperative victim significantly weakens the prosecution\'s case, and D.J. Rivera will leverage this in negotiations.' },
              { q: 'What is the difference between assault and malicious wounding?', a: 'Simple assault and battery involves unwanted physical contact or placing someone in fear of harm. Malicious wounding (§ 18.2-51) requires that the defendant intentionally cut, wound, or cause bodily injury to another person with malicious intent — a much more serious charge carrying 5–20 years in prison.' },
              { q: 'Will an assault conviction affect my gun rights?', a: 'A felony assault conviction will result in the permanent loss of your right to possess firearms under both Virginia and federal law. Even a misdemeanor domestic assault conviction under § 18.2-57.2 triggers a federal firearms prohibition under the Lautenberg Amendment. Protecting your gun rights is a critical consideration in assault defense.' },
              { q: 'What happens if I violate a protective order issued in an assault case?', a: 'Violating a protective order is a separate criminal offense under § 16.1-253.2 and § 18.2-60.4. A first violation is a Class 1 misdemeanor; subsequent violations or violations involving assault are Class 6 felonies. D.J. Rivera advises clients on strict compliance with all court orders.' },
            ].map(({ q, a }) => (
              <div key={q} className="border border-slate-200 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-navy mb-3">{q}</h3>
                <p className="text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Charged with Assault in Virginia?</h2>
          <p className="text-xl mb-10">Don&apos;t face the Commonwealth alone. D.J. Rivera is available 24/7 for emergency consultations — including domestic assault cases where a protective order has been issued.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
