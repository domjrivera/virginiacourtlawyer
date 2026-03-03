import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Wright v. Com. | Virginia Burglary Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia burglary law requires unlawful entry and criminal intent; this case clarifies key defense strategies.",
};

export default function WrightVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Wright v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Burglary Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-89, burglary is defined as breaking and entering the dwelling house of another at night with intent to commit a felony, theft, or assault therein. The statute requires proof of unlawful entry and specific intent to commit a crime inside the dwelling. Virginia’s burglary laws align closely with federal burglary statutes, which similarly emphasize unlawful entry with criminal intent. Understanding these elements is crucial for defendants, as mere presence in a building without intent does not constitute burglary under Virginia law.</p>

      <p>In this case, the defendant was charged with burglary after being found inside a residence without permission. The prosecution argued that the defendant unlawfully entered the home at night intending to commit theft. Conversely, the defense contended that the defendant had permission to enter and lacked any criminal intent. The factual dispute centered on whether the entry was authorized and whether the defendant intended to commit a crime upon entry.</p>

      <p>The court held that the evidence was insufficient to prove unlawful entry with intent, emphasizing the necessity of demonstrating both elements beyond a reasonable doubt. This ruling underscores the importance of intent and authorization in burglary prosecutions under Virginia law. For defendants, it highlights that establishing consent or lack of criminal intent can be a viable defense, shaping how attorneys approach similar burglary charges in the Commonwealth.</p>

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
