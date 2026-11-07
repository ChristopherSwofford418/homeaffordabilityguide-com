import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guides & Resources",
  description: "Homebuying guides and resources.",
  alternates: { canonical: "/learn/" },
};
export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Guides &amp; Resources</h1>
      <div className="grid gap-6">
        <Link href="/learn/how-much-house-can-i-afford/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold">How Much House Can I Afford?</h2><p className="mt-1 text-gray-600">Consider income, debts and housing costs.</p></Link>
        <Link href="/learn/first-time-homebuyer-guide/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold">First-Time Homebuyer Guide</h2><p className="mt-1 text-gray-600">Prepare, compare loan offers and review closing documents.</p></Link>
        <Link href="/learn/down-payment-assistance-programs/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold">Down Payment Assistance Programs</h2><p className="mt-1 text-gray-600">Where to look and questions to ask about programs.</p></Link>
      </div>
    </div>
  );
}
