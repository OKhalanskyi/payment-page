import { useQuery } from '@tanstack/react-query';
import { getOrderDetails } from '@/payment/api/get-order-details';

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
