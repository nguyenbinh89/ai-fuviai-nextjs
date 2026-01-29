// File: app/layout.tsx
// Purpose: Root layout with new FVA logo and updated navigation
// Updated: 29/01/2026 - Added logo files, updated color scheme

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
                src="/logo-icon.png" 
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

            {/* Desktop Navigation */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                color: '#f8fafc',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-dm-sans)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b7dff'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f8fafc'
              }}>
                Trang chủ
              </Link>
              
              <Link href="/about" style={{
                color: '#f8fafc',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-dm-sans)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b7dff'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f8fafc'
              }}>
                Giới thiệu
              </Link>
              
              <Link href="/products" style={{
                color: '#f8fafc',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-dm-sans)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b7dff'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f8fafc'
              }}>
                Sản phẩm
              </Link>
              
              <Link href="/blog" style={{
                color: '#f8fafc',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-dm-sans)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b7dff'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f8fafc'
              }}>
                Tin tức
              </Link>
              
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                color: 'white',
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(59, 125, 255, 0.3)',
                fontFamily: 'var(--font-dm-sans)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 125, 255, 0.4)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 125, 255, 0.3)'
              }}>
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
                    src="/logo-icon.png" 
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
                  <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Trang Chủ</Link>
                  <Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Giới Thiệu</Link>
                  <Link href="/products" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Sản Phẩm</Link>
                  <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Tin Tức</Link>
                  <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Liên Hệ</Link>
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
                  <a href="/products#recruitment" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>AI Tuyển Dụng</a>
                  <a href="/products#seo" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Hệ Thống AI SEO</a>
                  <a href="/products#sale" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>AI Automation Sale</a>
                  <a href="/products#assistant" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Trợ Lý AI</a>
                  <a href="/products#custom" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>Custom AI</a>
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
                  <a href="mailto:info@fuviai.com" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                    📧 info@fuviai.com
                  </a>
                  <a href="tel:0889952123" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                    📱 0889 952 123
                  </a>
                  <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'var(--font-dm-sans)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b7dff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
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
      </body>
    </html>
  )
}
