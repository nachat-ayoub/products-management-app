'use client';

import Image from 'next/image';

export default function ProductImagesCarousel({
  images,
}: {
  images: string[];
}) {
  return (
    <div className='carousel carousel-center border-2 rounded-box h-[70vh]'>
      {images.map((image, i) => (
        <div key={i} className='w-full carousel-item bg-slate-100'>
          <Image
            className='object-contain w-full h-full select-none'
            alt='Product'
            src={image}
            key={image}
            height={400}
            width={400}
          />
        </div>
      ))}
    </div>
  );
}
