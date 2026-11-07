import AdSlot from "@/components/AdSlot";
import Calculator from "./Calculator";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Affordability Calculator",
  description: "Estimate an illustrative home price using income, debt, down payment and your housing cost estimates.",
  alternates: { canonical: "/calculator/" },
};
export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-2">Home Affordability Calculator</h1>
      <p className="text-gray-600 mb-8">Explore a 30-year fixed-rate loan scenario. This is not a lender decision or a personal budget.</p>
      <AdSlot slot="1122334455" format="horizontal" />
      <Calculator />
      <AdSlot slot="5544332211" format="rectangle" />
    </div>
  );
}
