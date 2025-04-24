import Image from 'next/image';
import Link from 'next/link';

export default function HuddleLogo() {
  return (
    <Link href='/'>
      <Image
        src='/images/huddle-logo.svg'
        width={120}
        height={19}
        priority={true}
        alt='Huddle homepage'
        className='block sm:hidden'
      />
      <Image
        src='/images/huddle-logo.svg'
        width={200}
        height={32}
        priority={true}
        alt='Huddle homepage'
        className='hidden sm:block'
      />
    </Link>
  );
}
