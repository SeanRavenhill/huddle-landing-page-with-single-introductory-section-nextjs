import clsx from 'clsx';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

import { poppins } from '@/app/styles/fonts';

export default function PrimaryButton({
  children,
  className,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `${poppins.className} w-[200px] h-10 bg-white rounded-full shadow-[1px_3px_5px_0px_rgba(0,0,0,0.27)] text-center text-[#684bb1] text-xs font-normal leading-[18px] transition-all duration-300 hover:bg-softMagenta hover:text-white focus:bg-softMagenta focus:text-white sm:h-14 sm:text-lg `,
        className
      )}
    >
      {children}
    </button>
  );
}
