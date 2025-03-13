import { usePaymentCardFormContext } from '@/payment/model/use-payment-card-form';
import { FormField, FormItem } from '@/components/form';
import { CardNumberField } from '@/payment/ui/form-fields/card-number-field';
import { ExpiryDateField } from '@/payment/ui/form-fields/expiry-date-field';
import { CVVField } from '@/payment/ui/form-fields/cvv-field';

const PaymentCardFormFields = () => {
  const { control } = usePaymentCardFormContext();

  return (
    <div className="flex flex-col gap-3">
      <FormField
        control={control}
        name="cardNumber"
        render={({ field, fieldState }) => (
          <FormItem>
            <CardNumberField field={field} fieldState={fieldState} />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={control}
          name="expiryDate"
          render={({ field, fieldState }) => (
            <FormItem>
              <ExpiryDateField field={field} fieldState={fieldState} />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="cvv"
          render={({ field, fieldState }) => (
            <FormItem>
              <CVVField field={field} fieldState={fieldState} />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default PaymentCardFormFields;
