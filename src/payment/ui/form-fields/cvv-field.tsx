import React from 'react';
import { FormLabel, FormMessage } from '@/components/form';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { Lock } from '@/shared/icons';
import { PaymentCardFormValues } from '@/payment/model/use-payment-card-form';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export interface CVVFieldProps {
  field: ControllerRenderProps<PaymentCardFormValues, 'cvv'>;
  fieldState?: ControllerFieldState;
}

export const CVVField = ({ field, fieldState }: CVVFieldProps) => {
  const cvvId = React.useId();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, '');

    rawValue = rawValue.slice(0, 4);

    field.onChange(rawValue);
  };

  return (
    <div className="flex flex-col gap-1 min-w-32">
      <FormLabel htmlFor={cvvId} className="text-gray-600 text-sm font-medium">
        {t('cvv')}
      </FormLabel>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <Lock className="w-4 h-4 stroke-gray-600" />
        </span>

        <input
          id={cvvId}
          autoComplete="cc-csc"
          placeholder="•••"
          inputMode="numeric"
          name={field.name}
          value={field.value || ''}
          onChange={handleChange}
          onBlur={field.onBlur}
          ref={field.ref}
          aria-label="Security code"
          className={clsx(
            'pl-10 rounded-lg px-3 py-2 text-gray-600 focus:outline-none ring ring-gray-300 focus:ring-2 focus:ring-gray-600 transition duration-200 placeholder:text-gray-600 w-full',
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
