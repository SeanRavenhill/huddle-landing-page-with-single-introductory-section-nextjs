import Image from 'next/image';
import Link from 'next/link';

import useFocusTrap from '@/app/hooks/useFocusTrap';

interface InfoModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function InfoModal({
  onClose,
  isModalOpen,
  containerRef,
}: InfoModalProps) {

  useFocusTrap({
    containerRef,
    isActive: isModalOpen,
    onDeactivate: onClose,
  })

  return (
    <div
      id='info-modal'
      role='dialog'
      aria-modal='true'
      aria-labelledby='info-modal-title'
      className={`absolute inset-0 z-50 ${isModalOpen ? 'block' : 'hidden'}`}
    >
      {/* Decorative - Overlay layer */}
      <div
        className='w-full h-full bg-black opacity-50'
        aria-hidden='true'
      ></div>

      {/* Content Layer */}
      <div className='absolute inset-0'>
        <div className='grid justify-center items-center w-full h-full'>
          <div
            ref={containerRef}
            className='w-full h-auto bg-primaryViolet ~p-10/20 rounded-lg'
          >
            {/* Screen-Reader only Title */}
            <h2 id='info-modal-title' className='sr-only'>
              About this project and challenge
            </h2>

            <div className='flex flex-col gap-10'>
              <div className='flex flex-col items-center gap-2'>
                <Link
                  href='https://www.frontendmentor.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit the Frontend Mentor Homepage'
                  className='
                    flex flex-col items-center gap-4
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-softMagenta
                    '
                  >
                  <Image
                    src='/images/front-end-mentor-logo.png'
                    width={200}
                    height={200}
                    priority={false}
                    alt='Frontend Mentor Logo'
                    className='w-16'
                  />
                  <p>
                    Challenge by
                    <span className='underline underline-offset-[0.1875rem] transition-all ml-1 lg:hover:text-softMagenta'>
                      Frontend Mentor
                    </span>
                    .
                  </p>
                </Link>
                <Link
                  href='https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit Frontend page for this challenge'
                  className='underline underline-offset-[0.1875rem] transition-all lg:hover:text-softMagenta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-softMagenta'
                >
                  View Challenge Page
                </Link>
              </div>

              <hr
                role='separator'
                aria-hidden='true'
                className='w-full h-[0.0625rem] bg-white'
              />

              <div className='flex flex-col items-center gap-2'>
                <Link
                  href='https://github.com/SeanRavenhill'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit Sean Ravenhill’s GitHub profile'
                  className='
                    flex flex-col items-center gap-4
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-softMagenta'
                >
                  <Image
                    src='/images/profile-pic-sean.png'
                    width={200}
                    height={200}
                    priority={false}
                    alt='Profile picture of Sean Ravenhill'
                    className='w-16'
                  />
                  <p>
                    Coded by
                    <span className='underline underline-offset-[0.1875rem] transition-all ml-1 lg:hover:text-softMagenta'>
                      Sean Ravenhill
                    </span>
                    .
                  </p>
                </Link>
                <Link
                  href='https://github.com/SeanRavenhill/huddle-landing-page-with-single-introductory-section-nextjs'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit Sean Ravenhill’s GitHub Repository for this challenge'
                  className='underline underline-offset-[0.1875rem] transition-all lg:hover:text-softMagenta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-softMagenta'
                >
                  View Submission Repository
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
