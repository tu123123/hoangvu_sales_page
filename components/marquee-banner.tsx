"use client"

const items = [
  "Bó Hoa Theo Mùa",
  "Hoa Cưới",
  "Sự Kiện Doanh Nghiệp",
  "Giao Hoa Trong Ngày",
  "Thiết Kế Riêng",
  "Hoa Đăng Ký Định Kỳ",
  "Hoa Khô Nghệ Thuật",
  "Lớp Học Cắm Hoa",
]

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-primary py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xs font-medium uppercase tracking-widest text-primary-foreground"
          >
            {item}
            <span className="ml-6 text-primary-foreground/40">{"////"}</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
