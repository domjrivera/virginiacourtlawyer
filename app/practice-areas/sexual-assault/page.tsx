import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Richmond & Northern VA Sexual Assault & Rape Lawyer | §18.2-67.1 & §18.2-67.4 Defense",
  description: "Experienced, discreet defense for rape, sexual battery, and all sexual assault charges in Greater Richmond and Northern Virginia. D.J. Rivera protects your reputation and freedom.",
  keywords: ["Richmond rape lawyer", "Northern Virginia sexual assault attorney", "Virginia Code 18.2-67.1", "Fairfax sexual battery defense", "D.J. Rivera"],
};

export default function SexualAssaultPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 prose prose-slate max-w-none">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Virginia Sexual Assault Defense</h1>
        <p className="text-2xl text-crimson">§ 18.2-67.1 (Rape) & § 18.2-67.4 (Sexual Battery) • D.J. Rivera, Esq.</p>
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-67.1 — Rape</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who has sexual intercourse with a complaining witness against their will, by force, threat, or intimidation, or with a minor, or when the victim is mentally incapacitated, is guilty of rape.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">§ 18.2-67.4 — Sexual Battery</h2>
      <div className="bg-slate-100 p-8 rounded-xl my-8 text-sm leading-relaxed border-l-4 border-crimson">
        Any person who sexually abuses the complaining witness against their will by force, threat, intimidation, or through the use of the victim’s mental incapacity or physical helplessness is guilty of sexual battery.
      </div>

      <h2 className="text-3xl font-serif text-navy mt-16">Penalties</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li><strong>Rape:</strong> 5 years to life (mandatory minimums apply)</li>
        <li><strong>Sexual Battery:</strong> Up to 12 months jail + fine (Class 1 misdemeanor); felony on repeat or with aggravating factors</li>
      </ul>

      <h2 className="text-3xl font-serif text-navy mt-16">Defense Strategies</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Consent / mistaken belief in consent</li>
        <li>False accusation / credibility challenges</li>
        <li>Alibi, lack of physical evidence, or DNA issues</li>
        <li>Illegal search or Miranda violations</li>
        <li>Negotiating reduced charges or full dismissal</li>
      </ul>

      <div className="mt-20 bg-navy text-white p-12 rounded-3xl text-center">
        <Link href="/contact" className="inline-block bg-gold hover:bg-amber-600 text-navy px-16 py-6 rounded text-2xl font-medium transition">
          Confidential Consultation – Protect Your Future
        </Link>
      </div>
    </div>
  );
}
