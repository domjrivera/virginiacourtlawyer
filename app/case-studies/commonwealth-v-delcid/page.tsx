import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Commonwealth v. Delcid (Va. Ct. App. 2020) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia Court of Appeals ruling on defective Miranda warnings in online solicitation of a minor investigation. D.J. Rivera defends these cases in Richmond and Northern Virginia.",
};

export default function DelcidCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Commonwealth v. Delcid (Va. Ct. App. 2020)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Va. Code § 18.2-374.3 requires law enforcement to respect constitutional safeguards during custodial interrogations in online solicitation investigations. Any statements obtained after defective Miranda warnings are subject to suppression, a principle that mirrors federal protections in interstate enticement cases under 18 U.S.C. § 2422(b).</p>

      <p>In Commonwealth v. Delcid, Record No. 1957-19-4 (Va. Ct. App. Apr. 28, 2020), the defendant was arrested for online solicitation of a minor. During questioning, the detective presented a Miranda form but told the defendant the right to appointed counsel was “more for court” and “not exactly right this second.” The defendant waived and made incriminating statements.</p>

      <p>The Virginia Court of Appeals affirmed suppression, ruling that the detective’s explanation rendered the warnings misleading and the waiver neither knowing nor intelligent. This decision is critical for attorneys handling Virginia computer solicitation of a minor cases, as it reinforces the precise requirements for valid Miranda advisements and helps prevent statements from being used in both state and potential federal prosecutions.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you are under investigation for Virginia computer solicitation of a minor, our firm can immediately evaluate your case and protect your constitutional rights.</p>
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
