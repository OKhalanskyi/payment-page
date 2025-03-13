import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { processCardPayment } from '@/payment/api/process-card-payment.ts';
import { processApplePayment } from '@/payment/api/process-apple-pay.ts';
import { PaymentCardFormValues } from '@/payment/model/use-payment-card-form.ts';
import { PaymentContext } from '../model/use-payment-processing';

export const PaymentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const cardPaymentMutation = useMutation({
    mutationFn: processCardPayment,
    onSuccess: () => {
      setIsSuccess(true);
    },
  });

  const applePayMutation = useMutation({
    mutationFn: processApplePayment,
    onSuccess: () => {
      setIsSuccess(true);
    },
  });

  const onCardPayment = async (data: PaymentCardFormValues) => {
    cardPaymentMutation.mutate(data);
  };

  const reset = () => {
    setIsSuccess(false);
    cardPaymentMutation.reset();
    applePayMutation.reset();
  };

  const value = {
    processCardPayment: cardPaymentMutation.mutate,
    processApplePayment: applePayMutation.mutate,
    isProcessing: cardPaymentMutation.isPending || applePayMutation.isPending,
    isSuccess,
    isError: cardPaymentMutation.isError || applePayMutation.isError,
    error: cardPaymentMutation.error || applePayMutation.error,
    reset,
    onCardPayment,
  };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};
