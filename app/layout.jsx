import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Star Wars",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images (1).png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images (1).png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
