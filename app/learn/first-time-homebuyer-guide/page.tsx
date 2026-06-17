import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "First-Time Homebuyer Guide: Everything You Need to Know",
  description: "A complete step-by-step guide for first-time homebuyers, from checking your credit score to closing day.",
  alternates: { canonical: "https://homeaffordabilityguide.com/learn/first-time-homebuyer-guide/" },
};
export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">Buyer Guide</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink tracking-tight">First-Time Homebuyer Guide: Everything You Need to Know</h1>
        <p className="mt-3 text-lg text-gray-600">A complete step-by-step guide for first-time homebuyers, from checking your credit score to closing day.</p>
      </div>
      <AdSlot slot="2233445566" format="horizontal" />
      <div className="prose-article mt-8">
        <h2>Step 1: Check Your Credit Score</h2>
<p>Your credit score determines your mortgage interest rate. A score of 760+ qualifies you for the best rates. A score of 620–759 will get you approved but at higher rates. Below 620, you'll need an FHA loan or significant improvement before buying. Check your score for free at AnnualCreditReport.com. Dispute any errors — they're more common than you'd think.</p>

<h2>Step 2: Save for a Down Payment and Closing Costs</h2>
<p>Conventional loans require 3–20% down. FHA loans require 3.5% with a 580+ credit score. VA loans (for veterans) and USDA loans (for rural areas) require 0% down. Don't forget closing costs: typically 2–5% of the loan amount. On a $300,000 purchase, expect $6,000–$15,000 in closing costs.</p>

<h2>Step 3: Get Pre-Approved</h2>
<p>Before house hunting, get pre-approved by a lender. Pre-approval involves a hard credit pull and verification of income, assets, and employment. It gives you a firm budget and makes your offers more competitive. Get pre-approved by 2–3 lenders to compare rates — even a 0.25% rate difference saves $15,000+ over a 30-year loan.</p>

<h2>Step 4: Find a Buyer's Agent</h2>
<p>A buyer's agent represents your interests and is typically paid by the seller. Interview 2–3 agents. Look for someone who specializes in your target area, has strong reviews, and communicates clearly. As a first-time buyer, you want an agent who will educate you, not rush you.</p>

<h2>Step 5: Make an Offer and Negotiate</h2>
<p>When you find the right home, your agent will help you craft a competitive offer. In a buyer's market, you can often offer below asking price and request seller concessions. In a seller's market, you may need to offer at or above asking. Always include an inspection contingency — never waive it as a first-time buyer.</p>

<h2>Step 6: Home Inspection and Appraisal</h2>
<p>After your offer is accepted, hire a licensed home inspector ($300–$500). The inspection reveals issues you can negotiate with the seller to fix or credit. Your lender will also order an appraisal to confirm the home's value supports the loan amount.</p>

<h2>Step 7: Closing Day</h2>
<p>Closing typically happens 30–45 days after your offer is accepted. You'll sign a large stack of documents, pay closing costs, and receive the keys. Review the Closing Disclosure (sent 3 days before closing) carefully — it itemizes every fee.</p>
      </div>
      <AdSlot slot="6655443322" format="rectangle" />
    </article>
  );
}
