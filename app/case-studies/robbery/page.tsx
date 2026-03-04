import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Robbery Case Studies | Virginia Robbery Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in robbery and armed robbery cases (§18.2-58). See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "anderson-v-com",
    title: "Anderson v. Com.",
    excerpt: "Virginia court upholds robbery conviction, clarifying force and intimidation requirements under § 18.2-58.",
  },
  {
    slug: "briley-v-com",
    title: "Briley v. Com.",
    excerpt: "This case clarifies Virginia’s robbery statute, emphasizing the need to prove force or intimidation for conviction.",
  },
  {
    slug: "bunch-v-com",
    title: "Bunch v. Com.",
    excerpt: "Virginia court upholds robbery conviction, highlighting force and intimidation as key legal elements.",
  },
  {
    slug: "jones-v-com",
    title: "Jones v. Com.",
    excerpt: "Virginia robbery law requires proof of force or intimidation to sustain a conviction under § 18.2-58.",
  },
  {
    slug: "white-v-united-states",
    title: "White v. United States",
    excerpt: "Virginia court affirms robbery conviction, highlighting force and intent under Virginia Code § 18.2-58.",
  },
];

export default function RobberyCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Robbery Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in §18.2-58 robbery and armed robbery cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/robbery/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Robbery Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/robbery" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Robbery Practice Area
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
