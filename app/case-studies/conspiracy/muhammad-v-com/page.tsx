import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Muhammad v. Commonwealth | Virginia Conspiracy Defense – D.J. Rivera, Esq.",
  description: "Virginia Supreme Court (2005) — Whether the defendant could be convicted of both conspiracy to commit murder and.... D.J. Rivera defends Conspiracy cases in Richmond and Northern Virginia.",
};

export default function MuhammadVComCase() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/case-studies" className="text-slate-400 hover:text-gold text-sm transition">Case Studies</Link>
            <span className="text-slate-600">›</span>
            <Link href="/case-studies/conspiracy" className="text-slate-400 hover:text-gold text-sm transition">Conspiracy</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold text-sm">Muhammad v. Commonwealth</span>
          </div>
          <p className="text-gold font-medium uppercase tracking-widest mb-3 text-sm">Conspiracy Case Study</p>
          <h1 className="text-4xl font-serif leading-tight mb-4">Muhammad v. Commonwealth</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>📍 Virginia Supreme Court</span>
            <span>📅 2005</span>
            <span>⚖️ Virginia Code § 18.2-22</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-navy">
            <h2 className="text-xl font-semibold text-navy mb-3">Legal Issue</h2>
            <p className="text-slate-700 leading-relaxed">Whether the defendant could be convicted of both conspiracy to commit murder and the underlying murder.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-navy mb-4">Court Holding</h2>
            <p className="text-slate-700 leading-relaxed text-lg">The court affirmed the convictions for both conspiracy to commit murder and murder, finding that conspiracy and the underlying offense are separate crimes that can be charged and punished separately. The court held that the Double Jeopardy Clause does not bar conviction for both conspiracy and the completed offense.</p>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8">
            <h2 className="text-2xl font-serif mb-4 text-gold">Defense Takeaway</h2>
            <p className="text-slate-200 leading-relaxed">Conspiracy is a separate offense from the underlying crime — a defendant can be convicted of both. This means that conspiracy charges can significantly increase a defendant's total sentence exposure. D.J. Rivera challenges conspiracy charges on the merits and also argues for concurrent rather than consecutive sentences where both conspiracy and the underlying offense are charged.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-navy mb-3">Relevant Virginia Law</h2>
            <p className="text-slate-600">This case involves <strong>§ 18.2-22</strong> of the Virginia Code. For a full analysis of how this statute applies to your case, consult with D.J. Rivera.</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/conspiracy" className="block border border-slate-200 rounded-2xl p-6 hover:border-gold transition text-center">
            <p className="text-navy font-medium">← Back to Conspiracy Case Studies</p>
          </Link>
          <Link href="/practice-areas/conspiracy" className="block bg-navy text-white rounded-2xl p-6 hover:bg-slate-800 transition text-center">
            <p className="font-medium">View Conspiracy Defense →</p>
          </Link>
        </div>
      </div>

      <section className="bg-crimson text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Facing Conspiracy Charges in Virginia?</h2>
          <p className="text-lg mb-8">D.J. Rivera applies the lessons of cases like this one to defend clients throughout Richmond and Northern Virginia. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-10 py-4 rounded text-lg font-medium transition">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
