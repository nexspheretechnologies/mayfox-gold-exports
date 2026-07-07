import { createFileRoute } from "@tanstack/react-router";
import { galleryImages } from "../lib/images";
import { CTABand, PageHero } from "../components/site-blocks";
import { SilentVideo, mayfoxVideos } from "../components/video-showcase";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Gold Bars, Refining & Logistics — Mayfox Gold Kenya" },
      { name: "description", content: "Photo gallery of Mayfox Gold operations: bullion bars, smelting, refining, assay laboratories, secure logistics and global delivery." },
      { property: "og:title", content: "Gallery — Mayfox Gold" },
      { property: "og:image", content: galleryImages[0] },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside <span className="text-gradient-gold">Mayfox</span> operations.</>}
        subtitle="From the smelting floor to the cargo apron — a visual record of how verified bullion moves from Kenya to global vaults."
        image={galleryImages[10]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => {
              const tall = i % 7 === 3 || i % 11 === 5;
              return (
                <div key={i} className={`overflow-hidden rounded-sm group ${tall ? "row-span-2 aspect-[3/4] lg:aspect-[3/5]" : "aspect-square"}`}>
                  <img
                    src={src}
                    alt={`Mayfox Gold operations ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
