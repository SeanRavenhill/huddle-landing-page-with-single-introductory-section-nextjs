import Link from 'next/link';
import TwitterLogo from '@/assets/svgs/twitter-logo.svg';

export default function TwitterIcon() {
  return (
    <Link
      href='/' 
      aria-label='Visit our Twitter page'
      className='
        inline-flex items-center justify-center
        ~w-7/10 ~h-7/10
        border rounded-full
        transition
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-softMagenta
        sm:hover:border-softMagenta sm:hover:text-softMagenta
        '
      > 
      <TwitterLogo
        className='w-[52%]'
        aria-hidden='true'
        focusable='false'
      />
    </Link>
  );
}
