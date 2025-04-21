import Link from 'next/link';
import TwitterLogo from '../../../assets/svgs/twitter-logo.svg';

export default function TwitterIcon() {
  return (
    <>
      <Link href='/'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition hover:border-softMagenta hover:text-softMagenta focus:border-softMagenta focus:text-softMagenta'>
          <TwitterLogo className='mx-auto w-[52%]' />
        </div>
      </Link>
    </>
  );
}
