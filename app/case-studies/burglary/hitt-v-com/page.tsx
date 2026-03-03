import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Hitt v. Com. | Virginia Burglary Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court upheld burglary conviction, emphasizing unlawful entry and intent under Va. Code § 18.2-89.",
};

export default function HittVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Hitt v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Burglary Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-89, burglary is defined as breaking and entering the dwelling of another at night with intent to commit a felony, assault, or larceny therein. The statute requires proof of unlawful entry and specific intent at the time of entry. Virginia's burglary laws align with federal statutes that similarly criminalize unauthorized entry with intent to commit a crime, emphasizing protection of habitation and property. Understanding these elements is crucial for defendants, as the prosecution must establish both the entry and the intent beyond a reasonable doubt.</p>

      <p>In this case, the defendant was charged with burglary after being found inside a residence without permission. The prosecution alleged that the defendant entered the home at night intending to commit larceny. The defense argued that the defendant had lawful access to the property and lacked the requisite intent to commit a crime upon entry. The factual dispute centered on whether the entry was unauthorized and whether the defendant possessed criminal intent at the time of entry.</p>

      <p>The court held that the evidence was sufficient to prove unlawful entry and intent, affirming the burglary conviction. It emphasized that circumstantial evidence, including the defendant's presence inside the dwelling at night without consent, supported the inference of criminal intent. This ruling underscores the importance of contesting both the element of unauthorized entry and intent in burglary cases. For defendants, the decision highlights the need for robust factual defenses and careful examination of prosecution evidence to challenge burglary charges effectively.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Burglary Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/burglary" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Burglary Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
