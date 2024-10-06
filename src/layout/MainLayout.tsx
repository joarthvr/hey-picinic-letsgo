import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <ReactQueryDevtools/>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
