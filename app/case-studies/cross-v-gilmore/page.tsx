import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cross v. Gilmore (E.D. Va. 2016) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Federal habeas ruling on statute of limitations for Virginia online solicitation of a minor convictions. D.J. Rivera defends these cases in Richmond and Northern Virginia.",
};

export default function CrossCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Cross v. Gilmore (E.D. Va. 2016)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Federal habeas review of Virginia computer solicitation of a minor convictions is strictly limited by the one-year statute of limitations in 28 U.S.C. § 2244(d). Even when new Fourth Amendment precedent emerges (such as Riley v. California), the pre-existing state of the law does not constitute a state-created “impediment” that tolls the deadline.</p>

      <p>In Cross v. Gilmore, 164 F. Supp. 3d 818 (E.D. Va. 2016), the petitioner pled guilty to electronic solicitation of a minor under Va. Code § 18.2-374.3 after a private citizen discovered explicit messages to his 12-year-old step-sister on his cell phone. Police seized and searched the phone incident to arrest. Years later, relying on Riley, he claimed ineffective assistance for counsel’s failure to move to suppress.</p>

      <p>The federal district court dismissed the petition as untimely. The court held that the pre-Riley state of the law did not qualify as an “impediment” under § 2244(d)(1)(B); futility is not the same as an impediment. This federal decision illustrates the strict limitations period for collateral attacks on Virginia computer solicitation of a minor convictions and the interplay between state prosecutions and federal online child exploitation laws under 18 U.S.C. § 2422(b).</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you have been convicted of Virginia computer solicitation of a minor and are considering post-conviction relief, our firm can evaluate your options under both state and federal law.</p>
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
