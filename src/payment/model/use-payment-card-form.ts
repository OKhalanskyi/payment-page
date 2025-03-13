import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import cardValidator from 'card-validator';

const validateCardNumber = (value: string) => {
  const validation = cardValidator.number(value.replace(/\s/g, ''));
  return validation.isValid;
};

const validateExpiryDate = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '');
  const validation = cardValidator.expirationDate(digitsOnly);
  return validation.isValid;
};

const validateCVV = (value: string) => {
  const sanitized = value.replace(/\D/g, '');
  const validation = cardValidator.cvv(sanitized, [3, 4]);
  return validation.isValid;
};

const paymentCardSchema = z.object({
  cardNumber: z
    .string({
      required_error: 'Card number is required',
    })
    .min(1, 'Card number is required')
    .refine(validateCardNumber, 'Please enter a valid card number'),

  expiryDate: z
    .string({
      required_error: 'Expiry date is required',
    })
    .min(1, 'Expiry date is required')
    .refine(
      validateExpiryDate,
      'Please enter a valid expiration date that is not expired',
    ),

  cvv: z
    .string({
      required_error: 'CVV is required',
    })
    .min(1, 'CVV is required')
    .refine(validateCVV, 'Please enter a valid CVV'),
});

export type PaymentCardFormValues = z.infer<typeof paymentCardSchema>;

export const usePaymentCardForm = () => {
  return useForm<PaymentCardFormValues>({
    resolver: zodResolver(paymentCardSchema),
    mode: 'onBlur',
  });
};

export const usePaymentCardFormContext = () =>
  useFormContext<PaymentCardFormValues>();
