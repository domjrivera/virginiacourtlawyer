import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Commonwealth v. Kilpatrick (Va. Sup. Ct. 2022) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia Supreme Court decision on expert testimony and circumstantial evidence in online solicitation of a minor cases. D.J. Rivera defends these charges in Richmond and Northern Virginia.",
};

export default function KilpatrickCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Commonwealth v. Kilpatrick (Va. Sup. Ct. 2022)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Va. Code § 18.2-374.3(C) prohibits using a communications system to solicit a person believed to be younger than 15 for sexual acts with lascivious intent. Such conduct also violates federal law under 18 U.S.C. § 2422(b) and can implicate child pornography statutes if images are exchanged.</p>

      <p>In Commonwealth v. Kilpatrick, 876 S.E.2d 177 (2022), the defendant responded to a Craigslist post by an investigator posing as a 13-year-old girl. Over months he engaged in explicit chats, requested photos, and moved communications to email and text. Convicted on multiple counts under Va. Code § 18.2-374.3(C), he sought to introduce expert testimony claiming he believed the exchanges were fantasy role-play.</p>

      <p>The Virginia Supreme Court held that any error in excluding the testimony was harmless. Overwhelming evidence — the defendant’s acknowledgment of the girl’s age, his requests to delete the “text trail,” and his apology letter — proved both belief she was a minor and lascivious intent. This ruling demonstrates how strong circumstantial evidence can overcome evidentiary challenges in Virginia computer solicitation of a minor prosecutions.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you face Virginia computer solicitation of a minor charges, our firm can provide the aggressive defense needed to challenge the evidence and protect your future.</p>
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
