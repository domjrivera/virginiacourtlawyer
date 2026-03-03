import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Case Studies | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia and EDVA case outcomes in online solicitation of a minor and computer crimes. See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  { slug: "brooker-v-commonwealth", title: "Brooker v. Commonwealth (Va. Ct. App. 2003)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Live webcam transmission convictions affirmed – key precedent." },
  { slug: "colbert-v-commonwealth", title: "Colbert v. Commonwealth (Va. Ct. App. 2006)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Sex-offender registration upheld even with undercover officer." },
  { slug: "murgia-v-commonwealth", title: "Commonwealth v. Murgia (Va. Sup. Ct. 2019)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Coach-student grooming via text messages leads to conviction." },
  { slug: "delcid-v-commonwealth", title: "Commonwealth v. Delcid (Va. Ct. App. 2020)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Miranda warnings ruled misleading – statements suppressed." },
  { slug: "kilpatrick-v-commonwealth", title: "Commonwealth v. Kilpatrick (Va. Sup. Ct. 2022)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Expert fantasy testimony excluded – overwhelming evidence." },
  { slug: "mackey-v-commonwealth", title: "Mackey v. Commonwealth (Va. Ct. App. 2022)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Lesser-included offense ruling protects due process." },
  { slug: "anthony-v-commonwealth", title: "Anthony v. Commonwealth (Va. Ct. App. 2023)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Autism sentencing relief must be properly preserved." },
  { slug: "cribbs-v-commonwealth", title: "Cribbs v. Commonwealth (Va. Ct. App. 2024)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Digital evidence chain-of-custody upheld." },
  { slug: "cross-v-gilmore", title: "Cross v. Gilmore (E.D. Va. 2016)", type: "Virginia Solicitation of a Minor Defense", excerpt: "Federal habeas statute of limitations strictly applied." },
];

export default function CaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia and EDVA outcomes in computer crimes and online solicitation of a minor cases.
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
