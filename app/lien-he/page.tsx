"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa Chỉ",
    details: ["306 Nguyên Tử Lực, Phường 8", "TP. Đà Lạt, Lâm Đồng"],
  },
  {
    icon: Phone,
    title: "Điện Thoại",
    details: ["0977 625 859", "0357 577 926"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hoatuoihoangvu@gmail.com"],
  },
  {
    icon: Clock,
    title: "Giờ Mở Cửa",
    details: ["Thứ 2 - Chủ Nhật: 7:00 - 21:00", "Giao hoa trong ngày trước 14:00"],
  },
]

const faqItems = [
  {
    question: "Thời gian giao hoa là bao lâu?",
    answer:
      "Chúng tôi giao hoa trong ngày với đơn hàng đặt trước 14:00. Đối với đơn hàng gấp, vui lòng gọi trực tiếp để được hỗ trợ.",
  },
  {
    question: "Có thể đặt hoa theo yêu cầu riêng không?",
    answer:
      "Có! Chúng tôi nhận thiết kế hoa theo yêu cầu riêng của bạn. Vui lòng liên hệ sớm ít nhất 1-2 ngày để chúng tôi chuẩn bị tốt nhất.",
  },
  {
    question: "Phạm vi giao hoa ở đâu?",
    answer:
      "Hiện tại chúng tôi giao hoa trong TP. Đà Lạt và các vùng lân cận. Đối với các địa điểm xa hơn, vui lòng liên hệ để biết chi tiết.",
  },
  {
    question: "Phương thức thanh toán như thế nào?",
    answer:
      "Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng và các ví điện tử phổ biến (MoMo, ZaloPay).",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.message) {
      setSubmitted(true)
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" })
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center pt-20 min-h-[50vh]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/contact-hero.jpg"
              alt="Cửa hàng Hoa Tươi Hoàng Vũ"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
                Liên Hệ
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-tight text-balance">
                Kết Nối Với Chúng Tôi
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-lg">
                Bạn có câu hỏi hoặc muốn đặt hoa? Liên hệ với chúng tôi bất cứ
                lúc nào, chúng tôi luôn sẵn sàng hỗ trợ bạn.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-5">
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Thông Tin Liên Hệ
                </p>
                <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                  Chúng Tôi Ở Đây
                </h2>
                <div className="mt-8 flex flex-col gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {info.title}
                        </h3>
                        {info.details.map((detail) => (
                          <p
                            key={detail}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map embed */}
                <div className="mt-8 aspect-[4/3] overflow-hidden rounded-lg border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.310!2d108.438!3d11.946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU2JzQ1LjYiTiAxMDjCsDI2JzE2LjgiRQ!5e0!3m2!1svi!2s!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vị trí Hoa Tươi Hoàng Vũ trên bản đồ"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="rounded-lg bg-secondary p-8 lg:p-10">
                  <h2 className="font-serif text-2xl text-foreground">
                    Gửi Tin Nhắn Cho Chúng Tôi
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Điền vào form bên dưới, chúng tôi sẽ phản hồi trong thời gian
                    sớm nhất.
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                        <Send className="h-6 w-6 text-primary" />
                      </div>
                      <p className="mt-4 font-serif text-lg text-foreground">
                        Cảm ơn bạn đã liên hệ!
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Chúng tôi sẽ phản hồi trong vòng 24 giờ. Nếu cần gấp, vui
                        lòng gọi trực tiếp cho chúng tôi.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-sm font-medium text-primary hover:underline"
                      >
                        Gửi tin nhắn khác
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            Họ và Tên *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Nguyễn Văn A"
                            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground"
                          >
                            Số Điện Thoại *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="0912 345 678"
                            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="email@example.com"
                          className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-foreground"
                        >
                          Chủ Đề
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Chọn chủ đề</option>
                          <option value="order">Đặt Hoa</option>
                          <option value="wedding">Hoa Cưới & Sự Kiện</option>
                          <option value="corporate">Hợp Tác Doanh Nghiệp</option>
                          <option value="class">Lớp Học Cắm Hoa</option>
                          <option value="other">Khác</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Nội Dung *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Cho chúng tôi biết bạn cần gì..."
                          className="mt-2 w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Gửi Tin Nhắn
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Câu Hỏi Thường Gặp
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Bạn Cần Biết Gì?
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-3xl flex flex-col divide-y divide-border">
              {faqItems.map((faq, index) => (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-serif text-lg text-foreground">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaq === index
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
