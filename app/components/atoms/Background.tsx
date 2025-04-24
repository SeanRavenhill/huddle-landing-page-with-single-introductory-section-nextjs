import BgDesktop from '@/assets/svgs/bg-desktop.svg';
import BgMobile from '@/assets/svgs/bg-mobile.svg';

export default function Background() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 block xl:hidden pointer-events-none"
        aria-hidden="true"
      >
        <BgMobile
          className="w-full h-auto"
          aria-hidden="true"
          focusable="false"
        />
      </div>
      <div
        className="absolute inset-0 z-0 hidden xl:block overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <BgDesktop
          className="w-auto min-w-full min-h-full max-w-none"
          aria-hidden="true"
          focusable="false"
        />
      </div>
    </>
  );
}
