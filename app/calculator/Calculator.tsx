"use client";
import { useState } from "react";
import { calculate, type Inputs } from "./calculations";

const fields: { key: keyof Inputs; label: string; hint?: string; max: number }[] = [
  { key: "income", label: "Annual gross household income ($)", max: 1000000000 },
  { key: "downPayment", label: "Down payment available ($)", hint: "Set aside closing costs and reserves separately.", max: 1000000000 },
  { key: "debt", label: "Other monthly debt payments ($)", max: 1000000000 },
  { key: "rate", label: "Annual mortgage interest rate (%)", hint: "Enter a quote or an illustrative rate; this is not a live rate.", max: 100 },
  { key: "tax", label: "Estimated property tax per month ($)", max: 1000000000 },
  { key: "insurance", label: "Estimated homeowners and other property insurance per month ($)", max: 1000000000 },
  { key: "mortgageInsurance", label: "Estimated mortgage insurance per month ($)", max: 1000000000 },
  { key: "hoa", label: "Estimated HOA or condo fees per month ($)", max: 1000000000 },
];
const dollars = (value: number) => `$${Math.floor(value).toLocaleString("en-US")}`;
const monthlyDollars = (value: number) => value > 0 && value < 1 ? "<$1" : dollars(value);

export default function Calculator() {
  const [inputs, setInputs] = useState<Inputs>({ income: "80000", downPayment: "60000", debt: "500", rate: "6.75", tax: "", insurance: "", mortgageInsurance: "", hoa: "" });
  const { estimate, message } = calculate(inputs);
  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <p className="text-sm text-gray-700 mb-6">The first four values are illustrations, not current rates or a recommendation. Enter your own numbers and estimates for each monthly cost; enter 0 only if a cost does not apply. Use local tax records, insurance quotes and a lender&apos;s estimate for the property and loan you are considering.</p>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {fields.map(field => (
          <div key={field.key}>
            <label htmlFor={field.key} className="block text-sm font-semibold text-ink mb-2">{field.label}</label>
            <input id={field.key} type="number" inputMode="decimal" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={inputs[field.key]} onChange={e => setInputs({ ...inputs, [field.key]: e.target.value })} min={field.key === "income" ? "0.01" : "0"} max={field.max} step="any" aria-describedby={field.hint ? `${field.key}-hint` : undefined} />
            {field.hint && <p id={`${field.key}-hint`} className="text-xs text-gray-600 mt-1">{field.hint}</p>}
          </div>
        ))}
      </div>
      <div aria-live="polite">
        {message && <p className="bg-white rounded-lg p-4 text-gray-700">{message}</p>}
        {estimate && <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border-2 border-accent text-center"><div className="text-2xl font-bold text-accent">{dollars(estimate.homePrice)}</div><div className="text-xs text-gray-600 mt-1">Illustrative home price</div></div>
          <div className="bg-white rounded-xl p-4 border border-line text-center"><div className="text-2xl font-bold text-ink">{dollars(estimate.loan)}</div><div className="text-xs text-gray-600 mt-1">Illustrative loan</div></div>
          <div className="bg-white rounded-xl p-4 border border-line text-center"><div className="text-2xl font-bold text-ink">{monthlyDollars(estimate.principalAndInterest)}</div><div className="text-xs text-gray-600 mt-1">Monthly principal &amp; interest</div></div>
          <div className="bg-white rounded-xl p-4 border border-line text-center"><div className="text-2xl font-bold text-ink">{monthlyDollars(estimate.housingBudget)}</div><div className="text-xs text-gray-600 mt-1">Total monthly housing budget</div></div>
        </div>}
        {estimate && Number(inputs.downPayment) < estimate.homePrice * 0.2 && Number(inputs.mortgageInsurance) === 0 && <p className="mt-4 text-sm text-gray-700">With less than 20% down, mortgage insurance may be required. Check with a lender and update the monthly estimate if it applies. <a className="underline" href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB: down payment considerations</a>.</p>}
      </div>
      <p className="text-sm text-gray-600 mt-4">This illustration uses a 30-year fixed-rate loan and a 28% housing / 36% housing-plus-debt guideline, not a lender approval or a measure of what is comfortable. Entered taxes, insurance and fees are subtracted before calculating the loan. They can change with the property and price; recalculate with property-specific quotes. Closing costs, utilities, maintenance and other living expenses are not included. Positive monthly results below $1 are shown as less than $1; other dollar results are rounded down. <a href="/methodology/" className="underline">Methodology and sources</a>.</p>
      <p className="text-sm text-gray-600 mt-2">For additional planning, see <a className="underline" href="https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/">CFPB&apos;s homebuying budget guide</a> and <a className="underline" href="https://www.freddiemac.com/pmms">Freddie Mac&apos;s weekly rate survey</a>.</p>
    </div>
  );
}
