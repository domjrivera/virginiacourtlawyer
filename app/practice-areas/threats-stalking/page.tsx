import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Threats & Stalking Defense Attorney | D.J. Rivera | Richmond & Northern VA",
  description: "Defense for stalking, threatening communications, and harassment charges under Virginia Code § 18.2-60 and § 18.2-60.3. D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function ThreatsStalking() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Threats &amp; Stalking Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">Threatening communications and stalking charges in Virginia can arise from text messages, social media posts, emails, and in-person conduct. These charges carry serious criminal penalties and often come with protective orders that restrict your daily life. D.J. Rivera provides aggressive defense for all threats and stalking charges.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Threats &amp; Stalking Law</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia Code § 18.2-60 makes it a Class 1 misdemeanor to threaten to kill or do bodily harm to another person or their family with the intent to place that person in reasonable apprehension of death or bodily harm. Written threats are a Class 6 felony. Stalking (§ 18.2-60.3) is defined as engaging in conduct directed at another person on two or more occasions that causes that person to reasonably fear death, criminal sexual assault, or bodily injury. First-offense stalking is a Class 1 misdemeanor; subsequent offenses are Class 6 felonies.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Cyberstalking — using electronic communications to stalk or harass — is covered by both § 18.2-60.3 and § 18.2-152.7:1. D.J. Rivera has particular expertise in cyberstalking cases, given his background in computer engineering and Internet law through iCyberLaw — Rivera Law Group.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Threats &amp; Stalking Penalties in Virginia</h2>
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
                  ['Threatening Bodily Harm (verbal)', '§ 18.2-60', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Threatening Bodily Harm (written)', '§ 18.2-60', 'Class 6 Felony', 'Up to 5 years'],
                  ['Stalking (1st offense)', '§ 18.2-60.3', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Stalking (2nd offense)', '§ 18.2-60.3', 'Class 6 Felony', 'Up to 5 years'],
                  ['Stalking (3rd+ offense)', '§ 18.2-60.3', 'Class 6 Felony', 'Up to 5 years (enhanced)'],
                  ['Harassment by Computer', '§ 18.2-152.7:1', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Violation of Protective Order', '§ 16.1-253.2', 'Class 1 Misdemeanor / Class 6 Felony', 'Up to 12 months / up to 5 years'],
                  ['Interstate Stalking (federal)', '18 U.S.C. § 2261A', 'Federal Felony', 'Up to 5 years (enhanced if injury)'],
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
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies for Threats &amp; Stalking Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">First Amendment and free speech:</strong> Not all threatening language constitutes a criminal threat. The First Amendment protects hyperbolic, figurative, and political speech. D.J. Rivera analyzes whether the alleged threat constitutes a &quot;true threat&quot; under the constitutional standard established in <em>Virginia v. Black</em> and subsequent cases.</p>
            <p><strong className="text-navy">Challenging the &quot;course of conduct&quot; element:</strong> Stalking requires a pattern of conduct — two or more incidents. D.J. Rivera challenges whether the alleged incidents constitute a legally sufficient &quot;course of conduct&quot; and whether each incident was directed at the alleged victim with the requisite intent.</p>
            <p><strong className="text-navy">Challenging the reasonableness of fear:</strong> Stalking requires that the alleged victim&apos;s fear be objectively reasonable. D.J. Rivera challenges whether a reasonable person in the alleged victim&apos;s position would actually have feared death or serious bodily harm based on the defendant&apos;s conduct.</p>
            <p><strong className="text-navy">Digital evidence challenges:</strong> Many threats and stalking cases involve digital evidence — text messages, emails, social media posts. D.J. Rivera, with his background in computer engineering and Internet law, is uniquely positioned to challenge the authenticity, attribution, and context of digital communications.</p>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing Threats or Stalking Charges in Virginia?</h2>
          <p className="text-xl mb-10">D.J. Rivera provides aggressive defense for all threats and stalking charges, including cyberstalking. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
