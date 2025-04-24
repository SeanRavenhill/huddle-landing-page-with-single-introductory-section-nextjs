import PrimaryButton from '@/components/atoms/PrimaryButton';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from '@/components/atoms/icons/index';
import { poppins } from '@/styles/fonts';

export default function HeroSection() {
  return (
    <div className='flex flex-col min-h-full max-w-[32.5rem]'>
      <div className='flex flex-col items-center xl:items-start xl:pt-8'>
        <h1
          className={`${poppins.className} font-semibold text-white ~text-[1.5rem]/[2.5rem] ~leading-[2.25rem]/[3.75rem] text-center xl:text-left`}
        >
          Build The Community Your Fans Will Love
        </h1>
        <p className='font-normal text-white ~text-[1rem]/[1.125rem] ~leading-[1.5rem]/[1.6875rem] text-center mt-4 xl:text-left xl:mt-6'>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <PrimaryButton className='~text-[.75rem]/[1.125rem] ~leading-[1.125rem]/[1.6875rem] mt-6'>
          Register
        </PrimaryButton>
      </div>
      <div className='w-full mt-auto flex flex-col items-center xl:items-end'>
        <div
          aria-label='Social media links'
          className='flex flex-row justify-between ~w-[6.5rem]/[9.5rem] mt-7 2xl:mt-[11.375rem]'
        >
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}
