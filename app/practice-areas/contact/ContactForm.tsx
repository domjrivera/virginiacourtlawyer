'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setStatus('success');
      setMessage('Thank you! Your message has been sent. I will contact you within 24 hours.');
    } else {
      setStatus('error');
      setMessage(data.error || 'Something went wrong. Please try again.');
    }
  }

  return (
    <form action={handleSubmit} className="space-y-8 bg-white p-10 rounded-3xl shadow-xl">
      {/* Honeypot (spam protection) */}
      <input type="text" name="honeypot" className="hidden" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input type="text" name="name" required className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:border-navy" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input type="tel" name="phone" required className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:border-navy" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input type="email" name="email" required className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:border-navy" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Charge / Case Type (if known)</label>
        <input type="text" name="charge" placeholder="e.g. DUI §18.2-266, Assault §18.2-57, Computer Crime" className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:border-navy" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message / Details</label>
        <textarea name="message" rows={6} required placeholder="Tell me about your situation..." className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:border-navy resize-y" />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-crimson hover:bg-red-700 disabled:bg-slate-400 text-white py-5 rounded-2xl text-xl font-medium transition"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message – Get Your Free Consultation'}
      </button>

      {status === 'success' && <p className="text-green-600 text-center font-medium">{message}</p>}
      {status === 'error' && <p className="text-red-600 text-center font-medium">{message}</p>}
    </form>
  );
}
