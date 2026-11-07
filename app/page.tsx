import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">How Much House Can You Afford?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Explore an illustrative home-price scenario using your income, debt, down payment and property cost estimates.</p>
          <Link href="/calculator/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">Home Affordability Calculator →</Link>
        </div>
      </section>
      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Homebuying guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/learn/how-much-house-can-i-afford/" className="block rounded-xl border border-line p-6 hover:border-accent"><h3 className="text-lg font-bold">How Much House Can I Afford?</h3><p className="mt-1 text-sm text-gray-600">Consider housing costs, debt and your own budget.</p></Link>
          <Link href="/learn/first-time-homebuyer-guide/" className="block rounded-xl border border-line p-6 hover:border-accent"><h3 className="text-lg font-bold">First-Time Homebuyer Guide</h3><p className="mt-1 text-sm text-gray-600">Prepare, compare loan offers and review closing documents.</p></Link>
          <Link href="/learn/down-payment-assistance-programs/" className="block rounded-xl border border-line p-6 hover:border-accent"><h3 className="text-lg font-bold">Down Payment Assistance</h3><p className="mt-1 text-sm text-gray-600">Where to look and questions to ask about local programs.</p></Link>
        </div>
      </section>
      <AdSlot slot="0987654321" format="rectangle" />
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Using an affordability estimate</h2>
        <p className="text-gray-600">A loan estimate is not a personal budget or a promise of approval. Consider taxes, insurance, association fees, closing costs, repairs, utilities and your other savings goals. See the <Link href="/methodology/" className="underline">methodology and sources</Link> for what the calculator includes and leaves out.</p>
      </section>
    </div>
  );
}
