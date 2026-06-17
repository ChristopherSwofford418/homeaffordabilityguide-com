import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "How Much House Can I Afford? (2025 Guide)",
  description: "A complete guide to calculating home affordability based on your income, debt, and down payment, with real examples and city-by-city data.",
  alternates: { canonical: "https://homeaffordabilityguide.com/learn/how-much-house-can-i-afford/" },
};
export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">Affordability</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink tracking-tight">How Much House Can I Afford? (2025 Guide)</h1>
        <p className="mt-3 text-lg text-gray-600">A complete guide to calculating home affordability based on your income, debt, and down payment, with real examples and city-by-city data.</p>
      </div>
      <AdSlot slot="2233445566" format="horizontal" />
      <div className="prose-article mt-8">
        <h2>The 28/36 Rule</h2>
<p>The most widely used affordability guideline is the <strong>28/36 rule</strong>: spend no more than 28% of your gross monthly income on housing costs (mortgage principal, interest, taxes, and insurance — PITI), and no more than 36% of gross income on total debt payments (housing + car loans + student loans + credit cards). Lenders use this as a baseline, though some allow up to 43% total debt-to-income ratio.</p>

<h2>What Income Do You Need?</h2>
<p>At current mortgage rates (approximately 6.75% for a 30-year fixed), here's the income required to comfortably afford homes at different price points:</p>
<p>• <strong>$250,000 home</strong> (20% down, $200,000 loan): ~$1,330/month PITI → requires ~$57,000/year income</p>
<p>• <strong>$350,000 home</strong> (20% down, $280,000 loan): ~$1,860/month PITI → requires ~$80,000/year income</p>
<p>• <strong>$450,000 home</strong> (20% down, $360,000 loan): ~$2,390/month PITI → requires ~$102,000/year income</p>
<p>• <strong>$600,000 home</strong> (20% down, $480,000 loan): ~$3,190/month PITI → requires ~$137,000/year income</p>

<h2>The Down Payment Factor</h2>
<p>Your down payment significantly affects affordability. With less than 20% down, you'll pay Private Mortgage Insurance (PMI), typically 0.5–1.5% of the loan amount annually. On a $300,000 loan, PMI adds $125–$375/month to your payment. FHA loans allow 3.5% down with a credit score of 580+, but require mortgage insurance for the life of the loan.</p>

<h2>Affordability by City</h2>
<p>The income required to afford a median-priced home varies dramatically by city. In Pittsburgh, PA, a median home ($225,000) requires about $55,000/year income. In San Francisco, CA, a median home ($1.1M) requires about $270,000/year income — more than 5x the national median household income of $74,580.</p>

<h2>Hidden Costs of Homeownership</h2>
<p>Beyond the mortgage payment, budget for: property taxes (0.5–2.5% of home value annually); homeowner's insurance ($1,200–$3,000/year); HOA fees if applicable ($200–$800/month in many communities); maintenance and repairs (budget 1–2% of home value annually); and utilities (often higher than renting due to larger space).</p>
      </div>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
