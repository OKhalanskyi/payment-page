import { usePaymentCardForm } from '@/checkout/model/use-payment-card-form';
import { usePaymentProcessing } from '@/checkout/model/use-payment-processing';
import PaymentCardFormFields from '@/checkout/ui/form-fields/payment-card-form-fields.tsx';
import { FormProvider } from 'react-hook-form';

const PaymentForm = () => {
  const form = usePaymentCardForm();

  const {
    onCardPayment,
    // processApplePayment,
    // isProcessing,
    // isSuccess,
    // isError,
    // error,
    // reset,
  } = usePaymentProcessing();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onCardPayment)} className="grid gap-6">
        <PaymentCardFormFields />
        apple pay button
      </form>
    </FormProvider>
  );
};

export default PaymentForm;
