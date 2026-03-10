import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Homicide Defense Attorney | Murder & Manslaughter | D.J. Rivera",
  description: "Experienced defense for capital murder, first-degree murder, second-degree murder, and manslaughter charges in Virginia. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function HomicidePage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Homicide Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">A homicide charge is the most serious criminal accusation a person can face. Virginia&apos;s murder statutes carry sentences ranging from years in prison to life without parole and, in capital cases, the death penalty. D.J. Rivera provides the rigorous, experienced defense that these cases demand.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Homicide Law Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia distinguishes between capital murder, first-degree murder, second-degree murder, voluntary manslaughter, and involuntary manslaughter. The distinction between these charges turns on the presence of premeditation, malice, and the circumstances of the killing. Capital murder — which carries the death penalty or life without parole — is reserved for killings that meet specific statutory criteria, including the murder of a law enforcement officer, murder for hire, and murder committed during certain felonies.</p>
          <p className="text-lg text-slate-700 leading-relaxed">First-degree murder requires willful, deliberate, and premeditated killing, or killing by poison, lying in wait, or in the perpetration of certain felonies (felony murder). Second-degree murder covers all other killings with malice aforethought. Voluntary manslaughter involves killing in the heat of passion upon adequate provocation. Involuntary manslaughter covers unintentional killings resulting from criminal negligence or the commission of an unlawful act.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Homicide Penalties in Virginia</h2>
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
                  ['Capital Murder', '§ 18.2-31', 'Class 1 Felony', 'Death or life without parole'],
                  ['First-Degree Murder', '§ 18.2-32', 'Felony', '20 years to life'],
                  ['Second-Degree Murder', '§ 18.2-32', 'Felony', '5–40 years'],
                  ['Voluntary Manslaughter', '§ 18.2-35', 'Class 5 Felony', '1–10 years'],
                  ['Involuntary Manslaughter', '§ 18.2-36', 'Class 5 Felony', '1–10 years'],
                  ['Aggravated Involuntary Manslaughter', '§ 18.2-36.1', 'Class 6 Felony', '1–5 years (1 year mandatory min.)'],
                  ['DUI Manslaughter (§ 18.2-36.1)', '§ 18.2-36.1', 'Class 5 Felony', '1–10 years (1 year mandatory min.)'],
                  ['Attempted Murder', '§ 18.2-25 / 18.2-26', 'Felony', 'Up to 20 years'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies in Homicide Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Self-defense and defense of others:</strong> Virginia law recognizes the right to use deadly force in self-defense when the defendant reasonably believed they were in imminent danger of death or serious bodily harm and had no reasonable means of retreat. D.J. Rivera develops self-defense arguments through careful analysis of the physical evidence, witness accounts, and the history between the parties.</p>
            <p><strong className="text-navy">Challenging premeditation and malice:</strong> The distinction between first-degree murder (20 years to life) and second-degree murder (5–40 years) turns on premeditation. The distinction between murder and manslaughter turns on malice. D.J. Rivera challenges the prosecution&apos;s evidence of premeditation and malice to achieve the most favorable charge classification possible.</p>
            <p><strong className="text-navy">Heat of passion / adequate provocation:</strong> A killing that occurs in the heat of passion upon legally adequate provocation — without sufficient time to cool — may be reduced from murder to voluntary manslaughter. D.J. Rivera develops this defense through evidence of the provocation and the defendant&apos;s emotional state at the time of the killing.</p>
            <p><strong className="text-navy">Challenging forensic evidence:</strong> Homicide cases involve complex forensic evidence — ballistics, DNA, blood spatter, toxicology, and medical examiner testimony. D.J. Rivera works with expert witnesses to challenge the prosecution&apos;s forensic evidence and present alternative interpretations of the physical evidence.</p>
            <p><strong className="text-navy">Misidentification and alibi:</strong> In cases where the defendant was not present at the scene, D.J. Rivera develops alibi defenses and challenges eyewitness identification evidence, which is notoriously unreliable in high-stress situations.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Murder or Manslaughter Charges in Virginia?</h2>
          <p className="text-xl mb-10">These are the most serious charges in the criminal justice system. Contact D.J. Rivera immediately — 24/7 — for a confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
