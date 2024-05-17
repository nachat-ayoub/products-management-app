import ProductCard from '@/components/product-card';
import { HashIcon } from '@/components/icons';
import { fakeProducts } from '@/utils';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-[calc(100vh-100px)] p-4 gap-y-5 md:p-6 lg:p-12 '>
      <section className='flex flex-col items-center w-full gap-x-6 gap-y-1'>
        <h1 className='pt-3 text-lg font-semibold text-center sm:text-2xl md:text-start md:text-3xl lg:text-4xl'>
          <HashIcon className='inline w-8 text-pink-300 md:w-12' />
          أفضل المنتجات الطبيعية بسعر جيد
        </h1>

        <Image
          className='object-contain w-3/4 md:w-1/2 max-h-[70vh]'
          src={'https://i.imgur.com/Ajw69lk.png'}
          alt='Skin Care'
          height={500}
          width={500}
        />
      </section>

      <section className='w-full'>
        <h2 className='mb-5 text-xl font-bold md:text-2xl'>المنتجات : </h2>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6'>
          {/* Products */}
          {fakeProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
