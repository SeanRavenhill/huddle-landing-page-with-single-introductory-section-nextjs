import clsx from 'clsx';

interface InfoModalProps {
  className?: string;
}

export default function InfoModal({ className }: InfoModalProps) {
  return (
    <div className={clsx('absolute inset-0 z-50', className)}>
      <div className='w-full h-full bg-black opacity-50'></div>
      <div className='absolute inset-0'>
        <div className='grid justify-center items-center w-full h-full'>
          <div className='w-full h-[50%] bg-primaryViolet'>
            <p className='attribution'>
              Challenge by{' '}
              <a
                href='https://www.frontendmentor.io?ref=challenge'
                target='_blank'
              >
                {' '}
                Frontend Mentor
              </a>
              . Coded by{' '}
              <a
                href='https://www.frontendmentor.io/profile/SeanRavenhill'
                target='_blank'
              >
                Sean Ravenhill
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
