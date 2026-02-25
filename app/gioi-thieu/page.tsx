import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Leaf, Heart, Truck, Award, Users, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Gioi Thieu",
  description:
    "Tim hieu ve Hoa Tuoi Hoang Vu - xuong thiet ke hoa nghe thuat tai Da Lat voi hon 10 nam kinh nghiem mang ve dep thien nhien den tan nha ban.",
}

const milestones = [
  {
    year: "2015",
    title: "Khoi Dau",
    description:
      "Bat dau tu mot xuong nho tai Da Lat voi niem dam me hoa tuoi va uoc mo mang ve dep thien nhien den moi nha.",
  },
  {
    year: "2018",
    title: "Mo Rong Dich Vu",
    description:
      "Phat trien them dich vu hoa cuoi, hoa su kien va hop tac doanh nghiep, phuc vu hang tram khach hang moi thang.",
  },
  {
    year: "2021",
    title: "Giao Hoa Toan Thanh Pho",
    description:
      "Ra mat dich vu giao hoa trong ngay toan TP. Da Lat va cac vung lan can, dam bao hoa luon tuoi moi nhat.",
  },
  {
    year: "2024",
    title: "Thuong Hieu Uy Tin",
    description:
      "Tro thanh mot trong nhung thuong hieu hoa tuoi duoc yeu thich nhat tai Da Lat voi hang ngan khach hang than thiet.",
  },
]

const teamMembers = [
  {
    name: "Hoang Vu",
    role: "Nguoi Sang Lap & Nghe Nhan Chinh",
    image: "/images/team-member-1.jpg",
    description:
      "Voi hon 10 nam kinh nghiem, Hoang Vu la nguoi truyen cam hung va dinh huong nghe thuat cho moi tac pham hoa.",
  },
  {
    name: "Minh Tuan",
    role: "Nghe Nhan Hoa",
    image: "/images/team-member-2.jpg",
    description:
      "Chuyen gia thiet ke hoa cuoi va hoa su kien, Minh Tuan mang den su sang tao va tinh te trong tung chi tiet.",
  },
  {
    name: "Thu Ha",
    role: "Quan Ly Cua Hang",
    image: "/images/team-member-3.jpg",
    description:
      "Thu Ha dam bao moi don hang deu duoc xu ly nhanh chong va cham soc khach hang mot cach tan tam nhat.",
  },
]

const stats = [
  { icon: Heart, value: "5,000+", label: "Khach Hang Hai Long" },
  { icon: Truck, value: "10,000+", label: "Don Hoa Da Giao" },
  { icon: Award, value: "10+", label: "Nam Kinh Nghiem" },
  { icon: Users, value: "15+", label: "Nghe Nhan Hoa" },
]

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
              alt="Xuong hoa Hoang Vu"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
                Gioi Thieu
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-tight text-balance">
                Cau Chuyen Hoa Tuoi Hoang Vu
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-lg">
                Hon 10 nam mang ve dep thien nhien den moi nha, chung toi tu hao
                la dia chi tin cay cho moi dip hoa tuoi tai Da Lat.
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
                  Su Menh Cua Chung Toi
                </p>
                <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                  Mang Thien Nhien Vao Cuoc Song
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Hoa Tuoi Hoang Vu ra doi tu niem tin rang moi bong hoa deu mang
                  mot thong diep. Chung toi khong chi ban hoa, ma con truyen tai
                  cam xuc, tinh yeu va su tran trong qua tung canh hoa tuoi.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Moi bo hoa deu duoc nghe nhan cham chut tu tay, tu khau chon
                  hoa tai vuon dia phuong cho den khi giao tan tay ban. Chung toi
                  cam ket mang den nhung bong hoa tuoi nhat, dep nhat voi gia ca
                  hop ly nhat.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    306 Nguyen Tu Luc, Phuong 8, TP. Da Lat, Lam Dong
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
                Hanh Trinh Phat Trien
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Cac Cot Moc Quan Trong
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
                Doi Ngu Cua Chung Toi
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Nhung Nghe Nhan Dam Me
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Moi thanh vien trong doi ngu deu mang trong minh niem dam me voi
                hoa va su tan tam voi khach hang.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
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
            </div>
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
                San Sang Trai Nghiem Hoa Tuoi?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
                Lien he voi chung toi ngay hom nay de duoc tu van va dat hoa cho
                moi dip dac biet cua ban.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-medium text-primary transition-all hover:bg-primary-foreground/90 hover:scale-105"
                >
                  Lien He Ngay
                </Link>
                <Link
                  href="/#collections"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                >
                  Xem Bo Suu Tap
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
