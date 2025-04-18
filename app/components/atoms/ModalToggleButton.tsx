import { useEffect } from 'react';
import '../../styles/animations.css'

interface ModalToggleButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isModalOpen: boolean;
}

export default function ModalToggleButton({ onClick, isModalOpen }: ModalToggleButtonProps) {

  // If lock is true, disable vertical scrolling by adding the class, otherwise enable scrolling.
  useEffect(() => {
    const modalToggle = document.querySelector('.modal-toggle')

    if (modalToggle) {
      isModalOpen
        ? modalToggle.classList.add('modal-toggle-spin')// Disable vertical scrolling.
        : modalToggle.classList.remove('modal-toggle-spin'); // Enable vertical scrolling.
    
        // Cleanup function: remove the class to ensure the body scroll is enabled when the component unmounts.
      return () => {
        modalToggle.classList.remove('modal-toggle-spin');
      }
    }
    
  }, [isModalOpen]) // Re-run the effect whenever the lock flag changes.

  return (
    <div className='absolute top-0 right-0 z-[999] pt-6 pr-6'>
      <button onClick={onClick}>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center items-center transition hover:border-softMagenta hover:text-softMagenta'>
          <div className='modal-toggle relative w-[75%] h-[75%]'>
            <div className='absolute top-[calc(50%-(calc(10%/2)))] w-full h-[10%] bg-white rotate-45'></div>
            <div className='absolute top-[calc(50%-(calc(10%/2)))] w-full h-[10%] bg-white -rotate-45'></div>
          </div>
          {/* <div className='modal-toggle relative w-[75%] h-[75%]'>
            <div className='absolute top-[calc(50%-(calc(10%/2)))] w-full h-[10%] bg-white rotate-45'></div>
            <div className='absolute top-[calc(50%-(calc(10%/2)))] w-full h-[10%] bg-white -rotate-45'></div>
          </div> */}
        </div>
      </button>
    </div>
  );
}
