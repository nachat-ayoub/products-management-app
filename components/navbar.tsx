import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HeartIcon, HomeIcon, SearchIcon } from './icons';

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-between px-4 md:px-5 lg:px-10 navbar bg-base-100 md:flex-row gap-x-6 gap-y-4'>
      <div className=''>
        <a className='btn btn-ghost text-lg md:text-xl inline-table px-0.5 rounded-2xl'>
          <div className='flex items-center p-2 gap-x-2'>
            <span>
              <Image
                className='w-16 h-16'
                src={'https://i.imgur.com/Q5vicdu.png'}
                height={100}
                width={100}
                alt='Logo'
              />
            </span>
            <span>طبيعي</span>
          </div>
        </a>
      </div>
      <ul className='justify-center flex-1 block w-full divide-y-2 divide-pink-100 rounded md:divide-y-0 md:flex md:gap-x-5 bg-rose-50 md:bg-transparent'>
        <li>
          <Link
            className='flex items-center p-2 font-medium gap-x-2 hover:text-pink-400'
            href='/'
          >
            <span>
              <HomeIcon />
            </span>
            <span>الرئيسية</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center p-2 font-medium gap-x-2 hover:text-pink-400'
            href='/products/favorites'
          >
            <span>
              <HeartIcon />
            </span>
            <span>المفضلة</span>
          </Link>
        </li>
      </ul>
      <div className='w-full gap-2 md:w-1/3 lg:w-1/4'>
        <form className='flex-row items-center w-full form-control gap-x-2'>
          <input
            type='text'
            placeholder='البحث...'
            className='w-full input input-bordered'
          />
          <button className='btn btn-secondary btn-square'>
            <SearchIcon />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
