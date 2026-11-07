import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "About this home affordability calculator and its educational resources.",
  alternates: { canonical: "/about/" },
};
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">About</h1>
      <div className="prose prose-blue max-w-none text-gray-700 space-y-5">
        <p>This site provides an illustrative home affordability calculator and links to homebuying resources. The calculator uses a simplified budget rule and your own estimates; it does not determine whether a lender will approve a loan or whether a payment is right for you.</p>
        <p>Read the <a className="underline" href="/methodology/">methodology and sources</a> for the formula and its limitations, and consult lenders and other qualified professionals for decisions about your circumstances.</p>
      </div>
    </div>
  );
}
