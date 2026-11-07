import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "First-Time Homebuyer Guide",
  description: "A starting point for budgeting, comparing mortgages and reviewing closing documents.",
  alternates: { canonical: "/learn/first-time-homebuyer-guide/" },
};
export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8"><span className="text-xs font-medium text-accent uppercase tracking-wide">Buyer Guide</span><h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink tracking-tight">First-Time Homebuyer Guide</h1><p className="mt-3 text-lg text-gray-600">Prepare your budget, explore loans and review documents before closing.</p></div>
      <AdSlot slot="2233445566" format="horizontal" />
      <div className="prose-article mt-8">
        <h2>Prepare your finances</h2>
        <p>Review your credit reports and budget for the monthly payment, maintenance and utilities. Set aside funds for closing costs and an emergency cushion as well as a down payment. The <a href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB&apos;s budget guide</a> explains these costs and tradeoffs.</p>
        <h2>Explore and compare loans</h2>
        <p>Loan choices and qualification requirements vary. Compare loan terms, interest rates, fees, mortgage insurance and cash required to close rather than relying on a single quote. The <a href="https://www.consumerfinance.gov/owning-a-home/">CFPB homebuying guide</a> links to resources for preparing, exploring loans and comparing offers.</p>
        <h2>Review the documents</h2>
        <p>Compare the Closing Disclosure with your Loan Estimate and ask about changes. The CFPB says lenders must provide the Closing Disclosure three business days before scheduled closing; use its <a href="https://www.consumerfinance.gov/owning-a-home/closing-disclosure/">Closing Disclosure explainer</a> to review the payment, costs and cash to close.</p>
        <p>For help understanding options, consider a <a href="https://www.consumerfinance.gov/find-a-housing-counselor/">HUD-certified housing counselor</a>. This guide does not replace advice tailored to your situation.</p>
      </div>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
