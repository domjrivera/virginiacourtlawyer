import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Anthony v. Commonwealth (Va. Ct. App. 2023) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia Court of Appeals ruling on autism sentencing relief in online solicitation of a minor cases. D.J. Rivera defends these charges in Richmond and Northern Virginia.",
};

export default function AnthonyCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Anthony v. Commonwealth (Va. Ct. App. 2023)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Defendants convicted under Va. Code § 18.2-374.3(C) may seek sentencing relief under Va. Code § 19.2-303.6 when autism or another qualifying disorder substantially contributed to the offense. Proper preservation of sentencing issues is critical, as unpreserved claims are waived on appeal.</p>

      <p>In Anthony v. Commonwealth, No. 1658-22-2 (Va. Ct. App. Sept. 26, 2023), the defendant pled guilty to soliciting a 13-year-old under Va. Code § 18.2-374.3(C). At sentencing he requested a deferred disposition under the autism statute. The trial court orally found he qualified but was not an appropriate candidate; the final order stated the statute “is not applicable.”</p>

      <p>The Virginia Court of Appeals affirmed because counsel failed to object specifically to the final order’s language, rendering the claim unpreserved under Rule 5A:18. This case serves as a cautionary example in Virginia computer solicitation of a minor sentencing hearings involving neurodiversity.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you face Virginia computer solicitation of a minor charges and have a qualifying disorder, our firm can ensure all sentencing options are properly preserved and presented.</p>
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
