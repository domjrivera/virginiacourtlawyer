import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Computer Crimes Case Studies | Virginia Solicitation of a Minor & Cyber Crime Defense – D.J. Rivera, Esq.",
  description: "Real Virginia and EDVA case outcomes in computer crimes, child pornography, online solicitation of a minor, and cyber offenses. See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  { slug: "brooker-v-commonwealth", title: "Brooker v. Commonwealth (Va. Ct. App. 2003)", excerpt: "Landmark webcam and live transmission solicitation case under § 18.2-374.3." },
  { slug: "colbert-v-commonwealth", title: "Colbert v. Commonwealth (Va. Ct. App. 2006)", excerpt: "Sex-offender registration upheld for online solicitation with undercover officer." },
  { slug: "commonwealth-v-murgia", title: "Commonwealth v. Murgia (Va. Sup. Ct. 2019)", excerpt: "Coach-student grooming via text messages leads to conviction." },
  { slug: "commonwealth-v-delcid", title: "Commonwealth v. Delcid (Va. Ct. App. 2020)", excerpt: "Defective Miranda warnings result in suppression of statements." },
  { slug: "commonwealth-v-kilpatrick", title: "Commonwealth v. Kilpatrick (Va. Sup. Ct. 2022)", excerpt: "Expert fantasy testimony excluded – strong circumstantial evidence." },
  { slug: "mackey-v-commonwealth", title: "Mackey v. Commonwealth (Va. Ct. App. 2022)", excerpt: "Important ruling on lesser-included offenses and due process." },
  { slug: "anthony-v-commonwealth", title: "Anthony v. Commonwealth (Va. Ct. App. 2023)", excerpt: "Autism sentencing relief under § 19.2-303.6 must be properly preserved." },
  { slug: "cribbs-v-commonwealth", title: "Cribbs v. Commonwealth (Va. Ct. App. 2024)", excerpt: "Digital evidence chain-of-custody upheld in multi-platform case." },
  { slug: "cross-v-gilmore", title: "Cross v. Gilmore (E.D. Va. 2016)", excerpt: "Federal habeas statute of limitations strictly applied." },
  { slug: "commonwealth-v-taylor", title: "Commonwealth v. Taylor", excerpt: "Child pornography charges dismissed after forensic malware challenge." },
  { slug: "wallace-v-commonwealth", title: "Wallace v. Commonwealth", excerpt: "Court clarifies intentional unauthorized access requirement in digital crimes." },
];

export default function ComputerCrimesCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Computer Crimes Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia and EDVA outcomes in computer crimes, child pornography, online solicitation of a minor, and cyber offenses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/computer-crimes/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Computer Crimes or Online Solicitation Charges?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          With a strong technical background, D.J. Rivera delivers cutting-edge defenses in both state and federal court.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/computer-crimes" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Computer Crimes Practice Area
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
