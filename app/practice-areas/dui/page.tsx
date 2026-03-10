import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia DUI / DWI Defense Attorney | Richmond & Northern VA | D.J. Rivera",
  description: "Aggressive DUI/DWI defense in Richmond, Henrico, Chesterfield, Hanover, Alexandria, Arlington, Fairfax & Prince William. § 18.2-266 charges challenged by D.J. Rivera, Esq. Free consultation 24/7.",
};

export default function DUIPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Practice Area</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia DUI / DWI Defense</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">A DUI conviction in Virginia carries mandatory jail time, license suspension, and a permanent criminal record. D.J. Rivera challenges every element of the government&apos;s case — from the traffic stop to the breathalyzer result.</p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Free Consultation — Available 24/7</Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Virginia Code § 18.2-266 — The DUI Statute</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">Virginia&apos;s DUI law is broader than most people realize. It is unlawful to drive while: (1) having a blood alcohol concentration (BAC) of 0.08% or more; (2) under the influence of alcohol to any degree that impairs safe driving; (3) under the influence of any drug or narcotic; (4) under the combined influence of alcohol and drugs; or (5) having a blood concentration of certain controlled substances (cocaine, methamphetamine, PCP, MDMA) above specified thresholds. Critically, a BAC below 0.08% does not guarantee acquittal — prosecutors can still pursue a conviction based on observed impairment.</p>
          <p className="text-lg text-slate-700 leading-relaxed">Virginia also has a per se offense for BAC of 0.15% or higher, which triggers mandatory minimum jail sentences even on a first offense. A BAC of 0.20% or higher triggers an even longer mandatory minimum. These enhanced penalties make it critical to challenge the accuracy of any chemical test.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">DUI Penalties in Virginia</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Jail</th>
                  <th className="px-6 py-4 text-left font-medium">Fine</th>
                  <th className="px-6 py-4 text-left font-medium">License</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['1st Offense (BAC < 0.15)', 'Class 1 Misdemeanor', 'Up to 12 months', 'Up to $2,500', '12-month suspension'],
                  ['1st Offense (BAC 0.15–0.20)', 'Class 1 Misdemeanor', '5-day mandatory minimum', 'Up to $2,500', '12-month suspension'],
                  ['1st Offense (BAC > 0.20)', 'Class 1 Misdemeanor', '10-day mandatory minimum', 'Up to $2,500', '12-month suspension'],
                  ['2nd Offense (within 5 years)', 'Class 1 Misdemeanor', '20-day mandatory minimum', '$500–$2,500', '3-year suspension'],
                  ['2nd Offense (within 10 years)', 'Class 1 Misdemeanor', '10-day mandatory minimum', '$500–$2,500', '3-year suspension'],
                  ['3rd Offense (within 10 years)', 'Class 6 Felony', '90-day mandatory minimum', '$1,000+', 'Indefinite revocation'],
                  ['DUI with Minor Passenger', 'Enhanced', 'Mandatory additional 5 days', 'Enhanced fine', 'Enhanced suspension'],
                  ['DUI Maiming (§ 18.2-51.4)', 'Class 6 Felony', '1–5 years', 'Up to $2,500', 'Revocation'],
                ].map(([offense, cls, jail, fine, lic]) => (
                  <tr key={offense} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{offense}</td>
                    <td className="px-6 py-4 text-slate-600">{cls}</td>
                    <td className="px-6 py-4 text-crimson font-medium">{jail}</td>
                    <td className="px-6 py-4 text-slate-600">{fine}</td>
                    <td className="px-6 py-4 text-slate-600">{lic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3 italic">All DUI convictions also require VASAP completion and ignition interlock installation for license restoration.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">How D.J. Rivera Defends DUI Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Challenging the traffic stop:</strong> The Fourth Amendment requires reasonable articulable suspicion before a stop. If the stop was pretextual or unsupported, all evidence gathered afterward — including the breathalyzer result — may be suppressed.</p>
            <p><strong className="text-navy">Breathalyzer accuracy and calibration:</strong> Virginia uses the Intoxilyzer 5000 and EC/IR II devices. These require regular calibration, proper maintenance, and correct operation by a certified operator. D.J. Rivera reviews calibration logs and operator certifications to identify any deviation from required protocols.</p>
            <p><strong className="text-navy">Blood test chain of custody:</strong> Blood draws must be performed by qualified personnel, stored properly, and analyzed by a certified laboratory. Any break in the chain of custody can undermine the reliability of the result.</p>
            <p><strong className="text-navy">Field sobriety test reliability:</strong> The Standardized Field Sobriety Tests (SFSTs) have well-documented limitations. Medical conditions, uneven surfaces, footwear, and officer instruction errors can all affect performance. D.J. Rivera scrutinizes the officer&apos;s administration of these tests.</p>
            <p><strong className="text-navy">Rising blood alcohol defense:</strong> BAC continues to rise for 30–90 minutes after the last drink. If you were stopped shortly after drinking, your BAC at the time of driving may have been lower than the test result obtained later at the station.</p>
            <p><strong className="text-navy">Negotiating reduced charges:</strong> In appropriate cases, D.J. Rivera negotiates for a reduction to a &quot;wet reckless&quot; (reckless driving involving alcohol), which avoids the mandatory license suspension and VASAP requirements of a DUI conviction.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Frequently Asked Questions — Virginia DUI</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I have to take the breathalyzer test?', a: 'Virginia\'s implied consent law (§ 18.2-268.2) requires you to submit to a post-arrest breathalyzer or blood test if lawfully arrested for DUI. Refusal is a separate civil offense (first refusal) or criminal offense (subsequent refusals) and results in an automatic 12-month license suspension. Pre-arrest preliminary breath tests are voluntary.' },
              { q: 'Can I get a restricted license after a DUI?', a: 'Yes, in most cases. After a first-offense DUI conviction, you can petition the court for a restricted license that allows driving to work, school, and medical appointments — but only after installing an ignition interlock device and enrolling in VASAP.' },
              { q: 'Will a DUI conviction affect my job?', a: 'A DUI conviction is a criminal conviction that appears on background checks. It can affect professional licenses, security clearances, CDLs, and employment in many fields. Avoiding a conviction or having the charge reduced is critical for protecting your career.' },
              { q: 'What if I was charged with DUI and drugs, not alcohol?', a: 'Virginia Code § 18.2-266(iii) covers impairment by any drug. Drug DUI cases often involve blood tests rather than breathalyzers, and the science of drug impairment is far less settled than alcohol impairment. D.J. Rivera can challenge the blood test methodology and expert testimony about drug impairment.' },
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
          <AlertTriangle className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-6">Charged with DUI in Virginia?</h2>
          <p className="text-xl mb-10">Act immediately — your license suspension begins quickly after arrest. D.J. Rivera is available 24/7 for emergency consultations.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
