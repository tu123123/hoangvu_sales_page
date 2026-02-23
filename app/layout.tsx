import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bloomandco.vn";
const SITE_NAME = "HoangVu Flower";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HoangVu Flower | Hoa Tươi Đà Lạt - Giao Hoa Tận Nơi",
    template: "%s | HoangVu Flower",
  },
  description:
    "Hoa Tươi Đà Lạt được giao tận tay bạn. Bó hoa theo mùa, hoa cưới, cắm hoa sự kiện và thiết kế riêng bởi nghệ nhân hoa chuyên nghiệp. Giao hoa trong ngày tại TP.HCM.",
  keywords: [
    "giao hoa tươi",
    "bó hoa",
    "cắm hoa nghệ thuật",
    "hoa cưới",
    "hoa theo mùa",
    "nghệ nhân hoa",
    "đặt hoa online",
    "hoa tươi TP.HCM",
    "shop hoa tươi",
    "hoa sinh nhật",
    "hoa khai trương",
    "hoa chia buồn",
    "hoa sự kiện",
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
    canonical: "/",
    languages: {
      "vi-VN": "/",
    },
  },
  openGraph: {
    title: "HoangVu Flower | Hoa Tươi Đà Lạt - Giao Hoa Tận Nơi",
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
        alt: "HoangVu Flower - Hoa Tươi Đà Lạt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HoangVu Flower | Hoa Tươi Đà Lạt",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
