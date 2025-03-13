import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const paymentCardSchema = z.object({
  cardNumber: z.string({
    required_error: 'Card number is required',
  }),
  cardName: z.string({
    required_error: 'Card name is required',
  }),
  expiryDate: z.string({
    required_error: 'Expiry date is required',
  }),
  cvv: z.string({
    required_error: 'CVV is required',
  }),
});

export type PaymentCardFormValues = z.infer<typeof paymentCardSchema>;

export const usePaymentCardForm = () => {
  return useForm<PaymentCardFormValues>({
    resolver: zodResolver(paymentCardSchema),
  });
};

export const usePaymentCardFormContext = () =>
  useFormContext<PaymentCardFormValues>();
