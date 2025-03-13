import { Layout } from '@/components/layout';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckoutFrame } from '@/checkout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/query-client.ts';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header />
        <CheckoutFrame />
        <Footer />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
