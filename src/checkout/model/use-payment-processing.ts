import { useMutation } from '@tanstack/react-query';
import { processApplePayment } from '@/checkout/api/process-apple-pay';
import { processCardPayment } from '@/checkout/api/process-card-payment';
import { PaymentCardFormValues } from '@/checkout/model/use-payment-card-form.ts';

export const usePaymentProcessing = () => {
  const cardPaymentMutation = useMutation({
    mutationFn: processCardPayment,
  });

  const applePayMutation = useMutation({
    mutationFn: processApplePayment,
  });

  const onCardPayment = async (data: PaymentCardFormValues) => {
    cardPaymentMutation.mutate(data);
  };

  return {
    processCardPayment: cardPaymentMutation.mutate,
    processApplePayment: applePayMutation.mutate,
    isProcessing: cardPaymentMutation.isPending || applePayMutation.isPending,
    isSuccess: cardPaymentMutation.isSuccess || applePayMutation.isSuccess,
    isError: cardPaymentMutation.isError || applePayMutation.isError,
    error: cardPaymentMutation.error || applePayMutation.error,
    reset: () => {
      cardPaymentMutation.reset();
      applePayMutation.reset();
    },
    onCardPayment,
  };
};
