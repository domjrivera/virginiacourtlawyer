import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Commonwealth v. Taylor | Virginia Computer Crimes Defense – D.J. Rivera, Esq.",
  description: "Virginia Circuit Court (2017) — Whether the defendant's hacking of a former employer's computer system was cover.... D.J. Rivera defends Computer Crimes cases in Richmond and Northern Virginia.",
};

export default function CommonwealthVTaylorCase() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/case-studies" className="text-slate-400 hover:text-gold text-sm transition">Case Studies</Link>
            <span className="text-slate-600">›</span>
            <Link href="/case-studies/computer-crimes" className="text-slate-400 hover:text-gold text-sm transition">Computer Crimes</Link>
            <span className="text-slate-600">›</span>
            <span className="text-gold text-sm">Commonwealth v. Taylor</span>
          </div>
          <p className="text-gold font-medium uppercase tracking-widest mb-3 text-sm">Computer Crimes Case Study</p>
          <h1 className="text-4xl font-serif leading-tight mb-4">Commonwealth v. Taylor</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>📍 Virginia Circuit Court</span>
            <span>📅 2017</span>
            <span>⚖️ Virginia Code § 18.2-152.4 / 18 U.S.C. § 1030</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-navy">
            <h2 className="text-xl font-semibold text-navy mb-3">Legal Issue</h2>
            <p className="text-slate-700 leading-relaxed">Whether the defendant's hacking of a former employer's computer system was covered by the federal Computer Fraud and Abuse Act (CFAA) or Virginia's computer crime statute.</p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-navy mb-4">Court Holding</h2>
            <p className="text-slate-700 leading-relaxed text-lg">The court found jurisdiction under both the CFAA and Virginia's computer crime statute, holding that the defendant's unauthorized access to the former employer's computer system — conducted from Virginia — was subject to prosecution under both statutes. The court noted that the CFAA and Virginia's statute have overlapping but not identical coverage.</p>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8">
            <h2 className="text-2xl font-serif mb-4 text-gold">Defense Takeaway</h2>
            <p className="text-slate-200 leading-relaxed">Computer crime cases often involve overlapping federal and state jurisdiction. D.J. Rivera — with his background in both Virginia criminal law and federal computer law — is uniquely qualified to navigate the intersection of state and federal computer crime statutes, developing defenses that address both the CFAA and Virginia's § 18.2-152 series.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-navy mb-3">Relevant Virginia Law</h2>
            <p className="text-slate-600">This case involves <strong>§ 18.2-152.4 / 18 U.S.C. § 1030</strong> of the Virginia Code. For a full analysis of how this statute applies to your case, consult with D.J. Rivera.</p>
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
