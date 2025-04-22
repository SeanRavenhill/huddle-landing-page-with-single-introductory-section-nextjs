import Link from 'next/link';
import FacebookLogo from '@/assets/svgs/facebook-logo.svg';

export default function FacebookIcon() {
  return (
    <>
      <Link href='/' aria-label='Visit our Facebook page'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition lg:hover:border-softMagenta lg:hover:text-softMagenta'>
          <FacebookLogo
            className='w-[26%] ml-[38%]'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </Link>
    </>
  );
}
