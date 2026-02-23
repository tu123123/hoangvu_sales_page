import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-flowers.jpg"
          alt="Hoa Tươi Đà Lạt tuyệt đẹp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
            Hoa Tươi Đà Lạt
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-tight text-balance">
            Nơi Thiên Nhiên Gặp Nghệ Thuật
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-lg">
            Bó hoa thủ công được thiết kế từ những bông hoa theo mùa, lấy từ
            vườn địa phương và giao tươi đến tận nhà bạn.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#collections"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              Khám Phá Bộ Sưu Tập
            </Link>
            <Link
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              Câu Chuyện Của Chúng Tôi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
