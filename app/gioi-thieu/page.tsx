import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Leaf, Heart, Truck, Award, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới Thiệu - Hoa Tươi Hoàng Vũ Đà Lạt",
  description:
    "Tìm hiểu về Hoa Tươi Hoàng Vũ - xưởng thiết kế hoa nghệ thuật tại Đà Lạt với hơn 10 năm kinh nghiệm mang vẻ đẹp thiên nhiên đến tận nhà bạn.",
  alternates: {
    canonical: "https://hoatuoihoangvu.xyz/gioi-thieu",
  },
  openGraph: {
    title: "Giới Thiệu - Hoa Tươi Hoàng Vũ Đà Lạt",
    description:
      "Hơn 10 năm kinh nghiệm mang vẻ đẹp thiên nhiên Đà Lạt đến tận nhà bạn. Đội ngũ nghệ nhân chuyên nghiệp, tận tâm.",
    url: "https://hoatuoihoangvu.xyz/gioi-thieu",
    type: "website",
  },
};

const milestones = [
  {
    year: "2015",
    title: "Khởi Đầu",
    description:
      "Bắt đầu từ một xưởng nhỏ tại Đà Lạt với niềm đam mê hoa tươi và ước mơ mang vẻ đẹp thiên nhiên đến mọi nhà.",
  },
  {
    year: "2018",
    title: "Mở Rộng Dịch Vụ",
    description:
      "Phát triển thêm dịch vụ hoa cưới, hoa sự kiện và hợp tác doanh nghiệp, phục vụ hàng trăm khách hàng mỗi tháng.",
  },
  {
    year: "2021",
    title: "Giao Hoa Toàn Thành Phố",
    description:
      "Ra mắt dịch vụ giao hoa trong ngày toàn TP. Đà Lạt và các vùng lân cận, đảm bảo hoa luôn tươi mới nhất.",
  },
  {
    year: "2024",
    title: "Thương Hiệu Uy Tín",
    description:
      "Trở thành một trong những thương hiệu hoa tươi được yêu thích nhất tại Đà Lạt với hàng ngàn khách hàng thân thiết.",
  },
];

const teamMembers = [
  {
    name: "Hoàng Vũ",
    role: "Người Sáng Lập & Nghệ Nhân Chính",
    image: "/images/team-member-1.jpg",
    description:
      "Với hơn 10 năm kinh nghiệm, Hoàng Vũ là người truyền cảm hứng và định hướng nghệ thuật cho mọi tác phẩm hoa.",
  },
  {
    name: "Minh Tuấn",
    role: "Nghệ Nhân Hoa",
    image: "/images/team-member-2.jpg",
    description:
      "Chuyên gia thiết kế hoa cưới và hoa sự kiện, Minh Tuấn mang đến sự sáng tạo và tinh tế trong từng chi tiết.",
  },
  {
    name: "Thu Hà",
    role: "Quản Lý Cửa Hàng",
    image: "/images/team-member-3.jpg",
    description:
      "Thu Hà đảm bảo mọi đơn hàng đều được xử lý nhanh chóng và chăm sóc khách hàng một cách tận tâm nhất.",
  },
];

const stats = [
  { icon: Heart, value: "5,000+", label: "Khách Hàng Hài Lòng" },
  { icon: Truck, value: "10,000+", label: "Đơn Hoa Đã Giao" },
  { icon: Award, value: "10+", label: "Năm Kinh Nghiệm" },
  { icon: Users, value: "15+", label: "Nghệ Nhân Hoa" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center pt-20 min-h-[60vh]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/about-hero.jpg"
              alt="Xưởng hoa Hoàng Vũ"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
                Giới Thiệu
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-tight text-balance">
                Câu Chuyện Hoa Tươi Hoàng Vũ
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-lg">
                Hơn 10 năm mang vẻ đẹp thiên nhiên đến mọi nhà, chúng tôi tự hào
                là địa chỉ tin cậy cho mọi dịp hoa tươi tại Đà Lạt.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Sứ Mệnh Của Chúng Tôi
                </p>
                <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                  Mang Thiên Nhiên Vào Cuộc Sống
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Hoa Tươi Hoàng Vũ ra đời từ niềm tin rằng mỗi bông hoa đều
                  mang một thông điệp. Chúng tôi không chỉ bán hoa, mà còn
                  truyền tải cảm xúc, tình yêu và sự trân trọng qua từng cánh
                  hoa tươi.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Mỗi bó hoa đều được nghệ nhân chăm chút từ tay, từ khâu chọn
                  hoa tại vườn địa phương cho đến khi giao tận tay bạn. Chúng
                  tôi cam kết mang đến những bông hoa tươi nhất, đẹp nhất với
                  giá cả hợp lý nhất.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    306 Nguyên Tử Lực, Phường 8, TP. Đà Lạt, Lâm Đồng
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-secondary p-6 text-center"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="mt-4 font-serif text-3xl text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Hành Trình Phát Triển
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Các Cột Mốc Quan Trọng
              </h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative">
                  <div className="rounded-lg bg-card p-6">
                    <span className="font-serif text-4xl text-primary/30">
                      {milestone.year}
                    </span>
                    <h3 className="mt-3 font-serif text-xl text-card-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Đội Ngũ Của Chúng Tôi
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Những Nghệ Nhân Đam Mê
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Mỗi thành viên trong đội ngũ đều mang trong mình niềm đam mê với
                hoa và sự tận tâm với khách hàng.
              </p>
            </div>
            {/* <div className="mt-16 grid gap-8 md:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Values CTA */}
        <section className="bg-primary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <Leaf className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="mt-6 font-serif text-4xl text-primary-foreground md:text-5xl text-balance">
                Sẵn Sàng Trải Nghiệm Hoa Tươi?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
                Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt hoa cho
                mọi dịp đặc biệt của bạn.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-medium text-primary transition-all hover:bg-primary-foreground/90 hover:scale-105"
                >
                  Liên Hệ Ngay
                </Link>
                <Link
                  href="/#collections"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                >
                  Xem Bộ Sưu Tập
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
