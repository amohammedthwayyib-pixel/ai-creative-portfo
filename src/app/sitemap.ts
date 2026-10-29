import type { MetadataRoute } from "next";
import { projects, site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/skills", "/project", "/contact"].map((p) => ({ url: `${site.url}${p}` }));
  return [...pages, ...projects.map((p) => ({ url: `${site.url}/project/${p.id}` }))];
}
