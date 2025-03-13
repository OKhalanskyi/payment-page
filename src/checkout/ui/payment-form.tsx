import { usePaymentCardForm } from '@/checkout/model/use-payment-card-form';
import { usePaymentProcessing } from '@/checkout/model/use-payment-processing';
import PaymentCardFormFields from '@/checkout/ui/form-fields/payment-card-form-fields.tsx';
import { FormProvider } from 'react-hook-form';
import { Button } from '@/components/button';
import { ApplePay } from '@/shared/icons';
import { useTranslation } from 'react-i18next';

const PaymentForm = () => {
  const form = usePaymentCardForm();
  const { t } = useTranslation();

  const {
    onCardPayment,
    // processApplePayment,
    // isProcessing,
    // isSuccess,
    // isError,
    // error,
    // reset,
  } = usePaymentProcessing();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onCardPayment)} className="grid gap-4">
        <Button className="bg-slate-950 cursor-pointer py-3.5 px-4 hover:bg-slate-900 flex justify-center">
          <ApplePay />
        </Button>

        <div className="flex gap-5 items-center mt-2">
          <div className="min-h-px	 grow bg-gray-200 w-full" />
          <p className="min-w-fit text-sm text-gray-400">
            {t('pay_with_card')}
          </p>
          <div className="min-h-px	 grow bg-gray-200 w-full" />
        </div>

        <PaymentCardFormFields />

        <div className="flex flex-col gap-4 mt-2">
          <Button
            type="submit"
            className="w-full cursor-pointer py-3 px-4 font-semibold bg-green-700 hover:bg-green-600"
          >
            {t('start_trial')}
          </Button>

          <div className="p-4 border border-gray-200 rounded-xl text-gray-500 text-xs">
            {t('helper_text.you_have')}{' '}
            <strong>{t('helper_text.plan_pro')}</strong>{' '}
            {t('helper_text.after_this')}
            <strong> {t('helper_text.automatically_renewed')} </strong>{' '}
            {t('helper_text.with_its')}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default PaymentForm;
