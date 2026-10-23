import type { APIRoute } from "astro";
import { person } from "../data/profile";

export const GET: APIRoute = ({ site }) => {
  const defaultSite = person.productionUrl;
  const rawBase = site ? site.toString() : defaultSite;
  const base = `${rawBase.replace(/\/+$/, "")}/`;
  const sitemap = new URL("sitemap.xml", base).toString();

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
