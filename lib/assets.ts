import manifest from "@/content/asset-manifest.json";

type AssetManifest = {
  images?: Record<string, string>;
  videos?: Record<string, string>;
  videoFallbacks?: Record<string, string>;
  frames?: Record<string, unknown>;
};

const m = manifest as AssetManifest;
const images = m.images ?? {};

/** Resolve a generated image slot (e.g. "section-about") to its CDN URL. */
export function img(slot: string, fallback = ""): string {
  return images[slot] ?? fallback;
}

/** Map a service slug to its generated card image slot. */
export function serviceImage(slug: string): string {
  return img(`service-${slug}`);
}
