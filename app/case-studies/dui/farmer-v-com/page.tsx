import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Farmer v. Com. | Virginia DUI / DWI Defense Lawyer – D.J. Rivera, Esq.",
  description: "Virginia court affirms DUI conviction, emphasizing lawful traffic stops and reliable chemical testing.",
};

export default function FarmerVComCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Farmer v. Com.</h1>
        <p className="text-2xl text-crimson mt-4">Virginia DUI / DWI Defense</p>
      </div>

      <p>Under Virginia Code § 18.2-266, it is unlawful for any person to operate a motor vehicle while under the influence of alcohol or drugs to a degree that impairs their ability to drive safely. The statute defines the offense by the presence of intoxicating substances in the bloodstream or by observable impairment of driving skills. Virginia law also incorporates implied consent provisions requiring drivers to submit to chemical testing, with refusal constituting a separate offense. These state provisions align with federal DUI regulations aimed at reducing impaired driving and enhancing public safety on roadways.</p>

      <p>In this case, the defendant was charged with driving under the influence after a traffic stop where law enforcement observed erratic driving behavior. The prosecution alleged that the defendant's blood alcohol concentration exceeded the legal limit, supported by chemical test results obtained following the stop. The defense challenged the validity of the traffic stop and the accuracy of the breathalyzer test, arguing procedural errors and questioning the reliability of the evidence presented.</p>

      <p>The court held that the traffic stop was lawful and that the chemical test results were admissible, affirming the conviction under Virginia’s DUI statute. The ruling emphasized the importance of adherence to procedural safeguards during stops and testing to ensure evidence integrity. This case underscores the challenges defendants face in contesting DUI charges and highlights the necessity of skilled legal representation to scrutinize law enforcement conduct and evidentiary compliance in Virginia DUI prosecutions.</p>

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
