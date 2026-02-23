"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const services = [
  {
    title: "Đăng Ký Hoa Hàng Tuần",
    description:
      "Nhận một bó hoa tươi thủ công mỗi tuần hoặc hai tuần một lần. Gói bắt đầu từ 250.000 VND/lần giao. Chọn từ các mẫu theo mùa hoặc để nghệ nhân hoa gây bất ngờ cho bạn.",
  },
  {
    title: "Hoa Cưới & Sự Kiện",
    description:
      "Từ lễ cưới thân mật đến tiệc lớn, chúng tôi thiết kế bộ hoa đồng bộ hiện thực hóa tầm nhìn của bạn. Bao gồm tư vấn, thiết kế, giao hàng và lắp đặt.",
  },
  {
    title: "Hợp Tác Doanh Nghiệp",
    description:
      "Nâng tầm văn phòng, sảnh đón hoặc cửa hàng với các tác phẩm hoa luân phiên. Chúng tôi cung cấp hợp đồng linh hoạt và phối hợp với thẩm mỹ thương hiệu của bạn.",
  },
  {
    title: "Lớp Học Cắm Hoa",
    description:
      "Tham gia các buổi workshop thực hành với nghệ nhân hoa chuyên nghiệp. Học thiết kế bó hoa, nghệ thuật hoa khô và làm vòng hoa theo mùa. Lý tưởng cho teambuilding và tiệc riêng.",
  },
  {
    title: "Hoa Chia Buồn & Tưởng Niệm",
    description:
      "Tác phẩm hoa trang trọng, tinh tế để tưởng nhớ người thân. Chúng tôi giao hàng cẩn thận và thiết kế riêng cho các dịp tưởng niệm.",
  },
]

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Dịch Vụ Của Chúng Tôi
            </p>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
              Không Chỉ Là Hoa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-lg">
              Dù bạn cần một bó hoa đơn giản hay thiết kế sự kiện hoàn chỉnh,
              chúng tôi luôn mang cùng đam mê và nghệ thuật vào mỗi dự án.
            </p>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {services.map((service, index) => (
              <div key={service.title} className="py-5">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-serif text-lg text-foreground">
                    {service.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
