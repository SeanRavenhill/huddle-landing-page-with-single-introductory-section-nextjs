import clsx from 'clsx';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

import { poppins } from '@/styles/fonts';

export default function PrimaryButton({
  children,
  className,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `${poppins.className} w-[200px] h-10 bg-white rounded-full shadow-[1px_3px_5px_0px_rgba(0,0,0,0.27)] text-center text-[#684bb1] text-xs font-normal leading-[18px] transition-all duration-300 sm:h-14 sm:text-lg lg:hover:bg-softMagenta lg:hover:text-white lg:focus:bg-softMagenta lg:focus:text-white`,
        className
      )}
    >
      {children}
    </button>
  );
}
