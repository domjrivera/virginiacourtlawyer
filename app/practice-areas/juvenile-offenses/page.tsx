import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Juvenile Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for juvenile criminal charges in Virginia Juvenile and Domestic Relations Courts. Protecting your child's future. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function JuvenileOffensesPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Juvenile Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">A juvenile criminal record can follow a young person for years — affecting college admissions, employment, military service, and professional licensing. D.J. Rivera provides aggressive defense for juveniles charged with crimes in Virginia, with a focus on protecting their future and keeping their records clean.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Juvenile Justice System</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">In Virginia, persons under the age of 18 who are charged with criminal offenses are generally handled in the Juvenile and Domestic Relations District Court (JDR Court) rather than the general district or circuit court. The JDR Court has a rehabilitative focus — its goal is to hold juveniles accountable while providing opportunities for treatment, education, and community service rather than incarceration. However, serious offenses can result in commitment to the Department of Juvenile Justice (DJJ), and certain serious offenses can result in transfer to adult court.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Virginia law allows juveniles aged 14 and older to be tried as adults for certain serious offenses, including murder, rape, and robbery. Transfer to adult court exposes the juvenile to adult criminal penalties — including life in prison — and results in a permanent adult criminal record. Preventing transfer to adult court is often the most critical objective in serious juvenile cases.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Key Juvenile Justice Provisions in Virginia</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Issue</th>
                  <th className="px-6 py-4 text-left font-medium">Virginia Law</th>
                  <th className="px-6 py-4 text-left font-medium">Key Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['Juvenile jurisdiction', '§ 16.1-241', 'JDR Court has jurisdiction over persons under 18 charged with delinquent acts'],
                  ['Transfer to adult court (discretionary)', '§ 16.1-269.1', 'Juveniles 14+ may be transferred for any felony; court weighs rehabilitation prospects'],
                  ['Transfer to adult court (mandatory)', '§ 16.1-269.1(B)', 'Juveniles 14+ charged with Class 1 or 2 felonies must be tried as adults'],
                  ['Juvenile record confidentiality', '§ 16.1-305', 'Juvenile court records are generally confidential and not open to the public'],
                  ['Juvenile record expungement', '§ 16.1-306', 'Juveniles may petition for expungement of certain records after age 18'],
                  ['Commitment to DJJ', '§ 16.1-278.8', 'Court may commit juvenile to Department of Juvenile Justice for serious offenses'],
                  ['Diversion programs', '§ 16.1-309.9', 'First-time offenders may be eligible for diversion programs that avoid formal adjudication'],
                ].map(([issue, code, points]) => (
                  <tr key={issue} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{issue}</td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{code}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">How D.J. Rivera Defends Juvenile Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Preventing transfer to adult court:</strong> In cases where the prosecution seeks to transfer a juvenile to adult court, D.J. Rivera presents evidence of the juvenile&apos;s amenability to treatment, their family support, their academic record, and the availability of appropriate juvenile programs. Keeping the case in JDR Court is often the most important outcome in serious juvenile cases.</p>
            <p><strong className="text-navy">Pursuing diversion and informal adjustment:</strong> For first-time and minor offenses, D.J. Rivera pursues diversion programs and informal adjustments that allow the juvenile to avoid a formal delinquency adjudication. Successful completion results in no record of the offense.</p>
            <p><strong className="text-navy">Protecting the juvenile record:</strong> Juvenile records in Virginia are generally confidential, but they can be accessed in certain circumstances — including in future criminal proceedings. D.J. Rivera works to keep juvenile records sealed and advises clients on the expungement process after they turn 18.</p>
            <p><strong className="text-navy">Challenging the evidence:</strong> Juveniles have the same constitutional rights as adults — including the right to remain silent, the right to counsel, and the right against unreasonable searches and seizures. D.J. Rivera challenges unlawful police conduct, coerced confessions, and unreliable evidence in juvenile cases.</p>
            <p><strong className="text-navy">Involving the family:</strong> Juvenile defense is a family matter. D.J. Rivera works closely with parents and guardians to develop a comprehensive defense strategy and to present the juvenile&apos;s family support and rehabilitation prospects to the court.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Is Your Child Facing Criminal Charges in Virginia?</h2>
          <p className="text-xl mb-10">A juvenile charge can affect your child&apos;s entire future. Contact D.J. Rivera immediately for a confidential consultation — 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
