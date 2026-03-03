import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cribbs v. Commonwealth (Va. Ct. App. 2024) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia Court of Appeals decision on digital evidence chain-of-custody in online solicitation of a minor cases. D.J. Rivera defends these cases in Richmond and Northern Virginia.",
};

export default function CribbsCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Cribbs v. Commonwealth (Va. Ct. App. 2024)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Va. Code § 18.2-374.3(C) criminalizes the use of any communications system to solicit a child younger than 15 with lascivious intent. Digital evidence from cell phones and messaging apps is frequently central to these prosecutions and must meet strict chain-of-custody requirements. Such cases can also trigger federal child pornography charges under 18 U.S.C. § 2252 when explicit images are transmitted.</p>

      <p>In Cribbs v. Commonwealth, No. 0347-23-2 (Va. Ct. App. June 4, 2024), the defendant solicited an undercover officer posing as a 13- or 14-year-old girl over Mocospace, Kik, and text for more than two months. He sent penis photographs, requested explicit images, and discussed sexual acts. Evidence from his seized cell phone was decisive at trial.</p>

      <p>The defendant challenged chain of custody and sufficiency. The Virginia Court of Appeals affirmed all convictions, finding the Commonwealth established a sufficient chain through packaging testimony and forensic analysis showing no tampering. Repeated explicit solicitations clearly established lascivious intent. This ruling reinforces the admissibility of properly authenticated digital evidence in Virginia online solicitation of a minor cases.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you are under investigation for Virginia computer solicitation of a minor, our firm can immediately challenge the admissibility of digital evidence and protect your rights.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/computer-crimes" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Computer Crimes Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
