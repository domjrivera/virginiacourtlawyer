import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia & Federal Computer Crimes Lawyer | CFAA & §18.2-152 Defense – Richmond & Northern VA",
  description: "D.J. Rivera (tech-background attorney) provides aggressive defense for Virginia computer crimes (§18.2-152) and federal cyber offenses (CFAA 18 U.S.C. §1030) in Richmond, Henrico, Fairfax, Arlington, and the Eastern District of Virginia (EDVA).",
  keywords: ["Virginia computer crimes lawyer", "federal CFAA attorney Northern Virginia", "Richmond cyber crime defense", "18 U.S.C. 1030 defense", "EDVA hacking lawyer", "computer fraud defense Virginia", "D.J. Rivera"],
};

export default function ComputerCrimesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia & Federal Computer Crimes Defense</h1>
        <p className="text-2xl text-crimson">§18.2-152 Series • 18 U.S.C. § 1030 (CFAA) • Eastern District of Virginia</p>
        <p className="mt-8 text-xl max-w-3xl mx-auto">
          With D.J. Rivera’s strong computer technology background, clients receive cutting-edge technical defenses in both state and federal court — from forensic analysis and authorized-access arguments to malware dissection and digital evidence challenges.
        </p>
      </div>

      {/* VIRGINIA SECTION (unchanged from before) */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mb-12">Virginia Computer Crimes (§ 18.2-152 et seq.)</h2>
      {/* [Paste your existing Virginia sections here — Computer Fraud, Trespass, Invasion of Privacy, etc. — they stay exactly the same] */}
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


      {/* ==================== NEW FEDERAL SECTION (Flagship) ==================== */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mt-24 mb-12">Federal Computer Crimes (Eastern District of Virginia – EDVA)</h2>
      <p className="text-lg mb-10">Northern Virginia cases are routinely prosecuted in the EDVA — one of the most aggressive federal districts for cybercrime. D.J. Rivera’s technical expertise gives clients a powerful advantage.</p>

      <div className="space-y-20">
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1030 — Computer Fraud and Abuse Act (CFAA)</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            The cornerstone federal “hacking” statute. Covers unauthorized access to protected computers, obtaining information, causing damage, fraud, password trafficking, and extortion.
          </div>
          <p><strong>Penalties:</strong> Up to 10–20+ years in federal prison depending on loss, damage, and intent.</p>
          <p className="mt-4"><strong>Technical Defenses (leveraging D.J. Rivera’s tech background):</strong></p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Authorized access / exceeding authorized access (post-Van Buren Supreme Court ruling)</li>
            <li>No “damage” or “loss” under the CFAA definition</li>
            <li>Forensic challenges — IP spoofing, malware attribution, shared devices</li>
            <li>Lack of intent or reckless conduct only</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1343 — Wire Fraud</h3>
          <p className="text-lg">Using email, internet, or electronic communications in a scheme to defraud. Frequently paired with CFAA charges.</p>
          <p><strong>Penalties:</strong> Up to 20 years (30 years if financial institution involved).</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1028 / § 1028A — Identity Theft & Aggravated Identity Theft</h3>
          <p className="text-lg">Knowingly using another’s identification. Aggravated identity theft adds a mandatory consecutive 2-year sentence.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">Child Exploitation & CSAM Offenses (18 U.S.C. §§ 2251–2252A)</h3>
          <p className="text-lg">Receipt, distribution, possession, or production of child sexual abuse material via computer. Extremely serious federal cases with mandatory minimums of 5–15+ years.</p>
          <p className="mt-4 text-red-700 font-medium">Technical defenses here are critical — chain-of-custody, device ownership, and forensic analysis often determine outcomes.</p>
        </div>
      </div>

      <h2 className="text-4xl font-serif text-navy mt-24 mb-10">Why Clients Choose D.J. Rivera for Computer Crimes</h2>
      <ul className="list-disc pl-8 space-y-4 text-lg">
        <li>Deep technical understanding of computers, networks, and digital forensics</li>
        <li>Experience challenging government experts in both state and federal court</li>
        <li>Proven ability to reduce federal charges or secure dismissals through technical motions</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl mb-6">Facing State or Federal Computer Crime Charges?</h3>
        <p className="text-xl mb-8">Time is critical. Contact D.J. Rivera immediately for a confidential consultation.</p>
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Free Consultation – 24/7 Availability
        </Link>
      </div>
    </div>
  );
}
