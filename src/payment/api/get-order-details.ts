interface OrderDetails {
  title: string;
  price: number;
  currency: string;
  description: string;
  category: string;
  info: string;
}

export const getOrderDetails = async (): Promise<OrderDetails> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Lamel Professional Smart Skin Compact Powder',
        price: 299.99,
        currency: 'UAH',
        description:
          'High-quality compact powder for a flawless matte finish. Suitable for all skin types.',
        category: 'Пудра для лица',
        info: 'Lightweight, long-lasting formula for a smooth complexion.',
      });
    }, 300);
  });
};
