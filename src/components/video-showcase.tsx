import { useEffect, useRef, useState } from "react";
import video1 from "../assets/mayfox-video-1.mp4.asset.json";
import video2 from "../assets/mayfox-video-2.mp4.asset.json";
import video3 from "../assets/mayfox-video-3.mp4.asset.json";
import video4 from "../assets/mayfox-video-4.mp4.asset.json";
import realBars from "../assets/real-gold-bars-crates.jpg.asset.json";
import realGrains from "../assets/real-gold-grains-sacks.jpg.asset.json";
import realScale from "../assets/real-gold-bar-scale.jpg.asset.json";

export const mayfoxVideos = [video1.url, video2.url, video3.url, video4.url];
export const mayfoxRealPhotos = {
  bars: realBars.url,
  grains: realGrains.url,
  scale: realScale.url,
};

interface SilentVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  fetchPriority?: "high" | "low" | "auto";
}

export function SilentVideo({ src, poster, className, ariaLabel, fetchPriority }: SilentVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.volume = 0;
    const play = () => v.play().catch(() => {});
    play();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
      className={className}
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
    />
  );
}

function LazyVideo({ src, ariaLabel }: { src: string; ariaLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-sm aspect-[9/16] bg-background/40 border border-gold/10 group"
    >
      {visible && (
        <>
          <SilentVideo
            src={src}
            ariaLabel={ariaLabel}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
        </>
      )}
    </div>
  );
}

export function VideoShowcase() {
  return (
    <section className="section-y border-t border-border/50 bg-onyx">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow mb-4">Inside the Vault</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight max-w-2xl">
              Real gold. Real consignments. <span className="text-gradient-gold">Filmed on our trade floor.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Unedited footage of Mayfox bullion, dore bars and grain gold being weighed,
            inspected and prepared for insured export from Nairobi.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {mayfoxVideos.map((src, i) => {
            if (i === 0) {
              return (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-sm aspect-[9/16] bg-background/40 border border-gold/10 group"
                >
                  <SilentVideo
                    src={src}
                    ariaLabel={`Mayfox Gold operations footage ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.24em] uppercase text-gold">
                    Live · 0{i + 1}
                  </div>
                </div>
              );
            }
            return (
              <LazyVideo
                key={src}
                src={src}
                ariaLabel={`Mayfox Gold operations footage ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
