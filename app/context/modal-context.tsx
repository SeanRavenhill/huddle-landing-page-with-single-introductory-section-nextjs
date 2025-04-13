'use client'

// app/context/ModalContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

interface ModalContextType {
  content: ReactNode;
  setContent: (content: ReactNode) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode>(null);

  return (
    <ModalContext.Provider value={{ content, setContent }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
