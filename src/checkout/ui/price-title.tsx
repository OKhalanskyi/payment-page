import { usePricingDetails } from '@/checkout/model/use-pricing-details';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from '@/shared/icons';

const PriceTitle = () => {
  const { t } = useTranslation();
  const { pricingData, isLoading, error } = usePricingDetails();

  if (isLoading) {
    return <div>Loading pricing information...</div>;
  }

  if (error) {
    return <div>Error loading pricing information. Please try again.</div>;
  }

  return (
    <div className="flex flex-col gap-1 text-center lg:text-left">
      <h1 className="hidden lg:block mb-4 text-lg font-semibold relative">
        {t('checkout')}
        <ArrowLeft className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full w-6 h-6" />
      </h1>
      <h3 className="text-2xl font-semibold lg:text-4xl">
        {pricingData?.trialDays === 1
          ? t('pricing.title_one', { count: pricingData?.trialDays })
          : t('pricing.title_many', { count: pricingData?.trialDays })}
      </h3>

      <p className="text-sm font-medium lg:text-base">
        {t('pricing.description', {
          price: pricingData?.price,
          currency: pricingData?.currency,
          cycle: pricingData?.billingCycle,
        })}
      </p>
    </div>
  );
};

export default PriceTitle;
