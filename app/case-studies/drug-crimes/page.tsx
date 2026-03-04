import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Drug Crimes Case Studies | Virginia Drug Possession & Distribution Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in drug possession (§18.2-250) and distribution (§18.2-248) cases. See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "camann-v-commonwealth",
    title: "Camann v. Commonwealth",
    excerpt: "This case clarifies Virginia drug possession law, emphasizing knowledge and control over contraband.",
  },
  {
    slug: "commonwealth-v-garrick",
    title: "Commonwealth v. Garrick",
    excerpt: "Virginia drug possession convictions require proof of knowing control; mere proximity is insufficient under § 18.2-250.",
  },
  {
    slug: "howard-v-commonwealth",
    title: "Howard v. Commonwealth",
    excerpt: "Virginia court upholds drug possession conviction, highlighting constructive possession and lawful search standards.",
  },
  {
    slug: "kelly-v-commonwealth-of-virginia",
    title: "Kelly v. Commonwealth of Virginia",
    excerpt: "Virginia law requires proof of knowing possession for drug charges; mere presence is insufficient for conviction.",
  },
  {
    slug: "jones-v-commonwealth",
    title: "Jones v. Commonwealth",
    excerpt: "Virginia court upholds drug distribution conviction relying on undercover operation and witness testimony.",
  },
  {
    slug: "lewis-v-commonwealth",
    title: "Lewis v. Commonwealth",
    excerpt: "Virginia court upholds drug distribution conviction, emphasizing proof of knowledge and intent under § 18.2-248.",
  },
  {
    slug: "seke-v-com",
    title: "Seke v. Com.",
    excerpt: "Virginia court affirms drug distribution conviction, emphasizing evidence reliability and defense strategies.",
  },
  {
    slug: "spear-v-com",
    title: "Spear v. Com.",
    excerpt: "Virginia court affirms drug distribution conviction, highlighting evidence and intent requirements under Va. Code § 18.2-248.",
  },
  {
    slug: "stillwell-v-com",
    title: "Stillwell v. Com.",
    excerpt: "Virginia court affirms drug distribution conviction, highlighting evidence and intent requirements under Va. Code § 18.2-248.",
  },
];

export default function DrugCrimesCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Drug Crimes Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in drug possession and distribution cases (§18.2-250 & §18.2-248).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/drug-crimes/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Drug Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/drug-distribution" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Drug Distribution Practice Area
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-slate-100 transition"
          >
            Contact Us for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
