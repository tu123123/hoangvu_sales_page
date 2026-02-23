"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getData } from "./config";
import { formatNumber } from "./e2e";
import Image from "next/image";
import noimage from "./noimage.svg";

const ITEMS_PER_PAGE = 8;

const retailProducts = [
  {
    name: "Hoa Hồng Nhung",
    description: "Hoa hồng nhung tươi, cánh dày, màu đỏ đậm quyến rũ",
    price: "25.000",
    unit: "cành",
  },
  {
    name: "Hoa Ly Trắng",
    description: "Hoa ly trắng tinh khôi, hương thơm dịu nhẹ",
    price: "45.000",
    unit: "cành",
  },
  {
    name: "Hoa Cúc Họa Mi",
    description: "Hoa cúc họa mi nhỏ xinh, tượng trưng cho sự trong sáng",
    price: "15.000",
    unit: "bó nhỏ",
  },
  {
    name: "Hoa Tulip",
    description: "Hoa tulip nhập khẩu Hà Lan, nhiều màu sắc tươi tắn",
    price: "55.000",
    unit: "cành",
  },
  {
    name: "Hoa Hướng Dương",
    description: "Hoa hướng dương lớn, rực rỡ, mang năng lượng tích cực",
    price: "30.000",
    unit: "cành",
  },
  {
    name: "Hoa Cẩm Chướng",
    description: "Hoa cẩm chướng nhiều màu, bền lâu, ý nghĩa yêu thương",
    price: "18.000",
    unit: "cành",
  },
  {
    name: "Hoa Baby",
    description: "Hoa baby trắng phụ kiện, tạo điểm nhấn nhẹ nhàng",
    price: "20.000",
    unit: "bó nhỏ",
  },
  {
    name: "Hoa Lan Hồ Điệp",
    description: "Lan hồ điệp sang trọng, phù hợp làm quà biếu",
    price: "120.000",
    unit: "cành",
  },
  {
    name: "Hoa Đồng Tiền",
    description: "Hoa đồng tiền nhiều màu, biểu tượng may mắn và thịnh vượng",
    price: "12.000",
    unit: "cành",
  },
  {
    name: "Hoa Cát Tường",
    description: "Hoa cát tường cánh xếp mềm mại, màu pastel thanh nhã",
    price: "35.000",
    unit: "cành",
  },
  {
    name: "Hoa Thạch Thảo",
    description: "Hoa thạch thảo tím nhạt, lãng mạn, thích hợp trang trí",
    price: "22.000",
    unit: "bó nhỏ",
  },
  {
    name: "Hoa Sen",
    description: "Hoa sen tươi mùa hạ, thanh tao, mang ý nghĩa cao quý",
    price: "40.000",
    unit: "bông",
  },
];

const arrangementProducts = [
  {
    name: "Giỏ Hoa Chúc Mừng",
    description:
      "Giỏ hoa tươi phối hợp hồng, ly, cẩm chướng - phù hợp khai trương, sinh nhật",
    price: "350.000",
    unit: "giỏ",
    tag: "Phổ biến",
  },
  {
    name: "Bó Hoa Tình Yêu",
    description:
      "Bó hoa hồng đỏ 20 cành kết hợp baby và lá phụ, gói giấy cao cấp",
    price: "450.000",
    unit: "bó",
    tag: "Yêu thích",
  },
  {
    name: "Hộp Hoa Sang Trọng",
    description:
      "Hộp hoa thiết kế tinh tế với hồng, tulip và phụ kiện nhập khẩu",
    price: "600.000",
    unit: "hộp",
    tag: "Premium",
  },
  {
    name: "Lẵng Hoa Đại",
    description:
      "Lẵng hoa lớn phối đa dạng hoa tươi, lý tưởng cho sự kiện và lễ hội",
    price: "800.000",
    unit: "lẵng",
  },
  {
    name: "Bình Hoa Để Bàn",
    description:
      "Bình hoa nhỏ gọn trang trí bàn tiệc, bàn làm việc với hoa theo mùa",
    price: "250.000",
    unit: "bình",
  },
  {
    name: "Hoa Cưới Cầm Tay",
    description:
      "Bó hoa cưới thiết kế riêng theo yêu cầu, tư vấn phối màu phù hợp",
    price: "500.000",
    unit: "bó",
    tag: "Đặt trước",
  },
  {
    name: "Vòng Hoa Chia Buồn",
    description: "Vòng hoa trang trọng, giao hàng tận nơi nhanh chóng",
    price: "700.000",
    unit: "vòng",
  },
  {
    name: "Set Hoa Trang Trí Tiệc",
    description:
      "Trọn bộ hoa trang trí cho bàn tiệc 10 người gồm bình chính và phụ kiện",
    price: "1.200.000",
    unit: "set",
    tag: "Tiết kiệm",
  },
  {
    name: "Kệ Hoa Khai Trương",
    description: "Kệ hoa 2 tầng rực rỡ, thiết kế bắt mắt cho ngày khai trương",
    price: "1.500.000",
    unit: "kệ",
    tag: "Phổ biến",
  },
  {
    name: "Cổng Hoa Sự Kiện",
    description: "Cổng hoa trang trí sự kiện, đám cưới - thiết kế theo chủ đề",
    price: "3.000.000",
    unit: "cổng",
    tag: "Premium",
  },
  {
    name: "Hoa Xe Cưới",
    description: "Trang trí xe hoa cưới trọn gói, phối hoa tươi sang trọng",
    price: "2.000.000",
    unit: "xe",
    tag: "Đặt trước",
  },
  {
    name: "Bó Hoa Mini",
    description: "Bó hoa nhỏ xinh dành tặng bạn bè, đồng nghiệp ngày thường",
    price: "150.000",
    unit: "bó",
    tag: "Tiết kiệm",
  },
];

type Tab = "retail" | "arrangement";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Phân trang sản phẩm"
      className="mt-10 flex items-center justify-center gap-2"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Trang trước"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages
        .filter((p) => Math.abs(p - currentPage) <= 1)
        .map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            aria-label={`Trang ${page}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
              currentPage === page
                ? "bg-primary text-primary-foreground shadow-sm"
                : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {page}
          </button>
        ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Trang sau"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
interface loaisanphamtype {
  gia: number;
  img: string;
  mota: string;
  id: string;
  ten: string;
}
interface mathangtype {
  gia: number;
  id: string;
  img: string;
  mota: string;
  ten: string;
}
export function PricingSection() {
  const [mathang, setMathang] = useState<mathangtype[]>([]);
  const [loaisanpham, setLoaisanpham] = useState<loaisanphamtype[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("retail");
  const [retailPage, setRetailPage] = useState(1);
  const [arrangementPage, setArrangementPage] = useState(1);

  const retailTotalPages = Math.ceil(mathang.length / ITEMS_PER_PAGE);
  const arrangementTotalPages = Math.ceil(
    arrangementProducts.length / ITEMS_PER_PAGE
  );

  const paginatedRetail = useMemo(() => {
    const start = (retailPage - 1) * ITEMS_PER_PAGE;
    return mathang.slice(start, start + ITEMS_PER_PAGE);
  }, [retailPage, mathang]);

  const paginatedArrangement = useMemo(() => {
    const start = (arrangementPage - 1) * ITEMS_PER_PAGE;
    return loaisanpham.slice(start, start + ITEMS_PER_PAGE);
  }, [arrangementPage, loaisanpham]);

  const handleTabChange = useCallback((tab: Tab) => {
    setActiveTab(tab);
  }, []);

  const handleRetailPage = useCallback((page: number) => {
    setRetailPage(page);
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleArrangementPage = useCallback((page: number) => {
    setArrangementPage(page);
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const currentPage = activeTab === "retail" ? retailPage : arrangementPage;
  const totalPages =
    activeTab === "retail" ? retailTotalPages : arrangementTotalPages;
  const totalItems =
    activeTab === "retail" ? mathang.length : loaisanpham.length;
  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);
  useEffect(() => {
    getData("mathang", (e: mathangtype[]) => {
      setMathang(e);
    });
    getData(
      "loaisanpham",
      (
        e: {
          itemList: loaisanphamtype[];
        }[]
      ) => {
        let arr: loaisanphamtype[] = [];
        for (let i of e) {
          arr = [...arr, ...i.itemList];
        }
        setLoaisanpham(arr);
      }
    );
  }, []);
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Bảng Giá
          </p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Sản Phẩm & Giá Cả
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Chúng tôi cung cấp hoa tươi bán lẻ lẫn dịch vụ cắm hoa chuyên nghiệp
            với mức giá hợp lý nhất.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            <button
              onClick={() => handleTabChange("retail")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                activeTab === "retail"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Hoa Bán Lẻ
            </button>
            <button
              onClick={() => handleTabChange("arrangement")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                activeTab === "arrangement"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Dịch Vụ Cắm Hoa
            </button>
          </div>
        </div>

        {/* Product Count */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Hiển thị {startItem}–{endItem} trong tổng số {totalItems} sản phẩm
        </p>

        {/* Content */}
        <div className="mt-8">
          {activeTab === "retail" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {paginatedRetail.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-md hover:border-primary/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg text-card-foreground">
                      {product.ten}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {/* {product.description} */}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1 border-t border-border pt-4">
                    <span className="text-2xl font-semibold text-foreground">
                      {product.gia > 0 ? formatNumber(product.gia) : ""}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {product.gia > 0 ? "VND" : "Giá liên hệ"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {paginatedArrangement.map((product) => (
                <div
                  key={product.id}
                  className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-md hover:border-primary/30"
                >
                  {/* {"tag" in product && product.tag && (
                    <span className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                      {product.tag}
                    </span>
                  )} */}
                  <h3 className="font-serif text-lg text-card-foreground">
                    {product.ten}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    <Image
                      height={150}
                      width={150}
                      style={{
                        width: "auto",
                      }}
                      src={product.img || noimage}
                      alt=""
                    ></Image>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {product.mota}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1 border-t border-border pt-4">
                    <span className="text-2xl font-semibold text-foreground">
                      {product.gia > 0 ? formatNumber(product.gia) : ""}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {product.gia > 0 ? "VND" : "Giá liên hệ"}
                    </span>
                  </div>
                  {/* <button className="mt-4 w-full rounded-lg bg-primary/10 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                    Liên hệ
                  </button> */}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={activeTab === "retail" ? retailPage : arrangementPage}
          totalPages={
            activeTab === "retail" ? retailTotalPages : arrangementTotalPages
          }
          onPageChange={
            activeTab === "retail" ? handleRetailPage : handleArrangementPage
          }
        />

        {/* Note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          * Giá có thể thay đổi theo mùa và tình trạng nguồn hàng. Liên hệ để
          được báo giá chính xác nhất.
        </p>
      </div>
    </section>
  );
}
