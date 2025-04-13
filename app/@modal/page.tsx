'use client';
import { useModal } from "../context/modal-context";

export default function ModalRoute() {
  const { content } = useModal();

  return (
    <div className="modal-container">
      {content ? content : null}
    </div>
  );
}