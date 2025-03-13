import React from 'react';
import clsx from 'clsx';
import { useFormField } from '@/components/form';

export function FormMessage({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={clsx('text-red-400 text-sm', className)}
      {...props}
    >
      {body}
    </p>
  );
}
