import Link from 'next/link';
import InstagramLogo from '@/assets/svgs/instagram-logo.svg';

export default function InstagramIcon() {
  return (
    <>
      <Link href='/' aria-label='Visit our Instagram page'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition lg:hover:border-softMagenta lg:hover:text-softMagenta'>
          <InstagramLogo
            className='w-[50%] mx-auto'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </Link>
    </>
  );
}
