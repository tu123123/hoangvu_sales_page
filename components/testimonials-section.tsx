import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "HoangVu Flower đã biến đám cưới của chúng tôi thành thiên đường hoa. Mỗi tác phẩm đều vượt xa mọi tưởng tượng của tôi.",
    author: "Thanh Mai",
    role: "Cô dâu, Mùa hè 2025",
    rating: 5,
  },
  {
    quote:
      "Năm ngoái chúng tôi chuyển sang dùng hoa của HoangVu Flower cho văn phòng. Chất lượng ổn định, thiết kế luôn mới mẻ và khách hàng liên tục khen ngợi.",
    author: "Minh Tuấn",
    role: "Quản lý văn phòng, Tập đoàn Hưng Phát",
    rating: 5,
  },
  {
    quote:
      "Gói đăng ký hoa hàng tuần là điều tuyệt vời nhất tôi làm cho ngôi nhà. Mỗi thứ hai đều bắt đầu với bó hoa tươi mới trước cửa. Hạnh phúc đơn giản.",
    author: "Ngọc Anh",
    role: "Thành viên đăng ký",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Lời Nhận Xét
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="rounded-lg bg-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-card-foreground">
                  {`"${item.quote}"`}
                </blockquote>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-sm text-card-foreground">
                  {item.author}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
