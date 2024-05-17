import type { Metadata } from 'next';
import { Changa } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

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
        <Navbar />
        <div className='bg-slate-50'>{children}</div>
      </body>
    </html>
  );
}
