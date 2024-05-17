type IconProps = {
  className?: string;
};

// export function Icon({ className = 'w-6 h-6' }: IconProps) {
//     return ();
// }

export function FacebookIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      stroke='none'
      strokeWidth='0'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
    </svg>
  );
}
export function WhatsappIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
      <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
    </svg>
  );
}
export function XCircleIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
      <path d='M10 10l4 4m0 -4l-4 4' />
    </svg>
  );
}
export function CheckCircleIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
      <path d='M9 12l2 2l4 -4' />
    </svg>
  );
}
export function EyeIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
    >
      <g clipPath='url(#clip0_14_2)'>
        <circle cx='12' cy='12' r='3' fill='white' />
        <path
          d='M12 4C16.29 4 19.863 6.429 22.665 11.154L22.885 11.533L22.93 11.633L22.96 11.716L22.974 11.771L22.988 11.853L22.999 11.953V12.063L22.985 12.174C22.9784 12.2111 22.9697 12.2479 22.959 12.284L22.92 12.392L22.884 12.467L22.868 12.497C20.104 17.333 16.568 19.877 12.313 19.996L12 20C7.604 20 3.963 17.451 1.132 12.496C1.04571 12.3449 1.00032 12.174 1.00032 12C1.00032 11.826 1.04571 11.6551 1.132 11.504C3.963 6.549 7.604 4 12 4ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_14_2'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
export function HashIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 9l14 0' />
      <path d='M5 15l14 0' />
      <path d='M11 4l-4 16' />
      <path d='M17 4l-4 16' />
    </svg>
  );
}
export function HeartIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
    </svg>
  );
}
export function HomeIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
      <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
      <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
    </svg>
  );

  //     <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
  //   </sEyeIcon>
  // );
}
export function SearchIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
      <path d='M21 21l-6 -6' />
    </svg>
  );

  //     <path d='M21 21l-6 -6' />
  //   </sEyeIcon>
  // );
}
export function BookmarkIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z' />
    </svg>
  );
}
