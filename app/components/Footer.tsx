import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <div className="font-serif text-2xl">Virginia Court Lawyer</div>
          </div>
          <p className="text-sm text-slate-400">Criminal Defense • D.J. Rivera, Esq.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <Link href="/practice-areas" className="block hover:text-gold">Practice Areas</Link>
            <Link href="/locations" className="block hover:text-gold">Service Areas</Link>
            <Link href="/contact" className="block hover:text-gold">Free Consultation</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Service Areas</h4>
          <div className="text-sm text-slate-400 space-y-1">
            Greater Richmond • Henrico • Chesterfield • Hanover<br />
            Northern Virginia • Alexandria • Arlington • Fairfax • Prince William
          </div>
          <p className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} D.J. Rivera. All Rights Reserved.<br />
            This is an advertisement. Prior results do not guarantee similar outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
