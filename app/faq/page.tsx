"use client";

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqCategories = [
  {
    category: "After an Arrest",
    faqs: [
      {
        q: "What should I do immediately after being arrested in Virginia?",
        a: "The most important things to do immediately after arrest are: (1) exercise your right to remain silent — do not answer any questions from police or prosecutors without your attorney present; (2) ask for an attorney clearly and unambiguously; (3) do not consent to any searches; and (4) contact D.J. Rivera as soon as possible. Anything you say to police can and will be used against you, even seemingly innocent statements."
      },
      {
        q: "Can I be questioned by police after I ask for a lawyer?",
        a: "No. Once you clearly and unambiguously invoke your right to counsel, all police questioning must stop until your attorney is present. If police continue questioning you after you have invoked your right to counsel, any statements you make may be suppressed. The key is to be clear and direct: 'I want a lawyer. I am not answering any questions without my lawyer present.'"
      },
      {
        q: "What happens at a Virginia arraignment?",
        a: "An arraignment is your first court appearance after being charged. At the arraignment, the judge will inform you of the charges against you and ask how you plead. In most cases, you should plead not guilty at the arraignment — this preserves all of your options and gives your attorney time to review the evidence. The judge will also set bail at the arraignment or review any previously set bail."
      },
      {
        q: "What is the difference between being arrested and being charged?",
        a: "Being arrested means you have been taken into custody by police. Being charged means the Commonwealth's Attorney has formally filed criminal charges against you. You can be arrested without being charged (if the police release you without filing charges), and you can be charged without being arrested (if the Commonwealth files charges and issues a summons rather than an arrest warrant)."
      },
    ]
  },
  {
    category: "Bail and Bond",
    faqs: [
      {
        q: "How is bail set in Virginia?",
        a: "In Virginia, bail is set by a magistrate at the time of arrest or by a judge at the arraignment. The court considers the nature and circumstances of the offense, the weight of the evidence, the defendant's ties to the community, their employment, family relationships, financial resources, and prior criminal history. D.J. Rivera can appear at bail hearings to argue for the lowest possible bail or for release on personal recognizance."
      },
      {
        q: "What is a personal recognizance (PR) bond?",
        a: "A personal recognizance bond allows you to be released from jail without paying any money, based solely on your promise to appear in court. PR bonds are typically granted for less serious offenses and defendants with strong community ties and no prior criminal history. D.J. Rivera argues for PR bonds whenever possible."
      },
      {
        q: "What happens if I cannot afford bail?",
        a: "If you cannot afford bail, you will remain in jail until your case is resolved. D.J. Rivera can file a motion to reduce bail or request a bond hearing before the circuit court. In some cases, a bail bondsman can post a surety bond for a fee (typically 10–15% of the bail amount). D.J. Rivera can also argue that the bail set is unconstitutionally excessive."
      },
    ]
  },
  {
    category: "The Criminal Process",
    faqs: [
      {
        q: "How long does a Virginia criminal case take?",
        a: "The timeline varies significantly based on the nature of the charge, the court's docket, and the complexity of the case. Misdemeanor cases in general district court typically resolve in 1–3 months. Felony cases in circuit court typically take 6–18 months. Federal cases in the Eastern District of Virginia — known as the 'Rocket Docket' — move faster than almost any other federal court, often resolving within 6–12 months of indictment."
      },
      {
        q: "What is a preliminary hearing in Virginia?",
        a: "A preliminary hearing is a hearing held in general district court for felony charges. At the preliminary hearing, the judge determines whether there is probable cause to believe that the defendant committed the charged felony. If probable cause is found, the case is certified to the grand jury. If not, the charge is dismissed. D.J. Rivera uses preliminary hearings strategically — to preview the prosecution's evidence, lock witnesses into their testimony, and sometimes to get charges dismissed."
      },
      {
        q: "What is a grand jury in Virginia?",
        a: "A grand jury is a group of citizens that reviews evidence presented by the Commonwealth's Attorney and decides whether there is probable cause to indict (formally charge) a defendant with a felony. Grand jury proceedings are secret — the defendant has no right to be present or to present evidence. If the grand jury returns a 'true bill,' the defendant is formally indicted and the case proceeds to circuit court."
      },
      {
        q: "What is the difference between a plea deal and going to trial?",
        a: "A plea deal (plea agreement) is an agreement between the defendant and the prosecution in which the defendant pleads guilty to some or all charges in exchange for a reduced sentence, a lesser charge, or the dismissal of some charges. Going to trial means the defendant contests the charges and requires the prosecution to prove guilt beyond a reasonable doubt. D.J. Rivera evaluates every case to determine whether a plea deal or trial is in the client's best interest."
      },
    ]
  },
  {
    category: "Penalties and Consequences",
    faqs: [
      {
        q: "What is the difference between a misdemeanor and a felony in Virginia?",
        a: "Misdemeanors are less serious offenses punishable by up to 12 months in jail and a $2,500 fine (Class 1 misdemeanor). Felonies are more serious offenses punishable by more than 12 months in a state correctional facility. Felony convictions also result in the loss of civil rights, including the right to vote, the right to possess firearms, and the right to hold certain professional licenses."
      },
      {
        q: "Will a criminal conviction affect my immigration status?",
        a: "Yes — criminal convictions can have severe immigration consequences, including deportation, inadmissibility, and denial of naturalization. Certain offenses — including crimes involving moral turpitude, drug offenses, and aggravated felonies — are particularly serious under immigration law. D.J. Rivera advises non-citizen clients on the immigration consequences of any plea or conviction and works to minimize those consequences."
      },
      {
        q: "Can a Virginia criminal conviction be expunged?",
        a: "Virginia allows expungement of charges that were dismissed, resulted in acquittal, or received an absolute pardon. Most convictions cannot be expunged. The 2021 amendments to Virginia's expungement law added deferred dispositions and first-offense marijuana convictions to the list of expungeable records. This makes it critically important to fight charges aggressively rather than simply pleading guilty."
      },
      {
        q: "Will a conviction affect my professional license?",
        a: "Yes. Many professional licensing boards in Virginia — including those for doctors, nurses, lawyers, teachers, contractors, and real estate agents — require disclosure of criminal convictions and can revoke or deny licenses based on criminal history. D.J. Rivera advises licensed professionals on the licensing consequences of any plea or conviction and works to protect their professional standing."
      },
    ]
  },
  {
    category: "Computer Crimes",
    faqs: [
      {
        q: "What makes D.J. Rivera uniquely qualified to handle computer crime cases?",
        a: "D.J. Rivera holds a B.S. in Computer Engineering and is the founder of iCyberLaw — Rivera Law Group, where he has specialized in Internet law and cybercrime defense. He understands the technical evidence in computer crime cases — network logs, IP addresses, metadata, digital forensics — at a level that most criminal defense attorneys simply cannot match. When prosecutors rely on technical evidence, D.J. Rivera can challenge it effectively."
      },
      {
        q: "What are the most common computer crime charges in Virginia?",
        a: "The most common computer crime charges in Virginia include: computer fraud (§ 18.2-152.3), computer trespass/hacking (§ 18.2-152.4), computer invasion of privacy (§ 18.2-152.5), harassment by computer (§ 18.2-152.7:1), and use of a computer in connection with certain offenses. Federal charges under the Computer Fraud and Abuse Act (18 U.S.C. § 1030) are also common in Northern Virginia."
      },
      {
        q: "Can I be charged with a computer crime for accessing my own account?",
        a: "Yes, in some circumstances. Virginia's computer crime statutes and the federal CFAA prohibit accessing a computer 'without authorization' or 'exceeding authorized access.' Courts have interpreted these terms broadly in some cases. D.J. Rivera challenges overly broad interpretations of 'unauthorized access' and defends clients who accessed systems they had a legitimate right to access."
      },
    ]
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggle = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Answers to common questions about Virginia criminal defense, the criminal process, and your rights. If you have a specific question about your case, contact D.J. Rivera for a free consultation.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {faqCategories.map(({ category, faqs }) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-serif text-navy mb-8 pb-4 border-b border-slate-200">{category}</h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }, i) => {
                  const key = `${category}-${i}`;
                  return (
                    <div key={key} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-slate-50 transition"
                      >
                        <span className="font-semibold text-navy text-lg pr-4">{q}</span>
                        {openItems[key] ? <ChevronUp className="w-5 h-5 text-crimson flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                      </button>
                      {openItems[key] && (
                        <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Have a Question About Your Case?</h2>
          <p className="text-xl mb-10">D.J. Rivera offers free, confidential consultations 24/7. Get answers specific to your situation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Contact D.J. Rivera Now</Link>
        </div>
      </section>
    </div>
  );
}
