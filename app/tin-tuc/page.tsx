import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, ArrowRight, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Tin Tuc",
  description:
    "Cap nhat tin tuc moi nhat ve hoa tuoi, meo cam hoa, xu huong hoa va cac su kien tai Hoa Tuoi Hoang Vu Da Lat.",
}

const featuredPost = {
  title: "Bo Suu Tap Hoa Xuan 2026 - Sac Mau Moi Cho Mua Moi",
  excerpt:
    "Kham pha bo suu tap hoa xuan moi nhat cua chung toi voi nhung mau thiet ke doc dao lay cam hung tu thien nhien Da Lat. Tu nhung bo hoa tulip ruc ro den cac tac pham nghe thuat tu hoa anh dao, moi bo hoa deu la mot cau chuyen ve mua xuan.",
  image: "/images/news-1.jpg",
  date: "15/02/2026",
  category: "Bo Suu Tap",
  slug: "#",
}

const posts = [
  {
    title: "Bi Quyet Chon Hoa Cuoi Hoan Hao Cho Ngay Trong Dai",
    excerpt:
      "Huong dan chi tiet cach chon hoa cuoi phu hop voi phong cach, mau sac va khong gian le cuoi cua ban.",
    image: "/images/news-2.jpg",
    date: "08/02/2026",
    category: "Hoa Cuoi",
    slug: "#",
  },
  {
    title: "Khai Giang Lop Hoc Cam Hoa Thang 3 - Dang Ky Ngay",
    excerpt:
      "Tham gia lop hoc cam hoa nghe thuat voi nghe nhan chuyen nghiep. Phu hop cho nguoi moi bat dau va nhung ai muon nang cao ky nang.",
    image: "/images/news-3.jpg",
    date: "01/02/2026",
    category: "Su Kien",
    slug: "#",
  },
  {
    title: "5 Meo Giu Hoa Tuoi Lau Hon Tai Nha",
    excerpt:
      "Nhung bi quyet don gian giup bo hoa cua ban tuoi lau gap doi. Tu cach cat canh, thay nuoc den vi tri dat hoa ly tuong.",
    image: "/images/news-4.jpg",
    date: "25/01/2026",
    category: "Meo Hay",
    slug: "#",
  },
  {
    title: "Hoa Tuoi Cho Van Phong - Xu Huong Trang Tri 2026",
    excerpt:
      "Kham pha cac xu huong trang tri van phong bang hoa tuoi giup tang nang suat va tinh than lam viec cho nhan vien.",
    image: "/images/news-5.jpg",
    date: "18/01/2026",
    category: "Xu Huong",
    slug: "#",
  },
  {
    title: "Nghe Thuat Hoa Kho - Ve Dep Ben Vung",
    excerpt:
      "Tim hieu ve xu huong hoa kho dang duoc yeu thich va cach ket hop hoa kho trong trang tri nha cua ban.",
    image: "/images/news-6.jpg",
    date: "10/01/2026",
    category: "Cam Hung",
    slug: "#",
  },
]

const categories = [
  "Tat Ca",
  "Bo Suu Tap",
  "Hoa Cuoi",
  "Su Kien",
  "Meo Hay",
  "Xu Huong",
  "Cam Hung",
]

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
              alt="Tin tuc va cam hung hoa tuoi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
                Tin Tuc & Cam Hung
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-tight text-balance">
                The Gioi Hoa Tuoi
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-lg">
                Cap nhat nhung tin tuc moi nhat, meo cam hoa, xu huong va cam
                hung tu doi ngu nghe nhan hoa Hoang Vu.
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
            <Link href={featuredPost.slug} className="group grid gap-8 lg:grid-cols-2 lg:gap-12">
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
                  Doc Them
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
                Bai Viet Moi Nhat
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.title}
                  href={post.slug}
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
                      Doc Them
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
                Dang Ky Nhan Tin
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Dung Bo Lo Tin Tuc Moi
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Dang ky nhan ban tin de cap nhat nhung bai viet moi nhat, khuyen
                mai doc quyen va cam hung hoa tuoi moi tuan.
              </p>
              <form className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0 mx-auto max-w-md">
                <label htmlFor="news-email" className="sr-only">
                  Dia chi email
                </label>
                <input
                  id="news-email"
                  type="email"
                  required
                  placeholder="Nhap email cua ban"
                  className="flex-1 rounded-full sm:rounded-r-none border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full sm:rounded-l-none bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Dang Ky
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
