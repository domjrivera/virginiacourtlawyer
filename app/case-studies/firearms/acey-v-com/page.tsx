import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Acey v. Com. | Virginia Firearms Offenses Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms conviction for unlawful concealed firearm possession, emphasizing knowledge and search legality.",
};

export default function AceyVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Acey v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Firearms Offenses</p>
      </div>

      <p>Virginia law strictly regulates the possession and use of firearms under Title 18.2, particularly §§ 18.2-308 and 18.2-308.2, which prohibit carrying concealed weapons and possession of firearms by certain individuals. To establish a violation, the prosecution must prove that the defendant knowingly possessed a firearm in a manner prohibited by statute. These state provisions align with federal laws such as 18 U.S.C. § 922, which restrict firearm possession by felons and other disqualified persons, emphasizing the serious nature of firearms offenses in both jurisdictions.</p>

      <p>In this case, the defendant was charged with unlawful possession of a firearm after law enforcement discovered a concealed weapon during a routine stop. The prosecution argued that the defendant knowingly carried the firearm without the required permit, violating Virginia Code § 18.2-308. The defense contended that the defendant was unaware the weapon was in his possession and challenged the legality of the search that led to the discovery of the firearm.</p>

      <p>The court held that the evidence sufficiently demonstrated the defendant's knowing possession of the concealed firearm, affirming the conviction under § 18.2-308. The ruling underscored the importance of the defendant's awareness in establishing possession and validated the search procedures used by law enforcement. This case serves as a critical precedent for defendants facing similar charges, highlighting the necessity of challenging both the knowledge element and the legality of evidence obtained during searches.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Firearms Offenses charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/firearms" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Firearms Offenses Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
