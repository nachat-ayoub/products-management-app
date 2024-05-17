'use client';

import Image from 'next/image';

export default function ProductImagesCarousel({
  images,
}: {
  images: string[];
}) {
  return (
    <div className='carousel carousel-center rounded-box h-[80vh]'>
      {images.map((image, i) => (
        <div key={i} className='carousel-item'>
          <Image
            className='object-cover w-full h-full border-2 select-none'
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
