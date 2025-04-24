import Link from 'next/link';
import FacebookLogo from '@/assets/svgs/facebook-logo.svg';

export default function FacebookIcon() {
  return (
    <Link 
      href='/' 
      aria-label='Visit our Facebook page'
      className='
          inline-flex items-center justify-center
          ~w-7/10 ~h-7/10
          border rounded-full
          transition
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-softMagenta
        lg:hover:border-softMagenta lg:hover:text-softMagenta
        ' 
      >
      <FacebookLogo
        className='w-[26%]'
        aria-hidden='true'
        focusable='false'
      />
    </Link>
  );
}
