'use client';

// Import React hooks for state management and side effects
import { useState } from 'react';

// Import custom hook to lock/unlock body scroll based on modal visibility
import useLockBodyScroll from './hooks/useLockBodyScroll';

// Import atom components
import Background from './components/atoms/Background';
import HeroImage from './components/atoms/HeroImage';
import PrimaryButton from './components/atoms/PrimaryButton';
import ModalToggleButton from './components/atoms/ModalToggleButton';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './components/atoms/icons';

// Import molecule components
import Header from './components/molecules/Header';

// Import organism components
import InfoModal from './components/organisms/InfoModal';


// Import custom font styling
import { poppins } from './styles/fonts';

export default function Home() {
  // State hook to manage modal visibility.
  // "isModalOpen" is false when modal is hidden, true when visible.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Invoke custom hook to lock body scroll when modal is open.
  // The hook adds/removes a CSS class on the document body based on "isModalOpen".
  useLockBodyScroll(isModalOpen);

  // Handler to toggle the modal's visibility.
  // Uses a functional state update to ensure the latest state is toggled.
  const handleInfoModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      {/* Renders the Header component at the top of the page */}
      <Header />
      <main>
        {/* Hero Section containing the background, main hero content, and call-to-action */}
        <section className='min-h-screen w-full'>
          {/* Render the SVG Background behind the hero content */}
          <Background />

          {/* Container for the full viewport hero content.
              Provides maximum width, padding, and positions the elements relative to the header. */}
          <div className='relative z-10 flex flex-grow max-w-[96rem] min-h-screen mx-auto ~pt-[6.25rem]/[10rem] ~px-[2.5rem]/[5rem] pb-10'>
            <div className='w-full min-h-full ~pt-7/10 2xl:my-auto'>
              <div className='flex flex-grow flex-col items-center gap-[3.75rem] w-full h-full xl:flex-row xl:items-start'>
                
                {/* Left Column: Displays the Hero Image */}
                <div className='w-full max-w-[43.5rem] max-h-full'>
                  <HeroImage />
                </div>

                {/* Right Column: Includes main text content, CTA button, and social links */}
                <div className='h-full shrink'>
                  <div className='flex flex-col min-h-full max-w-[32.5rem]'>
                    {/* Text content and CTA button container */}
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
                      
                      {/* PrimaryButton: Call-to-action for registration */}
                      <PrimaryButton className='~text-[.75rem]/[1.125rem] ~leading-[1.125rem]/[1.6875rem] mt-6'>
                        Register
                      </PrimaryButton>
                    </div>

                    {/* Section for Social Icons */}
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
      
      {/* Render the button that toggles the modal's visibility */}
      <ModalToggleButton onClick={handleInfoModal} />
      {/* 
          Conditionally render the InfoModal by passing a className.
          If "isModalOpen" is true, the class 'block' displays the modal,
          otherwise 'hidden' keeps it out of view.
      */}
      <InfoModal className={isModalOpen ? 'block' : 'hidden'} />
    </>
  );
}
