import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HoangVu Flower - Hoa Tươi Đà Lạt",
    short_name: "HoangVu Flower",
    description:
      "Hoa Tươi Đà Lạt được giao tận tay bạn. Giao hoa trong ngày tại TP.HCM.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e8",
    theme_color: "#4a7c59",
    lang: "vi",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
