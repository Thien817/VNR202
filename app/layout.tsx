import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Bình Minh Của Thời Kì Đổi Mới (1986-1996)',
  description: 'Trình chiếu tài liệu lịch sử về giai đoạn đổi mới của Việt Nam từ 1986-1996',
  keywords: 'đổi mới, Việt Nam, 1986, 1996, lịch sử, Đại hội VI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
