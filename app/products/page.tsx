import ProductCard from '@/components/product-card';
import { HashIcon, SearchIcon } from '@/components/icons';
import { fakeProducts } from '@/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams?.s || searchParams?.s.length === 0) {
    notFound();
  }

  const products = fakeProducts.filter((product) =>
    product.name.toLowerCase().includes(searchParams?.s as string)
  );

  return (
    <main className='flex flex-col min-h-[calc(100vh-100px)] p-4 gap-y-5 md:p-6 lg:p-12 '>
      <h1 className='pt-3 text-lg font-semibold text-center sm:text-2xl md:text-start md:text-3xl lg:text-4xl'>
        <SearchIcon className='inline w-8 text-pink-300 stroke-[2.5] ml-1 md:w-10' />
        لقد بحثت عن : [ {searchParams?.s} ]
      </h1>

      <section className='w-full'>
        {/* Products */}
        {products.length > 0 ? (
          <>
            <h2 className='mb-5 text-xl font-bold md:text-2xl'>المنتجات : </h2>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6'>
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </>
        ) : (
          <h2 className='mb-5 text-xl font-bold text-center md:text-2xl'>
            لا يوجد منتجات
          </h2>
        )}
      </section>
    </main>
  );
}
