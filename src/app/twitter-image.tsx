import { createBrandOgImage, OG_SIZE } from "@/lib/ogImage";

export const runtime = "nodejs";
export const alt = "BOLXOLVE LTD — Custom Software, Websites & Intelligent Automation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return createBrandOgImage();
}

