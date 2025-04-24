import { useEffect } from 'react';
import '@/styles/modalToggleAnimations.css';

interface ModalToggleButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isModalOpen: boolean;
}

export default function ModalToggleButton({
  onClick,
  isModalOpen,
}: ModalToggleButtonProps) {
  useEffect(() => {
    const modalToggle = document.querySelector('.modal-toggle-btn');
    if (!modalToggle) return;

    if (isModalOpen) {
      modalToggle.classList.add('open');
    } else {
      modalToggle.classList.remove('open');
    }

    return () => {
      modalToggle.classList.remove('open');
    };
  }, [isModalOpen]);

  return (
    <div className='fixed top-0 right-0 z-[999] pt-6 pr-6'>
      <button
        type='button'
        onClick={onClick}
        aria-expanded={isModalOpen}
        aria-label={isModalOpen ? 'Close menu' : 'Open menu'}
        aria-controls='info-modal'
        className='group'
      >
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center items-center transition sm:group-hover:border-softMagenta sm:group-hover:text-softMagenta'>
          <div className='modal-toggle-btn relative w-full h-full rounded-full'>
            <div className='top-line absolute top-[15%] left-[calc(50%-calc(0.1875rem/2))] w-[0.1875rem] h-[0.1875rem] transition bg-white sm:group-hover:bg-softMagenta rounded-full'></div>
            <div className='bottom-line absolute bottom-[15%] left-[calc(50%-calc(0.1875rem/2))] w-[0.1875rem] h-[50%] transition bg-white sm:group-hover:bg-softMagenta rounded-full'></div>
            <div className='close-line1 absolute top-[calc(50%-calc(0.1875rem/2))] left-[calc(50%-40%)] scale-x-0 w-[80%] h-[0.1875rem] transition bg-white sm:group-hover:bg-softMagenta rounded-full'></div>
            <div className='close-line2 absolute top-[calc(50%-calc(0.1875rem/2))] left-[calc(50%-40%)] scale-x-0 w-[80%] h-[0.1875rem] transition bg-white sm:group-hover:bg-softMagenta rounded-full'></div>
          </div>
        </div>
      </button>
    </div>
  );
}
