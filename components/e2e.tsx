export const formatNumber = (amount: number) =>
  new Intl.NumberFormat("vi-VN", { currency: "VND" }).format(amount);
