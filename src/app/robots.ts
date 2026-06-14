import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/om-admin", "/om-admin/"],
    },
    sitemap: "https://omenterprisecompliance.com/sitemap.xml",
  };
}
