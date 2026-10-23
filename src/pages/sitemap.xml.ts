import type { APIRoute } from "astro";
import { blogPosts, person, projects } from "../data/profile";

export const GET: APIRoute = ({ site }) => {
  const defaultSite = person.productionUrl;
  const rawBase = site ? site.toString() : defaultSite;
  const base = `${rawBase.replace(/\/+$/, "")}/`;

  const urls: { path: string; priority: string; changefreq: string }[] = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "blog", priority: "0.8", changefreq: "weekly" },
    ...blogPosts.map((post) => ({
      path: `blog/${post.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
    ...projects.map((project) => ({
      path: `projects/${project.slug}`,
      priority: project.featured ? "0.9" : "0.8",
      changefreq: "monthly",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ path, priority, changefreq }) => `
  <url>
    <loc>${new URL(path, base).toString()}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
