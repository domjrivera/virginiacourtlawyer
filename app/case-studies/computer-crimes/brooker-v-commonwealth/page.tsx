import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Brooker v. Commonwealth (Va. Ct. App. 2003) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Landmark Virginia Court of Appeals case on online solicitation of a minor using webcams and live transmissions. D.J. Rivera defends these cases aggressively.",
};

export default function BrookerCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Brooker v. Commonwealth (Va. Ct. App. 2003)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>Virginia’s computer solicitation statute, Va. Code § 18.2-374.3, makes it unlawful for any person 18 years of age or older to use a communications system “for the purposes of soliciting, with lascivious intent, any person he knows or has reason to believe is a child younger than 15 years of age” to engage in sexual acts. This state law works in tandem with federal online child exploitation statutes, including 18 U.S.C. § 2422(b) (coercion and enticement of a minor using any facility of interstate commerce) and 18 U.S.C. § 2251 (sexual exploitation of children), which can lead to separate federal charges and mandatory minimum sentences when explicit images or live transmissions are involved.</p>

      <p>In Brooker v. Commonwealth, 41 Va. App. 609, 587 S.E.2d 732 (2003), the defendant participated in three distinct instant-message conversations in a “Romance Virginia” chat room with an undercover detective posing as a 12-year-old girl. He sent photographs of his exposed genitals, performed live masturbation via webcam while the minor watched, discussed performing oral sex and intercourse, provided his home telephone number, and proposed meeting the child. The Commonwealth charged him with three counts of using a communications system to solicit a minor under Va. Code § 18.2-374.3(B) and two counts of attempted indecent liberties. The defendant argued the evidence failed to prove he intended the minor to act on the solicitations.</p>

      <p>The Virginia Court of Appeals affirmed all convictions. The court held that the specific intent required by the statute may be inferred from the defendant’s explicit words and conduct, and that the offense is complete upon the incitement itself — even without an actual meeting. Separate chats on different dates properly supported multiple convictions. Because the defendant also transmitted explicit images, the conduct could have triggered additional child pornography charges under Va. Code § 18.2-374.1 and 18 U.S.C. § 2252. This decision remains a cornerstone in Virginia computer solicitation of a minor prosecutions involving webcams and live transmissions.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia computer solicitation of a minor charges, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
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
