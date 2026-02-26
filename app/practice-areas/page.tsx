import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virginia Criminal Defense Practice Areas | D.J. Rivera, Esq. – Richmond & Northern VA",
  description: "Aggressive defense for every criminal charge in Virginia, including Computer Crimes (§18.2-152), Assault, DUI, Drug Crimes, Robbery, Homicide, and more. Serving Greater Richmond and Northern Virginia.",
  keywords: ["Virginia criminal defense practice areas", "Richmond computer crimes lawyer", "Northern Virginia criminal attorney", "Virginia Code §18.2 defense", "D.J. Rivera"],
  openGraph: {
    title: "Practice Areas – Virginia Court Lawyer",
    description: "Full-spectrum criminal defense in Richmond & Northern Virginia",
  },
};

const categories = [
  {
    title: "Computer & Cyber Crimes",
    items: [
      { name: "All Virginia Computer Crimes & Federal Cyber Defense (§18.2-152 Series + CFAA)", slug: "computer-crimes" },
    ],
  },
  {
    title: "Crimes Against the Person",
    items: [
      { name: "Assault & Battery (§18.2-57 & §18.2-57.2)", slug: "assault-battery" },
      { name: "Homicide & Murder (§18.2-31 Capital, §18.2-32 1st/2nd Degree)", slug: "homicide" },
      { name: "Sexual Assault & Rape (§18.2-67.1, §18.2-67.4)", slug: "sexual-assault" },
      { name: "Robbery (§18.2-58)", slug: "robbery" },
      { name: "Threats & Stalking (§18.2-60, §18.2-60.3)", slug: "threats-stalking" },
    ],
  },
  {
    title: "Crimes Against Property",
    items: [
      { name: "Burglary & Breaking & Entering (§18.2-89 Armed, §18.2-90, §18.2-91)", slug: "burglary" },
      { name: "Larceny & Theft (§18.2-95 Grand, §18.2-96 Petit)", slug: "larceny-theft" },
      { name: "Shoplifting (§18.2-103)", slug: "shoplifting" },
      { name: "Destruction of Property (§18.2-137)", slug: "destruction-property" },
    ],
  },
  {
    title: "Drug & Alcohol Offenses",
    items: [
      { name: "Drug Possession (§18.2-250)", slug: "drug-possession" },
      { name: "Drug Distribution & Manufacturing (§18.2-248)", slug: "drug-distribution" },
      { name: "DUI / DWI (§18.2-266)", slug: "dui" },
    ],
  },
  {
    title: "Other Common Offenses",
    items: [
      { name: "Firearms & Weapons Charges (§18.2-308.1, §18.2-282)", slug: "firearms" },
      { name: "Prostitution (§18.2-346)", slug: "prostitution" },
      { name: "Disorderly Conduct (§18.2-415)", slug: "disorderly-conduct" },
    ],
  },
];

export default function PracticeAreas() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Criminal Defense Practice Areas</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          D.J. Rivera provides aggressive, experienced representation for every type of criminal charge in Greater Richmond and Northern Virginia courts.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mb-10">{cat.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cat.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/practice-areas/${item.slug}`}
                  className="group block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-gold transition-all duration-300"
                >
                  <h3 className="text-2xl font-medium text-navy group-hover:text-crimson transition">{item.name}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Experienced defense in Richmond, Henrico, Chesterfield, Hanover, Alexandria, Arlington, Fairfax, and Prince William courts.
                  </p>
                  <div className="mt-8 text-crimson font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View full defense strategies →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center bg-navy text-white py-16 px-8 rounded-3xl">
        <h3 className="text-4xl font-serif mb-6">Facing any criminal charge in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Don’t face the Commonwealth alone. Schedule your free, confidential consultation today.</p>
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded-2xl text-2xl font-medium transition">
          Get Your Free Consultation – 24/7
        </Link>
      </div>
    </div>
  );
}
