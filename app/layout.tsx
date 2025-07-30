import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parklands CarHires - Drive in Style | Car Rental Nairobi',
  description: 'Premium car rental services in Nairobi and Parklands. Affordable rates, fully insured vehicles, professional drivers available. Book your car today!',
  keywords: 'car hire Nairobi, car rental Parklands, Kenya car hire, vehicle rental, driver services',
  openGraph: {
    title: 'Parklands CarHires - Drive in Style',
    description: 'Premium car rental services in Nairobi and Parklands. Affordable rates, fully insured vehicles.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'Parklands CarHires',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parklands CarHires - Drive in Style',
    description: 'Premium car rental services in Nairobi and Parklands.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}