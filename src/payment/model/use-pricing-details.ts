import { getPricingDetails } from '@/payment/api/get-pricing-details';
import { useQuery } from '@tanstack/react-query';

export const usePricingDetails = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['price'],
    queryFn: getPricingDetails,
    staleTime: 1000 * 60 * 5,
  });

  return {
    pricingData: data,
    isLoading,
    error,
  };
};
