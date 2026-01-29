// File: app/layout.tsx
// Root Layout - Fuviai.com Design
// Navigation + Footer + Floating Contact Buttons

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Future Vision AI - Tự Động Hóa Doanh Nghiệp Bằng AI',
  description: 'Giải pháp AI toàn diện giúp doanh nghiệp tự động hóa 70% công việc, tăng 3X năng suất, tiết kiệm hàng trăm triệu đồng mỗi năm',
  keywords: 'AI automation, tự động hóa doanh nghiệp, n8n, Future Vision AI, AI workflow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="main-nav">
          <div className="nav-container">
            {/* Logo */}
            <Link href="/" className="logo-link">
              <Image 
                src="/logo-icon-64x64.png" 
                alt="Future Vision AI" 
                width={56}
                height={56}
                style={{ objectFit: 'contain' }}
              />
              <span className="hidden sm:inline">Future Vision AI</span>
            </Link>
            
            {/* Desktop Menu */}
            <ul className="nav-menu hidden md:flex">
              <li><Link href="/" className="nav-link">Trang chủ</Link></li>
              <li><Link href="/about" className="nav-link">Giới thiệu</Link></li>
              <li><Link href="/products" className="nav-link">Sản phẩm</Link></li>
              <li><Link href="/blog" className="nav-link">Tin tức</Link></li>
              <li><Link href="/contact" className="nav-button">Liên hệ</Link></li>
            </ul>
            
            {/* Mobile Menu Button */}
            <button className="mobile-menu-button md:hidden">
              ☰
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="main-footer">
          <div className="footer-grid">
            {/* Column 1: Company Info */}
            <div className="footer-column">
              <h3>Future Vision AI</h3>
              <p className="text-gray-400 text-sm mb-4">
                Giải pháp tự động hóa AI hàng đầu cho doanh nghiệp Việt Nam.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/fuviai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/fuviai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@fuviai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-column">
              <h3>Liên Kết</h3>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Trang Chủ</Link></li>
                <li><Link href="/about" className="footer-link">Giới Thiệu</Link></li>
                <li><Link href="/products" className="footer-link">Sản Phẩm</Link></li>
                <li><Link href="/blog" className="footer-link">Tin Tức</Link></li>
                <li><Link href="/contact" className="footer-link">Liên Hệ</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer-column">
              <h3>Dịch Vụ</h3>
              <ul className="footer-links">
                <li><Link href="/products#recruitment" className="footer-link">AI Automation Tuyển Dụng</Link></li>
                <li><Link href="/products#seo" className="footer-link">Hệ Thống AI SEO</Link></li>
                <li><Link href="/products#sale" className="footer-link">AI Automation Sale</Link></li>
                <li><Link href="/products#assistant" className="footer-link">Trợ Lý Cá Nhân AI</Link></li>
                <li><Link href="/products#custom" className="footer-link">AI Automation Tùy Chỉnh</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-column">
              <h3>Liên Hệ</h3>
              <ul className="footer-links">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">📍</span>
                  <span className="text-gray-400 text-sm">Thù Lỗ, Thư Lâm, Hà Nội</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">📧</span>
                  <a href="mailto:info@fuviai.com" className="footer-link">info@fuviai.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">📱</span>
                  <a href="tel:0889952123" className="footer-link">0889 952 123</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">💬</span>
                  <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer" className="footer-link">Chat Zalo</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>Copyright 2026 © Future Vision AI. All rights reserved.</p>
          </div>
        </footer>

        {/* Floating Contact Buttons */}
        <div className="floating-contact-container">
          {/* Phone Button */}
          <a href="tel:0889952123" className="contact-btn contact-btn-phone">
            <span className="contact-tooltip">Gọi ngay: 0889 952 123</span>
            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>

          {/* Zalo Button */}
          <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-zalo">
            <span className="contact-tooltip">Chat Zalo</span>
            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.738 4.304 1.985 5.977L2 22l4.141-1.93A9.935 9.935 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.5 13.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z"/>
            </svg>
          </a>

          {/* Facebook Messenger Button */}
          <a href="https://m.me/futurevisionai" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-facebook">
            <span className="contact-tooltip">Chat Facebook</span>
            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.446 5.51 3.708 7.212V22l3.413-1.873c.91.252 1.876.386 2.879.386 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm.994 12.45l-2.548-2.714-4.974 2.714 5.47-5.803 2.61 2.714 4.913-2.714-5.471 5.803z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}
