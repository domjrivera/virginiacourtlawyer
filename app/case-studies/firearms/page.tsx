import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Firearms Case Studies | Virginia Firearms Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in firearms and weapons charges (§18.2-308.1 & §18.2-282). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "acey-v-com",
    title: "Acey v. Com.",
    excerpt: "Virginia court affirms conviction for unlawful concealed firearm possession, emphasizing knowledge and search legality.",
  },
  {
    slug: "armstrong-v-com",
    title: "Armstrong v. Com.",
    excerpt: "Virginia court confirms unlawful firearm possession requires knowing possession by prohibited individuals under § 18.2-308.",
  },
  {
    slug: "guerrant-v-commonwealth",
    title: "Guerrant v. Commonwealth",
    excerpt: "Virginia court affirms unlawful firearm possession conviction, clarifying possession standards under Va. Code § 18.2-308.",
  },
  {
    slug: "saunders-v-commonwealth",
    title: "Saunders v. Commonwealth",
    excerpt: "Virginia court affirms conviction for unlawful firearm possession, highlighting knowledge element in defense.",
  },
  {
    slug: "williams-v-com",
    title: "Williams v. Com.",
    excerpt: "Virginia court confirms constructive possession meets unlawful firearm possession elements under § 18.2-308.",
  },
];

export default function FirearmsCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Firearms Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in firearms and weapons charges (§18.2-308.1 & §18.2-282).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/firearms/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Firearms Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/firearms" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Firearms Practice Area
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
