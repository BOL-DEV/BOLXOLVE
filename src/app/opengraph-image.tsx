import { createBrandOgImage, OG_SIZE } from "@/lib/ogImage";

export const runtime = "nodejs";
export const alt = "BOLXOLVE LTD — Hybrid Digital Solutions & Technology";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createBrandOgImage();
}

