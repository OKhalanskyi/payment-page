import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import cardValidator from 'card-validator';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

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

export function buildPaymentCardSchema(t: TFunction) {
  return z.object({
    cardNumber: z
      .string({
        required_error: t('payment_form.errors.cardNumberRequired'),
      })
      .min(1, t('payment_form.errors.cardNumberRequired'))
      .refine(validateCardNumber, t('payment_form.errors.cardNumberInvalid')),

    expiryDate: z
      .string({
        required_error: t('payment_form.errors.expiryRequired'),
      })
      .min(1, t('payment_form.errors.expiryRequired'))
      .refine(validateExpiryDate, t('payment_form.errors.expiryInvalid')),

    cvv: z
      .string({
        required_error: t('payment_form.errors.cvvRequired'),
      })
      .min(1, t('payment_form.errors.cvvRequired'))
      .refine(validateCVV, t('payment_form.errors.cvvInvalid')),
  });
}

export type PaymentCardFormValues = ReturnType<
  typeof buildPaymentCardSchema
>['_type'];

export const usePaymentCardForm = () => {
  const { t } = useTranslation();

  const schema = buildPaymentCardSchema(t);

  return useForm<PaymentCardFormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });
};

export const usePaymentCardFormContext = () =>
  useFormContext<PaymentCardFormValues>();
