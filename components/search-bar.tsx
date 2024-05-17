'use client';

import { SearchIcon } from './icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() === '') return;
    router.push('/products?s=' + input.trim());
  }

  return (
    <div className='w-full md:w-1/3 lg:w-1/4'>
      <form
        onSubmit={submitForm}
        className='flex-row items-center w-full form-control gap-x-2'
      >
        <input
          className='w-full input input-bordered'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='البحث...'
          type='search'
        />
        <button className='btn btn-secondary btn-square'>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
