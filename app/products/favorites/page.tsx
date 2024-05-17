import ProductCard from '@/components/product-card';
import { HeartIcon } from '@/components/icons';
import { fakeProducts } from '@/utils';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-4 gap-y-5 md:p-6 lg:p-12 caontainer'>
      <section className='w-full'>
        <h1 className='pt-3 mb-5 text-lg font-semibold text-center md:mb-8 sm:text-2xl md:text-3xl lg:text-4xl'>
          المنتجات المفضلة{' '}
          <HeartIcon className='inline w-8 text-pink-300 fill-current md:w-12' />
        </h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6'>
          {/* Products */}
          {fakeProducts.map((product) => (
            <ProductCard isBookmarked key={product.name} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
