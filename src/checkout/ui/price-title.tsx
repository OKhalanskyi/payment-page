import { usePricingDetails } from '@/checkout/model/use-pricing-details.ts';
import { useTranslation } from 'react-i18next';

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
    <div className="flex flex-col gap-1 text-center">
      <h3 className="text-2xl font-semibold">
        {pricingData?.trialDays === 1
          ? t('pricing.title_one', { count: pricingData?.trialDays })
          : t('pricing.title_many', { count: pricingData?.trialDays })}
      </h3>

      <p className="text-sm font-medium">
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
