import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Conspiracy Case Studies | Virginia Conspiracy Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in conspiracy cases (§18.2-22). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "johnson-v-commonwealth-of-va",
    title: "Johnson v. Commonwealth of Va.",
    excerpt: "Court requires proof of agreement and overt act for conspiracy conviction.",
  },
  {
    slug: "muhammad-v-com",
    title: "Muhammad v. Com.",
    excerpt: "Virginia court affirms conspiracy conviction, highlighting agreement and intent.",
  },
  {
    slug: "ragan-v-commonwealth",
    title: "Ragan v. Commonwealth",
    excerpt: "Case clarifies Virginia conspiracy law, emphasizing agreement and overt acts.",
  },
  {
    slug: "smallwood-v-commonwealth",
    title: "Smallwood v. Commonwealth",
    excerpt: "Court affirms conspiracy conviction based on coordinated actions and overt acts.",
  },
  {
    slug: "stewart-v-com",
    title: "Stewart v. Com.",
    excerpt: "Virginia courts require proof of agreement and overt act for conspiracy convictions.",
  },
];

export default function ConspiracyCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Conspiracy Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in conspiracy cases under § 18.2-22.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/conspiracy/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Conspiracy Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/conspiracy" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Conspiracy Practice Area
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
