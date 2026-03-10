import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Blankenship v. Commonwealth | Virginia Assault & Battery Defense – D.J. Rivera, Esq.",
  description: "Virginia Court of Appeals (2008) — Whether the prosecution proved the element of intent required for an assault and.... D.J. Rivera defends Assault & Battery cases in Richmond and Northern Virginia.",
};

export default function BlankenshipVCommonwealthCase() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/case-studies" className="text-slate-400 hover:text-gold text-sm transition">Case Studies</Link>
            <span className="text-slate-600">›</span>
            <Link href="/case-studies/assault-battery" className="text-slate-400 hover:text-gold text-sm transition">Assault & Battery</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold text-sm">Blankenship v. Commonwealth</span>
          </div>
          <p className="text-gold font-medium uppercase tracking-widest mb-3 text-sm">Assault & Battery Case Study</p>
          <h1 className="text-4xl font-serif leading-tight mb-4">Blankenship v. Commonwealth</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>📍 Virginia Court of Appeals</span>
            <span>📅 2008</span>
            <span>⚖️ Virginia Code § 18.2-57</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-navy">
            <h2 className="text-xl font-semibold text-navy mb-3">Legal Issue</h2>
            <p className="text-slate-700 leading-relaxed">Whether the prosecution proved the element of intent required for an assault and battery conviction under § 18.2-57.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-navy mb-4">Court Holding</h2>
            <p className="text-slate-700 leading-relaxed text-lg">The court affirmed the conviction, holding that the defendant's actions demonstrated the requisite intent to commit an unlawful touching. The court clarified that intent may be inferred from the circumstances surrounding the act, including the nature and force of the contact.</p>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8">
            <h2 className="text-2xl font-serif mb-4 text-gold">Defense Takeaway</h2>
            <p className="text-slate-200 leading-relaxed">This case illustrates that intent is the central battleground in assault and battery prosecutions. Defense counsel must scrutinize the evidence of intent carefully — challenging whether the contact was accidental, whether the defendant acted in self-defense, or whether the alleged victim consented to the contact. The prosecution's burden of proving intent beyond a reasonable doubt provides significant room for defense.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-navy mb-3">Relevant Virginia Law</h2>
            <p className="text-slate-600">This case involves <strong>§ 18.2-57</strong> of the Virginia Code. For a full analysis of how this statute applies to your case, consult with D.J. Rivera.</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/assault-battery" className="block border border-slate-200 rounded-2xl p-6 hover:border-gold transition text-center">
            <p className="text-navy font-medium">← Back to Assault & Battery Case Studies</p>
          </Link>
          <Link href="/practice-areas/assault-battery" className="block bg-navy text-white rounded-2xl p-6 hover:bg-slate-800 transition text-center">
            <p className="font-medium">View Assault & Battery Defense →</p>
          </Link>
        </div>
      </div>

      <section className="bg-crimson text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Facing Assault & Battery Charges in Virginia?</h2>
          <p className="text-lg mb-8">D.J. Rivera applies the lessons of cases like this one to defend clients throughout Richmond and Northern Virginia. Free consultation available 24/7.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-10 py-4 rounded text-lg font-medium transition">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
