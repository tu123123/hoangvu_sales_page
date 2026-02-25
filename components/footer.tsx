import Link from "next/link";

const footerLinks = {
  "Cửa Hàng": [
    { label: "Bó Hoa Theo Mùa", href: "#" },
    { label: "Hoa Khô", href: "#" },
    { label: "Đăng Ký Định Kỳ", href: "#" },
    { label: "Phiếu Quà Tặng", href: "#" },
  ],
  "Dịch Vụ": [
    { label: "Hoa Cưới", href: "#" },
    { label: "Doanh Nghiệp", href: "#" },
    { label: "Lớp Học", href: "#" },
    { label: "Chia Buồn", href: "#" },
  ],
  "Công Ty": [
    { label: "Câu Chuyện", href: "#story" },
    { label: "Bền Vững", href: "#" },
    { label: "Tuyển Dụng", href: "#" },
    { label: "Báo Chí", href: "#" },
  ],
  "Hỗ Trợ": [
    { label: "Liên Hệ", href: "#contact" },
    { label: "Thông Tin Giao Hàng", href: "#" },
    { label: "Câu Hỏi Thường Gặp", href: "#" },
    { label: "Chính Sách Bảo Mật", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <LeafIcon className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg text-foreground">
                Hoa tươi Hoàng Vũ
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Xưởng thiết kế hoa nghệ thuật mang vẻ đẹp thiên nhiên đến tận nhà
              bạn
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Địc chỉ: 306 Nguyên Tử Lực, Phường 8, Đà Lạt
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
              SĐT: 0977625859 - 0357577926
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground">
                {category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2026 Hoa tươi Hoàng Vũ Bảo lưu mọi quyền."}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Pinterest
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-4 7-9 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
