"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { products } from "@/lib/products-data";
import imgdefault from './default.jpg'
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { getData } from "@/components/config";
import { Input } from "@/components/ui/input";
interface mathangtype {
  gia: number;
  id: string;
  img: string;
  mota: string;
  ten: string;
}
const categories = [
  "Tất Cả",
  "Hoa",
  "Phụ liệu cắm hoa",
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");
  const [search,setSearch]=useState('')
 const [mathang, setMathang] = useState<mathangtype[]>([]);
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Tất Cả") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " ₫";
  };
 useEffect(()=>{
   getData("mathang", (e: mathangtype[]) => {
      setMathang(e.sort((a, b) => a.ten.localeCompare(b.ten, 'vi')));
    });
 },[])
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Thực Đơn Sản Phẩm
            </p>
            <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
              Danh Sách Hoa Tươi
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl">
              Khám phá bộ sưu tập hoa tươi đa dạng của chúng tôi. Mỗi sản phẩm được chọn lựa 
              kỹ lưỡng để mang đến vẻ đẹp tự nhiên và tươi mới nhất cho bạn.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              <Input  onChange={(e)=>{
                setSearch(e.target.value)
              }} placeholder="Tìm kiếm..."></Input>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mathang.filter((e)=>e.ten?.toLowerCase().includes(search?.toLowerCase())).map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.img||imgdefault}
                    alt={product.ten}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                     {"Phổ Biến"}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-serif text-lg text-foreground leading-snug group-hover:text-primary transition-colors">
                      {product.ten}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {product.mota}
                    </p>
                  </div>

                  {/* Price and Button */}
                  <div className="mt-5 flex items-end justify-between gap-3">
                    
                    <div className="text-xl font-serif text-primary font-semibold">
                      {formatPrice(product.gia)} <span style={{
                        fontSize:'15px'
                      }}>
                         (giá tham khảo)
                      </span>
                    </div>
                    
                    <Link
                      href="/lien-he"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:scale-95"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span className="hidden sm:inline">Đặt</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Không có sản phẩm trong danh mục này
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 rounded-lg border border-border bg-card p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl text-foreground mb-3">
              Không Tìm Thấy Sản Phẩm Phù Hợp?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Chúng tôi cung cấp dịch vụ thiết kế hoa riêng theo nhu cầu của bạn. 
              Hãy liên hệ với chúng tôi để tạo ra tác phẩm độc nhất.
            </p>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Thiết Kế Riêng
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
