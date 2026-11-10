import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: SITE_CONFIG.themeColor,
    theme_color: SITE_CONFIG.themeColor,
    icons: [
      {
        src: "/brand/logo_icon_clean.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/logo_icon_hi_res.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

