interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const processCardPayment = async (paymentDetails: PaymentDetails) => {
  return new Promise((resolve) => {
    console.log('Processing payment...', paymentDetails);
    setTimeout(() => {
      resolve({ success: true });
    }, 2000);
  });
};
