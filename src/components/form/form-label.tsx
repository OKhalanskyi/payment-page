import clsx from 'clsx';
import { useFormField } from '@/components/form/use-form-field';

type FormLabelProps = React.ComponentProps<'label'>;

export function FormLabel({ className, ...props }: FormLabelProps) {
  const { error, formItemId } = useFormField();

  return (
    <label
      data-slot="form-label"
      data-error={!!error}
      className={clsx('data-[error=true]:text-red-400', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}
