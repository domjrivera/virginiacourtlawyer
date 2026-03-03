import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Johnson v. Com. | Virginia Burglary Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia burglary conviction upheld for unlawful nighttime entry with intent to commit larceny.",
};

export default function JohnsonVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Johnson v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Burglary Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-89, burglary is defined as breaking and entering the dwelling house of another at night with intent to commit a felony or larceny therein. The statute requires proof of unlawful entry and specific intent to commit a crime inside the premises. This offense is considered a felony and carries significant penalties. Virginia’s burglary laws align with federal statutes that similarly criminalize unauthorized entry with criminal intent, emphasizing protection of individuals’ homes and property.</p>

      <p>In this case, the defendant was charged with burglary after being found inside a residence without permission during nighttime hours. The prosecution alleged that the defendant intended to steal valuables from the home. The defendant argued that entry was lawful as he believed he had permission to be on the property and denied any intent to commit a crime. The facts centered on whether the entry was unauthorized and if the requisite criminal intent was present at the time of entry.</p>

      <p>The court held that the prosecution met its burden by proving beyond a reasonable doubt that the defendant entered unlawfully and with intent to commit larceny. The ruling emphasized the importance of intent and the timing of entry in burglary cases. This decision reinforces the necessity for defense attorneys to challenge both the element of unauthorized entry and the defendant’s intent. It serves as a critical precedent for defending clients accused of burglary under Virginia law by scrutinizing the circumstances surrounding the entry and the defendant’s state of mind.</p>

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
