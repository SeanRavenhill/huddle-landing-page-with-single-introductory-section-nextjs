import Link from 'next/link';
import InstagramLogo from '@/assets/svgs/instagram-logo.svg';

export default function InstagramIcon() {
  return (
    <Link
      href='/'
      aria-label='Visit our Instagram page'
      className='
        inline-flex items-center justify-center
        ~w-7/10 ~h-7/10
        border rounded-full
        transition
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-softMagenta
        sm:hover:border-softMagenta sm:hover:text-softMagenta'
    >
      <InstagramLogo
        className='w-[50%]'
        aria-hidden='true'
        focusable='false'
      />
    </Link>
  );
}
