import Image from "next/image";
import { Leaf, Truck, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Nguồn Gốc Bền Vững",
    description:
      "Mỗi cành hoa đều được lấy từ các vườn địa phương bền vững, chia sẻ cam kết bảo vệ môi trường.",
  },
  {
    icon: Truck,
    title: "Giao Hoa Trong Ngày",
    description:
      "Đặt hàng trước 14h và nhận hoa tươi trong cùng ngày, được gói tặng đẹp mắt.",
  },
  {
    icon: Heart,
    title: "Thủ Công Mỗi Ngày",
    description:
      "Nghệ nhân hoa của chúng tôi thiết kế từng bó hoa bằng tay mỗi sáng, đảm bảo luôn tươi mới nhất.",
  },
  {
    icon: Sparkles,
    title: "Dịch Vụ Riêng",
    description:
      "Từ đám cưới đến sự kiện doanh nghiệp, chúng tôi tạo ra trải nghiệm hoa độc đáo dành riêng cho bạn.",
  },
];

export function StorySection() {
  return (
    <section id="story" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/florist-workshop.jpg"
              alt="Xưởng hoa của chúng tôi"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Câu Chuyện Của Chúng Tôi
            </p>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
              Bắt Nguồn Từ Đam Mê, Phát Triển Với Mục Đích
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Hoa tươi Hoàng Vũ khởi đầu là một xưởng nhỏ với niềm tin đơn giản:
              hoa phải chân thực như chính vẻ đẹp của chúng. Chúng tôi hợp tác
              trực tiếp với các nhà vườn địa phương để mang đến cho bạn những
              bông hoa tươi nhất, rực rỡ nhất.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ngày nay, đội ngũ nghệ nhân hoa đam mê của chúng tôi thiết kế hàng
              trăm tác phẩm mỗi tuần, mỗi tác phẩm đều được chăm chút với sự tận
              tâm như lần đầu tiên.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div key={item.title} className="rounded-lg bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
