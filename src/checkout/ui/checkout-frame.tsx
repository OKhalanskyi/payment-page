import PriceTitle from '@/checkout/ui/price-title.tsx';
import PaymentForm from '@/checkout/ui/payment-form.tsx';
import OrderDetails from '@/checkout/ui/order-details.tsx';

export const CheckoutFrame = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-4xl px-3 mx-auto">
      <div className="grid gap-6 max-w-md px-3.5 lg:px-0 w-full mx-auto">
        <PriceTitle />
        <PaymentForm />
      </div>
      <OrderDetails />
    </div>
  );
};
