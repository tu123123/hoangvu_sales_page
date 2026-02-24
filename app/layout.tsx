import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://hoatuoihoangvu.xyz";
const SITE_NAME = "Hoàng Vũ Flower";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const viewport: Viewport = {
  themeColor: "#4a7c59",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  // verification: {
  //   google: "HBwip1gOC4lO1V5HBKdevbZXOHm5e9onGFswWesDjGU",
  // },

  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hoàng Vũ Flower | Hoa Tươi Đà Lạt - Giao Hoa Tận Nơi",
    template: "%s | Hoàng Vũ Flower",
  },
  description:
    "Hoa Tươi Đà Lạt được giao tận tay bạn. Bó hoa theo mùa, hoa cưới, cắm hoa sự kiện và thiết kế riêng bởi nghệ nhân hoa chuyên nghiệp. Giao hoa trong ngày tại TP.Đà Lạt.",
  keywords: [
    "hoa tươi Hoàng Vũ",
    "giao hoa tươi",
    "bó hoa",
    "cắm hoa nghệ thuật",
    "hoa cưới",
    "hoa theo mùa",
    "nghệ nhân hoa",
    "đặt hoa online",
    "hoa tươi Đà Lạt",
    "shop hoa tươi",
    "hoa sinh nhật",
    "hoa khai trương",
    "hoa hoàng vũ",
    "bán hoa hoàng vũ",
    "cây hoa hoàng vũ",
    "hoa chia buồn",
    "hoa sự kiện",
    "shop bán hoa hoàng vũ online",
    "hoa hoàng vũ giao tận nơi",
    "hoa hoàng vũ tặng người yêu",
    "hoa hoàng vũ trang trí phòng khách",
    "hoa hoàng vũ Lâm Đồng",
    "hoa hoàng vũ Đà Lạt",
    "shop hoa hoàng vũ TP.HCM",
    "hoa hoàng vũ Hà Nội",
    "hoa tặng bạn gái",
    "hoa Đà Lạt",
    "shop hoa Đà Lạt",
    "điện hoa Đà Lạt",
    "dịch vụ cắm hoa",
    "mua hoa Đà Lạt online giao tận nơi",
    "điện hoa Đà Lạt giao nhanh trong ngày",
    "học cắm hoa nghệ thuật tại Đà Lạt",
    "dịch vụ cắm hoa tươi đẹp uy tín Đà Lạt",
    "shop hoa Đà Lạt giá rẻ",
    "hoa sinh nhật Đà Lạt",
    "hoa sinh nhật Đà Lạt",
    "hoa khai trương Đà Lạt",
    "hoa cưới Đà Lạt",
    "hoa tang lễ Đà Lạt",
    "hoa chúc mừng Đà Lạt",
    "shop hoa tươi Lâm Đồng",
    "điện hoa nhanh TP Đà Lạt",
    "dịch vụ giao hoa tận nơi Đà Lạt",
    "nghệ thuật cắm hoa",
    "dịch vụ cắm hoa",
    "hoa bàn tiệc",
    "hoa trang trí",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "vi-VN": SITE_URL,
    },
  },
  openGraph: {
    title: "Hoàng Vũ Flower | Hoa Tươi Đà Lạt - Giao Hoa Tận Nơi",
    description:
      "Hoa Tươi Đà Lạt được giao tận tay bạn. Bó hoa theo mùa, hoa cưới và thiết kế riêng bởi nghệ nhân hoa chuyên nghiệp.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/hero-flowers.jpg",
        width: 1200,
        height: 630,
        alt: "Hoàng Vũ Flower - Hoa Tươi Đà Lạt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng Vũ Flower | Hoa Tươi Đà Lạt",
    description: "Hoa Tươi Đà Lạt được giao tận tay bạn. Giao hoa trong ngày.",
    images: ["/images/hero-flowers.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
