import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Know Your Rights in Virginia | Criminal Process Guide | D.J. Rivera",
  description: "Understand your constitutional rights and the Virginia criminal court process. What to do if you are stopped, arrested, or charged with a crime in Virginia. D.J. Rivera, Esq.",
};

export default function KnowYourRightsPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold font-medium uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-5xl font-serif leading-tight mb-4">Know Your Rights in Virginia</h1>
          <p className="text-xl text-slate-300 max-w-3xl">Understanding your constitutional rights and the Virginia criminal process is the first step in protecting yourself. This guide explains what to do — and what not to do — if you are stopped, arrested, or charged with a crime in Virginia.</p>
        </div>
      </section>

      <section className="py-20 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-amber-100 border-l-4 border-amber-500 p-8 rounded-r-2xl">
            <h2 className="text-2xl font-serif text-amber-900 mb-3">Important Disclaimer</h2>
            <p className="text-amber-800 leading-relaxed">This guide provides general information about Virginia criminal law and constitutional rights. It is not legal advice and does not create an attorney-client relationship. Every case is different. If you have been arrested or charged with a crime, contact D.J. Rivera immediately for advice specific to your situation.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">Your Constitutional Rights</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">The Right to Remain Silent — Fifth Amendment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">The Fifth Amendment to the United States Constitution protects you from being compelled to be a witness against yourself. In practical terms, this means you have the right to refuse to answer questions from police, prosecutors, or anyone else who might use your answers against you in a criminal proceeding.</p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">You must <strong>clearly and unambiguously invoke</strong> your right to remain silent. Simply staying quiet is not enough — the Supreme Court has held that police may continue questioning a suspect who remains silent but has not clearly invoked the right. Say clearly: <em>&ldquo;I am invoking my right to remain silent. I will not answer any questions without my attorney present.&rdquo;</em></p>
              <div className="bg-slate-100 rounded-2xl p-6 border-l-4 border-crimson">
                <p className="font-semibold text-navy mb-2">What to say:</p>
                <p className="text-slate-700 italic">&ldquo;I am invoking my right to remain silent and my right to an attorney. I will not answer any questions without my attorney present.&rdquo;</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">The Right to an Attorney — Sixth Amendment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">The Sixth Amendment guarantees your right to the assistance of counsel in all criminal prosecutions. Once you are formally charged with a crime, you have the right to have an attorney represent you at every critical stage of the proceedings. If you cannot afford an attorney, the court must appoint one for you.</p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">The Fifth Amendment also protects your right to have counsel present during custodial interrogation (Miranda rights). Once you invoke your right to counsel during a custodial interrogation, all questioning must stop until your attorney is present.</p>
              <p className="text-lg text-slate-700 leading-relaxed">Invoking your right to counsel does not make you look guilty — it is a fundamental constitutional right that every person should exercise when facing criminal charges.</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">The Right Against Unreasonable Searches — Fourth Amendment</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">The Fourth Amendment protects you from unreasonable searches and seizures by government officials. In general, police need a warrant, your consent, or a recognized exception to the warrant requirement to search your person, home, or vehicle.</p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">You have the right to <strong>refuse consent to a search</strong>. If police ask &ldquo;Can I search your car?&rdquo; or &ldquo;Can I come in?&rdquo; you can say no. Refusing consent is not obstruction of justice and cannot be used as evidence of guilt. If police have a warrant or a valid exception, they can search anyway — but your refusal preserves your right to challenge the search in court.</p>
              <div className="bg-slate-100 rounded-2xl p-6 border-l-4 border-navy">
                <p className="font-semibold text-navy mb-2">What to say when asked for consent to search:</p>
                <p className="text-slate-700 italic">&ldquo;I do not consent to a search.&rdquo;</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">The Right to Due Process — Fifth and Fourteenth Amendments</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">The Due Process Clauses of the Fifth and Fourteenth Amendments guarantee that the government cannot deprive you of life, liberty, or property without due process of law. In criminal cases, this means the government must follow fair procedures, provide you with notice of the charges against you, give you an opportunity to be heard, and prove your guilt beyond a reasonable doubt.</p>
              <p className="text-lg text-slate-700 leading-relaxed">The presumption of innocence — the principle that you are innocent until proven guilty — is a cornerstone of due process. The prosecution bears the burden of proving every element of the charged offense beyond a reasonable doubt. You are never required to prove your innocence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">The Virginia Criminal Court Process</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Arrest and Booking",
                desc: "After arrest, you will be taken to a police station or jail for booking — fingerprinting, photographing, and recording of personal information. You will be held until a magistrate sets bail or you are released on personal recognizance. Contact an attorney as soon as possible at this stage."
              },
              {
                step: "2",
                title: "Bail Hearing / Initial Appearance",
                desc: "A magistrate or judge will set bail, typically within 24–72 hours of arrest. The court considers the nature of the offense, your criminal history, and your ties to the community. D.J. Rivera can appear at bail hearings to argue for the lowest possible bail or release on personal recognizance."
              },
              {
                step: "3",
                title: "Arraignment",
                desc: "At the arraignment, you are formally informed of the charges and asked to enter a plea. In most cases, you should plead not guilty at the arraignment to preserve all options. D.J. Rivera will advise you on the appropriate plea based on the specific circumstances of your case."
              },
              {
                step: "4",
                title: "Preliminary Hearing (Felonies)",
                desc: "For felony charges, a preliminary hearing is held in general district court to determine whether there is probable cause to certify the case to the grand jury. D.J. Rivera uses preliminary hearings strategically to challenge the evidence and sometimes to get charges dismissed or reduced."
              },
              {
                step: "5",
                title: "Grand Jury (Felonies)",
                desc: "A grand jury reviews the evidence and decides whether to indict (formally charge) the defendant with a felony. Grand jury proceedings are secret. If the grand jury returns a true bill, the case proceeds to circuit court for trial."
              },
              {
                step: "6",
                title: "Discovery",
                desc: "After charges are filed, both sides exchange evidence. D.J. Rivera reviews all evidence provided by the prosecution — police reports, witness statements, lab results, surveillance footage, digital evidence — and investigates independently to identify weaknesses in the government's case."
              },
              {
                step: "7",
                title: "Pre-Trial Motions",
                desc: "D.J. Rivera files pre-trial motions to suppress unlawfully obtained evidence, dismiss charges for legal insufficiency, and address other legal issues before trial. A successful suppression motion can result in the dismissal of charges if the suppressed evidence was essential to the prosecution's case."
              },
              {
                step: "8",
                title: "Plea Negotiations",
                desc: "D.J. Rivera negotiates with the prosecutor for a favorable plea agreement — reduced charges, a suspended sentence, or dismissal of some counts. Whether to accept a plea deal or proceed to trial is always the client's decision, made with full information about the risks and benefits of each option."
              },
              {
                step: "9",
                title: "Trial",
                desc: "If the case proceeds to trial, D.J. Rivera presents the defense case before a judge (bench trial) or jury. The prosecution must prove every element of the charge beyond a reasonable doubt. D.J. Rivera cross-examines prosecution witnesses, challenges evidence, and presents the strongest possible defense."
              },
              {
                step: "10",
                title: "Sentencing",
                desc: "If convicted, the court imposes a sentence. D.J. Rivera presents mitigating evidence and arguments at sentencing to minimize the sentence. In Virginia, the jury may recommend a sentence in jury trials, which the judge may reduce but not increase."
              },
              {
                step: "11",
                title: "Appeal",
                desc: "If convicted at trial, D.J. Rivera evaluates grounds for appeal to the Virginia Court of Appeals and, if necessary, the Virginia Supreme Court. Appeals must be filed within strict deadlines — typically 30 days of the final judgment."
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">{step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-8">What to Do If You Are Stopped by Police</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Do:</h3>
              <ul className="space-y-3 text-green-700">
                <li>✓ Stay calm and be polite</li>
                <li>✓ Provide your name and ID if lawfully required (during a traffic stop or Terry stop)</li>
                <li>✓ Clearly invoke your right to remain silent</li>
                <li>✓ Clearly invoke your right to an attorney</li>
                <li>✓ Refuse consent to searches</li>
                <li>✓ Observe and remember details of the encounter</li>
                <li>✓ Contact an attorney as soon as possible</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Do Not:</h3>
              <ul className="space-y-3 text-red-700">
                <li>✗ Answer questions about the alleged offense</li>
                <li>✗ Consent to searches of your person, vehicle, or home</li>
                <li>✗ Physically resist arrest (even if unlawful)</li>
                <li>✗ Lie to police (this is a separate crime)</li>
                <li>✗ Discuss your case with anyone except your attorney</li>
                <li>✗ Post about your case on social media</li>
                <li>✗ Contact alleged victims or witnesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-crimson text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Know Your Rights — Then Call D.J. Rivera</h2>
          <p className="text-xl mb-10">Understanding your rights is the first step. Having an experienced attorney to enforce them is the second. Contact D.J. Rivera 24/7 for a free, confidential consultation.</p>
          <Link href="/contact" className="inline-block bg-white text-crimson hover:bg-slate-100 px-12 py-5 rounded text-xl font-medium transition">Get Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
