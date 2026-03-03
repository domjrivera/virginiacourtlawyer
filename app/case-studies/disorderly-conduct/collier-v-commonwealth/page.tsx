import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Collier v. Commonwealth, Record No. 2166-05-2 (Va. App. 3/20/2007) | Virginia Disorderly Conduct Defense Lawyer – D.J. Rivera, Esq.",
  description: "Learn how Virginia courts interpret disorderly conduct charges and the importance of intent in defense.",
};

export default function CollierVCommonwealthCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Collier v. Commonwealth, Record No. 2166-05-2 (Va. App. 3/20/2007)</h1>
        <p className="text-2xl text-crimson mt-4">Virginia Disorderly Conduct Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-415, disorderly conduct is prohibited when a person engages in acts that cause public inconvenience, annoyance, or alarm, such as fighting, making unreasonable noise, or using abusive language in public. The statute requires that the conduct be willful and that it disturb the public peace. Disorderly conduct is a misdemeanor offense in Virginia, and its elements focus on the nature of the behavior and its impact on public order. This state law parallels federal disorderly conduct provisions, which similarly aim to maintain public tranquility and safety.</p>

      <p>In this case, the defendant was charged with disorderly conduct after an incident involving loud and aggressive behavior in a public setting. The prosecution alleged that the defendant’s actions caused a disturbance and alarm among bystanders. The defendant argued that the conduct did not rise to the level of disorderly conduct as it lacked intent to disturb the peace and was not sufficiently disruptive. The factual dispute centered on whether the defendant’s behavior met the statutory criteria for disorderly conduct under Virginia law.</p>

      <p>The court held that the evidence supported a finding of disorderly conduct, emphasizing that the defendant’s willful actions created a public disturbance. The ruling clarified that even conduct short of physical violence can constitute disorderly conduct if it significantly disrupts public order. This case is significant for Virginia criminal defense as it underscores the importance of demonstrating the absence of intent or lack of substantial disturbance in defending against disorderly conduct charges. It serves as a precedent for interpreting the elements of disorderly conduct in similar factual contexts.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">If you or a loved one is facing Virginia Disorderly Conduct Defense charges in Virginia, our experienced defense team can evaluate the evidence against these precedents and explore every available defense, including suppression motions and sentencing mitigation.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas/disorderly-conduct" className="inline-block bg-gold text-navy px-10 py-4 rounded text-lg font-medium hover:bg-amber-600 transition">
            See Our Disorderly Conduct Practice Area
          </Link>
          <Link href="/contact" className="inline-block bg-white text-navy px-10 py-4 rounded text-lg font-medium hover:bg-slate-100 transition">
            Contact Us Today for a Confidential Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
