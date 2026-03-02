import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia & Federal Computer Crimes Lawyer | Child Pornography, Solicitation & CFAA Defense – Richmond & Northern VA",
  description: "D.J. Rivera (tech-background attorney) aggressively defends all Virginia computer crimes (§18.2-152 & §18.2-374 series) and federal cyber offenses (CFAA, 18 U.S.C. §2252A, §2422(b)) in Richmond and Northern Virginia (EDVA).",
  keywords: ["Virginia child pornography lawyer", "Northern Virginia online solicitation attorney", "18.2-374.3 defense", "federal CFAA lawyer", "EDVA computer crimes", "CSAM possession defense", "D.J. Rivera"],
};

export default function ComputerCrimesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia & Federal Computer Crimes Defense</h1>
        <p className="text-2xl text-crimson">§18.2-152 & §18.2-374 Series • 18 U.S.C. §1030 (CFAA) & §2252A • EDVA</p>
        <p className="mt-8 text-xl max-w-3xl mx-auto">
          With D.J. Rivera’s strong computer technology background, clients receive cutting-edge technical defenses for traditional computer crimes and sex-related digital offenses in both state and federal court.
        </p>
      </div>

      {/* ==================== VIRGINIA TRADITIONAL COMPUTER CRIMES ==================== */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mb-12">Virginia Computer Crimes (§ 18.2-152 et seq.)</h2>

      <div className="space-y-20">
        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.3 — Computer Fraud</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Any person who uses a computer or computer network, without authority and: (1) Obtains property or services by false pretenses; (2) Embezzles or commits larceny; or (3) Converts the property of another; is guilty of the crime of computer fraud.
          </div>
          <p><strong>Penalties:</strong> Class 5 felony (if value ≥ $1,000) or Class 1 misdemeanor.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.4 — Computer Trespass</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            It is unlawful for any person, with malicious intent or through intentionally deceptive means and without authority, to damage, alter, disable data/programs, install malware/keyloggers, etc.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; Class 6 felony if damage ≥ $1,000 or government systems affected.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.5 — Computer Invasion of Privacy</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Intentionally examining without authority any employment, salary, credit, or identifying information relating to another person.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; Class 6 felony on repeat or if used in another crime.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.6 — Theft of Computer Services</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Willfully obtaining computer services without authority.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; Class 6 felony if value ≥ $2,500.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.3:1 — Transmission of Unsolicited Commercial Electronic Mail (Spam)</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Using a computer with intent to falsify transmission information in connection with bulk spam.
          </div>
          <p><strong>Penalties:</strong> Class 1 misdemeanor; Class 6 felony for high volume.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-152.7:1 — Harassment by Computer (Cyberbullying / Cyberstalking)</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Using a computer to communicate obscene, vulgar, profane, lewd, lascivious, or indecent language with intent to coerce, intimidate, or harass.
          </div>
          <p><strong>Penalty:</strong> Class 1 misdemeanor (enhanced on repeat).</p>
        </div>
      </div>

      {/* ==================== VIRGINIA SEX-RELATED COMPUTER CRIMES ==================== */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mt-24 mb-12">Virginia Sex-Related Computer Crimes (§ 18.2-374 Series)</h2>

      <div className="space-y-20">
        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-374.1 — Production or Distribution of Child Pornography</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Any person who produces or distributes child pornography, or possesses it with intent to distribute, is guilty of a felony.
          </div>
          <p><strong>Penalties:</strong> 5–20+ years (mandatory minimums).</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-374.1:1 — Possession of Child Pornography</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Knowing possession of any visual representation of a minor engaged in sexually explicit conduct.
          </div>
          <p><strong>Penalties:</strong> Class 6 felony (first offense); enhanced on subsequent offenses.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy">§ 18.2-374.3 — Use of Communications Systems to Facilitate Offenses Involving Children (Online Solicitation)</h3>
          <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
            Using a computer or electronic device to solicit, seduce, or entice a minor (or person believed to be a minor) to engage in sexual activity.
          </div>
          <p><strong>Penalties:</strong> Class 6 felony (can be enhanced to higher felonies).</p>
        </div>
      </div>

      {/* ==================== FEDERAL SECTION ==================== */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mt-24 mb-12">Federal Computer & Sex-Related Crimes (Eastern District of Virginia)</h2>

      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1030 — Computer Fraud and Abuse Act (CFAA)</h3>
          <p className="text-lg">Unauthorized access, obtaining information, causing damage, fraud, etc.</p>
          <p><strong>Penalties:</strong> Up to 10–20+ years.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 2252A — Child Pornography Offenses</h3>
          <p className="text-lg">Possession, receipt, distribution, or production of child pornography via computer.</p>
          <p><strong>Penalties:</strong> 5–20+ years (mandatory minimums).</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 2422(b) — Coercion and Enticement of a Minor</h3>
          <p className="text-lg">Online solicitation/grooming of a minor.</p>
          <p><strong>Penalties:</strong> 10 years to life (mandatory minimum 10 years).</p>
        </div>
      </div>

      <h2 className="text-4xl font-serif text-navy mt-24 mb-10">Why Clients Choose D.J. Rivera for Computer Crimes</h2>
      <ul className="list-disc pl-8 space-y-4 text-lg">
        <li>Strong computer technology background for forensic challenges and digital evidence disputes</li>
        <li>Expertise in authorized-access, malware attribution, and chain-of-custody issues</li>
        <li>Proven results in both Virginia state courts and the Eastern District of Virginia</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl mb-6">Facing State or Federal Computer or Sex-Related Digital Charges?</h3>
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Get Your Free Consultation – 24/7 Availability
        </Link>
      </div>
    </div>
  );
}
