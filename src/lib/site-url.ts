const FALLBACK_URL = "https://mayfox.co.ke";

export function siteUrl(): string {
  const raw = process.env.SITE_URL || process.env.VITE_SITE_URL || FALLBACK_URL;
  return raw.replace(/\/+$/, "");
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = siteUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
