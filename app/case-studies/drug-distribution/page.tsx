import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Drug Distribution Case Studies | Virginia Drug Distribution Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in drug distribution cases (§18.2-248). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "jones-v-commonwealth",
    title: "Jones v. Commonwealth",
    excerpt: "Court upholds drug distribution conviction relying on undercover operation and witness testimony.",
  },
  {
    slug: "lewis-v-commonwealth",
    title: "Lewis v. Commonwealth",
    excerpt: "Virginia court upholds drug distribution conviction, emphasizing proof of knowledge and intent.",
  },
  {
    slug: "seke-v-com",
    title: "Seke v. Com.",
    excerpt: "Court affirms drug distribution conviction, highlighting evidence reliability and defense strategies.",
  },
  {
    slug: "spear-v-com",
    title: "Spear v. Com.",
    excerpt: "Virginia court affirms drug distribution conviction, highlighting evidence and intent requirements.",
  },
  {
    slug: "stillwell-v-com",
    title: "Stillwell v. Com.",
    excerpt: "Court affirms drug distribution conviction, highlighting evidence and intent requirements.",
  },
];

export default function DrugDistributionCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Drug Distribution Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in drug distribution cases under § 18.2-248.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/drug-distribution/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Drug Distribution Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Our experienced team can evaluate your case and build a strong defense.
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
