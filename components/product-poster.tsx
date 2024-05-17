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
    <figure className='relative overflow-hidden max-w-96 w-full max-h-[70vh] group shadow-sm bg-base-100'>
      <Image
        className='object-contain w-full h-full bg-top rounded-lg'
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
      />

      <div
        onClick={toggleBookmark}
        className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition opacity-0 cursor-pointer backdrop-blur-sm group-hover:opacity-100 bg-slate-900/40'
      >
        <BookmarkIcon
          key={bookmarked ? 'bookmarked_is_true' : 'bookmarked_is_false'}
          className={
            'popup w-1/4 text-secondary ' + (bookmarked ? 'fill-current' : '')
          }
        />
      </div>
    </figure>
  );
}
