import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cross v. Gilmore | Virginia Computer Crimes Defense – D.J. Rivera, Esq.",
  description: "U.S. District Court, E.D. Va. (2014) — Whether the government's warrantless access to the defendant's email constituted.... D.J. Rivera defends Computer Crimes cases in Richmond and Northern Virginia.",
};

export default function CrossVGilmoreCase() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/case-studies" className="text-slate-400 hover:text-gold text-sm transition">Case Studies</Link>
            <span className="text-slate-600">›</span>
            <Link href="/case-studies/computer-crimes" className="text-slate-400 hover:text-gold text-sm transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold text-sm">Cross v. Gilmore</span>
          </div>
          <p className="text-gold font-medium uppercase tracking-widest mb-3 text-sm">Computer Crimes Case Study</p>
          <h1 className="text-4xl font-serif leading-tight mb-4">Cross v. Gilmore</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>📍 U.S. District Court, E.D. Va.</span>
            <span>📅 2014</span>
            <span>⚖️ Virginia Code 18 U.S.C. § 1030 / Fourth Amendment</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-navy">
            <h2 className="text-xl font-semibold text-navy mb-3">Legal Issue</h2>
            <p className="text-slate-700 leading-relaxed">Whether the government's warrantless access to the defendant's email constituted an unreasonable search under the Fourth Amendment.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-navy mb-4">Court Holding</h2>
            <p className="text-slate-700 leading-relaxed text-lg">The court held that the government's warrantless access to the defendant's email — obtained through a subpoena rather than a warrant — violated the Fourth Amendment. The court held that email stored on a third-party server is protected by a reasonable expectation of privacy and requires a warrant for law enforcement access.</p>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8">
            <h2 className="text-2xl font-serif mb-4 text-gold">Defense Takeaway</h2>
            <p className="text-slate-200 leading-relaxed">The Fourth Amendment protects electronic communications stored on third-party servers. D.J. Rivera challenges the government's access to email, cloud storage, and other electronic communications obtained without a warrant, moving to suppress evidence obtained in violation of the Fourth Amendment.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-navy mb-3">Relevant Virginia Law</h2>
            <p className="text-slate-600">This case involves <strong>18 U.S.C. § 1030 / Fourth Amendment</strong> of the Virginia Code. For a full analysis of how this statute applies to your case, consult with D.J. Rivera.</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/computer-crimes" className="block border border-slate-200 rounded-2xl p-6 hover:border-gold transition text-center">
            <p className="text-navy font-medium">← Back to Computer Crimes Case Studies</p>
          </Link>
          <Link href="/practice-areas/computer-crimes" className="block bg-navy text-white rounded-2xl p-6 hover:bg-slate-800 transition text-center">
            <p className="font-medium">View Computer Crimes Defense →</p>
          </Link>
        </div>
      </div>

      <section className="bg-crimson text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Facing Computer Crimes Charges in Virginia?</h2>
          <p className="text-lg mb-8">D.J. Rivera applies the lessons of cases like this one to defend clients throughout Richmond and Northern Virginia. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-10 py-4 rounded text-lg font-medium transition">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
