export type Inputs = {
  income: string;
  downPayment: string;
  debt: string;
  rate: string;
  tax: string;
  insurance: string;
  mortgageInsurance: string;
  hoa: string;
};

export type Estimate = {
  housingBudget: number;
  principalAndInterest: number;
  otherHousingCosts: number;
  loan: number;
  homePrice: number;
};

export function calculate(inputs: Inputs): { estimate?: Estimate; message?: string } {
  const values = Object.values(inputs);
  if (values.some(value => value.trim() === "")) {
    return { message: "Enter all values, including 0 for a cost that does not apply. Use estimates for a specific property and loan." };
  }
  const { income, downPayment, debt, rate, tax, insurance, mortgageInsurance, hoa } = Object.fromEntries(
    Object.entries(inputs).map(([key, value]) => [key, Number(value)])
  ) as Record<keyof Inputs, number>;
  if (values.some(value => !Number.isFinite(Number(value))) || income <= 0 ||
      [downPayment, debt, rate, tax, insurance, mortgageInsurance, hoa].some(value => value < 0) ||
      [income, downPayment, debt, tax, insurance, mortgageInsurance, hoa].some(value => value > 1_000_000_000) || rate > 100) {
    return { message: "Enter a positive annual income, nonnegative costs up to $1 billion, and an interest rate from 0 to 100%." };
  }
  const monthlyIncome = income / 12;
  const housingBudget = Math.min(monthlyIncome * 0.28, monthlyIncome * 0.36 - debt);
  const otherHousingCosts = tax + insurance + mortgageInsurance + hoa;
  if (housingBudget <= 0) {
    return { message: "The entered debt payments leave no housing budget under this 28/36 guideline. This is not a lending decision." };
  }
  const principalAndInterest = housingBudget - otherHousingCosts;
  if (principalAndInterest < 0.01) {
    return { message: "The entered housing costs leave less than one cent per month for principal and interest under the guideline, so no financed price is shown. A cash purchase is not evaluated." };
  }
  const monthlyRate = rate / 1200;
  const factor = monthlyRate === 0 ? 360 : -Math.expm1(-360 * Math.log1p(monthlyRate)) / monthlyRate;
  const loan = principalAndInterest * factor;
  return { estimate: { housingBudget, principalAndInterest, otherHousingCosts, loan, homePrice: loan + downPayment } };
}
