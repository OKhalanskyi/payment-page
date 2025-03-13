import React from 'react';
import cardValidator from 'card-validator';
import { FormLabel, FormMessage } from '@/components/form';
import { CreditCard } from '@/shared/icons';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { PaymentCardFormValues } from '@/payment/model/use-payment-card-form.ts';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export interface CardNumberFieldProps {
  field: ControllerRenderProps<PaymentCardFormValues, 'cardNumber'>;
  fieldState?: ControllerFieldState;
}

export const CardNumberField = ({
  field,
  fieldState,
}: CardNumberFieldProps) => {
  const [cardType, setCardType] = React.useState<string | null>(null);
  const cardNumberId = React.useId();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, '');
    rawValue = rawValue.slice(0, 19);

    const validation = cardValidator.number(rawValue);

    if (validation.card) {
      setCardType(validation.card.type);
    } else {
      setCardType(null);
    }

    const parts = rawValue.match(/.{1,4}/g) || [];
    const formattedValue = parts.join(' ');

    field.onChange(formattedValue);
  };

  return (
    <div className="flex flex-col gap-1">
      <FormLabel
        htmlFor={cardNumberId}
        className="text-gray-600 text-sm font-medium"
      >
        {t('card_number')}
      </FormLabel>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <CreditCard className="w-4 h-4 fill-gray-600" />
        </span>

        <input
          id={cardNumberId}
          autoComplete="cc-number"
          placeholder="1234 1234 1234 1234"
          inputMode="numeric"
          name={field.name}
          value={field.value || ''}
          onChange={handleChange}
          onBlur={field.onBlur}
          ref={field.ref}
          className={clsx(
            'pl-10 rounded-lg px-3 py-2 text-gray-600 focus:outline-none ring ring-gray-300 focus:ring-2 focus:ring-gray-600 transition duration-200 w-full',
            {
              'ring-2 ring-red-500 focus:ring-red-500': Boolean(
                fieldState?.error,
              ),
            },
          )}
        />

        {cardType && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm px-2 py-1 bg-gray-200 rounded-lg">
            {cardType}
          </div>
        )}
      </div>
      <FormMessage />
    </div>
  );
};
