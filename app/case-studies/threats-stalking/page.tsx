import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Threats and Stalking Case Studies | Virginia Threats & Stalking Defense Lawyer – D.J. Rivera, Esq.",
  description: "Real Virginia court outcomes in threats (§18.2-60) and stalking (§18.2-60.3) cases. See how D.J. Rivera defends clients in Richmond and Northern Virginia.",
};

const cases = [
  {
    slug: "banks-v-commonwealth",
    title: "Banks v. Commonwealth",
    excerpt: "Virginia courts uphold stalking convictions when repeated contact and threats cause reasonable fear.",
  },
  {
    slug: "keyes-v-com",
    title: "Keyes v. Com.",
    excerpt: "Virginia law criminalizes threats and stalking when repeated conduct causes reasonable fear of harm.",
  },
  {
    slug: "parker-v-com",
    title: "Parker v. Com.",
    excerpt: "Virginia law prohibits threats and stalking that cause reasonable fear; this case clarifies key elements for defense.",
  },
  {
    slug: "raja-v-com",
    title: "Raja v. Com.",
    excerpt: "Virginia law criminalizes repeated threatening communications as stalking and threats under §§ 18.2-60 and 18.2-60.3.",
  },
  {
    slug: "woolfolk-v-com",
    title: "Woolfolk v. Com.",
    excerpt: "Virginia court confirms that threats and repeated conduct causing fear constitute stalking under § 18.2-60.",
  },
];

export default function ThreatsStalkingCaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Threats and Stalking Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Real Virginia court outcomes in threats and stalking cases (§18.2-60 & §18.2-60.3).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/threats-stalking/${c.slug}`}
            className="block bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1 transition-all border border-transparent hover:border-gold group"
          >
            <h3 className="text-2xl font-serif text-navy group-hover:text-crimson transition mb-4">{c.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{c.excerpt}</p>
            <span className="text-crimson font-medium group-hover:underline">Read full case study →</span>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <h3 className="text-4xl font-serif mb-6">Facing Threats or Stalking Charges in Virginia?</h3>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Don’t face the Commonwealth alone. Our experienced team can evaluate your case against these precedents and build a strong defense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/practice-areas/threats-stalking" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-amber-600 transition"
          >
            View Threats and Stalking Practice Area
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-navy px-12 py-5 rounded-xl text-lg font-medium hover:bg-slate-100 transition"
          >
            Contact Us for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
