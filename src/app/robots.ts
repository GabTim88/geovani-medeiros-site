import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Só o domínio de produção é indexável. Sem isso, a URL de preview usada
  // na avaliação do cliente entra no índice como conteúdo duplicado do site
  // definitivo — e sai de lá bem mais devagar do que entrou.
  const producao =
    process.env.VERCEL_ENV === "production" || !process.env.VERCEL_ENV;

  if (!producao) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
