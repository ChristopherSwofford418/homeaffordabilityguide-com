import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://homeaffordabilityguide.com"),
  title: {
    default: "HomeAffordabilityCalc — How Much House Can You Afford?",
    template: "%s · HomeAffordabilityCalc",
  },
  description: "Explore a home affordability illustration using your income, debt, down payment and housing costs.",
  applicationName: "HomeAffordabilityCalc",
  openGraph: {
    type: "website",
    siteName: "HomeAffordabilityCalc",
    title: "HomeAffordabilityCalc — How Much House Can You Afford?",
    description: "Explore a home affordability illustration using your income, debt, down payment and housing costs.",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_ADS_ENABLED === "true" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9889586007871680"
            crossOrigin="anonymous"
            suppressHydrationWarning
          />
        )}
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <header className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap gap-4 items-center justify-between">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight">
              HomeAffordabilityCalc
            </Link>
            <nav aria-label="Main navigation" className="flex flex-wrap gap-4 md:gap-6 text-sm">
              <Link href="/calculator" className="hover:text-accent">Affordability Calculator</Link>
              <Link href="/learn/" className="hover:text-accent">Guides</Link>
              <Link href="/about" className="hover:text-accent">About</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-line mt-20 py-10 bg-soft">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm text-gray-700">
            <div>
              <div className="font-serif text-lg font-bold text-ink mb-2">HomeAffordabilityCalc</div>
              <p>Explore a home affordability illustration using your own inputs.</p>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Guides</div>
              <ul className="space-y-1">
                <li><Link href="/learn/how-much-house-can-i-afford/" className="hover:text-accent">How Much House Can I Afford?</Link></li>
                <li><Link href="/learn/first-time-homebuyer-guide/" className="hover:text-accent">First-Time Homebuyer Guide</Link></li>
                <li><Link href="/learn/down-payment-assistance-programs/" className="hover:text-accent">Down Payment Assistance Programs</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Site</div>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                <li><Link href="/methodology" className="hover:text-accent">Methodology &amp; Sources</Link></li>
                <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
                <li><Link href="/disclaimer" className="hover:text-accent">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} HomeAffordabilityCalc. Educational content only. Not financial or legal advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
