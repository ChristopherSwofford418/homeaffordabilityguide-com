import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | homeaffordabilityguide.com",
  description: "Read the homeaffordabilityguide.com privacy policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="mb-4"><em>Last Updated: October 2024</em></p>
        <p className="mb-6">
          At homeaffordabilityguide.com, your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our tools.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information in the following ways:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Information you provide:</strong> When you contact us or subscribe to a newsletter, we collect the email address and details you submit.</li>
          <li><strong>Automatically collected data:</strong> We use standard web analytics tools to collect non-personally identifiable information such as browser type, device type, referring pages, and usage patterns.</li>
          <li><strong>Calculator inputs:</strong> The numbers you enter into our calculators are processed locally in your browser or temporarily on our servers to generate results. We do not store personal financial or legal data from calculator inputs.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Use of Cookies and Tracking</h2>
        <p className="mb-6">
          We use cookies to improve your experience, analyze site traffic, and serve relevant advertisements. We partner with third-party advertising networks, including Google AdSense, which use cookies to serve ads based on your prior visits to this and other websites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Third-Party Services</h2>
        <p className="mb-6">
          We may share anonymized, aggregated data with third-party analytics providers. We do not sell your personal information to third parties. Our site may contain links to external websites; we are not responsible for the privacy practices of those external sites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
        <p className="mb-6">
          We implement standard security measures to protect against unauthorized access or data alteration. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-6">
          If you have questions about this Privacy Policy, please contact us at privacy@homeaffordabilityguide.com.
        </p>
      </div>
    </div>
  );
}
