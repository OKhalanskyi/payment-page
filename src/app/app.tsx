import { Layout } from '@/components/layout';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/query-client';
import { PaymentProvider } from '@/payment/ui/payment-provider';
import { PaymentFrame } from '@/payment';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header />
        <PaymentProvider>
          <PaymentFrame />
        </PaymentProvider>
        <Footer />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
