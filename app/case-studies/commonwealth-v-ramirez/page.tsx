import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Commonwealth v. Ramirez | DUI Case Study – Breathalyzer Refusal",
};

export default function RamirezCase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 prose prose-slate">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif text-navy">Commonwealth v. Ramirez</h1>
        <p className="text-2xl text-crimson mt-4">DUI / DWI – Refusal & Blood Test Challenge</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Case Summary</h2>
      <p className="text-lg">
        Client was charged with DUI in Henrico County after refusing a breath test. Officers obtained a warrant for a blood draw.
      </p>

      <h2 className="text-3xl font-serif text-navy mt-16">Outcome</h2>
      <p className="text-lg font-medium text-green-700">
        All charges reduced to reckless driving. No jail, no license suspension.
      </p>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategy</h2>
      <p className="text-lg">Successful suppression of the blood test results due to improper warrant execution and chain-of-custody issues.</p>

      <div className="mt-16 bg-navy text-white p-10 rounded-3xl text-center">
        <Link href="/practice-areas/dui" className="inline-block bg-gold text-navy px-12 py-5 rounded text-xl font-medium hover:bg-amber-600 transition">
          See Our DUI Practice Area →
        </Link>
      </div>
    </div>
  );
}
