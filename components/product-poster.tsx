'use client';

import { Product } from './product-card';
import { BookmarkIcon } from './icons';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductPoster(product: Product) {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <figure className='rounded-lg mx-auto md:mx-0 overflow-hidden relative w-full md:min-w-72 max-h-[70vh] group shadow-sm bg-base-100'>
      <Image
        className='object-cover w-full h-full'
        src={product.image}
        alt={product.name}
        height={500}
        width={500}
      />

      <div
        className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition opacity-0 cursor-pointer backdrop-blur-sm group-hover:opacity-100 bg-slate-900/40'
        onClick={toggleBookmark}
      >
        <BookmarkIcon
          className={
            'popup w-1/4 text-secondary ' + (bookmarked ? 'fill-current' : '')
          }
          key={product.name + (bookmarked ? 'bookmarked' : 'not_bookmarked')}
        />
      </div>
    </figure>
  );
}
