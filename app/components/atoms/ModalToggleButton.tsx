interface ModalToggleButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ModalToggleButton({ onClick }: ModalToggleButtonProps) {
  return (
    <div className='absolute top-0 right-0 z-[999] pt-6 pr-6'>
      <button onClick={onClick}>
        <div className='~w-7/10 ~h-7/10 rounded-full border flex flex-col justify-center transition hover:border-softMagenta hover:text-softMagenta'>
          <div>X</div>
        </div>
      </button>
    </div>
  );
}
