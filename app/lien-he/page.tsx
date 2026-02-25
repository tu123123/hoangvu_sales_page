"use client"

import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dia Chi",
    details: ["306 Nguyen Tu Luc, Phuong 8", "TP. Da Lat, Lam Dong"],
  },
  {
    icon: Phone,
    title: "Dien Thoai",
    details: ["0977 625 859", "0357 577 926"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hoatuoihoangvu@gmail.com"],
  },
  {
    icon: Clock,
    title: "Gio Mo Cua",
    details: ["Thu 2 - Chu Nhat: 7:00 - 21:00", "Giao hoa trong ngay truoc 14:00"],
  },
]

const faqItems = [
  {
    question: "Thoi gian giao hoa la bao lau?",
    answer:
      "Chung toi giao hoa trong ngay voi don hang dat truoc 14:00. Doi voi don hang gap, vui long goi truc tiep de duoc ho tro.",
  },
  {
    question: "Co the dat hoa theo yeu cau rieng khong?",
    answer:
      "Co! Chung toi nhan thiet ke hoa theo yeu cau rieng cua ban. Vui long lien he som it nhat 1-2 ngay de chung toi chuan bi tot nhat.",
  },
  {
    question: "Pham vi giao hoa o dau?",
    answer:
      "Hien tai chung toi giao hoa trong TP. Da Lat va cac vung lan can. Doi voi cac dia diem xa hon, vui long lien he de biet chi tiet.",
  },
  {
    question: "Phuong thuc thanh toan nhu the nao?",
    answer:
      "Chung toi chap nhan thanh toan bang tien mat, chuyen khoan ngan hang va cac vi dien tu pho bien (MoMo, ZaloPay).",
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
              alt="Cua hang Hoa Tuoi Hoang Vu"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
                Lien He
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-tight text-balance">
                Ket Noi Voi Chung Toi
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-lg">
                Ban co cau hoi hoac muon dat hoa? Lien he voi chung toi bat cu
                luc nao, chung toi luon san sang ho tro ban.
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
                  Thong Tin Lien He
                </p>
                <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                  Chung Toi O Day
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
                    title="Vi tri Hoa Tuoi Hoang Vu tren ban do"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="rounded-lg bg-secondary p-8 lg:p-10">
                  <h2 className="font-serif text-2xl text-foreground">
                    Gui Tin Nhan Cho Chung Toi
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Dien vao form ben duoi, chung toi se phan hoi trong thoi gian
                    som nhat.
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                        <Send className="h-6 w-6 text-primary" />
                      </div>
                      <p className="mt-4 font-serif text-lg text-foreground">
                        Cam on ban da lien he!
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Chung toi se phan hoi trong vong 24 gio. Neu can gap, vui
                        long goi truc tiep cho chung toi.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-sm font-medium text-primary hover:underline"
                      >
                        Gui tin nhan khac
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
                            Ho va Ten *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Nguyen Van A"
                            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground"
                          >
                            So Dien Thoai *
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
                          Chu De
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Chon chu de</option>
                          <option value="order">Dat Hoa</option>
                          <option value="wedding">Hoa Cuoi & Su Kien</option>
                          <option value="corporate">Hop Tac Doanh Nghiep</option>
                          <option value="class">Lop Hoc Cam Hoa</option>
                          <option value="other">Khac</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Noi Dung *
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
                          placeholder="Cho chung toi biet ban can gi..."
                          className="mt-2 w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Gui Tin Nhan
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
                Cau Hoi Thuong Gap
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Ban Can Biet Gi?
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
