import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            How Much House Can You Afford?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Free home affordability calculator. Find out how much house you can afford based on your income, debt, and down payment. Compare affordability across US cities.
          </p>
          <Link href="/calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">
            Home Affordability Guideulator →
          </Link>
        </div>
      </section>

      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Guides & Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/learn/how-much-house-can-i-afford/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Affordability</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">How Much House Can I Afford? (2025 Guide)</h3>
            <p className="mt-1 text-sm text-gray-600">A complete guide to calculating home affordability based on your income, debt, and down payment, with real examples and city-by-city data.</p>
          </a>
          <a href="/learn/first-time-homebuyer-guide/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Buyer Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">First-Time Homebuyer Guide: Everything You Need to Know</h3>
            <p className="mt-1 text-sm text-gray-600">A complete step-by-step guide for first-time homebuyers, from checking your credit score to closing day.</p>
          </a>
          <a href="/learn/down-payment-assistance-programs/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Financial Aid</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Down Payment Assistance Programs: $10,000–$100,000 Available</h3>
            <p className="mt-1 text-sm text-gray-600">A guide to down payment assistance programs available to first-time homebuyers, including federal, state, and local programs.</p>
          </a>
        </div>
      </section>

      <AdSlot slot="0987654321" format="rectangle" />
    </div>
  );
}
