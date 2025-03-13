import React from 'react';
import cardValidator from 'card-validator';
import { FormLabel, FormMessage } from '@/components/form';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';
import { Lock } from '@/shared/icons';

export interface CVVFieldProps {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState?: ControllerFieldState;
}

export const CVVField = ({ field }: CVVFieldProps) => {
  const [isValidCvv, setIsValidCvv] = React.useState<boolean | null>(null);
  const cvvId = React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, '');

    rawValue = rawValue.slice(0, 4);

    field.onChange(rawValue);

    const validation = cardValidator.cvv(rawValue, [3, 4]);
    setIsValidCvv(validation.isValid || false);
  };

  return (
    <div className="flex flex-col gap-1 min-w-32">
      <FormLabel htmlFor={cvvId} className="text-gray-600 text-sm font-medium">
        CVV
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
          className="pl-10 rounded-lg border border-gray-300 px-3 py-2 text-gray-600
                     focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600
                     transition duration-200 placeholder:text-gray-600 w-full"
        />
      </div>

      <FormMessage />

      {isValidCvv === false && field.value.replace(/\D/g, '').length >= 3 && (
        <p className="text-red-500 text-sm">Invalid CVV code</p>
      )}
    </div>
  );
};
