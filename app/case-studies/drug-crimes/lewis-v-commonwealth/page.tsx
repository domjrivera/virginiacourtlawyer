import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Lewis v. Commonwealth | Virginia Drug Crimes Defense – D.J. Rivera, Esq.",
  description: "Virginia Court of Appeals (2013) — Whether the drug evidence was properly identified and authenticated through chai.... D.J. Rivera defends Drug Crimes cases in Richmond and Northern Virginia.",
};

export default function LewisVCommonwealthCase() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/case-studies" className="text-slate-400 hover:text-gold text-sm transition">Case Studies</Link>
            <span className="text-slate-600">›</span>
            <Link href="/case-studies/drug-possession" className="text-slate-400 hover:text-gold text-sm transition">Drug Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold text-sm">Lewis v. Commonwealth</span>
          </div>
          <p className="text-gold font-medium uppercase tracking-widest mb-3 text-sm">Drug Crimes Case Study</p>
          <h1 className="text-4xl font-serif leading-tight mb-4">Lewis v. Commonwealth</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>📍 Virginia Court of Appeals</span>
            <span>📅 2013</span>
            <span>⚖️ Virginia Code § 18.2-250</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-navy">
            <h2 className="text-xl font-semibold text-navy mb-3">Legal Issue</h2>
            <p className="text-slate-700 leading-relaxed">Whether the drug evidence was properly identified and authenticated through chain of custody.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-navy mb-4">Court Holding</h2>
            <p className="text-slate-700 leading-relaxed text-lg">The court reversed the conviction, finding that the prosecution failed to establish a proper chain of custody for the drug evidence. The court held that gaps in the chain of custody — where the evidence was not accounted for during a critical period — created reasonable doubt as to whether the substance tested was the same substance seized from the defendant.</p>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8">
            <h2 className="text-2xl font-serif mb-4 text-gold">Defense Takeaway</h2>
            <p className="text-slate-200 leading-relaxed">Chain of custody is a critical issue in drug cases. Every person who handled the evidence from seizure to trial must be accounted for, and any gap in the chain creates an opportunity for a defense challenge. D.J. Rivera scrutinizes chain of custody records in every drug case and challenges any gaps or irregularities.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-navy mb-3">Relevant Virginia Law</h2>
            <p className="text-slate-600">This case involves <strong>§ 18.2-250</strong> of the Virginia Code. For a full analysis of how this statute applies to your case, consult with D.J. Rivera.</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/drug-possession" className="block border border-slate-200 rounded-2xl p-6 hover:border-gold transition text-center">
            <p className="text-navy font-medium">← Back to Drug Crimes Case Studies</p>
          </Link>
          <Link href="/practice-areas/drug-possession" className="block bg-navy text-white rounded-2xl p-6 hover:bg-slate-800 transition text-center">
            <p className="font-medium">View Drug Crimes Defense →</p>
          </Link>
        </div>
      </div>

      <section className="bg-crimson text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Facing Drug Crimes Charges in Virginia?</h2>
          <p className="text-lg mb-8">D.J. Rivera applies the lessons of cases like this one to defend clients throughout Richmond and Northern Virginia. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-10 py-4 rounded text-lg font-medium transition">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
