const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bloomandco.vn";

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: "HoangVu Flower",
    image: `${SITE_URL}/images/hero-flowers.jpg`,
    url: SITE_URL,
    telephone: "+84-28-1234-5678",
    email: "hello@bloomandco.vn",
    description:
      "Hoa Tươi Đà Lạt được giao tận tay bạn. Bó hoa theo mùa, hoa cưới, cắm hoa sự kiện và thiết kế riêng bởi nghệ nhân hoa chuyên nghiệp.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Nguyễn Huệ",
      addressLocality: "Quận 1",
      addressRegion: "TP. Hồ Chí Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.7769,
      longitude: 106.7009,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "VND",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: {
      "@type": "City",
      name: "TP. Hồ Chí Minh",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "350",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/bloomandco",
      "https://www.instagram.com/bloomandco",
      "https://www.tiktok.com/@bloomandco",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HoangVu Flower",
    url: SITE_URL,
    description: "Hoa Tươi Đà Lạt - Giao hoa tận nơi tại TP.Đà Lạt",
    inLanguage: "vi-VN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HoangVu Flower",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "Xưởng thiết kế hoa nghệ thuật mang vẻ đẹp thiên nhiên đến tận nhà bạn từ năm 2018.",
    foundingDate: "2018",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-28-1234-5678",
      contactType: "customer service",
      availableLanguage: ["Vietnamese", "English"],
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bộ Sưu Tập",
        item: `${SITE_URL}/#collections`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bảng Giá",
        item: `${SITE_URL}/#pricing`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Dịch Vụ",
        item: `${SITE_URL}/#services`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Liên Hệ",
        item: `${SITE_URL}/#contact`,
      },
    ],
  };

  const products = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sản phẩm hoa tươi HoangVu Flower",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Hồng Đỏ Ecuador",
          description:
            "Hoa hồng nhập khẩu Ecuador tươi lâu, thân dài, màu đỏ thắm",
          offers: {
            "@type": "Offer",
            price: "85000",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Mẫu Đơn Hồng",
          description: "Peony hồng phấn mềm mại, hương thơm nhẹ nhàng",
          offers: {
            "@type": "Offer",
            price: "120000",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Giỏ Hoa Sinh Nhật",
          description:
            "Giỏ hoa tươi phối theo tone màu yêu cầu, kèm thiệp chúc mừng",
          offers: {
            "@type": "Offer",
            price: "450000",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "HoangVu Flower có giao hoa trong ngày không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có, đặt hàng trước 14h sẽ được giao trong cùng ngày tại khu vực TP.Đà Lạt.",
        },
      },
      {
        "@type": "Question",
        name: "HoangVu Flower có nhận cắm hoa cưới không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có, chúng tôi cung cấp dịch vụ cắm hoa cưới trọn gói bao gồm tư vấn, thiết kế, giao hàng và lắp đặt.",
        },
      },
      {
        "@type": "Question",
        name: "Có thể đăng ký nhận hoa hàng tuần không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có, gói đăng ký hoa hàng tuần bắt đầu từ 250.000 VND/lần giao. Bạn có thể chọn mẫu hoặc để nghệ nhân hoa chọn cho bạn.",
        },
      },
      // {
      //   "@type": "Question",
      //   name: "HoangVu Flower có mở lớp học cắm hoa không?",
      //   acceptedAnswer: {
      //     "@type": "Answer",
      //     text: "Có, chúng tôi thường xuyên tổ chức các buổi workshop cắm hoa với nghệ nhân chuyên nghiệp, phù hợp cho cả cá nhân và teambuilding.",
      //   },
      // },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(products) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
