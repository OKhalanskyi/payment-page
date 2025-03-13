import { Success } from '@/shared/icons';
import { useTranslation } from 'react-i18next';

const SuccessPaymentMessage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-md mx-auto text-center py-16">
      <div className="rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-6">
        <Success className="text-green-600 w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold mb-4">{t('payment_success_title')}</h2>
      <p className="text-gray-600 mb-6">{t('payment_success_message')}</p>
    </div>
  );
};

export default SuccessPaymentMessage;
