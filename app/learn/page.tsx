import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guides & Resources",
  description: "Free guides and resources from HomeAffordabilityCalc.",
};
export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Guides & Resources</h1>
      <div className="grid gap-6">
                <Link href="/learn/how-much-house-can-i-afford/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">How Much House Can I Afford? (2025 Guide)</h2><p className="mt-1 text-gray-600">A complete guide to calculating home affordability based on your income, debt, and down payment, with real examples and city-by-city data.</p></Link>
        <Link href="/learn/first-time-homebuyer-guide/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">First-Time Homebuyer Guide: Everything You Need to Know</h2><p className="mt-1 text-gray-600">A complete step-by-step guide for first-time homebuyers, from checking your credit score to closing day.</p></Link>
        <Link href="/learn/down-payment-assistance-programs/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Down Payment Assistance Programs: $10,000–$100,000 Available</h2><p className="mt-1 text-gray-600">A guide to down payment assistance programs available to first-time homebuyers, including federal, state, and local programs.</p></Link>
      </div>
    </div>
  );
}
