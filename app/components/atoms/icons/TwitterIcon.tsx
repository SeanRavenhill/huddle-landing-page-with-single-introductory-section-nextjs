import Link from 'next/link';
import TwitterLogo from '@/assets/svgs/twitter-logo.svg';

export default function TwitterIcon() {
  return (
    <>
      <Link href='/' aria-label='Visit our Twitter page'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition lg:hover:border-softMagenta lg:hover:text-softMagenta'>
          <TwitterLogo
            className='mx-auto w-[52%]'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </Link>
    </>
  );
}
