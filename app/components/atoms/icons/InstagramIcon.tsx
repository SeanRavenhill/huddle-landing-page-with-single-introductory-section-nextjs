import Link from 'next/link';
import InstagramLogo from '@/assets/svgs/instagram-logo.svg';

export default function InstagramIcon() {
  return (
    <>
      <Link href='/'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition hover:border-softMagenta hover:text-softMagenta focus:border-softMagenta focus:text-softMagenta'>
          <InstagramLogo className='w-[50%] mx-auto' />
        </div>
      </Link>
    </>
  );
}