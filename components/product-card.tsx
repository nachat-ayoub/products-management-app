'use client';
import { BookmarkIcon, EyeIcon } from './icons';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import FormattedPrice from './formatted-price';

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  isBookmarked?: boolean;
};

const ProductCard: FC<Product> = ({
  isBookmarked = false,
  id,
  name,
  image,
  price,
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className='w-full overflow-hidden shadow card card-compact bg-base-100'>
      <Link href={`/products/${id}`}>
        <figure className='relative overflow-hidden group'>
          <Image
            className='scale-100 group-hover:scale-[1.2] transition w-full object-contain'
            width={400}
            height={400}
            src={image}
            alt={name}
          />
          <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition opacity-0 backdrop-blur-sm group-hover:opacity-100 bg-slate-900/40'>
            <EyeIcon className='w-1/6 transition !duration-500 scale-0 text-secondary group-hover:scale-100' />
          </div>
        </figure>
      </Link>
      <div dir='rtl' className='bg-pink-100/3 card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='text-lg font-medium'>
          <FormattedPrice price={price} />
        </p>
        <div className='card-actions'>
          <button
            className='w-full mt-1 btn btn-secondary'
            onClick={toggleBookmark}
          >
            حفظ في المفضلة
            <BookmarkIcon
              className={'w-6 h-6 ' + (bookmarked ? 'fill-current' : '')}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
