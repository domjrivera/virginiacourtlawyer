import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Computer Crimes Lawyer | Federal CFAA Defense Richmond & Northern VA",
  description: "Aggressive defense against Virginia Computer Crimes (§18.2-152) and federal cybercrimes (CFAA 18 U.S.C. §1030, wire fraud, identity theft, child exploitation) in Richmond, Henrico, Chesterfield, Hanover, Alexandria, Arlington, Fairfax & Prince William.",
  keywords: ["Virginia computer crimes lawyer", "Richmond CFAA attorney", "Northern Virginia hacking defense", "18 U.S.C. 1030 defense", "computer fraud defense Virginia", "EDVA cybercrime", "cyberbullying lawyer Richmond", "Fairfax identity theft lawyer"],
  openGraph: {
    title: "Virginia & Federal Computer Crimes Defense – D.J. Rivera, Esq.",
    description: "Experienced defense in both state and federal court for all cyber-related charges.",
  },
};

export default function ComputerCrimesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia & Federal Computer Crimes Defense</h1>
        <p className="text-2xl text-crimson">§18.2-152 Series • 18 U.S.C. § 1030 (CFAA) • Serving Richmond & Northern Virginia</p>
        <p className="mt-8 text-xl">D.J. Rivera provides aggressive, experienced defense for every type of computer and cyber-related criminal charge in both Virginia state courts and the Eastern District of Virginia federal court.</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-8 rounded-2xl mb-16">
        <p className="font-medium text-amber-800">Important: Many computer cases in Northern Virginia trigger federal charges. Having an attorney experienced in both systems can make the difference between conviction and dismissal.</p>
      </div>

      {/* ==================== VIRGINIA SECTION ==================== */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mb-12">Virginia Computer Crimes (§ 18.2-152 et seq.)</h2>

      <div className="space-y-20">
        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.3 — Computer Fraud</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-6 text-sm leading-relaxed border-l-4 border-crimson">
            Any person who uses a computer or computer network, without authority and:<br/>
            1. Obtains property or services by false pretenses;<br/>
            2. Embezzles or commits larceny; or<br/>
            3. Converts the property of another;<br/>
            is guilty of the crime of computer fraud.<br/><br/>
            If the value of the property or services obtained is $1,000 or more, punishable as a Class 5 felony. If less than $1,000, Class 1 misdemeanor.
          </div>
          <p><strong>Penalties:</strong> Class 5 felony ($1,000+) or Class 1 misdemeanor.</p>
          <p className="mt-4"><strong>Defense Strategies:</strong> Lack of intent to defraud, authorized access disputes, value disputes, insufficient evidence of “without authority,” suppression of evidence from improper searches.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.4 — Computer Trespass</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-6 text-sm leading-relaxed border-l-4 border-crimson">
            It is unlawful for any person, with malicious intent or through intentionally deceptive means and without authority, to damage, alter, disable data/programs, install malware/keyloggers, etc.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; upgraded to Class 6 felony if it affects government systems, causes $1,000+ damage, or involves more than 5 computers.</p>
          <p className="mt-4"><strong>Defense Strategies:</strong> Consent/authorization, lack of malicious intent, accidental access, challenge forensic evidence.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.5 — Computer Invasion of Privacy</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-6 text-sm leading-relaxed border-l-4 border-crimson">
            Intentionally examining without authority any employment, salary, credit, or identifying information relating to another person.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; Class 6 felony on repeat offense, if sold, or used in another crime.</p>
          <p className="mt-4"><strong>Defense Strategies:</strong> Lack of intent, authorized access, no “examination” occurred, constitutional challenges.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.6 — Theft of Computer Services</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-6 text-sm leading-relaxed border-l-4 border-crimson">
            Willfully obtaining computer services without authority.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; Class 6 felony if valued at $2,500 or more.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.7:1 — Harassment by Computer (Cyberbullying / Cyberstalking)</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-6 text-sm leading-relaxed border-l-4 border-crimson">
            Using a computer to communicate obscene, vulgar, profane, lewd, lascivious, or indecent language, or threats, with intent to coerce, intimidate, or harass.
          </div>
          <p><strong>Penalty:</strong> Class 1 misdemeanor (can be enhanced).</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.3:1 — Transmission of Unsolicited Commercial Electronic Mail (Spam)</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-6 text-sm leading-relaxed border-l-4 border-crimson">
            Using a computer with intent to falsify transmission information in connection with bulk spam.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; Class 6 felony for high volume or high revenue.</p>
        </div>
      </div>

      {/* ==================== FEDERAL SECTION ==================== */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mt-24 mb-12">Federal Cybercrime Statutes</h2>
      <p className="text-lg mb-10">Clients in Northern Virginia are frequently charged in the Eastern District of Virginia (EDVA) — one of the most aggressive federal districts for cybercrime prosecutions in the country.</p>

      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1030 — Computer Fraud and Abuse Act (CFAA)</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-6 text-sm leading-relaxed border-l-4 border-crimson">
            The primary federal “hacking” law. Covers unauthorized access to protected computers, obtaining information, causing damage, fraud, password trafficking, and extortion. Applies to almost any internet-connected device.
          </div>
          <p><strong>Penalties:</strong> Range from misdemeanors to 20+ years in federal prison depending on damage, intent, and loss caused.</p>
          <p className="mt-4"><strong>Defense Strategies:</strong> “Authorized access” or “exceeding authorized access” challenges (key after Van Buren v. United States Supreme Court ruling), lack of intent, no damage caused, overbroad application of the statute.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1343 — Wire Fraud</h3>
          <p className="text-lg">Using electronic communications (email, internet, wire transfers) in furtherance of a scheme to defraud. Frequently charged alongside CFAA.</p>
          <p><strong>Penalties:</strong> Up to 20 years (30 years if a financial institution or disaster relief is involved).</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1028 & § 1028A — Identity Theft & Aggravated Identity Theft</h3>
          <p className="text-lg">Knowingly using another person’s identification to commit fraud. Aggravated identity theft carries a mandatory additional 2-year consecutive sentence.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">Child Exploitation & CSAM Offenses (18 U.S.C. §§ 2251–2252A)</h3>
          <p className="text-lg">Receipt, distribution, possession, or production of child sexual abuse material over the internet. Extremely serious federal charges with mandatory minimum sentences of 5–15+ years.</p>
        </div>
      </div>

      {/* Defense Strategies */}
      <h2 className="text-4xl font-serif text-navy mt-24 mb-10">Common Defense Strategies in Computer Crime Cases</h2>
      <ul className="list-disc pl-8 space-y-4 text-lg">
        <li>Challenging whether access was truly “without authority” or “exceeding authorized access”</li>
        <li>Suppression of evidence from unlawful searches or warrants</li>
        <li>Computer forensics challenges — proving who actually committed the act</li>
        <li>Lack of criminal intent or mistaken belief of authorization</li>
        <li>Negotiating reduced charges or pretrial diversion</li>
        <li>Minimizing federal sentencing exposure under the U.S. Sentencing Guidelines</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl mb-6">Facing State or Federal Computer Crime Charges?</h3>
        <p className="text-xl mb-8">Time is critical — especially in federal cases. Contact D.J. Rivera immediately for a confidential consultation.</p>
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Get Your Free Consultation — 24/7 Availability
        </Link>
      </div>
    </div>
  );
}
