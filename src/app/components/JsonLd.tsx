import { site } from "@/lib/site";

/**
 * Dados estruturados schema.org.
 * MusicGroup + MusicAlbum alimentam o Knowledge Panel do Google;
 * WebSite habilita a sitelinks searchbox.
 */
export default function JsonLd() {
  const artist = {
    "@type": "MusicGroup",
    "@id": `${site.url}/#artist`,
    name: site.name,
    alternateName: "Geovani Medeiros Oficial",
    url: site.url,
    description:
      "Cantor, violonista e gaitista de Barbacena/MG. Repertório eclético de música brasileira com arranjos autorais para casamentos, eventos corporativos, bares e festivais.",
    genre: ["Música Popular Brasileira", "MPB", "Música Brasileira"],
    foundingDate: site.activeSince,
    foundingLocation: {
      "@type": "Place",
      name: `${site.city}, ${site.state}`,
    },
    sameAs: [site.social.instagram, site.social.youtube, site.social.spotify],
    album: [
      {
        "@type": "MusicAlbum",
        name: "Pra Começar",
        datePublished: "2017",
        byArtist: { "@id": `${site.url}/#artist` },
      },
      {
        "@type": "MusicAlbum",
        name: "Um Entardecer em Tiradentes",
        albumProductionType: "https://schema.org/LiveAlbum",
        byArtist: { "@id": `${site.url}/#artist` },
        recordLabel: { "@type": "Organization", name: "Pacific Records" },
        recordingOf: {
          "@type": "Place",
          name: "Capela de São Francisco de Paula, Tiradentes/MG",
        },
      },
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Show de música brasileira ao vivo",
        serviceType: "Música ao vivo para eventos",
        areaServed: site.areaServed.map((name) => ({
          "@type": "City",
          name: `${name}, ${site.state}`,
        })),
      },
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "pt-BR",
    publisher: { "@id": `${site.url}/#artist` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [artist, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
