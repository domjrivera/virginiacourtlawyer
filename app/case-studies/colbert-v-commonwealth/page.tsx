import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Colbert v. Commonwealth (Va. Ct. App. 2006) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia Court of Appeals ruling on sex-offender registration for online solicitation of a minor cases. D.J. Rivera defends these charges in Richmond and Northern Virginia.",
};

export default function ColbertCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Colbert v. Commonwealth (Va. Ct. App. 2006)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Under Va. Code § 18.2-374.3(C), it is unlawful for any adult to use a communications system to solicit a person they know or have reason to believe is younger than 15 for sexual acts with lascivious intent. Conviction under this statute also triggers mandatory sex-offender registration under Va. Code § 9.1-902(A)(2) and can expose a defendant to parallel federal prosecution under 18 U.S.C. § 2422(b), which carries a 10-year mandatory minimum sentence.</p>

      <p>In Colbert v. Commonwealth, 47 Va. App. 390, 624 S.E.2d 108 (2006), the defendant used his computer on five separate occasions to solicit sexual intercourse and oral sodomy from an undercover officer posing as a 13-year-old girl. After pleading guilty to five counts under Va. Code § 18.2-374.3(B), the trial court ordered him to register as a sex offender. The defendant argued registration was improper because no actual minor victim existed.</p>

      <p>The Virginia Court of Appeals rejected this argument and affirmed the registration requirement. The court construed the prefatory language of Va. Code § 9.1-902 in light of the statute’s protective purpose and held that a defendant’s reasonable belief that he was soliciting a minor is sufficient to trigger registration upon conviction. This ruling aligns with federal law under 18 U.S.C. § 2422(b), which likewise focuses on the defendant’s intent rather than the actual age of the person contacted. Colbert makes clear that Virginia online solicitation convictions almost always carry lifetime registration consequences.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you are facing Virginia computer solicitation of a minor charges, our firm can provide the experienced defense needed to protect your future.</p>
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
