import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Scale, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Service Areas | Virginia Criminal Defense Attorney D.J. Rivera",
  description: "D.J. Rivera defends clients in courts across Greater Richmond (Richmond, Henrico, Chesterfield, Hanover) and Northern Virginia (Alexandria, Arlington, Fairfax, Prince William). Available 24/7.",
};

const richmondLocations = [
  {
    name: 'Richmond City',
    courts: ['Richmond City Circuit Court', 'Richmond City General District Court', 'Richmond City Juvenile & Domestic Relations Court'],
    description: 'The City of Richmond is the capital of the Commonwealth and home to some of Virginia\'s most active criminal dockets. D.J. Rivera regularly appears in Richmond Circuit Court for felony trials and in Richmond General District Court for misdemeanor and preliminary hearings. From drug charges on the Boulevard to assault cases in the Fan, Richmond\'s courts require an attorney who knows the local landscape.',
  },
  {
    name: 'Henrico County',
    courts: ['Henrico County Circuit Court', 'Henrico County General District Court', 'Henrico County Juvenile & Domestic Relations Court'],
    description: 'Henrico County surrounds much of Richmond and has its own active criminal court system. DUI arrests on I-64 and Route 1, drug charges in Short Pump, and assault cases throughout the county all require representation from an attorney familiar with Henrico\'s prosecutors and judges. D.J. Rivera handles the full range of felony and misdemeanor matters in Henrico courts.',
  },
  {
    name: 'Chesterfield County',
    courts: ['Chesterfield County Circuit Court', 'Chesterfield County General District Court', 'Chesterfield County Juvenile & Domestic Relations Court'],
    description: 'Chesterfield County is one of the most populous jurisdictions in Virginia and sees a high volume of criminal cases ranging from DUI and drug offenses to violent felonies. D.J. Rivera provides aggressive defense representation throughout Chesterfield, from the Midlothian Turnpike corridor to the Route 360 area.',
  },
  {
    name: 'Hanover County',
    courts: ['Hanover County Circuit Court', 'Hanover County General District Court', 'Hanover County Juvenile & Domestic Relations Court'],
    description: 'Hanover County courts handle a range of criminal matters including DUI charges on I-95 and Route 301, drug offenses, and firearms cases. D.J. Rivera represents clients facing charges in Hanover County, providing the same level of aggressive defense that Richmond-area clients receive.',
  },
];

const novaLocations = [
  {
    name: 'Alexandria',
    courts: ['Alexandria Circuit Court', 'Alexandria General District Court', 'Alexandria Juvenile & Domestic Relations Court', 'U.S. District Court, Eastern District of Virginia (Alexandria Division)'],
    description: 'Alexandria is home to one of the most significant federal courthouses in the country — the Eastern District of Virginia, Alexandria Division, known as the "Rocket Docket" for its speed and the seriousness with which it handles federal criminal cases. D.J. Rivera\'s federal trial experience, including his landmark victory against the FBI and DOJ, makes him uniquely prepared to defend clients in Alexandria\'s federal and state courts.',
  },
  {
    name: 'Arlington County',
    courts: ['Arlington County Circuit Court', 'Arlington County General District Court', 'Arlington County Juvenile & Domestic Relations Court'],
    description: 'Arlington County courts handle a wide range of criminal matters, from DUI and drug charges to assault and weapons offenses. The proximity to Washington, D.C. means that federal charges can arise alongside state charges. D.J. Rivera provides comprehensive defense for Arlington clients facing both state and federal prosecution.',
  },
  {
    name: 'Fairfax County',
    courts: ['Fairfax County Circuit Court', 'Fairfax County General District Court', 'Fairfax County Juvenile & Domestic Relations Court', 'U.S. District Court, Eastern District of Virginia (Alexandria Division)'],
    description: 'Fairfax County is the most populous jurisdiction in Virginia and has one of the busiest criminal court systems in the Commonwealth. The volume and variety of criminal cases — from DUI on the Beltway to complex computer crime charges — demand an attorney with both breadth and depth of experience. D.J. Rivera handles the full spectrum of Fairfax County criminal matters.',
  },
  {
    name: 'Prince William County',
    courts: ['Prince William County Circuit Court', 'Prince William County General District Court', 'Prince William County Juvenile & Domestic Relations Court', 'Manassas City General District Court'],
    description: 'Prince William County and the City of Manassas see a high volume of criminal cases, including drug offenses along the I-95 corridor, DUI charges, assault cases, and firearms offenses. D.J. Rivera provides aggressive criminal defense representation for clients throughout Prince William County and the Manassas area.',
  },
];

export default function LocationsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-navy text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Service Areas</p>
          <h1 className="text-5xl font-serif leading-tight mb-6">Defending Clients Across Virginia</h1>
          <p className="text-xl text-slate-300 mb-10">
            D.J. Rivera appears in courts throughout Greater Richmond and Northern Virginia — from General District Court misdemeanor hearings to federal jury trials in the Eastern District of Virginia.
          </p>
          <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">
            Get Your Free Consultation — 24/7
          </Link>
        </div>
      </section>

      {/* Overview Map-style grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-serif text-navy mb-4">Greater Richmond Area</h2>
              <p className="text-slate-600 mb-4">Richmond · Henrico · Chesterfield · Hanover</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                The Richmond metro area is served by multiple independent court systems, each with its own prosecutors, judges, and procedural culture. D.J. Rivera has extensive experience across all Richmond-area courts, handling everything from first-offense DUI to serious felony charges.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-serif text-navy mb-4">Northern Virginia</h2>
              <p className="text-slate-600 mb-4">Alexandria · Arlington · Fairfax · Prince William</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Northern Virginia is home to some of the most active criminal courts in the Commonwealth, including the Eastern District of Virginia — one of the nation's most aggressive federal prosecution venues. D.J. Rivera's federal trial experience is a critical asset for NoVA clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Richmond Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-4 text-center">Greater Richmond Area Courts</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            D.J. Rivera regularly appears in all Richmond-area courts. Local knowledge of prosecutors, judges, and court procedures is a decisive advantage.
          </p>
          <div className="space-y-10">
            {richmondLocations.map((loc) => (
              <div key={loc.name} className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-7 h-7 text-crimson flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-serif text-navy">{loc.name}</h3>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">{loc.description}</p>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="text-xs font-bold text-navy uppercase tracking-widest mb-3">Courts Served</div>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {loc.courts.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-gold flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Northern Virginia Locations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-4 text-center">Northern Virginia Courts</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Northern Virginia courts — especially the Eastern District of Virginia — demand an attorney with proven federal trial experience. D.J. Rivera has it.
          </p>
          <div className="space-y-10">
            {novaLocations.map((loc) => (
              <div key={loc.name} className="bg-white rounded-2xl p-10 border border-slate-200">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-7 h-7 text-crimson flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-serif text-navy">{loc.name}</h3>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">{loc.description}</p>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="text-xs font-bold text-navy uppercase tracking-widest mb-3">Courts Served</div>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {loc.courts.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-gold flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Federal Court Note */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Scale className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-serif mb-6">Federal Court Representation — Eastern &amp; Western Districts of Virginia</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            The Eastern District of Virginia (EDVA) is one of the most aggressive federal prosecution venues in the country. Federal cybercrime, drug trafficking, firearms, and fraud cases are regularly prosecuted here with mandatory minimum sentences and complex evidentiary rules. D.J. Rivera is admitted to practice in both the Eastern and Western Districts of Virginia and brings proven federal trial experience — including a landmark jury trial victory against the FBI and DOJ — to every federal case.
          </p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-10 py-4 rounded text-lg font-medium transition">
            Discuss Your Federal Case — Free Consultation
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-6">Charged with a Crime in Virginia?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Don't face the Commonwealth alone. D.J. Rivera is available 24/7 — call now or submit a consultation request and receive a response within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-medium transition">
              Get Your Free Consultation
            </Link>
            <Link href="/practice-areas" className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white px-10 py-4 rounded text-lg font-medium transition">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
