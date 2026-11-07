import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Methodology & Sources",
  description: "How the home affordability calculator works and what it leaves out.",
  alternates: { canonical: "/methodology/" },
};
export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Methodology &amp; Sources</h1>
      <div className="prose prose-blue max-w-none text-gray-700 space-y-5">
        <h2 className="text-2xl font-semibold">How the calculator works</h2>
        <p>The calculator uses a 28/36 rule of thumb as an illustrative budget, not a lending rule or recommendation. It takes the smaller of 28% of gross monthly income and 36% of gross monthly income minus other monthly debt payments. These percentages are assumptions for this tool; lenders use different criteria. See <a className="underline" href="https://www.chase.com/personal/mortgage/education/buying-a-home/28-36-rule">Chase&apos;s explanation of the 28/36 guideline</a> and the <a className="underline" href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/">CFPB&apos;s explanation of debt-to-income ratios</a>, which notes that lender and loan limits vary.</p>
        <p>It subtracts your monthly estimates for property tax, homeowners and other property insurance, mortgage insurance and HOA or condo fees from that budget before calculating a loan. If these costs leave no room for principal and interest, no financed-price estimate is shown. The tool does not assess cash purchases. The remaining budget is treated as a level principal-and-interest payment on a 30-year fixed-rate loan (360 months). At monthly interest rate r, loan = payment × [1 − (1 + r)<sup>−360</sup>] / r; at zero interest, loan = payment × 360. The entered down payment is added to the loan to estimate a price. Displayed dollars are rounded down.</p>
        <h2 className="text-2xl font-semibold">Inputs and limitations</h2>
        <p>The starting income, debt, down payment and interest rate are illustrations only, not current market data. No tax, insurance or HOA costs are assumed: enter your estimates and use zero only if a cost does not apply. These costs can vary with the property, loan and price, so update the estimates when comparing homes. An estimate is not an approval or a statement of what you can comfortably afford. It excludes closing costs, maintenance, repairs, utilities and other expenses. Set aside cash for closing and reserves separately.</p>
        <p>The <a className="underline" href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB&apos;s homebuying budget guide</a> describes housing costs, reserves and down payments. <a className="underline" href="https://www.freddiemac.com/pmms">Freddie Mac&apos;s rate survey</a> provides weekly national averages, not a personal rate quote. Compare actual offers and their terms with lenders.</p>
      </div>
    </div>
  );
}
