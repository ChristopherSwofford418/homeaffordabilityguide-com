"use client";
import { useState } from "react";

export default function Calculator() {
  const [income, setIncome] = useState<string>("80000");
  const [downPayment, setDownPayment] = useState<string>("60000");
  const [monthlyDebt, setMonthlyDebt] = useState<string>("500");
  const [rate, setRate] = useState<string>("6.75");

  const annualIncome = parseFloat(income) || 0;
  const down = parseFloat(downPayment) || 0;
  const debt = parseFloat(monthlyDebt) || 0;
  const interestRate = parseFloat(rate) || 6.75;

  const monthlyIncome = annualIncome / 12;
  const maxHousingPayment = monthlyIncome * 0.28;
  const maxTotalDebt = monthlyIncome * 0.36;
  const maxMortgagePayment = Math.min(maxHousingPayment, maxTotalDebt - debt);

  // Solve for loan amount: P = PMT * (1 - (1+r)^-n) / r
  const r = interestRate / 100 / 12;
  const n = 360;
  const maxLoan = maxMortgagePayment > 0 ? maxMortgagePayment * (1 - Math.pow(1 + r, -n)) / r : 0;
  const maxHomePrice = maxLoan + down;

  const taxInsurance = maxHomePrice * 0.015 / 12;
  const totalMonthly = maxMortgagePayment + taxInsurance;

  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Annual Household Income</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" className="w-full border border-line rounded-lg pl-8 pr-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={income} onChange={e => setIncome(e.target.value)} min="20000" max="1000000" step="5000" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Down Payment Available</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" className="w-full border border-line rounded-lg pl-8 pr-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={downPayment} onChange={e => setDownPayment(e.target.value)} min="0" max="2000000" step="5000" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Monthly Debt Payments (car, student loans, etc.)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" className="w-full border border-line rounded-lg pl-8 pr-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={monthlyDebt} onChange={e => setMonthlyDebt(e.target.value)} min="0" max="10000" step="50" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Mortgage Interest Rate (%)</label>
          <input type="number" className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent" value={rate} onChange={e => setRate(e.target.value)} min="3" max="12" step="0.125" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border-2 border-accent text-center col-span-2 md:col-span-1">
          <div className="text-3xl font-bold text-accent">${Math.round(maxHomePrice).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Max Home Price</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-line text-center">
          <div className="text-2xl font-bold text-ink">${Math.round(maxLoan).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Max Loan Amount</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-line text-center">
          <div className="text-2xl font-bold text-ink">${Math.round(maxMortgagePayment).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Max Mortgage Payment</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-line text-center">
          <div className="text-2xl font-bold text-ink">${Math.round(totalMonthly).toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Est. Total Monthly</div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">Based on 28/36 rule. Includes estimated taxes and insurance. For educational purposes only.</p>
    </div>
  );
}
