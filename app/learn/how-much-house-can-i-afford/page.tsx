import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "How Much House Can I Afford?",
  description: "Consider your income, debt, savings and housing costs when planning a home purchase.",
  alternates: { canonical: "/learn/how-much-house-can-i-afford/" },
};
export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8"><span className="text-xs font-medium text-accent uppercase tracking-wide">Affordability</span><h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink tracking-tight">How Much House Can I Afford?</h1><p className="mt-3 text-lg text-gray-600">Start with a budget, then revisit it as you obtain property and loan estimates.</p></div>
      <AdSlot slot="2233445566" format="horizontal" />
      <div className="prose-article mt-8">
        <h2>Start with your budget</h2>
        <p>Consider your income after taxes, existing debt, living expenses, savings goals and emergency reserves. A lender&apos;s maximum is not necessarily a comfortable payment for your household. The <a href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB&apos;s budgeting guide</a> explains how to plan for a home purchase.</p>
        <h2>Account for the whole housing payment</h2>
        <p>Principal and interest are only part of the cost. Property taxes, homeowners and additional insurance, mortgage insurance and association fees may also apply. Budget separately for repairs, maintenance and utilities. Obtain property-specific estimates; costs can change over time. See the <a href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB&apos;s list of homeownership costs</a>.</p>
        <h2>Estimate, then compare offers</h2>
        <p>Our <a href="/calculator/">calculator</a> illustrates a 30-year fixed loan using a 28/36 budget assumption and the housing costs you enter. It is not an approval or a personal recommendation. Read the <a href="/methodology/">methodology</a> and adjust inputs for each property. The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/">CFPB explains debt-to-income ratios</a>; loan and lender limits differ.</p>
        <p>Use <a href="https://www.freddiemac.com/pmms">Freddie Mac&apos;s weekly mortgage rate survey</a> for national averages, not a personal rate quote, and compare actual loan offers and fees. Keep money for closing costs and reserves outside the amount entered as a down payment.</p>
      </div>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
