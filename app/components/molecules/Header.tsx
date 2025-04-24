import HuddleLogo from '@/components/atoms/HuddleLogo';

export default function Header() {
  return (
    <header
      role='banner'
      className='absolute top-0 left-0 right-0 z-50 flex items-center justify-between max-w-[96rem] mx-auto ~h-[6.25rem]/[10rem] ~px-[2.5rem]/[5rem]'
    >
      <HuddleLogo />
    </header>
  );
}
