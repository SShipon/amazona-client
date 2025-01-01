import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
   <div className='flex flex-col min-h-screen'>
        <Header />
       <main className="flex-1 flex flex-col">
      {children}
    </main>

    <Footer />
   </div>
  );
}
