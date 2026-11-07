import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Limitations of the site's home affordability information and calculator.",
  alternates: { canonical: "/disclaimer/" },
};
export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Disclaimer</h1>
      <div className="prose prose-blue max-w-none text-gray-700 space-y-5">
        <p>The calculator and guides are for general education, not financial, tax or legal advice. The calculator is an illustration based on your inputs and simplified assumptions; it is not a lender&apos;s approval or a determination of what you can afford. Actual loan terms and homeownership costs vary.</p>
        <p>See the <a className="underline" href="/methodology/">methodology</a> for included and excluded costs. Consult a lender or other qualified professional about your situation and verify property-specific costs and loan terms before making decisions.</p>
        <p>The site may display advertisements. External websites have their own terms and privacy practices.</p>
      </div>
    </div>
  );
}
