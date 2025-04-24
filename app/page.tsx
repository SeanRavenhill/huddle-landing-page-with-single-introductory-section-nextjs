'use client';

import { useState, useRef } from 'react';
import useNoScroll from '@/app/hooks/useNoScroll';
import Background from '@/components/atoms/Background';
import HeroImage from '@/components/atoms/HeroImage';
import ModalToggleButton from '@/components/atoms/ModalToggleButton';
import Header from '@/components/molecules/Header';
import HeroSection from '@/components/organisms/HeroSection';
import InfoModal from '@/components/organisms/InfoModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useNoScroll(isModalOpen);

  const handleToggleModal = () => {
    setIsModalOpen(prev => !prev);
  };
  

  return (
    <>
      <Header />
      <main>
        <section
          aria-label='hero-section'
          className='min-h-screen w-full'>
          <Background />
          <div className='relative z-10 flex flex-grow max-w-[96rem] min-h-screen mx-auto ~pt-[6.25rem]/[10rem] ~px-[2.5rem]/[5rem] pb-10'>
            <div className='w-full min-h-full ~pt-7/10 2xl:my-auto'>
              <div className='flex flex-grow flex-col items-center gap-[3.75rem] w-full h-full xl:flex-row xl:items-start'>
                <div className='w-full max-w-[43.5rem] max-h-full'>
                  <HeroImage />
                </div>
                <div className='h-full shrink'>
                  <HeroSection />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ModalToggleButton 
        onClick={handleToggleModal}
        isModalOpen={isModalOpen}
      />
      <InfoModal 
        onClose={handleToggleModal}
        isModalOpen={isModalOpen}
        containerRef={containerRef}
      />
    </>
  );
}
