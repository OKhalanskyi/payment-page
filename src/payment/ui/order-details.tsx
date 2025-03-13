import { useOrderDetails } from '@/payment/model/use-order-details';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/shared/icons';

const OrderDetails = () => {
  const { orderData, isLoading, error } = useOrderDetails();
  const { t } = useTranslation();

  if (error) {
    <div>Something weird was happen</div>;
  }

  if (isLoading) {
    return (
      <div className="max-w-md px-3.5 lg:px-0">
        <div className="rounded-xl bg-gray-100 p-4 lg:p-8 h-fit flex justify-center">
          <Loader className="stroke-gray-500 animate-spin w-20 h-20" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md px-3.5 lg:px-0">
      <div className="rounded-xl bg-gray-100 p-4 lg:p-8 h-fit">
        <section className="flex flex-col gap-6">
          <p className="text-lg font-semibold">{orderData?.info}</p>
          <p className="text-sm font-medium">{orderData?.description}</p>
        </section>

        <div className="min-h-px my-4 bg-gray-300" />

        <section className="flex flex-col gap-1">
          <p className="text-sm font-semibold">{orderData?.title}</p>
          <p className="text-xs font-medium text-gray-400">
            {orderData?.category}
          </p>
        </section>

        <div className="min-h-px my-4 bg-gray-300" />

        <p className="justify-self-end font-semibold text-sm">
          {t('total')}:{' '}
          <span className="text-base font-medium">
            {orderData?.price} {orderData?.currency}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
