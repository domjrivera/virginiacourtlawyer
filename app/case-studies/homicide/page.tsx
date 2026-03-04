import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Homicide Case Studies | Virginia Homicide & Murder Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in homicide, murder, and manslaughter cases (§18.2-31 & §18.2-32). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "dosky-v-commonwealth",
    title: "Dosky v. Commonwealth",
    excerpt: "Virginia court affirms second-degree murder conviction, clarifying intent requirements under state homicide law.",
  },
  {
    slug: "montano-v-commonwealth",
    title: "Montano v. Commonwealth",
    excerpt: "Montano v. Commonwealth clarifies intent requirements for second-degree murder under Virginia law.",
  },
  {
    slug: "rhodes-v-com",
    title: "Rhodes v. Com.",
    excerpt: "Virginia court affirms second-degree murder conviction, emphasizing evidentiary standards for self-defense claims.",
  },
  {
    slug: "walshaw-v-com",
    title: "Walshaw v. Com.",
    excerpt: "Virginia court upholds second-degree murder conviction, emphasizing intent without premeditation in homicide cases.",
  },
  {
    slug: "woods-v-commonwealth",
    title: "Woods v. Commonwealth",
    excerpt: "Woods v. Commonwealth clarifies intent and malice standards in Virginia homicide law for criminal defense.",
  },
];

export default function HomicideCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Homicide Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in homicide and murder cases (§18.2-31 & §18.2-32).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/homicide/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Homicide or Murder Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/homicide" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Homicide Practice Area
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
