import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Shield, BookOpen, Award, MapPin, Phone, Cpu, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "About D.J. Rivera | Virginia Criminal Defense & Cybercrime Attorney",
  description: "Domingo J. Rivera, Esq. — Virginia criminal defense attorney with a D.Eng. in Cybersecurity Analytics, CISSP, CEH, US Cyber Command experience, and the only attorney to beat the FBI/DOJ in a federal jury trial. Serving Richmond and Northern Virginia.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-medium uppercase tracking-widest mb-4">About the Attorney</p>
            <h1 className="text-5xl font-serif leading-tight mb-4">Domingo J. Rivera, Esq.</h1>
            <p className="text-xl text-gold mb-6">D.J. Rivera — Virginia Criminal Defense &amp; Cybercrime Attorney</p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Computer Engineer. Cybersecurity Expert. Trial Attorney. D.J. Rivera is the rare combination of technical mastery and legal excellence — a criminal defense lawyer who has beaten the FBI and the U.S. Department of Justice in federal jury trials.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition"
            >
              Schedule a Free Consultation
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-800 border border-gold/30 rounded-2xl p-8 max-w-sm w-full">
              <div className="text-gold text-xs font-medium uppercase tracking-widest mb-4">Credentials at a Glance</div>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'D.Eng.', desc: 'Cybersecurity Analytics — George Washington University' },
                  { label: 'Ll.M.', desc: 'Advanced Law Degree — Univ. of Alabama School of Law' },
                  { label: 'M.S.', desc: 'Information Technology — Virginia Tech' },
                  { label: 'B.S.', desc: 'Computer Engineering' },
                  { label: 'CISSP', desc: 'Certified Information Systems Security Professional' },
                  { label: 'CEH', desc: 'Certified Ethical Hacker' },
                  { label: 'GCFE', desc: 'GIAC Certified Forensic Examiner' },
                  { label: 'GPEN', desc: 'GIAC Penetration Tester' },
                  { label: 'GCIH', desc: 'GIAC Certified Incident Handler' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded flex-shrink-0 min-w-[52px] text-center">{item.label}</span>
                    <span className="text-slate-300">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybercrime Distinction Banner */}
      <section className="bg-crimson text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Cpu className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-serif">The Only Attorney in the U.S. to Beat the FBI &amp; DOJ in a Federal Jury Trial</h2>
          </div>
          <p className="text-lg text-red-100 max-w-3xl mx-auto">
            In <em>United States v. Cassim</em>, D.J. Rivera secured a complete defense victory in a federal criminal copyright infringement case prosecuted by the FBI and the U.S. Department of Justice — a landmark result that has never been replicated.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8 text-center">A Pioneer in Cyberlaw &amp; Criminal Defense Since 2005</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Attorney Domingo J. Rivera founded iCyberLaw — Rivera Law Group with a singular vision: to provide clients facing criminal charges and Internet law matters with representation that matches the technical sophistication of their adversaries. Since 2005, he has been at the forefront of cyberlaw, handling cases that define the boundaries of Internet regulation, digital evidence, and online rights.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Before entering the legal profession, Mr. Rivera earned a Bachelor of Science in Computer Engineering and a Master of Science in Information Technology from Virginia Polytechnic Institute (Virginia Tech). His technical foundation was further deepened by his service defending critical computer networks for the United States Marine Corps under US Cyber Command. He then earned a Doctor of Engineering (D.Eng.) in Cybersecurity Analytics from George Washington University — one of the nation's premier programs at the intersection of engineering, data science, and national security. He also serves as an Adjunct Instructor at GWU in both Cybersecurity and Artificial Intelligence.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            He holds an advanced law degree (Ll.M.) from the University of Alabama School of Law in addition to his Juris Doctor, and is recognized internationally as an Internet law attorney. He regularly teaches Continuing Legal Education (CLE) seminars to other attorneys on Internet law topics and has published scholarly articles on Internet law in peer-reviewed journals.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            His cybersecurity certifications — CISSP, CEH, GCFE, GPEN, GCIH, and GSLC — are the same certifications held by the government's top cyber investigators. When D.J. Rivera challenges digital evidence in court, he does so with the same technical vocabulary and depth of knowledge as the investigators who collected it. That is not a marketing claim. It is a verifiable credential that no other Virginia criminal defense attorney can match.
          </p>
        </div>
      </section>

      {/* Credentials Tables */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-12 text-center">Academic Degrees &amp; Certifications</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Academic */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-gold" /> Academic Credentials
              </h3>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Degree</th>
                      <th className="px-4 py-3 text-left font-medium">Field / Institution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ['D.Eng.', 'Cybersecurity Analytics — George Washington University'],
                      ['Ll.M.', 'Advanced Law — University of Alabama School of Law'],
                      ['J.D.', 'Doctor of Jurisprudence'],
                      ['M.B.A.', 'IT Management Specialty'],
                      ['M.S.', 'Information Technology — Virginia Tech'],
                      ['B.S.', 'Computer Engineering (Registered E.I.T., Florida)'],
                    ].map(([deg, field]) => (
                      <tr key={deg} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-bold text-navy">{deg}</td>
                        <td className="px-4 py-3 text-slate-600">{field}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-gold" /> Cybersecurity Certifications
              </h3>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Cert.</th>
                      <th className="px-4 py-3 text-left font-medium">Full Name</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ['CISSP', 'Certified Information Systems Security Professional'],
                      ['CEH', 'Certified Ethical Hacker'],
                      ['GCFE', 'GIAC Certified Forensic Examiner'],
                      ['GPEN', 'GIAC Penetration Tester'],
                      ['GCIH', 'GIAC Certified Incident Handler'],
                      ['GSLC', 'GIAC Security Leadership Certification'],
                    ].map(([cert, name]) => (
                      <tr key={cert} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-bold text-crimson">{cert}</td>
                        <td className="px-4 py-3 text-slate-600">{name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3 italic">
                These are the same certifications held by the government's top cyber investigators — meaning D.J. Rivera speaks their technical language in court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire DJ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-12 text-center">Why Clients Choose D.J. Rivera</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">Engineering Expertise No Other Virginia Defense Lawyer Has</h3>
                <p className="text-slate-600 leading-relaxed">
                  Most criminal defense attorneys accept digital evidence at face value because they lack the technical background to challenge it. D.J. Rivera holds a D.Eng. in Cybersecurity Analytics, a B.S. in Computer Engineering, and six elite cybersecurity certifications. He can examine IP attribution, forensic disk images, network traffic captures, and metadata at the engineering level — and find the flaws that win cases.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">Proven Federal Trial Record</h3>
                <p className="text-slate-600 leading-relaxed">
                  D.J. Rivera is the only attorney in the United States to have won a federal jury trial against the FBI and the U.S. Department of Justice in a criminal copyright infringement case (<em>United States v. Cassim</em>). He is also recognized as a Top 100 Trial Lawyer. When the stakes are highest, his record speaks for itself.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">Deep Knowledge of Virginia Criminal Law</h3>
                <p className="text-slate-600 leading-relaxed">
                  Virginia's criminal code is complex, and the difference between a conviction and a dismissal often comes down to understanding the precise statutory language, the applicable case law, and the procedural rules that govern your specific court. D.J. Rivera focuses on Virginia criminal defense across both the state and federal systems.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">24/7 Availability &amp; Direct Attorney Access</h3>
                <p className="text-slate-600 leading-relaxed">
                  Arrests do not happen on a schedule. When you or a loved one is in custody, you need a lawyer immediately. D.J. Rivera is available around the clock for emergency consultations and bond hearings. When you hire him, you work directly with him — not a paralegal or junior associate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-12 text-center">Notable Case Victories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="text-xs font-bold text-crimson uppercase tracking-widest mb-3">Federal Jury Trial — Defense Victory</div>
              <h3 className="text-xl font-serif text-navy mb-3">United States v. Cassim</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                First attorney in the United States to win a federal jury trial against the FBI and U.S. Department of Justice in a federal criminal copyright infringement case. The case involved the alleged leader of the most prolific Internet music piracy group in the world, prosecuted in the Eastern District of Virginia and transferred to the Southern District of Texas.
              </p>
              <div className="mt-4 text-xs text-slate-400">USDC S.D. Texas (originally EDVA)</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="text-xs font-bold text-crimson uppercase tracking-widest mb-3">Summary Judgment Won</div>
              <h3 className="text-xl font-serif text-navy mb-3">Computer Trespass — Summary Judgment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Won summary judgment in a civil computer trespass case, establishing important precedent for Internet law in Virginia. The case required a deep technical analysis of network access and authorization under Virginia's Computer Crimes Act.
              </p>
              <div className="mt-4 text-xs text-slate-400">Virginia Circuit Court</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="text-xs font-bold text-crimson uppercase tracking-widest mb-3">Motion Granted</div>
              <h3 className="text-xl font-serif text-navy mb-3">Copyright Subpoena Quashed</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Successfully filed a Motion to Quash a subpoena issued to Comcast for a client's identity in a BitTorrent copyright infringement case, protecting the client's privacy and preventing prosecution based on flawed IP attribution evidence.
              </p>
              <div className="mt-4 text-xs text-slate-400">Federal District Court</div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-navy mb-8">Recognized Nationally &amp; Internationally</h2>
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 font-medium text-sm">
            {['BBC', 'New York Times', 'Washington Post', 'Federal Computer Weekly', 'Journal of Legal Medicine', 'Mount Vernon Daily'].map((pub) => (
              <span key={pub} className="bg-white border border-slate-200 rounded-full px-6 py-2 shadow-sm">{pub}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Award className="w-5 h-5 text-gold" /><span>Top 100 Trial Lawyers</span></div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-gold" /><span>GWU Adjunct Instructor — Cybersecurity &amp; AI</span></div>
            <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-gold" /><span>CLE Instructor — Internet Law &amp; Cyberlaw</span></div>
          </div>
        </div>
      </section>

      {/* Bar Admissions & Courts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-12 text-center">Bar Admissions &amp; Courts Served</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-navy text-white rounded-2xl p-10">
              <h3 className="text-2xl font-serif text-gold mb-6">Greater Richmond Area</h3>
              <p className="text-slate-300 mb-6">
                D.J. Rivera regularly appears in Richmond City Circuit Court, Richmond General District Court, and the surrounding county courts. Whether your case is in Henrico, Chesterfield, or Hanover, you will have an attorney who knows the local prosecutors, judges, and procedures.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>Richmond City Circuit &amp; General District Court</li>
                <li>Henrico County Circuit &amp; General District Court</li>
                <li>Chesterfield County Circuit &amp; General District Court</li>
                <li>Hanover County Circuit &amp; General District Court</li>
              </ul>
            </div>
            <div className="bg-navy text-white rounded-2xl p-10">
              <h3 className="text-2xl font-serif text-gold mb-6">Northern Virginia &amp; Federal</h3>
              <p className="text-slate-300 mb-6">
                Northern Virginia — particularly the Eastern District of Virginia (EDVA) — is one of the most active federal districts in the country for cybercrime prosecutions. D.J. Rivera provides experienced representation across the entire NoVA corridor and in federal court.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>Alexandria Circuit &amp; General District Court</li>
                <li>Arlington County Circuit &amp; General District Court</li>
                <li>Fairfax County Circuit &amp; General District Court</li>
                <li>Prince William County Circuit &amp; General District Court</li>
                <li>U.S. District Court, Eastern District of Virginia (EDVA)</li>
                <li>U.S. District Court, Western District of Virginia (WDVA)</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
            <p className="text-slate-600 text-sm">
              <strong className="text-navy">Also admitted pro hac vice in:</strong> District of Columbia, Maryland, California, Texas, New York, Florida, North Carolina, Alabama, Arkansas, and other jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Ready to Fight for Your Freedom?</h2>
          <p className="text-xl mb-10">
            Contact D.J. Rivera today for a free, confidential consultation. Available 24/7 for urgent matters — including federal cybercrime charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-10 py-4 rounded text-lg font-medium transition">
              Get Your Free Consultation
            </Link>
            <Link href="/practice-areas/computer-crimes" className="inline-block border-2 border-white hover:bg-white hover:text-crimson px-10 py-4 rounded text-lg font-medium transition">
              Computer Crimes Defense
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
