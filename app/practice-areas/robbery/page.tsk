import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Robbery Lawyer | State & Federal §18.2-58 & Hobbs Act Defense",
  description: "Aggressive defense for state robbery and federal Hobbs Act / bank robbery charges in Richmond and Northern Virginia (EDVA). D.J. Rivera handles both state and federal court.",
  keywords: ["Richmond robbery lawyer", "Northern Virginia federal robbery attorney", "Hobbs Act defense", "Virginia Code 18.2-58", "Fairfax armed robbery lawyer", "D.J. Rivera"],
};

export default function RobberyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Robbery Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-58 (State) • Hobbs Act (Federal) • D.J. Rivera, Esq.</p>
      </div>

      {/* === STATE SECTION (unchanged) === */}
      <h2 className="text-3xl font-serif text-navy mt-16">The Law: Virginia Code § 18.2-58</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        If any person with intent to steal shall take, or attempt to take, from the person of another, or from his presence, any money or other thing of value, by force or intimidation, or by the threat or presenting of firearms, or other deadly weapon or instrumentality whatsoever, he shall be guilty of robbery.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties (State)</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>Standard Robbery: 5 years to life</li>
        <li>Armed Robbery / Use of Firearm: Mandatory minimum 3–5 years + up to life</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies (State)</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Lack of intent to permanently deprive</li>
        <li>Misidentification or alibi</li>
        <li>No force or intimidation used (reduce to larceny)</li>
        <li>Illegal stop, search, or lineup issues</li>
      </ul>

      {/* === FEDERAL SECTION === */}
      <h2 className="text-4xl font-serif text-navy border-b border-gold pb-4 mt-24 mb-12">Federal Robbery Charges (Common in Northern VA)</h2>
      <p className="text-lg mb-10">Cases in Alexandria, Arlington, Fairfax, and Prince William are often charged federally under the Hobbs Act (18 U.S.C. § 1951) or bank robbery statutes.</p>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 1951 — Hobbs Act Robbery</h3>
          <p className="text-lg">Robbery that affects interstate commerce (almost every commercial robbery). Up to 20 years federal prison.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-navy">18 U.S.C. § 2113 — Bank Robbery</h3>
          <p className="text-lg">Robbery of a federally insured bank. 10–25+ years possible.</p>
        </div>
      </div>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Free Consultation – State or Federal Robbery Charge
        </Link>
      </div>
    </div>
  );
}
