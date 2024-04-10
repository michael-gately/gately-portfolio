import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavSide from './components/nav'
import Footer from './components/footer'
import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'Create Next App',
description: 'Generated by create next app',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="en" suppressHydrationWarning>

<body className='grid grid-cols-4 overscroll-none'>
  <ThemeProvider>
    <div className='col-span-1'>
      <NavSide />
    </div>
    <main className='col-span-3'>{children}</main>
    <Footer />
  </ThemeProvider>
  <SpeedInsights/>
  <Analytics/>
</body>

</html>
)
}