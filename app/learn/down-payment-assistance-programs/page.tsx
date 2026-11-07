import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Down Payment Assistance Programs",
  description: "Where to look for down payment assistance and what to ask before applying.",
  alternates: { canonical: "/learn/down-payment-assistance-programs/" },
};
export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8"><span className="text-xs font-medium text-accent uppercase tracking-wide">Homebuyer assistance</span><h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink tracking-tight">Down Payment Assistance Programs</h1><p className="mt-3 text-lg text-gray-600">Find local options and verify their current terms.</p></div>
      <AdSlot slot="2233445566" format="horizontal" />
      <div className="prose-article mt-8">
        <h2>Where to look</h2>
        <p>State or local governments and nonprofits may offer down payment assistance. Availability, eligibility and terms depend on the program. The <a href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB&apos;s homebuying budget guide</a> suggests exploring local options and contacting a housing counselor. Use the <a href="https://www.consumerfinance.gov/find-a-housing-counselor/">CFPB housing counselor search</a> to find help in your area.</p>
        <h2>Questions to ask the program</h2>
        <p>Ask whether the assistance is a grant or a loan, whether repayment or a lien is required, which costs it covers, and whether income, purchase price, location, education or occupancy requirements apply. Confirm whether it can be combined with your mortgage and any other assistance, and whether funding is currently available. Get current terms directly from the program before relying on an amount.</p>
        <h2>Compare loan options separately</h2>
        <p>A low-down-payment mortgage is not necessarily a grant. Compare loan costs, fees and mortgage insurance with lenders. The <a href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB describes low-down-payment options and their tradeoffs</a>.</p>
      </div>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
