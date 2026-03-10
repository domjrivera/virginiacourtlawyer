import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virginia Criminal Defense Practice Areas | D.J. Rivera, Esq. – Richmond & Northern VA",
  description: "Aggressive defense for every criminal charge in Virginia — computer crimes, DUI, assault, drug offenses, federal crimes, homicide, and more. Serving Greater Richmond and Northern Virginia. D.J. Rivera, Esq.",
  openGraph: {
    title: "Practice Areas – Virginia Court Lawyer",
    description: "Full-spectrum criminal defense in Richmond & Northern Virginia",
  },
};

const categories = [
  {
    title: "Computer & Cyber Crimes",
    subtitle: "D.J. Rivera's Specialty — B.S. Computer Engineering + iCyberLaw",
    highlight: true,
    items: [
      { name: "Computer Crimes & Cybercrime Defense", slug: "computer-crimes", desc: "Virginia Code § 18.2-152 series, CFAA, hacking, computer fraud, cyberstalking, and all digital evidence cases. D.J. Rivera's computer engineering background provides a decisive advantage." },
    ],
  },
  {
    title: "Federal Crimes",
    items: [
      { name: "Federal Criminal Defense", slug: "federal-crimes", desc: "Eastern District of Virginia (EDVA) — drug trafficking, firearms, cybercrime, fraud, RICO, and federal conspiracy. The 'Rocket Docket' demands experienced federal defense counsel." },
    ],
  },
  {
    title: "Drug & Alcohol Offenses",
    items: [
      { name: "Drug Possession (§ 18.2-250)", slug: "drug-possession", desc: "Simple possession of Schedule I–VI controlled substances. First offender programs, suppression motions, and record protection." },
      { name: "Drug Distribution & Trafficking (§ 18.2-248)", slug: "drug-distribution", desc: "Possession with intent to distribute, distribution, and trafficking — mandatory minimum sentences, confidential informant challenges, and federal prosecution strategy." },
      { name: "DUI / DWI (§ 18.2-266)", slug: "dui", desc: "Challenging the stop, breathalyzer accuracy, field sobriety tests, and rising BAC defense. License suspension hearings and restricted license petitions." },
    ],
  },
  {
    title: "Crimes Against the Person",
    items: [
      { name: "Assault & Battery (§ 18.2-57)", slug: "assault-battery", desc: "Simple assault to aggravated malicious wounding, domestic violence, and assault on law enforcement. Self-defense and false allegation defenses." },
      { name: "Homicide & Murder (§ 18.2-31 / § 18.2-32)", slug: "homicide", desc: "Capital murder, first and second degree murder, voluntary and involuntary manslaughter. Self-defense, heat of passion, and forensic evidence challenges." },
      { name: "Sexual Assault (§ 18.2-61)", slug: "sexual-assault", desc: "Rape, forcible sodomy, sexual battery, and sex offender registry defense. Consent, false allegation, and DNA evidence challenges." },
      { name: "Robbery (§ 18.2-58)", slug: "robbery", desc: "Robbery and armed robbery — mandatory minimums of 5–15 years. Misidentification, alibi, and firearm enhancement challenges." },
      { name: "Threats & Stalking (§ 18.2-60 / § 18.2-60.3)", slug: "threats-stalking", desc: "Threatening communications, stalking, and cyberstalking. First Amendment defenses and digital evidence challenges." },
    ],
  },
  {
    title: "Crimes Against Property",
    items: [
      { name: "Burglary & Breaking and Entering (§ 18.2-89)", slug: "burglary", desc: "Common law and statutory burglary, home invasion, and possession of burglary tools. Intent and consent defenses." },
      { name: "Larceny & Theft (§ 18.2-95 / § 18.2-96)", slug: "larceny-theft", desc: "Grand larceny, petit larceny, embezzlement, identity theft, and receiving stolen property. Value challenges and deferred dispositions." },
      { name: "Shoplifting (§ 18.2-103)", slug: "shoplifting", desc: "Concealment of merchandise and organized retail theft. Intent challenges, deferred dispositions, and record protection." },
      { name: "Destruction of Property (§ 18.2-137)", slug: "destruction-property", desc: "Malicious and unlawful destruction of property. Value challenges and civil resolution strategies." },
    ],
  },
  {
    title: "Other Criminal Offenses",
    items: [
      { name: "Firearms & Weapons Charges (§ 18.2-308)", slug: "firearms", desc: "Unlawful possession, carrying concealed, use in a felony, and federal § 924(c) charges. Fourth Amendment suppression and rights restoration." },
      { name: "Conspiracy (§ 18.2-22)", slug: "conspiracy", desc: "State and federal conspiracy charges. Challenging the agreement, overt act, and co-conspirator testimony." },
      { name: "Prostitution & Solicitation (§ 18.2-346)", slug: "prostitution", desc: "Prostitution, solicitation, and sex trafficking. Entrapment defenses and digital evidence challenges." },
      { name: "Disorderly Conduct (§ 18.2-415)", slug: "disorderly-conduct", desc: "Disorderly conduct, public intoxication, and related charges. First Amendment defenses and deferred dispositions." },
    ],
  },
  {
    title: "Specialized Services",
    items: [
      { name: "Juvenile Offenses", slug: "juvenile-offenses", desc: "Defense in Virginia JDR Court. Preventing transfer to adult court, diversion programs, and juvenile record protection." },
      { name: "Expungement & Record Sealing", slug: "expungement", desc: "Petition to seal dismissed charges, acquittals, and deferred dispositions from your Virginia criminal record." },
    ],
  },
];

export default function PracticeAreas() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Criminal Defense Practice Areas</h1>
          <p className="text-xl text-slate-300 max-w-3xl">D.J. Rivera provides aggressive, experienced representation for every type of criminal charge in Greater Richmond and Northern Virginia courts — from misdemeanors to capital felonies.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className={`mb-10 pb-4 border-b ${cat.highlight ? 'border-crimson' : 'border-gold'}`}>
                <h2 className={`text-4xl font-serif ${cat.highlight ? 'text-crimson' : 'text-navy'}`}>{cat.title}</h2>
                {cat.subtitle && <p className="text-slate-600 mt-1 text-lg">{cat.subtitle}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {cat.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/practice-areas/${item.slug}`}
                    className={`group block p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 border transition-all duration-300 ${cat.highlight ? 'bg-navy text-white border-transparent hover:border-gold' : 'bg-white border-transparent hover:border-gold'}`}
                  >
                    <h3 className={`text-2xl font-medium group-hover:text-gold transition ${cat.highlight ? 'text-white' : 'text-navy'}`}>{item.name}</h3>
                    <p className={`mt-4 leading-relaxed text-sm ${cat.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{item.desc}</p>
                    <div className={`mt-8 font-medium flex items-center gap-2 group-hover:gap-3 transition-all ${cat.highlight ? 'text-gold' : 'text-crimson'}`}>
                      View defense strategies →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-navy text-white py-16 px-8 rounded-3xl">
          <h3 className="text-4xl font-serif mb-6">Facing any criminal charge in Virginia?</h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Don&apos;t face the Commonwealth alone. Schedule your free, confidential consultation today.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded-2xl text-2xl font-medium transition">
            Get Your Free Consultation – 24/7
          </Link>
        </div>
      </div>
    </div>
  );
}
