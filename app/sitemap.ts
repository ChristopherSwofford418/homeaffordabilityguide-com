import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://homeaffordabilityguide.com/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "https://homeaffordabilityguide.com/calculator/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://homeaffordabilityguide.com/learn/how-much-house-can-i-afford/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://homeaffordabilityguide.com/learn/first-time-homebuyer-guide/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://homeaffordabilityguide.com/learn/down-payment-assistance-programs/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://homeaffordabilityguide.com/about/", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
  ];
}
