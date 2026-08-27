import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = `${(site ?? "https://mtlab1122.github.io/portfolio/").toString().replace(/\/+$/, "")}/`;
  const urls = [
    ".",
    "blog",
    "blog/astro-vs-nextjs-for-small-business-websites",
    "blog/building-trust-through-premium-web-design",
    "blog/seo-checklist-for-developers-and-founders",
    "blog/how-to-turn-a-portfolio-into-client-leads",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (path) => `
  <url>
    <loc>${new URL(path, base).toString()}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "." ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
