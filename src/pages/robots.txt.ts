import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://mtlab1122.github.io/portfolio/");
  const sitemap = new URL("sitemap.xml", `${base.toString().replace(/\/+$/, "")}/`).toString();
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
