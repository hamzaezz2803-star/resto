"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Loader d'images.
 * - Unsplash : redimensionnement et format moderne (AVIF/WebP) par le CDN d'Unsplash.
 * - Autres sources (fichiers locaux) : servies telles quelles.
 */
export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 60));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
  }
  return src;
}
