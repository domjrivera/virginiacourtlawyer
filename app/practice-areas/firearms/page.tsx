import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Firearms & Weapons Charges Defense | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for Virginia firearms charges including unlawful possession, carrying concealed, use in a felony, and federal gun charges. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function FirearmsPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Firearms &amp; Weapons Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Virginia and federal firearms charges range from misdemeanor carrying violations to serious felonies with mandatory minimum sentences. A conviction can permanently strip you of your Second Amendment rights. D.J. Rivera provides aggressive defense for all firearms-related charges.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Firearms Law Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia has a complex web of firearms statutes that regulate who may possess a firearm, how it may be carried, and what conduct involving a firearm is criminal. Virginia is a &quot;shall issue&quot; concealed handgun permit state, but carrying a concealed handgun without a valid permit is a criminal offense. Certain categories of persons are prohibited from possessing firearms under both Virginia and federal law, and the penalties for violations are severe.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Northern Virginia — particularly the Eastern District of Virginia — is one of the most aggressive federal districts for firearms prosecutions. Federal prosecutors frequently add firearms charges to drug and violent crime cases, triggering mandatory minimum sentences that can dramatically increase a defendant&apos;s exposure.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Firearms Charge Penalties in Virginia</h2>
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
                  ['Carrying Concealed (no permit)', '§ 18.2-308', 'Class 1 Misdemeanor (1st)', 'Up to 12 months / $2,500 fine'],
                  ['Carrying Concealed (2nd offense)', '§ 18.2-308', 'Class 6 Felony', 'Up to 5 years'],
                  ['Possession by Felon', '§ 18.2-308.2', 'Class 6 Felony', 'Up to 5 years (2 years mandatory min.)'],
                  ['Possession by Felon (violent/drug)', '§ 18.2-308.2', 'Class 6 Felony', '5 years mandatory minimum'],
                  ['Use of Firearm in Felony (1st)', '§ 18.2-53.1', 'Mandatory Sentence', '3 years mandatory consecutive'],
                  ['Use of Firearm in Felony (2nd)', '§ 18.2-53.1', 'Mandatory Sentence', '5 years mandatory consecutive'],
                  ['Brandishing a Firearm', '§ 18.2-282', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Brandishing at School/Public Place', '§ 18.2-282', 'Class 6 Felony', 'Up to 5 years'],
                  ['Shooting in Occupied Building', '§ 18.2-279', 'Class 4 Felony', '2–10 years'],
                  ['Federal Felon in Possession (18 U.S.C. § 922(g))', 'Federal', 'Federal Felony', 'Up to 15 years (enhanced under ACCA)'],
                  ['Federal Use in Drug Trafficking (18 U.S.C. § 924(c))', 'Federal', 'Federal Felony', '5 years mandatory consecutive (min.)'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Firearms Charges</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Fourth Amendment suppression:</strong> Many firearms charges arise from traffic stops, Terry stops, or searches. D.J. Rivera analyzes whether the police had legal authority to stop, detain, and search the defendant. An unlawful stop or search can result in suppression of the firearm and dismissal of the charge.</p>
            <p><strong className="text-navy">Challenging possession:</strong> The prosecution must prove that the defendant knowingly possessed the firearm. In cases where a firearm was found in a shared vehicle or location, constructive possession must be proven — often a difficult burden. D.J. Rivera challenges the government&apos;s evidence of knowing possession.</p>
            <p><strong className="text-navy">Restoration of rights:</strong> Virginia law provides a process for restoring the civil right to possess firearms after a felony conviction. D.J. Rivera advises clients on eligibility for rights restoration and can assist with the petition process.</p>
            <p><strong className="text-navy">Valid permit defense:</strong> In concealed carry cases, D.J. Rivera verifies whether the client had a valid concealed handgun permit (CHP) from Virginia or a reciprocal state at the time of the alleged offense. Permit issues — such as expiration or out-of-state permits — are often resolvable.</p>
            <p><strong className="text-navy">Federal mandatory minimum challenges:</strong> Federal firearms charges, particularly under 18 U.S.C. § 924(c), carry mandatory consecutive sentences that can dramatically increase a defendant&apos;s total exposure. D.J. Rivera challenges the predicate offense, the nexus between the firearm and the alleged crime, and the applicability of enhancement statutes.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Firearms Charges in Virginia?</h2>
          <p className="text-xl mb-10">Firearms charges can result in mandatory prison sentences and permanent loss of your gun rights. D.J. Rivera is available 24/7 for emergency consultations.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
