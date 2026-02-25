import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Liên Hệ - Hoa Tươi Hoàng Vũ Đà Lạt",
  description:
    "Liên hệ Hoa Tươi Hoàng Vũ - Đặt hoa tươi, hoa cưới, hoa sự kiện tại Đà Lạt. Địa chỉ: 306 Nguyên Tử Lực, Phường 8, TP. Đà Lạt. Hotline: 0977 625 859.",
  alternates: {
    canonical: "https://hoatuoihoangvu.xyz/lien-he",
  },
  openGraph: {
    title: "Liên Hệ - Hoa Tươi Hoàng Vũ Đà Lạt",
    description:
      "Đặt hoa tươi, hoa cưới, hoa sự kiện tại Đà Lạt. Hotline: 0977 625 859. Giao hoa trong ngày.",
    url: "https://hoatuoihoangvu.xyz/lien-he",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
