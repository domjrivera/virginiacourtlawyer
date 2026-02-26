import Link from "next/link";
import { Scale, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg text-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Your Freedom.<br />My Fight.
          </h1>
          <p className="text-2xl text-gold mb-10">Criminal Defense Attorney D.J. Rivera</p>
          <p className="max-w-2xl mx-auto text-lg mb-10">
            Serving clients throughout Greater Richmond and Northern Virginia. 
            Aggressive defense against every criminal charge under Virginia law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">
              Get Your Free Consultation
            </Link>
            <Link href="/practice-areas" className="border-2 border-white hover:bg-white hover:text-navy px-10 py-4 rounded text-lg font-medium transition">
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Scale className="w-12 h-12 text-gold mb-4" />
            <div className="text-4xl font-bold text-navy">100+</div>
            <div className="text-slate-600 mt-1">Virginia Court Victories</div>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-gold mb-4" />
            <div className="text-4xl font-bold text-navy">2 Regions</div>
            <div className="text-slate-600 mt-1">Richmond & Northern VA</div>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-gold mb-4" />
            <div className="text-4xl font-bold text-navy">24/7</div>
            <div className="text-slate-600 mt-1">Emergency Availability</div>
          </div>
        </div>
      </section>

      {/* Practice Areas Teaser */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Practice Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded shadow hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-2">DUI / DWI Defense</h3>
              <p className="text-slate-600">Virginia Code §18.2-266 and all related charges</p>
            </div>
            <div className="bg-white p-8 rounded shadow hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-2">Drug Crimes</h3>
              <p className="text-slate-600">Possession, distribution, PWID, marijuana, cocaine, fentanyl</p>
            </div>
            <div className="bg-white p-8 rounded shadow hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-2">Assault & Battery</h3>
              <p className="text-slate-600">§18.2-57, aggravated malicious wounding, domestic assault</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/practice-areas" className="text-navy underline hover:text-crimson">See All Practice Areas →</Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-8">Serving Courts Across Virginia</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <div>
              <h3 className="text-2xl font-medium mb-4 text-navy">Greater Richmond Area</h3>
              <p className="text-lg">Richmond • Henrico • Chesterfield • Hanover</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4 text-navy">Northern Virginia</h3>
              <p className="text-lg">Alexandria • Arlington • Fairfax • Prince William</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Charged with a crime in Virginia?</h2>
          <p className="text-xl mb-10">Don’t face the Commonwealth alone. Get experienced, aggressive representation today.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-12 py-5 rounded text-xl font-medium transition">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
