import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import { featuredPost, posts, categories } from "@/lib/news-data"

export const metadata: Metadata = {
  title: "Tin Tức - Hoa Tươi Hoàng Vũ Đà Lạt",
  description:
    "Cập nhật tin tức mới nhất về hoa tươi, mẹo cắm hoa, xu hướng hoa và các sự kiện tại Hoa Tươi Hoàng Vũ Đà Lạt.",
  alternates: {
    canonical: "https://hoatuoihoangvu.xyz/tin-tuc",
  },
  openGraph: {
    title: "Tin Tức - Hoa Tươi Hoàng Vũ Đà Lạt",
    description:
      "Cập nhật tin tức, mẹo cắm hoa, xu hướng và các sự kiện mới nhất từ Hoa Tươi Hoàng Vũ.",
    url: "https://hoatuoihoangvu.xyz/tin-tuc",
    type: "website",
  },
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center pt-20 min-h-[50vh]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/news-hero.jpg"
              alt="Tin tức và cảm hứng hoa tươi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
                Tin Tức & Cảm Hứng
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-tight text-balance">
                Thế Giới Hoa Tươi
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-lg">
                Cập nhật những tin tức mới nhất, mẹo cắm hoa, xu hướng và cảm
                hứng từ đội ngũ nghệ nhân hoa Hoàng Vũ.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`shrink-0 text-sm font-medium transition-colors ${
                    index === 0
                      ? "text-foreground border-b-2 border-primary pb-3"
                      : "text-muted-foreground hover:text-foreground pb-3"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href={`/tin-tuc/${featuredPost.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    <Tag className="h-3 w-3" />
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Đọc Thêm
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-3xl text-foreground">
                Bài Viết Mới Nhất
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.title}
                  href={`/tin-tuc/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg bg-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <h3 className="mt-2 font-serif text-lg text-card-foreground group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Đọc Thêm
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Đăng Ký Nhận Tin
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Đừng Bỏ Lỡ Tin Tức Mới
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Đăng ký nhận bản tin để cập nhật những bài viết mới nhất, khuyến
                mãi độc quyền và cảm hứng hoa tươi mỗi tuần.
              </p>
              <form className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0 mx-auto max-w-md">
                <label htmlFor="news-email" className="sr-only">
                  Địa chỉ email
                </label>
                <input
                  id="news-email"
                  type="email"
                  required
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
