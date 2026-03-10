import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Sexual Assault Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for rape, sexual battery, object sexual penetration, and sex offense charges under Virginia Code § 18.2-61 and § 18.2-67. Sex offender registry defense. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function SexualAssaultPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Sexual Assault Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Sexual assault charges in Virginia carry severe penalties including mandatory prison sentences, lifetime sex offender registration, and permanent damage to your reputation and career. D.J. Rivera provides aggressive, confidential defense for all sex offense charges.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Sexual Assault Law Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia&apos;s sexual assault statutes cover a wide range of conduct, from rape (§ 18.2-61) and forcible sodomy (§ 18.2-67.1) to sexual battery (§ 18.2-67.4) and object sexual penetration (§ 18.2-67.2). The severity of the charge depends on the nature of the alleged conduct, the age of the alleged victim, and whether force or threat was used. Charges involving minors carry the most severe penalties and mandatory sex offender registration.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Sex offender registration in Virginia is governed by § 9.1-900 et seq. and can be required for life for certain offenses. Registration imposes severe restrictions on where the registrant may live, work, and travel, and the registry is publicly accessible. Avoiding registration — through acquittal, a plea to a non-registrable offense, or challenging the registration requirement — is a critical goal in every sex offense case.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Sexual Assault Penalties in Virginia</h2>
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
                  ['Rape', '§ 18.2-61', 'Class 3 Felony', '5–25 years (life if victim < 13)'],
                  ['Forcible Sodomy', '§ 18.2-67.1', 'Class 3 Felony', '5–25 years (life if victim < 13)'],
                  ['Object Sexual Penetration', '§ 18.2-67.2', 'Class 3 Felony', '5–25 years (life if victim < 13)'],
                  ['Aggravated Sexual Battery', '§ 18.2-67.3', 'Class 3 Felony', '1–20 years'],
                  ['Sexual Battery', '§ 18.2-67.4', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Sexual Battery (3rd+ offense)', '§ 18.2-67.4', 'Class 6 Felony', 'Up to 5 years'],
                  ['Carnal Knowledge of Child (13–14)', '§ 18.2-63', 'Class 4 Felony', '2–10 years'],
                  ['Indecent Liberties with Child', '§ 18.2-370', 'Class 5 Felony', '1–10 years'],
                  ['Rape (victim < 13)', '§ 18.2-61', 'Class 2 Felony', 'Life (mandatory)'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Sexual Assault Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Consent:</strong> For adult victims, consent is a complete defense to rape and sexual battery charges. D.J. Rivera develops consent defenses through analysis of the parties&apos; communications, prior relationship, and the circumstances of the alleged encounter.</p>
            <p><strong className="text-navy">False allegations:</strong> Sexual assault allegations are sometimes made falsely — in the context of contentious divorces, custody disputes, or personal vendettas. D.J. Rivera rigorously investigates the alleged victim&apos;s motive to fabricate, inconsistencies in their accounts, and evidence that contradicts their allegations.</p>
            <p><strong className="text-navy">Challenging DNA and forensic evidence:</strong> DNA evidence is often presented as definitive proof in sexual assault cases, but it is subject to contamination, misinterpretation, and chain of custody errors. D.J. Rivera works with forensic experts to challenge the collection, analysis, and interpretation of DNA and other physical evidence.</p>
            <p><strong className="text-navy">Challenging the identification:</strong> In cases where the alleged victim does not know the defendant, eyewitness identification evidence is a critical vulnerability. D.J. Rivera challenges the reliability of identification procedures and presents alibi evidence where available.</p>
            <p><strong className="text-navy">Avoiding sex offender registration:</strong> In cases where a conviction cannot be avoided, D.J. Rivera negotiates for a plea to a non-registrable offense where possible, or challenges the registration requirement through post-conviction proceedings.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Sexual Assault Charges in Virginia?</h2>
          <p className="text-xl mb-10">These charges can destroy your life. Contact D.J. Rivera immediately — 24/7 — for a confidential consultation. Your privacy is protected.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
