import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Metadata } from 'next'
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Gu | Fullstack Developer",
  description: "Portfolio website showcasing my work as a fullstack developer"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}