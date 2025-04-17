import type { Metadata } from 'next';
import { openSans } from './styles/fonts';
import './styles/globals.css';

export const metadata: Metadata = {
    title: 'Frontend Mentor - Huddle Landing Page',
    description: '01 Newbie Project Challenge from Frontend Mentor',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${openSans.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
