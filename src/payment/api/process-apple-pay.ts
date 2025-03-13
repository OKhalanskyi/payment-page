export const processApplePayment = async () => {
  return new Promise((resolve) => {
    console.log('Processing Apple Pay payment');
    setTimeout(() => {
      resolve({ success: true });
    }, 1300);
  });
};
