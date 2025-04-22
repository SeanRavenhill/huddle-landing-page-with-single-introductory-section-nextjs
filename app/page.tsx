'use client';

// Import React hooks for state management and side effects
import { useState } from 'react';

// Import custom hook to lock/unlock body scroll based on modal visibility
import useLockBodyScroll from '@/hooks/useLockBodyScroll';

// Import atom components
import Background from '@/components/atoms/Background';
import HeroImage from '@/components/atoms/HeroImage';
import ModalToggleButton from '@/components/atoms/ModalToggleButton';

// Import molecule components
import Header from '@/components/molecules/Header';

// Import organism components
import HeroSection from '@/components/organisms/HeroSection';
import InfoModal from '@/components/organisms/InfoModal';

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
        <section className='min-h-svh w-full'>
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
                  <HeroSection />
                </div>

              </div>
            </div>
          </div>

        </section>
      </main>

      <section className='w-full h-screen bg-red-600'></section>
      
      {/* Render the button that toggles the modal's visibility */}
      <ModalToggleButton onClick={handleInfoModal} isModalOpen={isModalOpen}/>
      {/* 
          Conditionally render the InfoModal by passing a className.
          If "isModalOpen" is true, the class 'block' displays the modal,
          otherwise 'hidden' keeps it out of view.
      */}
      <InfoModal className={isModalOpen ? 'block' : 'hidden'} />
    </>
  );
}
