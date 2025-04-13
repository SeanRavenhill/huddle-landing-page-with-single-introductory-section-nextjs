import type { Metadata } from 'next';
import { openSans } from './ui/fonts';
import './ui/globals.css';

import { ModalProvider } from './context/modal-context';

export const metadata: Metadata = {
  title: 'Frontend Mentor - Huddle Landing Page',
  description: '01 Newbie Project Challenge from Frontend Mentor',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${openSans.className} antialiased`}>
        <ModalProvider>
          {children}
          {modal}
        </ModalProvider>
      </body>
    </html>
  );
}
