import Link from 'next/link';

// SVG Imports using svgr
import FacebookLogo from '../../components/svgs/facebook-logo.svg';
import TwitterLogo from '../../components/svgs/twitter-logo.svg';
import InstagramLogo from '../../components/svgs/instagram-logo.svg';

export function FacebookIcon() {
  return (
    <>
      <Link href='/'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition hover:border-softMagenta hover:text-softMagenta'>
          <FacebookLogo className='w-[26%] ml-[38%]' />
        </div>
      </Link>
    </>
  );
}

export function TwitterIcon() {
  return (
    <>
      <Link href='/'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition hover:border-softMagenta hover:text-softMagenta'>
          <TwitterLogo className='mx-auto w-[52%]' />
        </div>
      </Link>
    </>
  );
}

export function InstagramIcon() {
  return (
    <>
      <Link href='/'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition hover:border-softMagenta hover:text-softMagenta'>
          <InstagramLogo className='w-[50%] mx-auto' />
        </div>
      </Link>
    </>
  );
}
