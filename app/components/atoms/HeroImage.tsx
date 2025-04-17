// SVG Imports using svgr
import DesktopIllustration from '../../assets/svgs/desktop-illustration.svg';
import MobileIllustration from '../../assets/svgs/mobile-illustration.svg';

export default function HeroImage() {
  return (
    <div className='w-full h-full'>
      <DesktopIllustration className='mr-[5.5%] drop-shadow-[0_0px_3px_rgba(0,37,46,0.18)] xl:drop-shadow-[0_0px_7px_rgba(0,37,46,0.18)]' />
      <MobileIllustration className='ml-[68.5%] -mt-[38.75%] drop-shadow-[0_0px_2px_rgba(0,37,46,0.18)] xl:drop-shadow-[0_0px_6px_rgba(0,37,46,0.18)]' />
    </div>
  );
}
