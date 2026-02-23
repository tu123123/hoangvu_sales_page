const stats = [
  { value: "15.000+", label: "Bó Hoa Đã Giao" },
  { value: "98%", label: "Khách Hàng Hài Lòng" },
  { value: "120+", label: "Đám Cưới Hợp Tác" },
  { value: "7", label: "Năm Hoạt Động" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
