import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "DUI / DWI Case Studies | Virginia DUI Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in DUI / DWI cases (§18.2-266). See how D.J. Rivera defends clients in Richmond and Northern Virginia courts.",
};

const cases = [
  {
    slug: "farmer-v-com",
    title: "Farmer v. Com.",
    excerpt: "Virginia court affirms DUI conviction, emphasizing lawful traffic stops and reliable chemical testing.",
  },
  {
    slug: "hall-v-com",
    title: "Hall v. Com.",
    excerpt: "Virginia court ruled evidence insufficient for DUI conviction, emphasizing strict proof requirements under § 18.2-266.",
  },
  {
    slug: "morin-v-virginia",
    title: "Morin v. Virginia, Record No. 2200-06-4 (Va. App. 9/18/2007)",
    excerpt: "Virginia court upheld DUI conviction, confirming impairment can be proven through officer observations and circumstantial evidence.",
  },
  {
    slug: "robbins-v-commonwealth",
    title: "Robbins v. Commonwealth",
    excerpt: "Virginia court affirms DUI conviction, emphasizing breathalyzer reliability and officer observations.",
  },
  {
    slug: "shinault-v-com",
    title: "Shinault v. Com.",
    excerpt: "Virginia court affirms DUI conviction, emphasizing breathalyzer reliability and observed impairment.",
  },
];

export default function DUICaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">DUI / DWI Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in §18.2-266 DUI / DWI cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/dui/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing DUI / DWI Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/dui" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View DUI / DWI Practice Area
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
