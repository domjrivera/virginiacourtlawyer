import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Larceny and Theft Case Studies | Virginia Larceny & Theft Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in grand and petit larceny cases (§18.2-95 & §18.2-96). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "denoncourt-v-commonwealth-of-va",
    title: "Denoncourt v. Commonwealth Of Va.",
    excerpt: "This case clarifies the importance of intent in Virginia larceny charges and defense strategies.",
  },
  {
    slug: "garland-v-com",
    title: "Garland v. Com.",
    excerpt: "Virginia court affirms larceny conviction, emphasizing proof of intent through conduct like concealment.",
  },
  {
    slug: "hunt-v-com",
    title: "Hunt v. Com.",
    excerpt: "Virginia larceny requires proof of intent to steal; this case highlights the necessity of intent for conviction.",
  },
  {
    slug: "manning-v-commonwealth",
    title: "Manning v. Commonwealth",
    excerpt: "Virginia larceny law requires proof of intent to steal; concealment and nonpayment can establish this intent.",
  },
  {
    slug: "tanner-v-commonwealth",
    title: "Tanner v. Commonwealth, Record No. 2672-08-4 (Va. App. 1/19/2010)",
    excerpt: "Virginia court affirms larceny conviction where concealment and leaving without paying prove criminal intent.",
  },
];

export default function LarcenyTheftCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Larceny and Theft Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in grand and petit larceny cases (§18.2-95 & §18.2-96).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/larceny-theft/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Larceny or Theft Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/larceny-theft" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Larceny and Theft Practice Area
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
