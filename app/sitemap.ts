import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://homeaffordabilityguide.com";
  return ["/", "/calculator/", "/learn/", "/learn/how-much-house-can-i-afford/", "/learn/first-time-homebuyer-guide/", "/learn/down-payment-assistance-programs/", "/about/", "/contact/", "/privacy/", "/terms/", "/disclaimer/", "/methodology/"].map(path => ({ url: `${base}${path}` }));
}
