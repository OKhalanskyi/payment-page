import React from 'react';
import clsx from 'clsx';

type FormItemContextValue = {
  id: string;
};

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={clsx('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}
