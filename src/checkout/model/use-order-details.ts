import { useQuery } from '@tanstack/react-query';
import { getOrderDetails } from '@/checkout/api/get-order-details.ts';

export const useOrderDetails = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['order'],
    queryFn: getOrderDetails,
    staleTime: 1000 * 60 * 5,
  });

  return {
    orderData: data,
    isLoading,
    error,
  };
};
