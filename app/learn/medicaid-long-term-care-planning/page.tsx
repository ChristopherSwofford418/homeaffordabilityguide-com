import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
export const metadata: Metadata = { title: "Long-term care information", description: "This site focuses on home affordability.", robots: { index: false, follow: true } };
export default function Article() {
  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <Link href="/learn/" className="text-sm text-accent hover:underline mb-4 inline-block">← Homebuying guides</Link>
      <h1 className="font-serif text-3xl font-bold mb-4">Long-term care information</h1>
      <AdSlot slot="2345678901" format="horizontal" />
      <p className="mt-6">This site focuses on home affordability and does not provide long-term care cost or insurance estimates. For Medicaid long-term services and supports, see <a className="underline" href="https://www.medicaid.gov/medicaid/long-term-services-supports">Medicaid.gov</a> and consult your state Medicaid agency about eligibility.</p>
      <div className="mt-8"><AdSlot slot="1234567890" format="rectangle" /></div>
    </article>
  );
}
