import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "White v. United States | Virginia Robbery Defense – D.J. Rivera, Esq.",
  description: "U.S. Court of Appeals, Fourth Circuit (2016) — Whether a Virginia robbery conviction qualifies as a 'crime of violence' for pur.... D.J. Rivera defends Robbery cases in Richmond and Northern Virginia.",
};

export default function WhiteVUnitedStatesCase() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/case-studies" className="text-slate-400 hover:text-gold text-sm transition">Case Studies</Link>
            <span className="text-slate-600">›</span>
            <Link href="/case-studies/robbery" className="text-slate-400 hover:text-gold text-sm transition">Robbery</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold text-sm">White v. United States</span>
          </div>
          <p className="text-gold font-medium uppercase tracking-widest mb-3 text-sm">Robbery Case Study</p>
          <h1 className="text-4xl font-serif leading-tight mb-4">White v. United States</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>📍 U.S. Court of Appeals, Fourth Circuit</span>
            <span>📅 2016</span>
            <span>⚖️ Virginia Code § 18.2-58 / USSG § 4B1.1</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-navy">
            <h2 className="text-xl font-semibold text-navy mb-3">Legal Issue</h2>
            <p className="text-slate-700 leading-relaxed">Whether a Virginia robbery conviction qualifies as a 'crime of violence' for purposes of the federal career offender enhancement.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-navy mb-4">Court Holding</h2>
            <p className="text-slate-700 leading-relaxed text-lg">The Fourth Circuit held that Virginia robbery does not categorically qualify as a 'crime of violence' under the federal career offender guideline because Virginia robbery can be committed by intimidation alone, without the use of physical force. This ruling has significant implications for defendants with prior Virginia robbery convictions who face federal sentencing.</p>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8">
            <h2 className="text-2xl font-serif mb-4 text-gold">Defense Takeaway</h2>
            <p className="text-slate-200 leading-relaxed">This federal case has important implications for Virginia defendants with prior robbery convictions who face federal charges. If a prior Virginia robbery conviction does not qualify as a 'crime of violence,' it cannot be used to trigger the federal career offender enhancement — which can dramatically reduce the recommended federal sentence. D.J. Rivera analyzes the impact of prior convictions on federal sentencing in every federal case.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-navy mb-3">Relevant Virginia Law</h2>
            <p className="text-slate-600">This case involves <strong>§ 18.2-58 / USSG § 4B1.1</strong> of the Virginia Code. For a full analysis of how this statute applies to your case, consult with D.J. Rivera.</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/robbery" className="block border border-slate-200 rounded-2xl p-6 hover:border-gold transition text-center">
            <p className="text-navy font-medium">← Back to Robbery Case Studies</p>
          </Link>
          <Link href="/practice-areas/robbery" className="block bg-navy text-white rounded-2xl p-6 hover:bg-slate-800 transition text-center">
            <p className="font-medium">View Robbery Defense →</p>
          </Link>
        </div>
      </div>

      <section className="bg-crimson text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Facing Robbery Charges in Virginia?</h2>
          <p className="text-lg mb-8">D.J. Rivera applies the lessons of cases like this one to defend clients throughout Richmond and Northern Virginia. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-10 py-4 rounded text-lg font-medium transition">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
