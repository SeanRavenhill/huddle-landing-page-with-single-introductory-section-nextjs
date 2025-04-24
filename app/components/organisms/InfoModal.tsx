import Image from 'next/image';
import Link from 'next/link';

interface InfoModalProps {
  isModalOpen: boolean;
}

export default function InfoModal({ isModalOpen }: InfoModalProps) {
  return isModalOpen ? (
    <div
      id='info-modal'
      role='dialog'
      aria-modal='true'
      className='absolute inset-0 z-50'
    >
      {/* Overlay layer -  */}
      <div 
        className='w-full h-full bg-black opacity-50'
        aria-hidden='true'
      >    
      </div>

      {/* Content Layer */}
      <div className='absolute inset-0'>
        <div className='grid justify-center items-center w-full h-full'>
          <div className='w-full h-auto bg-primaryViolet ~p-10/20 rounded-lg'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col items-center gap-2'>
                <Link href='https://www.frontendmentor.io/' target='_blank'>
                  <div className='flex flex-col items-center gap-4'>
                    <Image
                      src='/images/front-end-mentor-logo.png'
                      width={200}
                      height={200}
                      priority={false}
                      alt='Huddle'
                      className='w-16'
                    />
                    <p className=''>
                      Challenge by
                      <span className='underline underline-offset-[0.1875rem] lg:hover:text-softMagenta transition-all ml-1'>
                        Frontend Mentor
                      </span>
                      .
                    </p>
                  </div>
                </Link>
                <Link
                  href='https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0'
                  target='_blank'
                >
                  <p className='underline underline-offset-[0.1875rem] lg:hover:text-softMagenta transition-all'>
                    View Challenge Page
                  </p>
                </Link>
              </div>

              <span className='w-full h-[0.0625rem] bg-white'></span>

              <div className='flex flex-col items-center gap-2'>
                <Link href='https://github.com/SeanRavenhill' target='_blank'>
                  <div className='flex flex-col items-center gap-4'>
                    <Image
                      src='/images/profile-pic-sean.png'
                      width={200}
                      height={200}
                      priority={false}
                      alt='Huddle'
                      className='w-16'
                    />
                    <p className=''>
                      Coded by
                      <span className='underline underline-offset-[0.1875rem] lg:hover:text-softMagenta transition-all ml-1'>
                        Sean Ravenhill
                      </span>
                      .
                    </p>
                  </div>
                </Link>
                <Link
                  href='https://github.com/SeanRavenhill/huddle-landing-page-with-single-introductory-section-nextjs'
                  target='_blank'
                >
                  <p className='underline underline-offset-[0.1875rem] lg:hover:text-softMagenta transition-all'>
                    View Submission Repository
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
