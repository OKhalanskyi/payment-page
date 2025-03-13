import React from 'react';
import cardValidator from 'card-validator';
import { FormLabel, FormMessage } from '@/components/form';
import { Calendar } from '@/shared/icons';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

export interface ExpiryDateFieldProps {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState?: ControllerFieldState;
}

export const ExpiryDateField = ({ field }: ExpiryDateFieldProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isValidDate, setIsValidDate] = React.useState<boolean | null>(null);

  const expiryDateId = React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, '');

    rawValue = rawValue.slice(0, 4);

    let formatted = rawValue;
    if (rawValue.length >= 3) {
      formatted = `${rawValue.slice(0, 2)} / ${rawValue.slice(2)}`;
    }

    field.onChange(formatted);

    const digitsOnly = rawValue;
    const validation = cardValidator.expirationDate(digitsOnly);
    setIsValidDate(validation.isValid || false);
  };

  return (
    <div className="flex flex-col min-w-32 gap-1">
      <FormLabel
        htmlFor={expiryDateId}
        className="text-gray-600 text-sm font-medium"
      >
        Expiry Date
      </FormLabel>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <Calendar className="w-4 h-4 stroke-gray-500 " />
        </span>
        <input
          id={expiryDateId}
          autoComplete="cc-exp"
          placeholder="MM / YY"
          inputMode="numeric"
          name={field.name}
          value={field.value || ''}
          onChange={handleChange}
          onBlur={field.onBlur}
          ref={field.ref}
          className="pl-10 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-600
                     focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600
                     transition duration-200 placeholder:text-gray-400"
        />
      </div>

      <FormMessage />

      {/*/!* Optionally, show a quick text if isValidDate is false*/}
      {/*    and user has typed 4 digits (i.e. 'MMYY') *!/*/}
      {/*{isValidDate === false && field.value.replace(/\D/g, '').length === 4 && (*/}
      {/*  <p className="text-red-500 text-sm">*/}
      {/*    Invalid or expired date*/}
      {/*  </p>*/}
      {/*)}*/}
    </div>
  );
};
