import type { Metadata } from 'next'
import './globals.css'
import NavSide from './components/nav'
import Footer from './components/footer'
import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
title: 'Michael Gately Portfolio',
description: 'Learn more about Michael Gately and his skillset as a Backend Software Developer.',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="en" suppressHydrationWarning>

<head>
  <meta property='og:title' content="Michael Gately's Portfolio"/>
</head>

<body className='overscroll-none z-20'>
  <ThemeProvider>
    <main className='p-20'> {children} </main>
  </ThemeProvider>
  <SpeedInsights/>
  <Analytics/>
</body>

</html>
)
}