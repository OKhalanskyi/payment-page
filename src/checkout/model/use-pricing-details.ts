import { getPricingDetails } from '@/checkout/api/get-pricing-details.ts';
import { useQuery } from '@tanstack/react-query';

export const usePricingDetails = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pricingData'],
    queryFn: getPricingDetails,
    staleTime: 1000 * 60 * 5,
  });

  return {
    pricingData: data,
    isLoading,
    error,
  };
};
