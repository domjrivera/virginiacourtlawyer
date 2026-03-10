import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Disorderly Conduct Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for disorderly conduct, public intoxication, and related charges under Virginia Code § 18.2-415. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function DisorderlyConduct() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Disorderly Conduct Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Disorderly conduct and public intoxication charges may seem minor, but a conviction creates a permanent criminal record. D.J. Rivera defends clients against these charges and works to keep their records clean.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Disorderly Conduct Law — § 18.2-415</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 18.2-415 makes it a Class 1 misdemeanor to engage in conduct that tends to breach the peace in a public place. The statute covers fighting, using abusive language likely to provoke violence, and making unreasonable noise. Critically, the statute requires that the conduct tend to breach the peace — mere offensive or annoying behavior is not sufficient. The First Amendment protects a significant range of speech and expression, even in public, and D.J. Rivera challenges disorderly conduct charges that are based on protected speech.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Public intoxication (§ 18.2-388) is a separate Class 4 misdemeanor that covers being drunk in public in a manner that endangers oneself or others or causes a public disturbance. A conviction for public intoxication does not carry jail time, but it does create a criminal record.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Disorderly Conduct Penalties in Virginia</h2>
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
                  ['Disorderly Conduct', '§ 18.2-415', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Disorderly Conduct at School', '§ 18.2-415', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Public Intoxication', '§ 18.2-388', 'Class 4 Misdemeanor', 'Up to $250 fine'],
                  ['Profane Swearing in Public', '§ 18.2-388', 'Class 4 Misdemeanor', 'Up to $250 fine'],
                  ['Obstruction of Justice', '§ 18.2-460', 'Class 1 Misdemeanor / Class 5 Felony', 'Up to 12 months / up to 10 years'],
                  ['Resisting Arrest', '§ 18.2-479.1', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Disorderly Conduct</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">First Amendment protection:</strong> The Virginia disorderly conduct statute must be applied consistent with the First Amendment. Speech that is merely offensive, annoying, or provocative is protected — only &quot;fighting words&quot; that are likely to provoke an immediate violent response can be criminalized. D.J. Rivera challenges disorderly conduct charges based on protected speech.</p>
            <p><strong className="text-navy">Challenging the &quot;public place&quot; element:</strong> Disorderly conduct requires that the conduct occur in a public place. D.J. Rivera challenges whether the location of the alleged conduct qualifies as a public place under the statute.</p>
            <p><strong className="text-navy">Deferred disposition:</strong> For first-time offenders, D.J. Rivera negotiates for a deferred disposition or a reduction to a non-criminal infraction, protecting the client&apos;s record from a permanent conviction.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Disorderly Conduct Charges in Virginia?</h2>
          <p className="text-xl mb-10">Even a misdemeanor conviction creates a permanent record. D.J. Rivera will fight to keep your record clean. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
