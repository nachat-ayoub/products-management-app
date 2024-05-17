import NextTopLoader from 'nextjs-toploader';
import { Changa } from 'next/font/google';
import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import './globals.css';

const font = Changa({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Product management & customer showcase',
  description:
    'Single-admin product management & customer showcase. Add, edit, & display products with rich details. Enhances product visibility for customers (no online purchase).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir='rtl' lang='en' data-theme='cupcake'>
      <body className={font.className + ' text-gray-700'}>
        <NextTopLoader color='#fe80acbc' height={5} />
        <Navbar />
        <div className='bg-slate-50'>{children}</div>
      </body>
    </html>
  );
}
