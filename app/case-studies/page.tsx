import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Case Studies | Virginia Criminal Defense Wins – D.J. Rivera, Esq.",
  description: "Recent Virginia and EDVA court cases with successful defense strategies. See how D.J. Rivera fights for clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "commonwealth-v-taylor",
    title: "Commonwealth v. Taylor",
    type: "Possession of Child Pornography (Computer Crimes)",
    excerpt: "Federal & state charges dismissed after technical forensic challenge.",
  },
  {
    slug: "commonwealth-v-ramirez",
    title: "Commonwealth v. Ramirez",
    type: "DUI / DWI – Refusal & Blood Test Challenge",
    excerpt: "All charges reduced after successful suppression motion.",
  },
];

export default function CaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia and EDVA cases where aggressive defense made the difference.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold"
          >
            <div className="text-crimson text-sm font-medium mb-2">{c.type}</div>
            <h3 className="text-3xl font-serif text-navy mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6">{c.excerpt}</p>
            <span className="text-crimson font-medium">Read the full case study →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
