import { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, Shield, Award, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Computer Crimes Defense | Virginia & Federal Cybercrime Attorney D.J. Rivera",
  description: "D.J. Rivera — D.Eng. Cybersecurity Analytics (GWU), CISSP, CEH, GCFE, US Cyber Command veteran. The only attorney in the US to beat the FBI & DOJ in a federal jury trial. Virginia Computer Crimes Act & CFAA defense.",
};

export default function ComputerCrimesPage() {
  return (
    <div className="bg-white">

      {/* Hero — visually distinct from all other practice areas */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-gold" />
            <span className="text-gold font-medium uppercase tracking-widest text-sm">Computer Crimes Defense</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Engineering Expertise.<br />
            <span className="text-gold">Legal Excellence.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            When the prosecution&apos;s case rests on digital evidence — IP addresses, forensic disk images, network logs, metadata — you need more than a lawyer. You need a Computer Engineer with a D.Eng. in Cybersecurity Analytics, CISSP and CEH certifications, and US Cyber Command experience who also holds a J.D. and an Ll.M. That attorney is D.J. Rivera.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {['D.Eng. Cybersecurity (GWU)', 'CISSP', 'CEH', 'GCFE', 'GPEN', 'GCIH', 'US Cyber Command', 'B.S. Computer Engineering', 'M.S. IT — Virginia Tech'].map((badge) => (
              <span key={badge} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">
              Get a Free Consultation — 24/7
            </Link>
            <Link href="/case-studies/computer-crimes" className="inline-block border-2 border-white/50 hover:border-white text-white px-10 py-4 rounded text-lg font-medium transition">
              View Computer Crime Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Landmark Victory Banner */}
      <section className="bg-crimson text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <Award className="w-14 h-14 text-white flex-shrink-0 mx-auto md:mx-0" />
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-red-200 mb-1">Landmark Federal Jury Trial Victory</div>
              <h2 className="text-2xl font-serif mb-2">United States v. Cassim — First Defense Victory Against FBI &amp; DOJ in Federal Music Piracy Trial</h2>
              <p className="text-red-100 leading-relaxed">
                D.J. Rivera is the <strong>only attorney in the United States</strong> to have won a federal jury trial against the FBI and the U.S. Department of Justice in a federal criminal copyright infringement case. The case involved the alleged leader of the world&apos;s most prolific Internet music piracy group, prosecuted in the Eastern District of Virginia. Rivera&apos;s deep technical knowledge of Internet technology, copyright law, and digital evidence provided the decisive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Case Is Different */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8 text-center">Why Computer Crime Cases Demand a Different Kind of Attorney</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            In a DUI case, a skilled attorney can challenge the officer&apos;s observations or the breathalyzer calibration records. In a drug case, the attorney can attack the chain of custody of the physical evidence. But in a computer crime case, the prosecution&apos;s entire case is built on digital evidence — and most defense attorneys simply do not have the technical background to challenge it. They accept the government&apos;s forensic reports, the IP address logs, and the metadata analysis at face value, because they have no choice.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            D.J. Rivera is different. Before he was a lawyer, he was a Computer Engineer. He holds a B.S. in Computer Engineering, an M.S. in Information Technology from Virginia Tech, and a Doctor of Engineering (D.Eng.) in Cybersecurity Analytics from George Washington University. He holds six elite cybersecurity certifications — CISSP, CEH, GCFE, GPEN, GCIH, and GSLC — the same credentials held by the government&apos;s top cyber investigators. He defended critical computer networks for the United States Marine Corps under US Cyber Command. He teaches cybersecurity and AI at GWU as an Adjunct Instructor.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            When D.J. Rivera reviews the government&apos;s digital evidence in your case, he is not reading a report he barely understands. He is examining the same data, with the same technical vocabulary, and the same depth of knowledge as the investigators who collected it — and he is looking for every flaw in methodology, chain of custody, and interpretation that can be decisive at trial.
          </p>
        </div>
      </section>

      {/* Credentials Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-12 text-center">Credentials That Set D.J. Rivera Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <Cpu className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-3">Engineering Degrees</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                D.Eng. in Cybersecurity Analytics (GWU), M.S. in Information Technology (Virginia Tech), B.S. in Computer Engineering. These are not honorary titles — they represent years of rigorous technical training at the engineering level.
              </p>
              <div className="text-xs text-slate-400">No other Virginia criminal defense attorney holds these credentials.</div>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <Shield className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-3">Government-Level Certifications</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                CISSP, CEH, GCFE, GPEN, GCIH, GSLC — the same certifications held by FBI cyber investigators, NSA analysts, and federal forensic examiners. When D.J. Rivera challenges the government&apos;s digital evidence, he speaks their language.
              </p>
              <div className="text-xs text-slate-400">Same certifications as the investigators building the case against you.</div>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <Award className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Federal Trial Record</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                The only attorney in the US to beat the FBI and DOJ in a federal jury trial. Recognized as a Top 100 Trial Lawyer. Admitted in Virginia and has litigated cases in VA, DC, MD, CA, TX, NY, FL, NC, AL, AR, and other jurisdictions.
              </p>
              <div className="text-xs text-slate-400">Featured in BBC, New York Times, Washington Post, and Federal Computer Weekly.</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Challenge Digital Evidence */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6 text-center">How D.J. Rivera Challenges Digital Evidence</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Digital evidence is not infallible. IP addresses can be spoofed, shared, or dynamically assigned. Forensic images can be contaminated. Metadata can be manipulated. Chain of custody can be broken. D.J. Rivera knows exactly where to look.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'IP Address Attribution', desc: 'An IP address does not identify a person — it identifies a network connection. Dynamic assignment, shared networks, VPNs, Tor, and spoofing can all undermine the government\'s attribution evidence. D.J. Rivera understands these technical realities and challenges them in court.' },
              { title: 'Forensic Image Integrity', desc: 'Digital forensic examinations must follow strict protocols to preserve the integrity of evidence. Hash value verification, write-blocker use, chain of custody documentation, and proper imaging procedures are all subject to challenge if not correctly followed.' },
              { title: 'Metadata Analysis', desc: 'File metadata — timestamps, author fields, geolocation data — can be manipulated, misinterpreted, or incorrectly attributed. D.J. Rivera examines metadata evidence with the same rigor as the government\'s forensic examiners.' },
              { title: 'Network Traffic Analysis', desc: 'Packet captures, log files, and network traffic analysis require deep technical expertise to interpret correctly. Errors in analysis, selective capture, and misattribution of traffic are common vulnerabilities in government digital evidence.' },
              { title: 'Malware & Unauthorized Access', desc: 'In many computer crime cases, the defendant\'s device was compromised by malware or accessed by a third party without their knowledge. D.J. Rivera can analyze the technical evidence to identify alternative explanations for the government\'s forensic findings.' },
              { title: 'Chain of Custody', desc: 'Digital evidence must be handled according to strict chain of custody protocols from seizure through trial. Any break in the chain — improper storage, unauthorized access, or failure to document handling — can be grounds for suppression.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virginia Computer Crimes Act */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-4">Virginia Computer Crimes Act (VCCA)</h2>
          <p className="text-lg text-slate-600 mb-10">Virginia Code §§ 18.2-152.1 through 18.2-152.15 govern computer crimes at the state level. These statutes carry serious penalties and are frequently charged alongside federal offenses.</p>
          <div className="space-y-8">
            {[
              { code: '§ 18.2-152.3', title: 'Computer Fraud', desc: 'Using a computer to obtain property, services, or money by false pretenses, embezzlement, or larceny. Class 5 felony (up to 10 years) if value ≥ $1,000; Class 6 felony for lesser amounts.' },
              { code: '§ 18.2-152.4', title: 'Computer Trespass', desc: 'Intentionally accessing a computer without authority or exceeding authorized access to alter, damage, or destroy data. Class 1 misdemeanor to Class 6 felony depending on damage caused.' },
              { code: '§ 18.2-152.5', title: 'Computer Invasion of Privacy', desc: 'Using a computer to examine personal information about another person without authority. Class 3 misdemeanor; Class 2 misdemeanor for financial records; Class 6 felony on repeat or if used in another crime.' },
              { code: '§ 18.2-152.6', title: 'Theft of Computer Services', desc: 'Using a computer or network without authority to obtain services. Class 1 misdemeanor; Class 6 felony if value ≥ $2,500.' },
              { code: '§ 18.2-152.7', title: 'Personal Trespass by Computer', desc: 'Using a computer to cause physical injury to another person. Class 6 felony; Class 3 felony if serious bodily injury results.' },
              { code: '§ 18.2-152.7:1', title: 'Harassment by Computer', desc: 'Using a computer to communicate obscene, vulgar, or threatening language with intent to coerce, intimidate, or harass. Class 1 misdemeanor (can be enhanced on repeat offenses).' },
              { code: '§ 18.2-374.1:1', title: 'Possession of Child Pornography', desc: 'Knowing possession of any visual representation of a minor engaged in sexually explicit conduct. Class 6 felony (first offense); Class 5 felony on subsequent offenses.' },
              { code: '§ 18.2-374.3', title: 'Online Solicitation of a Minor', desc: 'Using a computer or electronic device to solicit, seduce, or entice a minor (or person believed to be a minor) to engage in sexual activity. Class 6 felony (enhanced to higher felonies based on age and conduct).' },
            ].map((item) => (
              <div key={item.code} className="border-l-4 border-crimson pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-crimson text-white text-xs font-bold px-3 py-1 rounded">{item.code}</span>
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Federal Statutes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-4">Federal Cybercrime Statutes</h2>
          <p className="text-lg text-slate-600 mb-4">
            Clients in Northern Virginia are frequently charged in the Eastern District of Virginia (EDVA) — one of the most aggressive federal districts for cybercrime prosecutions in the country. D.J. Rivera has tried and won federal cases in EDVA.
          </p>
          <div className="bg-crimson/10 border border-crimson/20 rounded-xl p-5 mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-crimson flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                <strong>Important:</strong> If federal investigators contact you about a computer crime, do not speak to them without an attorney present. Every statement you make can be used against you. Contact D.J. Rivera immediately.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {[
              { code: '18 U.S.C. § 1030', title: 'Computer Fraud and Abuse Act (CFAA)', desc: 'The primary federal hacking law. Covers unauthorized access to protected computers, obtaining information, causing damage, fraud, password trafficking, and extortion. Applies to almost any internet-connected device. Penalties range from misdemeanors to 20+ years in federal prison. After Van Buren v. United States (2021), the definition of "exceeding authorized access" was significantly narrowed — a key defense strategy.' },
              { code: '18 U.S.C. § 1343', title: 'Wire Fraud', desc: 'Using electronic communications in furtherance of a scheme to defraud. Frequently charged alongside CFAA. Penalties: up to 20 years (30 years if a financial institution is involved).' },
              { code: '18 U.S.C. § 1028 & § 1028A', title: 'Identity Theft & Aggravated Identity Theft', desc: 'Knowingly using another person\'s identification to commit fraud. Aggravated identity theft carries a mandatory additional 2-year consecutive sentence that even a judge cannot reduce.' },
              { code: '17 U.S.C. § 506 / 18 U.S.C. § 2319', title: 'Criminal Copyright Infringement', desc: 'Willful copyright infringement for commercial advantage or private financial gain. D.J. Rivera is the only attorney in the US to have won a federal jury trial against the FBI and DOJ in a criminal copyright infringement case (United States v. Cassim).' },
              { code: '18 U.S.C. § 2252A', title: 'Child Pornography Offenses (Federal)', desc: 'Possession, receipt, distribution, or production of child sexual abuse material over the Internet. Mandatory minimum sentences of 5–20+ years. Digital forensics challenges — including IP attribution, device access, and chain of custody — are critical in these cases.' },
              { code: '18 U.S.C. § 2422(b)', title: 'Coercion and Enticement of a Minor', desc: 'Online solicitation or grooming of a minor. Mandatory minimum sentence of 10 years; maximum of life imprisonment. Undercover law enforcement operations are common — entrapment and predisposition defenses may apply.' },
            ].map((item) => (
              <div key={item.code} className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-navy text-white text-xs font-bold px-3 py-1 rounded">{item.code}</span>
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalty Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-10 text-center">Computer Crime Penalties at a Glance</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Offense</th>
                  <th className="px-6 py-4 text-left font-medium">Code</th>
                  <th className="px-6 py-4 text-left font-medium">Level</th>
                  <th className="px-6 py-4 text-left font-medium">Maximum Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  ['Computer Fraud (≥$1,000)', '§ 18.2-152.3', 'Class 5 Felony', 'Up to 10 years / $2,500 fine'],
                  ['Computer Trespass (damage)', '§ 18.2-152.4', 'Class 6 Felony', 'Up to 5 years / $2,500 fine'],
                  ['Computer Trespass (no damage)', '§ 18.2-152.4', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Invasion of Privacy', '§ 18.2-152.5', 'Class 3 Misdemeanor', 'Up to $500 fine'],
                  ['Harassment by Computer', '§ 18.2-152.7:1', 'Class 1 Misdemeanor', 'Up to 12 months / $2,500 fine'],
                  ['Possession of Child Porn (1st)', '§ 18.2-374.1:1', 'Class 6 Felony', 'Up to 5 years'],
                  ['Online Solicitation of Minor', '§ 18.2-374.3', 'Class 6 Felony+', 'Up to 5 years (enhanced)'],
                  ['CFAA (federal hacking)', '18 U.S.C. § 1030', 'Federal Felony', 'Up to 20 years federal prison'],
                  ['Criminal Copyright Infringement', '17 U.S.C. § 506', 'Federal Felony', 'Up to 5 years (first offense)'],
                  ['Federal Child Porn (receipt)', '18 U.S.C. § 2252A', 'Federal Felony', '5–20 years mandatory minimum'],
                  ['Coercion/Enticement of Minor', '18 U.S.C. § 2422(b)', 'Federal Felony', '10 years to life (mandatory min.)'],
                ].map(([offense, code, level, penalty]) => (
                  <tr key={code + offense} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{offense}</td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{code}</td>
                    <td className="px-6 py-4 text-slate-600">{level}</td>
                    <td className="px-6 py-4 text-crimson font-medium">{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Defense Strategies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Defense Strategies in Computer Crime Cases</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><strong className="text-navy">Challenging authorization:</strong> The CFAA&apos;s core prohibition is on &quot;unauthorized&quot; access. After the Supreme Court&apos;s decision in <em>Van Buren v. United States</em> (2021), the definition of &quot;exceeding authorized access&quot; was significantly narrowed. Many prosecutions that previously seemed straightforward now face serious legal challenges.</p>
            <p><strong className="text-navy">Suppression of digital evidence:</strong> The Fourth Amendment applies to digital searches. Warrants must be specific and supported by probable cause. Overbroad warrants, improper execution, and failures to follow proper forensic protocols can all result in suppression of key evidence.</p>
            <p><strong className="text-navy">Computer forensics challenges:</strong> D.J. Rivera can review the government&apos;s forensic methodology and identify flaws in how evidence was collected, preserved, analyzed, and presented. This includes challenging hash value calculations, forensic image integrity, metadata interpretation, and IP attribution.</p>
            <p><strong className="text-navy">Lack of criminal intent:</strong> Many computer crime statutes require proof of willful or intentional conduct. Mistaken belief of authorization, lack of knowledge, and good-faith access are all viable defenses depending on the facts.</p>
            <p><strong className="text-navy">Entrapment and predisposition:</strong> In online solicitation and child exploitation cases involving undercover law enforcement, entrapment is a recognized defense. The government must prove the defendant was predisposed to commit the crime before law enforcement initiated contact.</p>
            <p><strong className="text-navy">Negotiating reduced charges or pretrial diversion:</strong> Not every computer crime case goes to trial. D.J. Rivera&apos;s technical expertise and legal experience allow him to negotiate from a position of strength, often achieving reduced charges, deferred prosecution agreements, or alternatives to incarceration.</p>
          </div>
        </div>
      </section>

      {/* Deep-Dive Sub-Pages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-4 text-center">In-Depth Articles on Every Computer Crime</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Each charge carries its own statutes, penalties, and defense strategies. Explore our detailed articles for the specific offense you are facing.</p>
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-navy mb-5 uppercase tracking-widest text-sm">Virginia Computer Crimes Act</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: '/practice-areas/computer-crimes/computer-fraud', title: 'Computer Fraud', code: '§ 18.2-152.3', desc: 'False pretenses, embezzlement, or larceny using a computer.' },
                { href: '/practice-areas/computer-crimes/computer-trespass', title: 'Computer Trespass / Hacking', code: '§ 18.2-152.4', desc: 'Unauthorized access with intent to alter, damage, or destroy data.' },
                { href: '/practice-areas/computer-crimes/computer-invasion-of-privacy', title: 'Computer Invasion of Privacy', code: '§ 18.2-152.5', desc: 'Unauthorized examination of personal or financial information.' },
                { href: '/practice-areas/computer-crimes/theft-of-computer-services', title: 'Theft of Computer Services', code: '§ 18.2-152.6', desc: 'Unauthorized use of computing resources, cloud services, or network bandwidth.' },
                { href: '/practice-areas/computer-crimes/harassment-by-computer', title: 'Harassment by Computer', code: '§ 18.2-152.7:1', desc: 'Cyberstalking and online harassment via email, text, or social media.' },
                { href: '/practice-areas/computer-crimes/possession-of-child-pornography', title: 'Possession of Child Pornography', code: '§ 18.2-374.1:1', desc: 'Virginia state CSAM possession — Class 6 felony with sex offender registration.' },
                { href: '/practice-areas/computer-crimes/online-solicitation-of-a-minor', title: 'Online Solicitation of a Minor', code: '§ 18.2-374.3', desc: 'Internet solicitation of a minor or undercover officer posing as a minor.' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block border border-slate-200 rounded-xl p-6 hover:border-crimson hover:shadow-md transition group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-crimson text-white text-xs font-bold px-2 py-0.5 rounded">{item.code}</span>
                  </div>
                  <p className="font-semibold text-navy text-base mb-1 group-hover:text-crimson transition">{item.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  <p className="text-xs text-crimson font-medium mt-3">Read full article →</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-navy mb-5 uppercase tracking-widest text-sm">Federal Cybercrime Statutes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: '/practice-areas/computer-crimes/computer-fraud-and-abuse-act', title: 'Computer Fraud and Abuse Act', code: '18 U.S.C. § 1030', desc: 'The primary federal hacking statute. Covers unauthorized access, damage, fraud, and extortion.' },
                { href: '/practice-areas/computer-crimes/wire-fraud', title: 'Wire Fraud', code: '18 U.S.C. § 1343', desc: 'Electronic communications used to further a scheme to defraud. Up to 20 years.' },
                { href: '/practice-areas/computer-crimes/identity-theft', title: 'Identity Theft & Aggravated Identity Theft', code: '18 U.S.C. §§ 1028 & 1028A', desc: '§ 1028A carries a mandatory 2-year consecutive sentence no judge can reduce.' },
                { href: '/practice-areas/computer-crimes/criminal-copyright-infringement', title: 'Criminal Copyright Infringement', code: '17 U.S.C. § 506', desc: 'D.J. Rivera is the ONLY attorney to beat the FBI & DOJ in a federal copyright jury trial.' },
                { href: '/practice-areas/computer-crimes/federal-child-pornography', title: 'Federal Child Pornography', code: '18 U.S.C. § 2252A', desc: 'Mandatory minimums of 5–20 years. Technical forensic defense is critical.' },
                { href: '/practice-areas/computer-crimes/coercion-enticement-of-minor', title: 'Coercion & Enticement of Minor', code: '18 U.S.C. § 2422(b)', desc: '10-year mandatory minimum to life. Entrapment defense available in undercover cases.' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block border border-slate-200 rounded-xl p-6 hover:border-navy hover:shadow-md transition group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-navy text-white text-xs font-bold px-2 py-0.5 rounded">{item.code}</span>
                  </div>
                  <p className="font-semibold text-navy text-base mb-1 group-hover:text-navy transition">{item.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  <p className="text-xs text-navy font-medium mt-3">Read full article →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Cpu className="w-14 h-14 text-gold mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-6">Facing State or Federal Computer Crime Charges?</h2>
          <p className="text-xl text-slate-300 mb-4">
            Time is critical — especially in federal cases. Contact D.J. Rivera immediately for a confidential consultation. Do not speak to investigators without an attorney.
          </p>
          <p className="text-slate-400 mb-10 text-sm">
            Also available through <strong className="text-white">iCyberLaw — Rivera Law Group</strong> at{' '}
            <a href="https://icyberlaw.com" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">icyberlaw.com</a>{' '}
            for complex cybercrime, AI law, Internet defamation, and intellectual property matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-12 py-5 rounded text-xl font-medium transition">
              Get Your Free Consultation — 24/7
            </Link>
            <Link href="/case-studies/computer-crimes" className="inline-block border-2 border-white/50 hover:border-white text-white px-12 py-5 rounded text-xl font-medium transition">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
