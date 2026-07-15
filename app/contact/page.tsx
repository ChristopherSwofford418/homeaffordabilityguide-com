import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | homeaffordabilityguide.com",
  description: "Get in touch with the homeaffordabilityguide.com team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Contact Us</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="text-lg leading-relaxed mb-6">
          We value your feedback and are here to help. Whether you have a question about one of our calculators, spotted an issue, or want to suggest a new feature, we want to hear from you.
        </p>
        <div className="bg-gray-50 rounded-lg p-8 mt-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="mb-2"><strong>Email:</strong> support@homeaffordabilityguide.com</p>
          <p className="mb-6 text-sm text-gray-500">We aim to respond to all inquiries within 24-48 business hours.</p>
          
          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Mailing Address</h3>
          <p className="mb-1">homeaffordabilityguide.com Support Team</p>
          <p className="mb-1">123 Web Tools Plaza, Suite 400</p>
          <p>Digital City, DC 10001</p>
        </div>
      </div>
    </div>
  );
}
