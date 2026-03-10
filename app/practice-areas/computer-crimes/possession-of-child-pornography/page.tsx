import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virginia Child Pornography Defense | § 18.2-374.1:1 | D.J. Rivera, Esq.",
  description: "Facing child pornography charges under Virginia Code § 18.2-374.1:1? D.J. Rivera — D.Eng. Cybersecurity, CISSP, GCFE — provides aggressive, technically sophisticated defense in Virginia and federal courts.",
  keywords: "Virginia child pornography defense lawyer, § 18.2-374.1:1 attorney, CSAM defense Virginia, child exploitation defense attorney Richmond Northern Virginia",
};

export default function PossessionOfChildPornographyPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/practice-areas/computer-crimes" className="text-slate-400 hover:text-gold transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold">Possession of Child Pornography</span>
          </div>
          <div className="inline-block bg-crimson text-white text-xs font-bold px-3 py-1 rounded mb-4">Virginia Code § 18.2-374.1:1</div>
          <h1 className="text-5xl font-serif leading-tight mb-6">Virginia Child Pornography Defense</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Child pornography charges are among the most serious criminal offenses in Virginia and federal law. A conviction carries mandatory sex offender registration, felony prison time, and permanent reputational destruction. The digital evidence in these cases is highly technical — and most defense attorneys are not equipped to challenge it. D.J. Rivera is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">Confidential Consultation — 24/7</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-6">Virginia and Federal Child Pornography Law</h2>
          <div className="bg-slate-50 border-l-4 border-navy rounded-r-2xl p-8 mb-8">
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Virginia Code § 18.2-374.1:1 — Possession of Child Pornography</p>
            <p className="text-slate-700 leading-relaxed">
              It shall be unlawful for any person to knowingly possess any item, representation, data, image, or picture, including any film, photograph, videotape, negative, slide, or any computer-generated image or picture, whether made or produced by electronic, mechanical, or other means, of child pornography. A first offense is a Class 6 felony; subsequent offenses are Class 5 felonies.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Virginia's child pornography statute covers possession of any visual representation of a minor engaged in sexually explicit conduct, including computer-generated images and digital files. The statute's "knowingly possess" element is the primary battleground in most prosecutions — the prosecution must prove not only that the material was present on the defendant's device, but that the defendant knew it was there and knew its nature.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Federal charges under 18 U.S.C. § 2252A are frequently filed alongside or instead of state charges, particularly when the material was transmitted over the internet or across state lines. Federal charges carry mandatory minimum sentences that are significantly more severe than Virginia state penalties.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Penalties — Virginia and Federal</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Charge</th>
                  <th className="px-6 py-4 text-left font-medium">Classification</th>
                  <th className="px-6 py-4 text-left font-medium">Prison</th>
                  <th className="px-6 py-4 text-left font-medium">Sex Offender Registration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">VA Possession (1st offense)</td>
                  <td className="px-6 py-4 text-slate-600">Class 6 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–5 years</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">VA Possession (subsequent)</td>
                  <td className="px-6 py-4 text-slate-600">Class 5 Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">1–10 years</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">VA Production / Distribution</td>
                  <td className="px-6 py-4 text-slate-600">Class 5 Felony+</td>
                  <td className="px-6 py-4 text-crimson font-medium">5–30 years</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Federal Possession (18 U.S.C. § 2252A)</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">0–10 years (possession)</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">Federal Receipt / Distribution</td>
                  <td className="px-6 py-4 text-slate-600">Federal Felony</td>
                  <td className="px-6 py-4 text-crimson font-medium">5–20 years mandatory minimum</td>
                  <td className="px-6 py-4 text-crimson font-medium">Required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Critical:</strong> Do not speak to law enforcement without an attorney present. Investigators are trained to elicit admissions that will be used against you. Any statement you make — even an attempt to explain or minimize — can be used to establish the "knowing" element of the offense. Contact D.J. Rivera immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-navy mb-8">Defense Strategies — Technical and Legal</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">1. Challenging the "Knowing" Element</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The prosecution must prove that the defendant knowingly possessed the material — meaning the defendant was aware of its presence and its nature. Files can end up on a device through many means the defendant did not control: malware, peer-to-peer file sharing applications that automatically download files, cached browser files, or files placed on a device by another person with access to it. D.J. Rivera's forensic expertise allows him to identify and present technical evidence that the defendant did not knowingly possess the material.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">2. Forensic Evidence Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Digital forensic evidence in child pornography cases must be collected, preserved, and analyzed according to strict protocols. D.J. Rivera — a GIAC Certified Forensic Examiner (GCFE) — reviews the government's forensic methodology for errors in imaging, hash value verification, file carving, and metadata analysis. He identifies files that were cached rather than intentionally saved, files in unallocated space that the defendant had no access to, and files that were placed on the device by malware or third parties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">3. IP Address and Attribution Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Many child pornography investigations begin with an IP address identified through peer-to-peer network monitoring or online service provider records. An IP address identifies a network connection — not a specific person. D.J. Rivera challenges IP address attribution by demonstrating that the IP address could have been used by multiple people (shared WiFi, household members, guests) or that the IP address was used by malware operating without the defendant's knowledge.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">4. Fourth Amendment Suppression</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Search warrants in child pornography cases are frequently overbroad — authorizing seizure of all digital devices in a home or office rather than specific devices with probable cause. D.J. Rivera scrutinizes every search warrant for constitutional deficiencies and files suppression motions where the warrant was deficient, overbroad, or improperly executed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-3">5. Age Verification Challenges</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                The prosecution must prove that the individuals depicted in the material were minors. In cases involving computer-generated images, morphed images, or images of individuals whose age is ambiguous, D.J. Rivera challenges the prosecution's age determination methodology and, where appropriate, retains independent experts to challenge the government's conclusions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <Award className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-serif mb-4">The Technical Defense Advantage</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Child pornography cases are built on digital forensic evidence. The government's forensic examiners are highly trained — but they are not infallible. D.J. Rivera holds the GCFE (GIAC Certified Forensic Examiner) certification, the same credential held by many of the forensic examiners who testify for the prosecution. He reviews forensic reports with the same technical expertise as the examiners who wrote them, and he knows exactly where to look for errors, omissions, and alternative explanations.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              His D.Eng. in Cybersecurity Analytics from George Washington University, his CEH and GPEN certifications, and his experience defending critical networks for the US Marine Corps under US Cyber Command give him an unparalleled understanding of how digital evidence is collected, analyzed, and can be challenged. In the most serious cases, this technical expertise can be the difference between a conviction and an acquittal.
            </p>
            <div className="flex flex-wrap gap-2">
              {['GCFE — Forensic Examiner', 'D.Eng. Cybersecurity (GWU)', 'CISSP', 'CEH', 'Federal Court Experience', 'EDVA Trial Experience'].map((badge) => (
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
              { href: '/practice-areas/computer-crimes/federal-child-pornography', title: 'Federal Child Pornography', code: '18 U.S.C. § 2252A' },
              { href: '/practice-areas/computer-crimes/online-solicitation-of-a-minor', title: 'Online Solicitation of a Minor', code: '§ 18.2-374.3' },
              { href: '/practice-areas/computer-crimes/coercion-enticement-of-minor', title: 'Coercion & Enticement of Minor', code: '18 U.S.C. § 2422(b)' },
              { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'CFAA', code: '18 U.S.C. § 1030' },
              { href: '/practice-areas/sexual-assault', title: 'Sexual Assault Defense', code: 'Overview' },
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
          <h2 className="text-3xl font-serif mb-4">Facing Child Pornography Charges? Act Immediately.</h2>
          <p className="text-lg mb-8 text-red-100">Do not speak to investigators. Every statement you make can be used against you. D.J. Rivera is available 24/7 for a confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get a Confidential Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
