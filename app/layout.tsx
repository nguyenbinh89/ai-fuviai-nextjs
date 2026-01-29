// File: app/layout.tsx
// Purpose: Root layout with FVA logo - NO EVENT HANDLERS (Server Component compatible)
// Updated: 29/01/2026 - Fixed: Removed hover effects to fix build error

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
        <nav style={{
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(59, 125, 255, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          padding: '1rem 0'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {/* Logo */}
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}>
              <Image 
                src="/logo-icon-64x64.png" 
                alt="Future Vision AI Logo" 
                width={40} 
                height={40}
                style={{ objectFit: 'contain' }}
              />
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-sora)'
              }}>
                FVA
              </span>
            </Link>

            {/* Desktop Navigation - CSS hover only */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <Link href="/" className="nav-link">
                Trang chủ
              </Link>
              
              <Link href="/about" className="nav-link">
                Giới thiệu
              </Link>
              
              <Link href="/products" className="nav-link">
                Sản phẩm
              </Link>
              
              <Link href="/blog" className="nav-link">
                Tin tức
              </Link>
              
              <Link href="/contact" className="nav-button">
                Liên hệ
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer style={{
          background: '#0f172a',
          borderTop: '1px solid rgba(59, 125, 255, 0.1)',
          padding: '4rem 0 2rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem'
            }}>
              {/* Column 1: Company Info */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <Image 
                    src="/logo-icon-64x64.png" 
                    alt="FVA Logo" 
                    width={32} 
                    height={32}
                    style={{ objectFit: 'contain' }}
                  />
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'var(--font-sora)'
                  }}>
                    Future Vision AI
                  </span>
                </div>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  fontFamily: 'var(--font-dm-sans)'
                }}>
                  Giải pháp tự động hóa AI hàng đầu cho doanh nghiệp Việt Nam.
                </p>
              </div>

              {/* Column 2: Links */}
              <div>
                <h3 style={{
                  color: '#f8fafc',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-sora)'
                }}>
                  Liên Kết
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Link href="/" className="footer-link">Trang Chủ</Link>
                  <Link href="/about" className="footer-link">Giới Thiệu</Link>
                  <Link href="/products" className="footer-link">Sản Phẩm</Link>
                  <Link href="/blog" className="footer-link">Tin Tức</Link>
                  <Link href="/contact" className="footer-link">Liên Hệ</Link>
                </div>
              </div>

              {/* Column 3: Services */}
              <div>
                <h3 style={{
                  color: '#f8fafc',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-sora)'
                }}>
                  Dịch Vụ
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href="/products#recruitment" className="footer-link">AI Tuyển Dụng</a>
                  <a href="/products#seo" className="footer-link">Hệ Thống AI SEO</a>
                  <a href="/products#sale" className="footer-link">AI Automation Sale</a>
                  <a href="/products#assistant" className="footer-link">Trợ Lý AI</a>
                  <a href="/products#custom" className="footer-link">Custom AI</a>
                </div>
              </div>

              {/* Column 4: Contact */}
              <div>
                <h3 style={{
                  color: '#f8fafc',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-sora)'
                }}>
                  Liên Hệ
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, fontFamily: 'var(--font-dm-sans)' }}>
                    📍 Thù Lỗ, Thư Lâm
                  </p>
                  <a href="mailto:info@fuviai.com" className="footer-link">
                    📧 info@fuviai.com
                  </a>
                  <a href="tel:0889952123" className="footer-link">
                    📱 0889 952 123
                  </a>
                  <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer" className="footer-link">
                    💬 Chat Zalo
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div style={{
              borderTop: '1px solid rgba(59, 125, 255, 0.1)',
              paddingTop: '2rem',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem',
                margin: 0,
                fontFamily: 'var(--font-dm-sans)'
              }}>
                Copyright 2026 © Future Vision AI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Internal CSS for hover effects - works in Server Components */}
        <style jsx global>{`
          .nav-link {
            color: #f8fafc;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.3s ease;
            font-family: var(--font-dm-sans);
          }
          
          .nav-link:hover {
            color: #3b7dff;
          }
          
          .nav-button {
            background: linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%);
            color: white;
            padding: 0.6rem 1.5rem;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(59, 125, 255, 0.3);
            font-family: var(--font-dm-sans);
            display: inline-block;
          }
          
          .nav-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 125, 255, 0.4);
          }
          
          .footer-link {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
            font-family: var(--font-dm-sans);
          }
          
          .footer-link:hover {
            color: #3b7dff;
          }
        `}</style>
      </body>
    </html>
  )
}
