import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hoa tươi Hoàng Vũ - Hoa Tươi Đà Lạt",
    short_name: "Hoa tươi Hoàng Vũ",
    description:
      "Hoa Tươi Đà Lạt được giao tận tay bạn. Giao hoa trong ngày tại Đà Lạt và các tỉnh lân cận. Chất lượng hoa tươi lâu, đa dạng mẫu mã.",
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
