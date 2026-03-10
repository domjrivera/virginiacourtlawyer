import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Virginia Criminal Defense Case Studies | D.J. Rivera, Esq. – Richmond & Northern VA",
  description: "Real Virginia and federal court outcomes across 14+ criminal defense practice areas. See how D.J. Rivera defends clients in Richmond and Northern Virginia courts.",
  openGraph: {
    title: "Case Studies – Virginia Court Lawyer",
    description: "Real Virginia court outcomes in criminal defense cases.",
  },
};

const categories = [
  {
    slug: "computer-crimes",
    title: "Computer Crimes",
    desc: "Virginia § 18.2-152 series and federal CFAA cases — hacking, computer fraud, unauthorized access, cyberstalking, and online solicitation. D.J. Rivera's technical background provides a decisive advantage.",
    count: 12,
    highlight: true,
  },
  {
    slug: "dui",
    title: "DUI / DWI",
    desc: "Virginia § 18.2-266 cases — challenging traffic stops, breathalyzer accuracy, field sobriety tests, and implied consent refusals.",
    count: 5,
  },
  {
    slug: "assault-battery",
    title: "Assault & Battery",
    desc: "Virginia § 18.2-57 cases — intent requirements, self-defense, domestic assault, and aggravated malicious wounding.",
    count: 5,
  },
  {
    slug: "drug-crimes",
    title: "Drug Crimes",
    desc: "Virginia § 18.2-250 and § 18.2-248 cases — possession, distribution, PWID, search and seizure challenges, and confidential informant issues.",
    count: 9,
  },
  {
    slug: "firearms",
    title: "Firearms & Weapons",
    desc: "Virginia § 18.2-308 series cases — unlawful possession, concealed carry, use in a felony, and Fourth Amendment suppression.",
    count: 5,
  },
  {
    slug: "robbery",
    title: "Robbery",
    desc: "Virginia § 18.2-58 cases — robbery and armed robbery, misidentification defenses, and mandatory minimum challenges.",
    count: 5,
  },
  {
    slug: "homicide",
    title: "Homicide & Murder",
    desc: "Virginia § 18.2-31 and § 18.2-32 cases — capital murder, first and second degree murder, manslaughter, and self-defense.",
    count: 5,
  },
  {
    slug: "sexual-assault",
    title: "Sexual Assault",
    desc: "Virginia § 18.2-61 cases — rape, sexual battery, consent defenses, DNA evidence challenges, and sex offender registry issues.",
    count: 5,
  },
  {
    slug: "burglary",
    title: "Burglary",
    desc: "Virginia § 18.2-89 cases — breaking and entering, home invasion, intent to commit a felony, and possession of burglary tools.",
    count: 5,
  },
  {
    slug: "larceny-theft",
    title: "Larceny & Theft",
    desc: "Virginia § 18.2-95 and § 18.2-96 cases — grand larceny, petit larceny, embezzlement, and value challenges.",
    count: 5,
  },
  {
    slug: "shoplifting",
    title: "Shoplifting",
    desc: "Virginia § 18.2-103 cases — concealment of merchandise, organized retail theft, and intent challenges.",
    count: 4,
  },
  {
    slug: "threats-stalking",
    title: "Threats & Stalking",
    desc: "Virginia § 18.2-60 and § 18.2-60.3 cases — threatening communications, stalking, cyberstalking, and First Amendment defenses.",
    count: 5,
  },
  {
    slug: "disorderly-conduct",
    title: "Disorderly Conduct",
    desc: "Virginia § 18.2-415 cases — disorderly conduct, public intoxication, and First Amendment challenges.",
    count: 2,
  },
  {
    slug: "conspiracy",
    title: "Conspiracy",
    desc: "Virginia § 18.2-22 and federal conspiracy cases — challenging the agreement, overt act, and co-conspirator testimony.",
    count: 5,
  },
];

export default function CaseStudiesIndex() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Legal Resources</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Virginia Criminal Defense Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Real Virginia and federal court outcomes across 14 criminal defense practice areas. These case studies illustrate the legal principles, defense strategies, and court precedents that D.J. Rivera applies in defending clients throughout Richmond and Northern Virginia.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-600 text-lg mb-12 max-w-3xl">
            Understanding how Virginia courts have ruled in past cases is essential to building an effective defense. Browse case studies by practice area below.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(({ slug, title, desc, count, highlight }) => (
              <Link
                key={slug}
                href={`/case-studies/${slug}`}
                className={`group block p-8 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 border transition-all duration-300 ${
                  highlight
                    ? 'bg-navy text-white border-transparent hover:border-gold'
                    : 'bg-white border-slate-200 hover:border-gold'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className={`text-xl font-semibold group-hover:text-gold transition ${highlight ? 'text-white' : 'text-navy'}`}>
                    {highlight && <span className="mr-1">⚡</span>}{title}
                  </h2>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ml-2 ${highlight ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {count} cases
                  </span>
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${highlight ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>
                <span className={`text-sm font-medium group-hover:underline ${highlight ? 'text-gold' : 'text-crimson'}`}>
                  View case studies →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-navy mb-4">How D.J. Rivera Uses Case Law in Your Defense</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Every criminal defense case is shaped by the precedents set in prior court decisions. D.J. Rivera researches the most current Virginia Court of Appeals, Virginia Supreme Court, and Eastern District of Virginia decisions to identify arguments that can suppress evidence, challenge the sufficiency of the prosecution&apos;s case, or mitigate sentencing. The case studies on this site represent the kinds of legal issues he analyzes in every case he handles.
          </p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">
            Discuss Your Case — Free Consultation
          </Link>
        </div>
      </section>

      <section className="bg-navy text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Facing criminal charges in Virginia?</h2>
          <p className="text-xl mb-10">D.J. Rivera applies the lessons of these cases to defend clients throughout Richmond and Northern Virginia. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-12 py-5 rounded text-xl font-medium transition">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
