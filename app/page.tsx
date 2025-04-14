// Custom Components
import Header from './components/header';
import Footer from './components/footer';
import PrimaryButton from './ui/primary-button';
import Background from './ui/background/background';
import HeroImage from './components/hero-image';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './ui/icons/icons';


import { poppins } from './ui/fonts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        
        {/* Hero Section */}
        <section className='min-h-screen w-full'>
          {/* SVG Background sits behind Hero content. Concession for Mobile and then Desktop layouts applied*/}
          <Background />

          {/* Full Viewport Hero Content - padding top to adjust for Header Element's absolute posistioning */}
          <div className='relative z-10 flex flex-grow max-w-[96rem] min-h-screen mx-auto ~pt-[6.25rem]/[10rem] ~px-[2.5rem]/[5rem] pb-10'>
            <div className='w-full min-h-full ~pt-7/10 2xl:my-auto'>
              <div className='flex flex-grow flex-col items-center gap-[3.75rem] w-full h-full xl:flex-row xl:items-start'>
                
                {/* Hero Content Left Column */}
                <div className='w-full max-w-[43.5rem] max-h-full'>
                  <HeroImage />
                </div>
                
                {/* Hero Content Right Column */}
                <div className='h-full shrink'>
                  <div className='flex flex-col min-h-full max-w-[32.5rem]'>
                    {/* Right Column Text and CTA Button */}
                    <div className='flex flex-col items-center xl:items-start xl:pt-8'>
                      <h1
                        className={`${poppins.className} font-semibold text-white ~text-[1.5rem]/[2.5rem] ~leading-[2.25rem]/[3.75rem] text-center xl:text-left`}
                      >
                        Build The Community Your Fans Will Love
                      </h1>
                      <p className='font-normal text-white ~text-[1rem]/[1.125rem] ~leading-[1.5rem]/[1.6875rem] text-center mt-4 xl:text-left xl:mt-6'>
                        Huddle re-imagines the way we build communities. You
                        have a voice, but so does your audience. Create
                        connections with your users as you engage in genuine
                        discussion.
                      </p>
                      <PrimaryButton className='~text-[.75rem]/[1.125rem] ~leading-[1.125rem]/[1.6875rem] mt-6'>
                        Register
                      </PrimaryButton>
                    </div>
                    {/* Right Column Socials Links*/}
                    <div className='w-full mt-auto flex flex-col items-center xl:items-end'>
                      <div className='flex flex-row justify-between ~w-[6.5rem]/[9.5rem] mt-7 2xl:mt-[11.375rem]'>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </section>
      </main>
      
      {/* <Footer /> */}
    </>
  );
}
