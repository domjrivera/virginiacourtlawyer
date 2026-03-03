import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Assault and Battery Case Studies | Virginia Assault and Battery Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in assault and battery cases (§18.2-57). See how D.J. Rivera defends clients in Richmond and Northern Virginia courts.",
};

const cases = [
  {
    slug: "blankenship-v-commonwealth",
    title: "Blankenship v. Commonwealth",
    excerpt: "Court affirms assault and battery conviction, emphasizing intent and lack of consent under § 18.2-57.",
  },
  {
    slug: "fox-v-commonwealth",
    title: "Fox v. Commonwealth, Record No. 0204-09-4 (Va. App. 12/22/2009)",
    excerpt: "Virginia assault and battery law requires intentional unlawful touching; conviction standards clarified.",
  },
  {
    slug: "green-v-commonwealth",
    title: "Green v. Commonwealth",
    excerpt: "Court upholds assault and battery conviction, emphasizing intent and unlawful contact under § 18.2-57.",
  },
  {
    slug: "kelley-v-commonwealth",
    title: "Kelley v. Commonwealth",
    excerpt: "Case clarifies intent requirements for assault and battery convictions in Virginia.",
  },
  {
    slug: "mcgowan-v-commonwealth",
    title: "McGowan v. Commonwealth",
    excerpt: "Virginia court clarifies evidentiary standards and defenses in assault and battery cases.",
  },
];

export default function AssaultBatteryCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Assault and Battery Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in § 18.2-57 assault and battery cases. See how aggressive defense can make the difference.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/assault-battery/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Assault and Battery Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/assault-battery" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Assault and Battery Practice Area
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
