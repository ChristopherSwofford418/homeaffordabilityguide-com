import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology & Sources | homeaffordabilityguide.com",
  description: "Learn how homeaffordabilityguide.com calculates estimates and the data sources we rely on.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Methodology & Sources</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="text-lg leading-relaxed mb-6">
          Transparency is a core value at homeaffordabilityguide.com. We want you to understand exactly how our tools generate their estimates and where the underlying data comes from.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Calculate</h2>
        <p className="mb-6">
          Our calculators use deterministic mathematical models based on established industry practices. We do not use "black box" algorithms or opaque AI models to generate financial or legal estimates. When you input a value, the calculator applies a fixed formula (such as standard amortization for loans, or typical multiplier ranges for settlements) to produce the output.
        </p>
        <p className="mb-6">
          Where ranges are provided, we typically calculate a conservative "low" estimate and a standard "high" estimate to reflect the natural variance in real-world scenarios.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Sourcing</h2>
        <p className="mb-4">Our baseline assumptions, default values, and reference points are drawn from publicly available, authoritative sources, including:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Federal and state government publications (e.g., IRS, SSA, BLS)</li>
          <li>Academic research and peer-reviewed studies</li>
          <li>Aggregated public legal settlement data</li>
          <li>Industry association reports and guidelines</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Editorial Review</h2>
        <p className="mb-6">
          Before a new calculator is published, its formulas are manually tested against known case studies or established reference points to ensure mathematical accuracy. We periodically review our tools to ensure they remain aligned with current laws, tax brackets, and market conditions.
        </p>
      </div>
    </div>
  );
}
