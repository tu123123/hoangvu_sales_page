import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, ArrowLeft, ArrowRight, Tag, User } from "lucide-react"
import { getPostBySlug, getAllSlugs, posts, featuredPost } from "@/lib/news-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Không tìm thấy bài viết" }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = [featuredPost, ...posts]
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Image */}
        <section className="relative pt-20 min-h-[50vh] flex items-end">
          <div className="absolute inset-0 -z-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-sm text-primary-foreground/70">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
              </div>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-primary-foreground md:text-6xl md:leading-tight text-balance">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">
                    {post.author}
                  </p>
                  <p className="text-xs text-primary-foreground/70">
                    Hoa Tươi Hoàng Vũ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              {/* Excerpt */}
              <p className="text-lg leading-relaxed text-foreground font-medium">
                {post.excerpt}
              </p>
              <hr className="my-8 border-border" />

              {/* Body */}
              <div className="flex flex-col gap-6">
                {post.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share / CTA */}
              <div className="mt-12 rounded-lg bg-secondary p-8 text-center">
                <p className="font-serif text-2xl text-foreground text-balance">
                  Bạn quan tâm đến dịch vụ hoa tươi?
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Liên hệ ngay với chúng tôi để được tư vấn miễn phí.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Liên Hệ Ngay
                  </Link>
                  <Link
                    href="tel:0977625859"
                    className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    Gọi 0977 625 859
                  </Link>
                </div>
              </div>

              {/* Back to list */}
              <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                <Link
                  href="/tin-tuc"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Quay Lại Tin Tức
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground">
              Bài Viết Liên Quan
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/tin-tuc/${related.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg bg-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {related.date}
                    </div>
                    <h3 className="mt-2 font-serif text-lg text-card-foreground group-hover:text-primary transition-colors text-balance">
                      {related.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {related.excerpt}
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
      </main>
      <Footer />
    </>
  )
}
