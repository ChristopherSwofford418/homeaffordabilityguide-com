import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for homeaffordabilityguide.com.",
  alternates: { canonical: "/contact/" },
};
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Contact</h1>
      <p className="text-gray-700">A verified contact method is not currently listed on this page. For help with homebuying questions, see the <a className="underline" href="https://www.consumerfinance.gov/find-a-housing-counselor/">CFPB&apos;s housing counselor resources</a>.</p>
    </div>
  );
}
