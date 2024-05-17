import { CheckCircleIcon, WhatsappIcon, XCircleIcon } from '@/components/icons';
import { notFound } from 'next/navigation';
import { fakeProducts } from '@/utils';
import FormattedPrice from '@/components/formatted-price';
import ProductPoster from '@/components/product-poster';
import ProductImagesCarousel from '@/components/product-iamges-carousel';

export default function Home({ params: { id } }: { params: { id: string } }) {
  const product = fakeProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    notFound();
  }
  const isAvailable = true;

  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-4 gap-y-5 md:p-6 lg:p-12 caontainer'>
      <section className='flex flex-col w-full md:flex-row gap-x-10 gap-y-6'>
        <ProductPoster {...product} />
        <div>
          <h1 className='mb-5 text-xl font-bold md:text-2xl'>{product.name}</h1>
          <p className='mb-3 text-lg font-semibold'>
            <FormattedPrice className='text-3xl' price={product.price} />
          </p>
          <p
            className={
              'mb-3 text-sm inline-block px-3 py-1 font-semibold rounded-full ' +
              (isAvailable
                ? 'text-green-600 bg-green-200/75'
                : 'text-red-500 bg-red-200/75')
            }
          >
            {isAvailable ? (
              <CheckCircleIcon className='inline w-5' />
            ) : (
              <XCircleIcon className='inline w-5' />
            )}
            <span className='mr-0.5'>
              {isAvailable ? 'متوفر' : 'غير متوفر'} بالمخزون
            </span>
          </p>
          <p className='mb-3 text-base font-medium text-gray-600'>
            {/* {product.description} */}
            نفس عل بالجانب وحلفاؤها, في غضون ألمانيا كان. إذ عدم الدول عالمية,
            الساحل سنغافورة أي ذات. أسر قد مسرح إحتار, جعل عن تحرّك أوراقهم
            المزيفة, تعديل العدّ لليابان أم بعض. قائمة التقليدي به، عن. وبعد
            جديداً مليارات هو إيو, لم غريمه بالسيطرة بعد. مع حاول فكانت الجنوبي
            الا, إعلان بمباركة من أما. هامش هاربر الأولى حتى عن, الثقيلة الأثنان
            ان أخذ, دارت ماشاء الطريق عدد إذ. الأعمال والكوري لكل بـ. حول قد
            سياسة الثقيل الإمداد, ألمّ الجو سبتمبر بـ كان. حصدت الحكومة واستمرت
            بعض بل, بها ببعض النفط وبالتحديد، ثم.
          </p>

          <a
            className='w-full rounded-full md:w-fit text-base-100 btn btn-success'
            href='#whatsapp'
          >
            تواصل معنا على الواتساب
            <WhatsappIcon />
          </a>
        </div>
      </section>

      <section className='w-full'>
        <h2 className='mb-5 text-xl font-bold md:text-2xl'>صور المنتج : </h2>
        <ProductImagesCarousel
          images={[
            'https://placehold.co/500x400/png',
            'https://placehold.co/200x400/png',
            'https://placehold.co/800x400/png',
            'https://placehold.co/500x400/png',
          ]}
        />
      </section>
    </main>
  );
}
