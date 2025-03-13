import PriceTitle from '@/checkout/ui/price-title.tsx';
import PaymentForm from '@/checkout/ui/payment-form.tsx';
import OrderDetails from '@/checkout/ui/order-details.tsx';

export const CheckoutFrame = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="grid gap-6">
        <PriceTitle />
        <PaymentForm />
      </div>
      <OrderDetails />
    </div>
  );
};
