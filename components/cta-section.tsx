"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Liên Hệ
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Sẵn Sàng Trải Nghiệm Hoa Tươi?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Đăng ký nhận bản tin để cập nhật cảm hứng theo mùa, ưu đãi độc quyền
            và quyền truy cập sớm các bộ sưu tập mới. Hoặc liên hệ để thảo luận
            về sự kiện tiếp theo của bạn.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-lg bg-primary/10 p-6">
              <p className="font-serif text-lg text-foreground">
                Chào mừng đến với Hoàng Vũ Flower
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {
                  "Chúng tôi sẽ gửi cảm hứng theo mùa và ưu đãi độc quyền đến bạn."
                }
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0 mx-auto max-w-md"
            >
              <label htmlFor="email-input" className="sr-only">
                Địa chỉ email
              </label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                className="flex-1 rounded-full sm:rounded-r-none border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full sm:rounded-l-none bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Đăng Ký
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
