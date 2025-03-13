import PriceTitle from '@/checkout/ui/price-title.tsx';
import PaymentForm from '@/checkout/ui/payment-form.tsx';
import OrderDetails from '@/checkout/ui/order-details.tsx';

export const CheckoutFrame = () => {
  return (
    <div className="grid lg:grid-cols-2 max-w-4xl mx-auto">
      <div className="grid gap-6 max-w-md w-full sm:px-3.5 mx-auto">
        <PriceTitle />
        <PaymentForm />
      </div>
      <OrderDetails />
    </div>
  );
};
