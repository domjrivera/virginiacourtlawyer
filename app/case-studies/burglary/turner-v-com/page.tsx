import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Turner v. Com. | Virginia Burglary Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia burglary law requires intent to commit a crime inside; unauthorized entry alone is insufficient.",
};

export default function TurnerVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Turner v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Burglary Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-89, burglary is defined as unlawfully and intentionally entering or remaining in a dwelling house, building, or other structure with the intent to commit a felony, theft, or assault therein. The statute requires proof of unauthorized entry combined with the specific intent to commit a crime inside. This offense is a Class 3 felony in Virginia, reflecting its serious nature. Federal burglary statutes similarly criminalize unlawful entry with intent to commit a crime, but Virginia’s law emphasizes the intent element and the type of structure involved.</p>

      <p>In this case, the defendant was charged with burglary after being found inside a residential property without permission. The prosecution argued that the defendant intended to commit theft based on circumstantial evidence, including the defendant’s presence and possession of stolen items. The defense contended that the defendant entered mistakenly or without criminal intent, challenging the sufficiency of the prosecution’s proof regarding the intent element required by the statute.</p>

      <p>The court held that mere unauthorized entry is insufficient for a burglary conviction without clear evidence of intent to commit a crime inside. It emphasized that intent must be established beyond a reasonable doubt, relying on direct or strong circumstantial evidence. This ruling underscores the importance of the intent element in Virginia burglary cases and provides a critical defense angle for individuals facing similar charges, reinforcing that presence alone does not constitute burglary under § 18.2-89.</p>

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
