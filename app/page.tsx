"use client";

import Link from "next/link";
import { Scale, Shield, Users, Monitor, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What should I do immediately after being arrested in Virginia?",
    a: "Exercise your right to remain silent and ask for an attorney immediately. Do not answer any questions from police without your attorney present — anything you say can and will be used against you. Contact D.J. Rivera as soon as possible for a free, confidential consultation."
  },
  {
    q: "How quickly do I need to hire a criminal defense attorney?",
    a: "Immediately. Evidence can disappear, witnesses' memories fade, and critical deadlines — such as the 7-day window to request a DMV hearing after a DUI arrest — can pass quickly. The sooner you have an attorney, the better your chances of a favorable outcome."
  },
  {
    q: "What is the difference between a misdemeanor and a felony in Virginia?",
    a: "Misdemeanors are less serious offenses punishable by up to 12 months in jail and a $2,500 fine. Felonies are more serious and carry sentences of more than 12 months in a state correctional facility. Felony convictions also result in the loss of civil rights, including the right to vote and possess firearms."
  },
  {
    q: "Can a criminal charge be expunged from my record in Virginia?",
    a: "Virginia allows expungement of charges that were dismissed, resulted in acquittal, or received an absolute pardon. Most convictions cannot be expunged. This is why fighting your charge aggressively — rather than simply pleading guilty — is so important."
  },
  {
    q: "Does D.J. Rivera handle computer crime and cybercrime cases?",
    a: "Yes — and this is where D.J. Rivera stands apart from other Virginia criminal defense attorneys. As the founder of iCyberLaw — Rivera Law Group, he holds a B.S. in Computer Engineering and has specialized in Internet law and cybercrime defense for years. He defends hacking, computer fraud, cyberstalking, online solicitation, and all Virginia Code § 18.2-152 offenses."
  },
  {
    q: "How much does a criminal defense attorney cost in Virginia?",
    a: "Attorney fees vary based on the complexity of the case, the charges involved, and the anticipated amount of work. D.J. Rivera offers free initial consultations and discusses fees transparently at the outset. Many clients find that the cost of quality defense is far less than the long-term consequences of a conviction."
  },
];

const practiceAreas = [
  { name: "DUI / DWI Defense", desc: "§ 18.2-266 — challenging every element from the traffic stop to the breathalyzer", href: "/practice-areas/dui" },
  { name: "Drug Crimes", desc: "Possession, distribution, PWID, trafficking — state and federal", href: "/practice-areas/drug-possession" },
  { name: "Assault & Battery", desc: "Simple assault to aggravated malicious wounding and domestic violence", href: "/practice-areas/assault-battery" },
  { name: "Computer Crimes", desc: "Hacking, computer fraud, cyberstalking — elite cybercrime defense", href: "/practice-areas/computer-crimes", highlight: true },
  { name: "Firearms Charges", desc: "Unlawful possession, concealed carry, use in a felony, federal § 924(c)", href: "/practice-areas/firearms" },
  { name: "Robbery", desc: "Mandatory minimum sentences of 5–15 years — aggressive trial defense", href: "/practice-areas/robbery" },
  { name: "Homicide", desc: "Capital murder, first & second degree murder, manslaughter", href: "/practice-areas/homicide" },
  { name: "Sexual Assault", desc: "Rape, sexual battery, sex offender registry defense", href: "/practice-areas/sexual-assault" },
  { name: "Federal Crimes", desc: "Eastern District of Virginia — drug trafficking, fraud, cybercrime, RICO", href: "/practice-areas/federal-crimes" },
  { name: "Expungement", desc: "Clear dismissed charges and acquittals from your Virginia record", href: "/practice-areas/expungement" },
  { name: "Burglary", desc: "Breaking and entering, home invasion, possession of burglary tools", href: "/practice-areas/burglary" },
  { name: "Juvenile Offenses", desc: "Protecting your child's future in Virginia JDR Court", href: "/practice-areas/juvenile-offenses" },
];

const testimonials = [
  {
    text: "D.J. Rivera got my DUI charge reduced to a reckless driving. I kept my license and avoided the mandatory VASAP program. I cannot recommend him highly enough.",
    name: "Client — Richmond, VA",
    stars: 5,
  },
  {
    text: "I was facing federal computer fraud charges that could have ended my career. D.J. Rivera's technical background was invaluable — he understood the evidence better than the prosecutor. The charges were ultimately dismissed.",
    name: "Client — Northern Virginia",
    stars: 5,
  },
  {
    text: "After my assault charge was dismissed, D.J. Rivera helped me get my record expunged. He was professional, responsive, and genuinely cared about my case.",
    name: "Client — Fairfax, VA",
    stars: 5,
  },
  {
    text: "Mr. Rivera handled my drug possession case with skill and discretion. He negotiated a first-offender deferral that kept my record clean. I am extremely grateful.",
    name: "Client — Chesterfield, VA",
    stars: 5,
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="hero-bg text-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Your Freedom.<br />My Fight.
          </h1>
          <p className="text-2xl text-gold mb-6">Criminal Defense Attorney D.J. Rivera</p>
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
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Scale className="w-12 h-12 text-gold mb-4" />
            <div className="text-4xl font-bold text-navy">100+</div>
            <div className="text-slate-600 mt-1">Virginia Court Victories</div>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-gold mb-4" />
            <div className="text-4xl font-bold text-navy">2 Regions</div>
            <div className="text-slate-600 mt-1">Richmond &amp; Northern VA</div>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-gold mb-4" />
            <div className="text-4xl font-bold text-navy">24/7</div>
            <div className="text-slate-600 mt-1">Emergency Availability</div>
          </div>
          <div className="flex flex-col items-center">
            <Monitor className="w-12 h-12 text-gold mb-4" />
            <div className="text-4xl font-bold text-navy">Elite</div>
            <div className="text-slate-600 mt-1">Cybercrime Defense</div>
          </div>
        </div>
      </section>

      {/* Attorney Bio Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium uppercase tracking-widest mb-4">About D.J. Rivera</p>
              <h2 className="text-4xl font-serif text-navy mb-6">Virginia Criminal Defense — With a Unique Technical Edge</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                D.J. Rivera is a Virginia criminal defense attorney serving clients in Richmond, Henrico, Chesterfield, Hanover, Alexandria, Arlington, Fairfax, and Prince William County. He is admitted to practice in Virginia state courts and the Eastern District of Virginia federal court.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                What sets D.J. Rivera apart is his background in computer engineering and Internet law. As the founder of <strong>iCyberLaw — Rivera Law Group</strong>, he has spent years at the intersection of technology and the law — making him uniquely qualified to defend computer crimes, cyberstalking, online fraud, and all digital evidence cases. When prosecutors rely on technical evidence, D.J. Rivera understands it better than they do.
              </p>
              <Link href="/about" className="inline-block bg-navy hover:bg-slate-800 text-white px-8 py-4 rounded text-lg font-medium transition">
                Full Attorney Profile →
              </Link>
            </div>
            <div className="bg-navy text-white rounded-3xl p-10">
              <p className="text-gold font-medium uppercase tracking-widest mb-6 text-sm">Credentials &amp; Admissions</p>
              <ul className="space-y-4 text-slate-200">
                {[
                  "Virginia State Bar — Active Member",
                  "U.S. District Court, Eastern District of Virginia",
                  "B.S. Computer Engineering",
                  "Founder, iCyberLaw — Rivera Law Group",
                  "Internet Law &amp; Cybercrime Specialist",
                  "Virginia Criminal Defense Lawyers Association",
                  "Serving Richmond &amp; Northern Virginia Courts",
                  "Available 24/7 for Emergency Consultations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Crimes Distinction Banner */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Monitor className="w-20 h-20 text-gold flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-3xl font-serif mb-3">Virginia&apos;s Cybercrime Defense Specialist</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Most criminal defense attorneys handle computer crime cases without any technical background. D.J. Rivera is different. With a B.S. in Computer Engineering and years of practice as a cybercrime attorney at iCyberLaw — Rivera Law Group, he defends hacking, computer fraud, cyberstalking, CFAA violations, and all Virginia Code § 18.2-152 offenses with a depth of technical understanding that no other Virginia criminal defense attorney can match.
              </p>
            </div>
            <Link href="/practice-areas/computer-crimes" className="flex-shrink-0 bg-gold hover:bg-amber-500 text-navy px-8 py-4 rounded text-lg font-medium transition whitespace-nowrap">
              Computer Crimes →
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-navy mb-4">Practice Areas</h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">D.J. Rivera defends clients against the full range of Virginia criminal charges — from misdemeanors to capital felonies.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map(({ name, desc, href, highlight }) => (
              <Link key={name} href={href} className={`p-8 rounded-2xl shadow hover:shadow-xl transition group ${highlight ? 'bg-navy text-white' : 'bg-white'}`}>
                <h3 className={`font-semibold text-xl mb-2 group-hover:text-crimson transition ${highlight ? 'text-gold group-hover:text-gold' : 'text-navy'}`}>{name}</h3>
                <p className={highlight ? 'text-slate-300 text-sm' : 'text-slate-600 text-sm'}>{desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/practice-areas" className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded text-lg font-medium transition">
              View All Practice Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-navy mb-4">Client Testimonials</h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">Real results for real clients across Richmond and Northern Virginia.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(({ text, name, stars }) => (
              <div key={name} className="border border-slate-200 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-navy font-medium text-sm">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-navy mb-4">Serving Courts Across Virginia</h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">D.J. Rivera appears regularly in courts throughout the Greater Richmond area and Northern Virginia.</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-serif text-navy mb-4">Greater Richmond Area</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Richmond City Circuit &amp; General District Court</li>
                <li>Henrico County Circuit &amp; General District Court</li>
                <li>Chesterfield County Circuit &amp; General District Court</li>
                <li>Hanover County Circuit &amp; General District Court</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-serif text-navy mb-4">Northern Virginia</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Alexandria Circuit &amp; General District Court</li>
                <li>Arlington County Circuit &amp; General District Court</li>
                <li>Fairfax County Circuit &amp; General District Court</li>
                <li>Prince William County Circuit &amp; General District Court</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/locations" className="inline-block text-navy underline hover:text-crimson text-lg">View All Service Areas →</Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-slate-600 text-lg mb-12">Common questions about Virginia criminal defense.</p>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-navy text-lg pr-4">{q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-crimson flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="inline-block text-navy underline hover:text-crimson text-lg">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Charged with a crime in Virginia?</h2>
          <p className="text-xl mb-10">Don&apos;t face the Commonwealth alone. Get experienced, aggressive representation today — available 24/7.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-12 py-5 rounded text-xl font-medium transition">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
