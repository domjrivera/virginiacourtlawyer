import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Disorderly Conduct Case Studies | Virginia Disorderly Conduct Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in disorderly conduct cases (§18.2-415). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "collier-v-commonwealth",
    title: "Collier v. Commonwealth, Record No. 2166-05-2 (Va. App. 3/20/2007)",
    excerpt: "Court interprets disorderly conduct statute and the importance of intent and public disturbance.",
  },
  {
    slug: "marttila-v-city-of-lynchburg",
    title: "Marttila v. City of Lynchburg",
    excerpt: "Virginia court affirms that protected speech is not disorderly conduct.",
  },
];

export default function DisorderlyConductCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Disorderly Conduct Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in disorderly conduct cases under § 18.2-415.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/disorderly-conduct/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Disorderly Conduct Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Our experienced team can evaluate your case and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/disorderly-conduct" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Disorderly Conduct Practice Area
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
