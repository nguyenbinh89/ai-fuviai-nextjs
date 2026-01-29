// File: app/layout.tsx
// EXTRA LARGE VERSION: Logo 72x72px, NO TEXT

import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '600', '700', '800']
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Future Vision AI - Tự Động Hóa Doanh Nghiệp Bằng AI',
  description: 'Giải pháp AI toàn diện giúp doanh nghiệp tự động hóa 70% công việc, tăng 3X năng suất',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${sora.variable} ${dmSans.variable}`}>
        {/* Navigation */}
        <nav className="main-nav">
          <div className="nav-container">
            {/* Logo - Extra Large, Icon Only */}
            <Link href="/" className="logo-link">
              <Image 
                src="/logo-icon-64x64.png" 
                alt="Future Vision AI" 
                width={150} 
                height={72}
                style={{ objectFit: 'contain' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-menu">
              <Link href="/" className="nav-link">Trang chủ</Link>
              <Link href="/about" className="nav-link">Giới thiệu</Link>
              <Link href="/products" className="nav-link">Sản phẩm</Link>
              <Link href="/blog" className="nav-link">Tin tức</Link>
              <Link href="/contact" className="nav-button">Liên hệ</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-grid">
              {/* Column 1: Company Info */}
              <div className="footer-column">
                <div className="footer-logo">
                  <Image 
                    src="/logo-icon-64x64.png" 
                    alt="FVA Logo" 
                    width={40} 
                    height={40}
                    style={{ objectFit: 'contain' }}
                  />
                  <span className="footer-logo-text">Future Vision AI</span>
                </div>
                <p className="footer-description">
                  Giải pháp tự động hóa AI hàng đầu cho doanh nghiệp Việt Nam.
                </p>
              </div>

              {/* Column 2: Links */}
              <div className="footer-column">
                <h3 className="footer-title">Liên Kết</h3>
                <div className="footer-links">
                  <Link href="/" className="footer-link">Trang Chủ</Link>
                  <Link href="/about" className="footer-link">Giới Thiệu</Link>
                  <Link href="/products" className="footer-link">Sản Phẩm</Link>
                  <Link href="/blog" className="footer-link">Tin Tức</Link>
                  <Link href="/contact" className="footer-link">Liên Hệ</Link>
                </div>
              </div>

              {/* Column 3: Services */}
              <div className="footer-column">
                <h3 className="footer-title">Dịch Vụ</h3>
                <div className="footer-links">
                  <a href="/products#recruitment" className="footer-link">AI Tuyển Dụng</a>
                  <a href="/products#seo" className="footer-link">Hệ Thống AI SEO</a>
                  <a href="/products#sale" className="footer-link">AI Automation Sale</a>
                  <a href="/products#assistant" className="footer-link">Trợ Lý AI</a>
                  <a href="/products#custom" className="footer-link">Custom AI</a>
                </div>
              </div>

              {/* Column 4: Contact */}
              <div className="footer-column">
                <h3 className="footer-title">Liên Hệ</h3>
                <div className="footer-links">
                  <p className="footer-contact">📍 Thù Lỗ, Thư Lâm</p>
                  <a href="mailto:info@fuviai.com" className="footer-link">📧 info@fuviai.com</a>
                  <a href="tel:0889952123" className="footer-link">📱 0889 952 123</a>
                  <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer" className="footer-link">
                    💬 Chat Zalo
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
              <p className="footer-copyright">
                Copyright 2026 © Future Vision AI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
