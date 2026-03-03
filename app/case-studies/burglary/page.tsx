import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Burglary Case Studies | Virginia Burglary Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in burglary, breaking & entering, and armed burglary cases. See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

export default function BurglaryCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Burglary Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court results in §18.2-89, §18.2-90, and §18.2-91 burglary cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 1. Clark v. Com. */}
        <Link
          href="/case-studies/burglary/clark-v-com"
          className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold"
        >
          <div className="text-crimson text-sm font-medium mb-2">Burglary Defense</div>
          <h3 className="text-3xl font-serif text-navy mb-4">Clark v. Com.</h3>
          <p className="text-slate-600 mb-6">Virginia court affirms burglary conviction, highlighting the importance of proving unlawful entry and criminal intent.</p>
          <span className="text-crimson font-medium">Read the full case study →</span>
        </Link>

        {/* 2. Hitt v. Com. */}
        <Link
          href="/case-studies/burglary/hitt-v-com"
          className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold"
        >
          <div className="text-crimson text-sm font-medium mb-2">Burglary Defense</div>
          <h3 className="text-3xl font-serif text-navy mb-4">Hitt v. Com.</h3>
          <p className="text-slate-600 mb-6">Virginia court upheld burglary conviction, emphasizing unlawful entry and intent under Va. Code § 18.2-89.</p>
          <span className="text-crimson font-medium">Read the full case study →</span>
        </Link>

        {/* 3. Johnson v. Com. */}
        <Link
          href="/case-studies/burglary/johnson-v-com"
          className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold"
        >
          <div className="text-crimson text-sm font-medium mb-2">Burglary Defense</div>
          <h3 className="text-3xl font-serif text-navy mb-4">Johnson v. Com.</h3>
          <p className="text-slate-600 mb-6">Virginia burglary conviction upheld for unlawful nighttime entry with intent to commit larceny.</p>
          <span className="text-crimson font-medium">Read the full case study →</span>
        </Link>

        {/* 4. Turner v. Com. */}
        <Link
          href="/case-studies/burglary/turner-v-com"
          className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold"
        >
          <div className="text-crimson text-sm font-medium mb-2">Burglary Defense</div>
          <h3 className="text-3xl font-serif text-navy mb-4">Turner v. Com.</h3>
          <p className="text-slate-600 mb-6">Virginia burglary law requires intent to commit a crime inside; unauthorized entry alone is insufficient.</p>
          <span className="text-crimson font-medium">Read the full case study →</span>
        </Link>

        {/* 5. Wright v. Com. */}
        <Link
          href="/case-studies/burglary/wright-v-com"
          className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold"
        >
          <div className="text-crimson text-sm font-medium mb-2">Burglary Defense</div>
          <h3 className="text-3xl font-serif text-navy mb-4">Wright v. Com.</h3>
          <p className="text-slate-600 mb-6">Virginia burglary law requires unlawful entry and criminal intent; this case clarifies key defense strategies.</p>
          <span className="text-crimson font-medium">Read the full case study →</span>
        </Link>
      </div>

      <div className="mt-20 text-center bg-navy text-white py-16 px-8 rounded-3xl">
        <h3 className="text-4xl font-serif mb-6">Facing Burglary Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Don’t face the Commonwealth alone. Our experienced team fights aggressively to protect your freedom and record.</p>
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded-2xl text-2xl font-medium transition">
          Get Your Free Consultation – 24/7
        </Link>
      </div>
    </div>
  );
}
