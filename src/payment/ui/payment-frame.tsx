import PriceTitle from '@/payment/ui/price-title';
import PaymentForm from '@/payment/ui/payment-form';
import OrderDetails from '@/payment/ui/order-details';
import { usePaymentProcessing } from '@/payment/model/use-payment-processing';
import SuccessPaymentMessage from '@/payment/ui/success-payment-message';

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
