import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Morin v. Virginia, Record No. 2200-06-4 (Va. App. 9/18/2007) | Virginia DUI / DWI Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court upheld DUI conviction, confirming impairment can be proven through officer observations and circumstantial evidence.",
};

export default function MorinVVirginiaCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Morin v. Virginia, Record No. 2200-06-4 (Va. App. 9/18/2007)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia DUI / DWI Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-266, it is unlawful for any person to operate a motor vehicle while under the influence of alcohol or drugs to a degree that impairs their ability to drive safely. The statute defines the offense by requiring proof that the defendant was driving and that their mental or physical faculties were impaired by alcohol or drugs. Virginia’s DUI laws align with federal standards, such as those under 23 U.S.C. § 163, which encourage states to enforce blood alcohol concentration limits and impaired driving prohibitions to promote roadway safety. Defendants may challenge the sufficiency of evidence regarding impairment or procedural issues related to breath or blood testing under these laws.</p>

      <p>In this case, the defendant was charged with driving under the influence after being stopped by law enforcement who observed signs of intoxication. The prosecution presented evidence including field sobriety tests and officer testimony regarding the defendant’s impaired driving behavior. The defense argued that the evidence was insufficient to prove impairment beyond a reasonable doubt and challenged the reliability of the sobriety assessments. The dispute centered on whether the observed conduct met the statutory threshold for impairment under Virginia law.</p>

      <p>The court held that the evidence presented was adequate to support the conviction, emphasizing that impairment can be established through circumstantial evidence and officer observations without requiring a specific blood alcohol level. This ruling underscores the broad scope of Virginia’s DUI statute and the importance of challenging the factual basis of impairment claims. For defendants, the case highlights the necessity of scrutinizing the reliability of sobriety tests and the totality of evidence when contesting DUI charges in Virginia courts.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia DUI / DWI Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/dui" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our DUI / DWI Defense Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
