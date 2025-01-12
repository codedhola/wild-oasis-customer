import * as React from 'react';
import "@/app/_styles/globals.css"
import Header from './_components/Header';

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from './_components/ReservationContext';

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: {
    template: '%s | Wild Oasis',
    default: 'Wild Oasis',
  },
  description: 'Wild Oasis is a platform for connecting people with nature.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
          
          <Header />
          <div className='flex-1 px-8 py-12 grid'>
            <main className='max-w-7xl mx-auto w-full'>
              <ReservationProvider>
                {children}
              </ReservationProvider>
            </main>
          </div>
          </body>
      </html>
    )
  }