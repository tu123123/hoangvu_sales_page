import Image from "next/image"

const collections = [
  {
    title: "Bó Hoa Theo Mùa",
    description:
      "Hoa tươi theo mùa được tuyển chọn hàng tuần từ vườn địa phương. Mỗi bó hoa kể câu chuyện của mùa hiện tại.",
    image: "/images/bouquet-seasonal.jpg",
    tag: "Bán Chạy",
  },
  {
    title: "Hoa Trang Trí Bàn",
    description:
      "Hoa để bàn sang trọng được thiết kế để làm đẹp mọi không gian. Phù hợp cho tiệc tối, sự kiện và trang trí hàng ngày.",
    image: "/images/arrangement-table.jpg",
    tag: "Mới",
  },
  {
    title: "Thiết Kế Riêng",
    description:
      "Làm việc trực tiếp với nghệ nhân hoa trưởng để tạo ra những tác phẩm độc nhất theo ý tưởng của bạn.",
    image: "/images/florist-workshop.jpg",
    tag: "Cao Cấp",
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Bộ Sưu Tập
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Tỉ Mỉ Từng Cánh Hoa, Gửi Gắm Yêu Thương
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-lg">
            Mỗi tác phẩm đều được thiết kế chu đáo với những bông hoa tươi nhất 
            theo mùa từ vườn địa phương đáng tin cậy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {collections.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
