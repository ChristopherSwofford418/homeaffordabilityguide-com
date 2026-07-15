import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | homeaffordabilityguide.com",
  description: "Review the terms and conditions for using homeaffordabilityguide.com and its tools.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="mb-4"><em>Last Updated: October 2024</em></p>
        <p className="mb-6">
          By accessing and using homeaffordabilityguide.com, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Educational Use Only</h2>
        <p className="mb-6">
          All calculators, content, and tools provided on homeaffordabilityguide.com are for educational and informational purposes only. They do not constitute professional financial, legal, or medical advice. You should consult with a qualified professional before making significant decisions based on our estimates.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Accuracy of Information</h2>
        <p className="mb-6">
          While we strive to keep our tools and information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-6">
          The website and its original content, features, and functionality are owned by homeaffordabilityguide.com and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall homeaffordabilityguide.com, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      </div>
    </div>
  );
}
