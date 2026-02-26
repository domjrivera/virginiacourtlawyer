import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Virginia Court Lawyer | Criminal Defense Attorney D.J. Rivera",
  description: "Aggressive criminal defense in Greater Richmond (Richmond, Henrico, Chesterfield, Hanover) and Northern Virginia (Alexandria, Arlington, Fairfax, Prince William). DUI, drug crimes, assault, weapons, and all Virginia felony & misdemeanor charges.",
  keywords: ["Virginia criminal defense lawyer", "Richmond DUI lawyer", "Northern Virginia criminal attorney", "D.J. Rivera", "Virginia Code defense"],
  authors: [{ name: "D.J. Rivera, Esq." }],
  openGraph: {
    title: "Virginia Court Lawyer - D.J. Rivera, Criminal Defense",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
