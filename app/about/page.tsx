import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | homeaffordabilityguide.com",
  description: "Learn about the mission, team, and editorial standards behind homeaffordabilityguide.com.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">About Us</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="text-lg leading-relaxed mb-6">
          Welcome to homeaffordabilityguide.com. We are dedicated to providing accurate, accessible, and transparent calculation tools and informational resources for our users.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to simplify complex financial, legal, and personal decisions through free, objective, and easy-to-use digital tools. We believe that everyone deserves access to clear information without hidden fees or confusing jargon.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Editorial Standards</h2>
        <p className="mb-6">
          Every tool and article published on homeaffordabilityguide.com undergoes a rigorous review process. We base our formulas on established industry standards and publicly available data. Our content is designed for educational purposes and is regularly updated to reflect current methodologies.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Independence</h2>
        <p className="mb-6">
          We maintain strict editorial independence. Our calculators and informational guides are not influenced by advertisers or partners. When we do partner with third parties, those relationships are clearly disclosed, and they never alter the fundamental math behind our tools.
        </p>
      </div>
    </div>
  );
}
