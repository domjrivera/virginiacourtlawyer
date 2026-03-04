import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sexual Assault Case Studies | Virginia Sexual Assault Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in sexual assault and rape cases (§18.2-61 & §18.2-67). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "campbell-v-commonwealth",
    title: "Campbell v. Commonwealth, Record No. 1443-05-4 (Va. App. 12/19/2006)",
    excerpt: "Virginia court affirms sexual assault conviction, highlighting consent and evidentiary standards under Va. Code § 18.2-61.",
  },
  {
    slug: "conley-v-commonwealth",
    title: "Conley v. Commonwealth",
    excerpt: "Virginia sexual assault case underscores the importance of clear consent and evidentiary standards in defense.",
  },
  {
    slug: "lawlor-v-commonwealth",
    title: "Lawlor v. Commonwealth",
    excerpt: "Virginia court affirms sexual assault conviction, highlighting consent and evidence requirements under § 18.2-61.",
  },
  {
    slug: "poole-v-commonwealth",
    title: "Poole v. Commonwealth",
    excerpt: "Virginia court emphasizes proof of non-consent in sexual assault, highlighting defense strategies.",
  },
  {
    slug: "sutton-v-com",
    title: "Sutton v. Com.",
    excerpt: "Virginia court upholds sexual assault conviction, highlighting the legal importance of consent under state law.",
  },
];

export default function SexualAssaultCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Sexual Assault Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in sexual assault and rape cases (§18.2-61 & §18.2-67).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/sexual-assault/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Sexual Assault Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/sexual-assault" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Sexual Assault Practice Area
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
