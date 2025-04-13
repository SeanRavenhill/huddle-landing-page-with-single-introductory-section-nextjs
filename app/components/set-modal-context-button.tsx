// app/components/SetModalContentButton.tsx
'use client';
import { useModal } from '../context/modal-context';
import Credentials from '../components/credentials';

export default function SetModalContentButton() {
  const { setContent } = useModal();

  return (
    <button onClick={() => setContent(<Credentials />)}>
      Open Credentials Modal
    </button>
  );
}
