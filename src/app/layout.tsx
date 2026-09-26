import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://ahsanultanim.dev"),
  title: "Ahsanul Karim Tanim — Android Developer, AI Researcher",
  description:
    "Building native Android applications and multimodal AI datasets. Skilled in Kotlin, Python, PyTorch, and Vision-Language Models.",
  keywords: [
    "Ahsanul Karim Tanim",
    "Android Developer",
    "Kotlin",
    "Java",
    "Python",
    "PyTorch",
    "Machine Learning",
    "Computer Vision",
    "BangladeshiVQA",
    "AI Researcher",
  ],
  authors: [{ name: "Ahsanul Karim Tanim" }],
  creator: "Ahsanul Karim Tanim",
  publisher: "Ahsanul Karim Tanim",
  icons: { icon: "/favicon.svg" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ahsanul Karim Tanim — Android Developer & AI Researcher",
    description:
      "Building native Android applications and multimodal AI datasets. Author of BangladeshiVQA Benchmark.",
    siteName: "Ahsanul Karim Tanim Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Ahsanul Karim Tanim — Android Developer & AI Researcher",
    description:
      "Building native Android applications and multimodal AI datasets. Author of BangladeshiVQA Benchmark.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark'||(!('theme' in localStorage)&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(_){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}