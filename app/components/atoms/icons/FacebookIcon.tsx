import Link from 'next/link';
import FacebookLogo from '../../../assets/svgs/facebook-logo.svg'

export default function FacebookIcon() {
  return (
    <>
      <Link href='/'>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition hover:border-softMagenta hover:text-softMagenta focus:border-softMagenta focus:text-softMagenta'>
          <FacebookLogo className='w-[26%] ml-[38%]' />
        </div>
      </Link>
    </>
  );
}