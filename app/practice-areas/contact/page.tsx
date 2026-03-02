import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact D.J. Rivera | Virginia Criminal Defense Attorney",
  description: "Get your free consultation with Richmond & Northern Virginia criminal defense lawyer D.J. Rivera. Available 24/7 for urgent cases.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy mb-6">Get Your Free Consultation</h1>
        <p className="text-xl text-slate-600">D.J. Rivera, Esq. – Criminal Defense Attorney</p>
        <p className="mt-4 text-lg">Serving Greater Richmond and Northern Virginia • Available 24/7</p>
      </div>

      <ContactForm />
    </div>
  );
}
