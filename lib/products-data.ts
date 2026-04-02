export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Bó Hoa Hồng Đỏ Lãng Mạn",
    price: 350000,
    image: "/images/flower-red-roses.jpg",
    description: "Bó 12 bông hồng đỏ tươi, được thiết kế sang trọng.",
    category: "Bó Hoa Theo Mùa",
  },
  {
    id: "2",
    name: "Bó Hoa Cưới Tươi Xinh",
    price: 650000,
    image: "/images/flower-bridal.jpg",
    description: "Thiết kế đặc biệt cho cô dâu, hoa tươi sắc sảo.",
    category: "Hoa Cưới",
  },
  {
    id: "3",
    name: "Bó Hoa Hỗn Hợp Mùa Xuân",
    price: 400000,
    image: "/images/flower-mixed-spring.jpg",
    description: "Tổng hợp hoa đa sắc, tươi tắn theo mùa.",
    category: "Bó Hoa Theo Mùa",
  },
  {
    id: "4",
    name: "Bó Hoa Tưởng Nhớ",
    price: 450000,
    image: "/images/flower-memorial.jpg",
    description: "Bó hoa trắng tinh khôi dành cho tưởng niệm.",
    category: "Hoa Tang Lễ",
  },
  {
    id: "5",
    name: "Hoa Để Bàn Tiệc Sang Trọng",
    price: 750000,
    image: "/images/flower-table-arrangement.jpg",
    description: "Cắm hoa nghệ thuật dành cho bàn tiệc, sự kiện lớn.",
    category: "Thiết Kế Riêng",
  },
  {
    id: "6",
    name: "Bó Hoa Vàng Rực Rỡ",
    price: 320000,
    image: "/images/flower-yellow-sunflower.jpg",
    description: "Bó hoa vàng tươi sáng, mang lại niềm vui.",
    category: "Bó Hoa Theo Mùa",
  },
  {
    id: "7",
    name: "Bó Hoa Sinh Nhật Ngập Tràn",
    price: 420000,
    image: "/images/flower-birthday.jpg",
    description: "Bó hoa nhiều sắc để chúc mừng sinh nhật.",
    category: "Hoa Sự Kiện",
  },
  {
    id: "8",
    name: "Bó Hoa Khai Trương Rực Rỡ",
    price: 850000,
    image: "/images/flower-opening.jpg",
    description: "Bó hoa lớn, tươi tắn cho khai trương cửa hàng.",
    category: "Hoa Sự Kiện",
  },
  {
    id: "9",
    name: "Hoa Để Bàn Mini Trang Nhã",
    price: 280000,
    image: "/images/flower-mini-table.jpg",
    description: "Hoa để bàn nhỏ gọn, phù hợp văn phòng, phòng khách.",
    category: "Hoa Trang Trí",
  },
  {
    id: "10",
    name: "Bó Hoa Tình Yêu Lãng Mạn",
    price: 500000,
    image: "/images/flower-love.jpg",
    description: "Bó hoa đặc biệt dành tặng người yêu.",
    category: "Bó Hoa Theo Mùa",
  },
  {
    id: "11",
    name: "Bó Hoa Chúc Mừng Ấm Áp",
    price: 380000,
    image: "/images/flower-congratulation.jpg",
    description: "Bó hoa ấm áp dành cho những dip chúc mừng.",
    category: "Hoa Sự Kiện",
  },
  {
    id: "12",
    name: "Hoa Để Bàn Kinh Doanh Sang Trọng",
    price: 920000,
    image: "/images/flower-business-arrangement.jpg",
    description: "Thiết kế hoa nghệ thuật dành cho văn phòng, khách sạn.",
    category: "Thiết Kế Riêng",
  },
];
