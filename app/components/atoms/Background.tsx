// SVG Imports using svgr
import BgDesktop from '@/assets/svgs/bg-desktop.svg';
import BgMobile from '@/assets/svgs/bg-mobile.svg';

export default function Background() {
  return (
    <>
      {/* Mobile viewports */}
      <div className='xl:hidden block absolute inset-0 z-0'>
        <BgMobile className={'w-full h-auto'} />
      </div>

      {/* Desktop viewports */}
      <div className='hidden xl:block absolute inset-0 z-0 overflow-hidden'>
        <BgDesktop className={'w-auto min-w-full min-h-full max-w-none'} />
      </div>
    </>
  );
}
