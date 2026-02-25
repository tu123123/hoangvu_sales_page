export interface NewsPost {
  title: string
  excerpt: string
  content: string[]
  image: string
  date: string
  category: string
  slug: string
  author: string
}

export const featuredPost: NewsPost = {
  title: "Bộ Sưu Tập Hoa Xuân 2026 - Sắc Màu Mới Cho Mùa Mới",
  excerpt:
    "Khám phá bộ sưu tập hoa xuân mới nhất của chúng tôi với những mẫu thiết kế độc đáo lấy cảm hứng từ thiên nhiên Đà Lạt. Từ những bó hoa tulip rực rỡ đến các tác phẩm nghệ thuật từ hoa anh đào, mỗi bó hoa đều là một câu chuyện về mùa xuân.",
  content: [
    "Mùa xuân năm nay, Hoa Tươi Hoàng Vũ tự hào giới thiệu bộ sưu tập hoa xuân 2026 với chủ đề \"Sắc Màu Mới Cho Mùa Mới\". Bộ sưu tập lấy cảm hứng từ vẻ đẹp thiên nhiên hoang sơ của Đà Lạt, nơi những cánh đồng hoa rực rỡ khoe sắc dưới nắng xuân ấm áp.",
    "Điểm nhấn của bộ sưu tập là sự kết hợp tinh tế giữa các loại hoa tulip Hà Lan nhập khẩu và hoa anh đào Nhật Bản, tạo nên những tác phẩm hoa mang đậm chất nghệ thuật. Mỗi bó hoa đều được các nghệ nhân chăm chút từng chi tiết, từ cách chọn hoa, phối màu đến cách bó và trang trí.",
    "Bộ sưu tập gồm 12 mẫu thiết kế mới, chia thành 3 dòng chính: Xuân Thì (hoa pastel nhẹ nhàng), Xuân Sắc (hoa rực rỡ sống động) và Xuân Tình (hoa lãng mạn dành cho các cặp đôi). Mỗi dòng đều có từ 3-5 mẫu với các mức giá khác nhau, phù hợp với mọi nhu cầu.",
    "Đặc biệt, trong dịp ra mắt bộ sưu tập, chúng tôi dành tặng ưu đãi giảm 15% cho tất cả đơn hàng đặt trước ngày 15/03/2026. Hãy đến cửa hàng hoặc liên hệ qua hotline để được tư vấn và đặt hoa nhé!",
  ],
  image: "/images/news-1.jpg",
  date: "15/02/2026",
  category: "Bộ Sưu Tập",
  slug: "bo-suu-tap-hoa-xuan-2026",
  author: "Hoàng Vũ",
}

export const posts: NewsPost[] = [
  {
    title: "Bí Quyết Chọn Hoa Cưới Hoàn Hảo Cho Ngày Trọng Đại",
    excerpt:
      "Hướng dẫn chi tiết cách chọn hoa cưới phù hợp với phong cách, màu sắc và không gian lễ cưới của bạn.",
    content: [
      "Ngày cưới là một trong những ngày quan trọng nhất trong cuộc đời, và hoa cưới đóng vai trò không thể thiếu trong việc tạo nên không khí lãng mạn, trang trọng cho buổi lễ. Tuy nhiên, việc chọn hoa cưới không đơn giản chỉ là chọn loại hoa mình thích.",
      "Đầu tiên, hãy xác định phong cách cưới của bạn. Nếu bạn chọn phong cách cổ điển, hoa hồng, mẫu đơn và lily là lựa chọn hoàn hảo. Với phong cách rustic, hãy thử các loại hoa đồng nội như lavender, cúc họa mi và lá xanh tự nhiên. Phong cách hiện đại thì phù hợp với hoa lan, tulip và các loại hoa nhiệt đới.",
      "Thứ hai, cần chú ý đến màu sắc tổng thể của buổi lễ. Hoa cưới nên hài hòa với màu váy cưới, màu trang trí hội trường và tone màu chung của bữa tiệc. Một mẹo nhỏ là luôn có một màu chủ đạo và 1-2 màu phụ để tạo điểm nhấn.",
      "Cuối cùng, đừng quên yếu tố mùa. Hoa theo mùa không chỉ tươi hơn, đẹp hơn mà còn có giá thành hợp lý hơn. Tại Đà Lạt, chúng tôi may mắn có khí hậu phù hợp cho nhiều loại hoa quanh năm. Liên hệ với Hoa Tươi Hoàng Vũ để được tư vấn miễn phí về hoa cưới nhé!",
    ],
    image: "/images/news-2.jpg",
    date: "08/02/2026",
    category: "Hoa Cưới",
    slug: "bi-quyet-chon-hoa-cuoi-hoan-hao",
    author: "Minh Tuấn",
  },
  {
    title: "Khai Giảng Lớp Học Cắm Hoa Tháng 3 - Đăng Ký Ngay",
    excerpt:
      "Tham gia lớp học cắm hoa nghệ thuật với nghệ nhân chuyên nghiệp. Phù hợp cho người mới bắt đầu và những ai muốn nâng cao kỹ năng.",
    content: [
      "Hoa Tươi Hoàng Vũ hân hạnh thông báo khai giảng khóa học cắm hoa nghệ thuật tháng 3/2026. Đây là khóa học được thiết kế dành cho tất cả mọi người, từ người mới bắt đầu đến những ai đã có kinh nghiệm muốn nâng cao kỹ năng.",
      "Khóa học kéo dài 4 buổi, mỗi buổi 2.5 giờ, diễn ra vào các ngày thứ Bảy hàng tuần. Trong khóa học, bạn sẽ được học các kỹ thuật cắm hoa cơ bản đến nâng cao, bao gồm: cách chọn hoa và xử lý hoa tươi, nguyên tắc phối màu trong cắm hoa, các kiểu cắm hoa phổ biến (tròn, tam giác, tự do), và kỹ thuật bó hoa tặng.",
      "Mỗi học viên sẽ được cung cấp đầy đủ dụng cụ và hoa tươi trong suốt khóa học. Sau khi hoàn thành, bạn sẽ nhận được chứng chỉ hoàn thành khóa học từ Hoa Tươi Hoàng Vũ.",
      "Học phí: 1.500.000 VNĐ/khóa (đã bao gồm vật liệu). Ưu đãi giảm 10% cho nhóm 3 người trở lên. Số lượng có hạn, chỉ 12 học viên/lớp. Đăng ký ngay hôm nay để đảm bảo suất tham gia!",
    ],
    image: "/images/news-3.jpg",
    date: "01/02/2026",
    category: "Sự Kiện",
    slug: "khai-giang-lop-hoc-cam-hoa-thang-3",
    author: "Thu Hà",
  },
  {
    title: "5 Mẹo Giữ Hoa Tươi Lâu Hơn Tại Nhà",
    excerpt:
      "Những bí quyết đơn giản giúp bó hoa của bạn tươi lâu gấp đôi. Từ cách cắt cành, thay nước đến vị trí đặt hoa lý tưởng.",
    content: [
      "Bạn vừa nhận được một bó hoa tươi thật đẹp và muốn giữ nó tươi lâu nhất có thể? Dưới đây là 5 mẹo đơn giản nhưng hiệu quả mà các nghệ nhân Hoa Tươi Hoàng Vũ chia sẻ.",
      "Mẹo 1: Cắt gốc hoa đúng cách. Khi nhận hoa, hãy cắt chéo 45 độ phần gốc cành khoảng 2-3cm bằng kéo sắc. Việc cắt chéo giúp tăng diện tích tiếp xúc với nước, giúp hoa hút nước tốt hơn. Lặp lại mỗi 2 ngày.",
      "Mẹo 2: Thay nước thường xuyên. Thay nước sạch cho bình hoa mỗi ngày hoặc ít nhất mỗi 2 ngày. Nước ấm (không nóng) giúp hoa hút nước tốt hơn nước lạnh. Thêm một chút đường hoặc nước chanh vào nước để cung cấp dưỡng chất cho hoa.",
      "Mẹo 3: Đặt hoa ở nơi thoáng mát. Tránh đặt hoa gần cửa sổ có ánh nắng trực tiếp, gần điều hòa hoặc quạt gió mạnh. Nhiệt độ lý tưởng là 18-22 độ C. Mẹo 4: Loại bỏ lá dưới nước. Lá ngâm trong nước sẽ sinh vi khuẩn, làm nước bẩn nhanh. Mẹo 5: Tránh đặt gần trái cây. Trái cây chín tỏa ra khí ethylene, làm hoa héo nhanh hơn.",
    ],
    image: "/images/news-4.jpg",
    date: "25/01/2026",
    category: "Mẹo Hay",
    slug: "5-meo-giu-hoa-tuoi-lau-hon",
    author: "Hoàng Vũ",
  },
  {
    title: "Hoa Tươi Cho Văn Phòng - Xu Hướng Trang Trí 2026",
    excerpt:
      "Khám phá các xu hướng trang trí văn phòng bằng hoa tươi giúp tăng năng suất và tinh thần làm việc cho nhân viên.",
    content: [
      "Trong năm 2026, xu hướng trang trí văn phòng bằng hoa tươi ngày càng phổ biến khi các doanh nghiệp nhận ra lợi ích tuyệt vời mà hoa mang lại cho không gian làm việc. Nghiên cứu cho thấy hoa tươi trong văn phòng có thể tăng năng suất làm việc lên 15% và giảm stress đáng kể.",
      "Xu hướng nổi bật nhất năm nay là phong cách \"Biophilic Office\" - kết hợp hoa tươi với cây xanh để tạo nên không gian làm việc gần gũi với thiên nhiên. Những bình hoa nhỏ đặt trên bàn làm việc, kệ sách hoặc quầy lễ tân đều tạo ra điểm nhấn thú vị.",
      "Một xu hướng khác đang được ưa chuộng là dịch vụ đặt hoa định kỳ cho văn phòng. Mỗi tuần hoặc mỗi tháng, một bó hoa mới sẽ được giao đến văn phòng, giúp không gian luôn tươi mới và nhân viên luôn có nguồn cảm hứng mới.",
      "Hoa Tươi Hoàng Vũ hiện cung cấp gói dịch vụ hoa văn phòng với giá từ 300.000 VNĐ/tuần. Chúng tôi sẽ tư vấn loại hoa phù hợp với không gian và phong cách văn phòng của bạn. Liên hệ ngay để nhận báo giá chi tiết!",
    ],
    image: "/images/news-5.jpg",
    date: "18/01/2026",
    category: "Xu Hướng",
    slug: "hoa-tuoi-cho-van-phong-xu-huong-2026",
    author: "Thu Hà",
  },
  {
    title: "Nghệ Thuật Hoa Khô - Vẻ Đẹp Bền Vững",
    excerpt:
      "Tìm hiểu về xu hướng hoa khô đang được yêu thích và cách kết hợp hoa khô trong trang trí nhà cửa của bạn.",
    content: [
      "Hoa khô đang trở thành xu hướng trang trí được yêu thích không chỉ vì vẻ đẹp vintage đặc trưng mà còn vì tính bền vững và tiện dụng. Khác với hoa tươi chỉ giữ được vài ngày đến một tuần, hoa khô có thể trang trí nhà cửa trong nhiều tháng, thậm chí nhiều năm.",
      "Tại Hoa Tươi Hoàng Vũ, chúng tôi sử dụng kỹ thuật sấy khô tự nhiên, giữ nguyên hình dáng và phần lớn màu sắc của hoa. Các loại hoa phổ biến để làm hoa khô bao gồm: hoa hồng, lavender, baby breath (hoa baby), hoa cúc, và các loại lá xanh.",
      "Cách trang trí hoa khô rất đa dạng: bạn có thể đặt trong bình thủy tinh, treo trên tường dạng vòng hoa (wreath), hoặc kết hợp với nến và phụ kiện vintage để tạo góc trang trí ấn tượng. Hoa khô đặc biệt phù hợp với phong cách nội thất Bohemian, Rustic và Scandinavian.",
      "Hiện tại, Hoa Tươi Hoàng Vũ đang có chương trình khuyến mãi đặc biệt: mua 2 tặng 1 cho tất cả sản phẩm hoa khô. Hãy ghé cửa hàng hoặc đặt hàng online để sở hữu những tác phẩm hoa khô nghệ thuật nhé!",
    ],
    image: "/images/news-6.jpg",
    date: "10/01/2026",
    category: "Cảm Hứng",
    slug: "nghe-thuat-hoa-kho-ve-dep-ben-vung",
    author: "Minh Tuấn",
  },
]

export const categories = [
  "Tất Cả",
  "Bộ Sưu Tập",
  "Hoa Cưới",
  "Sự Kiện",
  "Mẹo Hay",
  "Xu Hướng",
  "Cảm Hứng",
]

export function getPostBySlug(slug: string): NewsPost | undefined {
  if (featuredPost.slug === slug) return featuredPost
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return [featuredPost.slug, ...posts.map((post) => post.slug)]
}
