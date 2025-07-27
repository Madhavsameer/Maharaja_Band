"use client";
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import FloatingButtons from '@/components/FloatingButtons';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // Show preloader for 2.2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
             <FloatingButtons />
          </>
        )}
      </body>
    </html>
  );
}
