import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mackey v. Commonwealth (Va. Ct. App. 2022) | Virginia Solicitation of a Minor Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia Court of Appeals ruling on lesser-included offenses and due process in online solicitation of a minor prosecutions. D.J. Rivera defends these cases in Richmond and Northern Virginia.",
};

export default function MackeyCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Mackey v. Commonwealth (Va. Ct. App. 2022)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Solicitation of a Minor Defense</p>
      </div>

      <p>When a defendant is charged under Va. Code § 18.2-374.3(C) (victim younger than 15), the Commonwealth must prove the defendant knew or had reason to believe the victim was under that age. The statute’s knowledge element differs from subsection (D) (victim 15–17), and the two are not lesser-included offenses of each other. Federal law under 18 U.S.C. § 2422(b) similarly focuses on the defendant’s belief regarding the victim’s age.</p>

      <p>In Mackey v. Commonwealth, 74 Va. App. 348, 869 S.E.2d 61 (2022), a 35-year-old defendant was indicted under subsection (C) for soliciting sexual intercourse from a 14-year-old girl via Facebook Messenger. At trial the judge found ambiguity in the victim’s testimony about her stated age and sua sponte convicted him under subsection (D).</p>

      <p>The Virginia Court of Appeals reversed, ruling that subsection (D) is not a lesser-included offense because the knowledge elements are mutually exclusive and the trial court never formally amended the indictment under Va. Code § 19.2-231. This decision protects due-process rights in Virginia online solicitation of a minor prosecutions involving borderline age questions.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you have been charged with Virginia computer solicitation of a minor, our firm can analyze the charging documents and evidence to build the strongest possible defense.</p>
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
