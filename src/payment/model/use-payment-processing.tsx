import React from 'react';
import { PaymentCardFormValues } from '../model/use-payment-card-form';

type PaymentContextType = {
  processCardPayment: (data: PaymentCardFormValues) => void;
  processApplePayment: () => void;
  isProcessing: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
  reset: () => void;
  onCardPayment: (data: PaymentCardFormValues) => void;
};

export const PaymentContext = React.createContext<
  PaymentContextType | undefined
>(undefined);

export const usePaymentProcessing = (): PaymentContextType => {
  const context = React.useContext(PaymentContext);
  if (context === undefined) {
    throw new Error(
      'usePaymentProcessing must be used within a PaymentProvider',
    );
  }
  return context;
};
