import PriceTitle from '@/payment/ui/price-title.tsx';
import PaymentForm from '@/payment/ui/payment-form.tsx';
import OrderDetails from '@/payment/ui/order-details.tsx';
import { usePaymentProcessing } from '@/payment/model/use-payment-processing.tsx';
import SuccessPaymentMessage from '@/payment/ui/success-payment-message.tsx';

export const PaymentFrame = () => {
  const { isSuccess } = usePaymentProcessing();

  if (isSuccess) {
    return <SuccessPaymentMessage />;
  }

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
