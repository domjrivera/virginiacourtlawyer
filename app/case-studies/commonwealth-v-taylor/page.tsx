import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Commonwealth v. Taylor | Child Pornography Case Study – Computer Crimes Defense",
};

export default function TaylorCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Commonwealth v. Taylor</h1>
        <p className="text-2xl text-crimson mt-4">Possession of Child Pornography (Computer Crimes)</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Case Summary</h2>
      <p className="text-lg">
        The defendant was charged in the Eastern District of Virginia with possession and receipt of child sexual abuse material after a search warrant was executed on his home. Federal agents seized multiple devices containing alleged CSAM.
      </p>

      <h2 className="text-3xl font-serif text-navy mt-16">Outcome</h2>
      <p className="text-lg font-medium text-green-700">
        All charges dismissed after we successfully challenged the forensic analysis and proved the images were not knowingly downloaded by the client (malware + lack of intent).
      </p>

      <h2 className="text-3xl font-serif text-navy mt-16">How We Defended This Case</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>Technical forensic examination revealed malware and unauthorized remote access</li>
        <li>Challenged “knowing possession” under both Virginia and federal law</li>
        <li>Suppressed evidence based on overbroad warrant</li>
      </ul>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <p className="text-xl">Facing similar computer crime or child pornography charges?</p>
        <Link href="/practice-areas/computer-crimes" className="inline-block bg-gold text-navy px-12 py-5 rounded text-xl font-medium mt-6 hover:bg-amber-600 transition">
          See Our Computer Crimes Practice Area →
        </Link>
      </div>
    </div>
  );
}
