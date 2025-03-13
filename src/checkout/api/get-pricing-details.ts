interface PricingDetails {
  trialDays: number;
  price: number;
  currency: string;
  billingCycle: number;
}

export const getPricingDetails = async (): Promise<PricingDetails> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        trialDays: 5,
        price: 299.99,
        currency: 'UAH',
        billingCycle: 14,
      });
    }, 300);
  });
};
