import React from 'react';
import { FormLabel, FormMessage } from '@/components/form';
import { Calendar } from '@/shared/icons';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { PaymentCardFormValues } from '@/payment/model/use-payment-card-form';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export interface ExpiryDateFieldProps {
  field: ControllerRenderProps<PaymentCardFormValues, 'expiryDate'>;
  fieldState?: ControllerFieldState;
}

export const ExpiryDateField = ({
  field,
  fieldState,
}: ExpiryDateFieldProps) => {
  const { t, i18n } = useTranslation();

  const expiryDateId = React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, '');

    rawValue = rawValue.slice(0, 4);

    let formatted = rawValue;
    if (rawValue.length >= 3) {
      formatted = `${rawValue.slice(0, 2)} / ${rawValue.slice(2)}`;
    }

    field.onChange(formatted);
  };

  return (
    <div className="flex flex-col min-w-32 gap-1">
      <FormLabel
        htmlFor={expiryDateId}
        className="text-gray-600 text-sm font-medium"
      >
        {t('expiration_date')}
      </FormLabel>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <Calendar className="w-4 h-4 stroke-gray-500 " />
        </span>
        <input
          id={expiryDateId}
          autoComplete="cc-exp"
          placeholder={i18n.language === 'en' ? 'MM / YY' : 'ММ / РР'}
          inputMode="numeric"
          name={field.name}
          value={field.value || ''}
          onChange={handleChange}
          onBlur={field.onBlur}
          ref={field.ref}
          className={clsx(
            'pl-10 w-full rounded-lg px-3 py-2 text-gray-600 focus:outline-none ring ring-gray-300 focus:ring-2 focus:ring-gray-600  transition duration-200 placeholder:text-gray-400',
            {
              'ring-2 ring-red-500 focus:ring-red-500': Boolean(
                fieldState?.error,
              ),
            },
          )}
        />
      </div>

      <FormMessage />
    </div>
  );
};
