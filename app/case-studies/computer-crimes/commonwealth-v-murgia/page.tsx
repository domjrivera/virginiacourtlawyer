import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Commonwealth v. Murgia (Va. Sup. Ct. 2019) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia Supreme Court decision on coach-student grooming and text-message solicitation of a minor. D.J. Rivera defends these cases in Richmond and Northern Virginia.",
};

export default function MurgiaCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Commonwealth v. Murgia (Va. Sup. Ct. 2019)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Va. Code § 18.2-374.3(D) prohibits the use of any communications system to solicit a child aged 15 to 17 with lascivious intent to engage in the sexual acts listed in subsection (C). This state offense frequently overlaps with federal enticement charges under 18 U.S.C. § 2422(b) when the communications cross state lines or involve grooming behavior.</p>

      <p>In Commonwealth v. Murgia, 297 Va. 310, 827 S.E.2d 377 (2019), a 40-year-old high-school track coach exchanged text messages with a 16-year-old female student that began with athletic advice and escalated to graphic descriptions of sexual acts, including detailed intercourse. Convicted under Va. Code § 18.2-374.3(D), the defendant argued the messages were mere fantasy.</p>

      <p>The Virginia Supreme Court reinstated the conviction, holding that sufficiency is determined by the totality of the communications and the ongoing coach-student relationship. The court ruled that the defendant’s detailed descriptions established lascivious intent to solicit prohibited acts. This precedent is routinely cited in Virginia computer solicitation of a minor cases involving progressive grooming via text or social media and underscores the risk of overlapping federal charges under 18 U.S.C. § 2422(b).</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one faces Virginia computer solicitation of a minor charges, our experienced defense team stands ready to protect your rights.</p>
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
