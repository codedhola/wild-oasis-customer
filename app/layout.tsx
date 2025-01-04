import * as React from 'react';
import "@/app/_styles/globals.css"
import Header from './_components/Header';

export const metadata = {
  title: 'Wild Oasis',
  description: 'Wild Oasis is a platform for connecting people with nature.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          
          <Header />
          <main>
            {children}

          </main>
          
          </body>
      </html>
    )
  }