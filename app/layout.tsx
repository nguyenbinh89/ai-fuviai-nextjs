// FILE: app/layout.tsx
// Copy toàn bộ file này thay thế file app/layout.tsx hiện tại

import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Future Vision AI - Tự Động Hóa Doanh Nghiệp',
  description: 'Giải pháp AI toàn diện giúp doanh nghiệp tự động hóa 70% công việc, tăng 3X năng suất',
  keywords: 'AI automation, n8n, tự động hóa doanh nghiệp, Future Vision AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <header>
          <nav>
            <Link href="/" className="logo">
              Future Vision AI
            </Link>
            <ul className="nav-links">
              <li><Link href="/">Trang chủ</Link></li>
              <li><Link href="/about">Giới thiệu</Link></li>
              <li><Link href="/products">Sản phẩm</Link></li>
              <li><Link href="/blog">Tin tức</Link></li>
              <li><Link href="/contact" className="btn-primary">Liên hệ</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="footer-content">
            <div className="footer-section">
              <h3>Future Vision AI</h3>
              <p>Giải pháp tự động hóa AI hàng đầu cho doanh nghiệp Việt Nam.</p>
            </div>
            
            <div className="footer-section">
              <h3>Liên Kết</h3>
              <ul className="footer-links">
                <li><Link href="/">Trang Chủ</Link></li>
                <li><Link href="/about">Giới Thiệu</Link></li>
                <li><Link href="/products">Sản Phẩm</Link></li>
                <li><Link href="/blog">Tin Tức</Link></li>
                <li><Link href="/contact">Liên Hệ</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Dịch Vụ</h3>
              <ul className="footer-links">
                <li><Link href="/products">AI Automation Tuyển Dụng</Link></li>
                <li><Link href="/products">Hệ Thống AI SEO</Link></li>
                <li><Link href="/products">AI Automation Sale</Link></li>
                <li><Link href="/products">Trợ Lý Cá Nhân AI</Link></li>
                <li><Link href="/products">AI Automation Tùy Chỉnh</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Liên Hệ</h3>
              <ul className="footer-links">
                <li>📍 Thù Lỗ, Thư Lâm</li>
                <li>📧 <a href="mailto:info@fuviai.com">info@fuviai.com</a></li>
                <li>📱 <a href="tel:0889952123">0889 952 123</a></li>
                <li>💬 <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer">Chat Zalo</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>Copyright 2026 © Future Vision AI. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
