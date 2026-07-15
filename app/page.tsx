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
    
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Understanding Homeaffordabilityguide</h2>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Navigating the complexities of homeaffordabilityguide requires clear, objective data. Our calculator uses established industry formulas to provide a baseline estimate for your specific situation. While no automated tool can replace professional advice, understanding these foundational numbers is the first step toward making an informed decision.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Factors Influencing Your Estimate</h3>
            <p className="mb-4">Several variables can significantly alter the final outcome when dealing with homeaffordabilityguide:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Jurisdiction and Location:</strong> State laws and regional economic factors often dictate baseline costs, tax rates, or settlement multipliers.</li>
              <li><strong>Timeline and Duration:</strong> Longer time horizons introduce compounding variables, inflation adjustments, or statute of limitations considerations.</li>
              <li><strong>Individual Circumstances:</strong> Your specific financial standing, medical history, or legal background acts as a multiplier on standard formulas.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How to Use This Data</h3>
            <p className="mb-6">
              We recommend using the estimate generated above as a starting point for discussions with qualified professionals. Whether you are speaking to an attorney, a financial planner, or a healthcare provider, having a baseline calculation helps you ask better questions and set realistic expectations.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8 rounded-r-lg">
              <p className="text-sm text-blue-800 mb-0">
                <strong>Editorial Note:</strong> The formulas used on this site are regularly reviewed against current public data sources. For a detailed breakdown of our calculation methods, please review our <a href="/methodology" className="underline hover:text-blue-900">Methodology & Sources</a> page.
              </p>
            </div>
          </div>
        </div>

    </div>
  );
}
