// File: app/layout.tsx
// Changes: Updated logo to use image file, updated colors to match logo
// Commit: "feat: update logo and brand colors to match new FVA logo"

import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Future Vision AI - Tự Động Hóa Doanh Nghiệp Với AI",
  description: "Giải pháp AI toàn diện giúp doanh nghiệp tự động hóa 70% công việc, tăng 3X năng suất, tiết kiệm hàng trăm triệu đồng mỗi năm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${sora.variable} ${dmSans.variable}`}>
        {/* Navigation */}
        <nav style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(59, 125, 255, 0.1)',
          boxShadow: '0 2px 10px rgba(59, 125, 255, 0.05)',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {/* Logo - Icon + Text */}
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}>
              {/* Logo Icon */}
              <Image 
                src="/logo-icon.png" 
                alt="Future Vision AI" 
                width={40} 
                height={40}
                style={{
                  objectFit: 'contain',
                }}
              />
              {/* Logo Text - Only show on desktop */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: '20px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '1px',
                }}>
                  FVA
                </span>
                <span style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '10px',
                  fontWeight: 500,
                  color: '#64748b',
                  letterSpacing: '0.5px',
                }}>
                  FUTURE VISION AI
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
            }} className="desktop-menu">
              <Link href="/" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}>
                Trang chủ
              </Link>
              <Link href="/about" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}>
                Giới thiệu
              </Link>
              <Link href="/products" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}>
                Sản phẩm
              </Link>
              <Link href="/blog" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}>
                Tin tức
              </Link>
              <Link href="/contact" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 12px rgba(59, 125, 255, 0.2)',
              }}>
                Liên hệ
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#1e293b',
            }}>
              ☰
            </button>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          padding: '4rem 2rem 2rem',
          marginTop: '4rem',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem',
            }}>
              {/* Column 1: About */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1rem',
                }}>
                  <Image 
                    src="/logo-icon.png" 
                    alt="Future Vision AI" 
                    width={40} 
                    height={40}
                    style={{
                      objectFit: 'contain',
                      filter: 'brightness(1.2)',
                    }}
                  />
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-sora)',
                      fontSize: '20px',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      FVA
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '10px',
                      color: '#94a3b8',
                      letterSpacing: '0.5px',
                    }}>
                      FUTURE VISION AI
                    </div>
                  </div>
                </div>
                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#cbd5e1',
                  lineHeight: '1.6',
                }}>
                  Giải pháp tự động hóa AI hàng đầu cho doanh nghiệp Việt Nam.
                </p>
              </div>

              {/* Column 2: Links */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'white',
                }}>
                  Liên Kết
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                  <Link href="/" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    Trang Chủ
                  </Link>
                  <Link href="/about" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    Giới Thiệu
                  </Link>
                  <Link href="/products" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    Sản Phẩm
                  </Link>
                  <Link href="/blog" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    Tin Tức
                  </Link>
                  <Link href="/contact" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    Liên Hệ
                  </Link>
                </div>
              </div>

              {/* Column 3: Services */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'white',
                }}>
                  Dịch Vụ
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                  <Link href="/products#recruitment" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    AI Automation Tuyển Dụng
                  </Link>
                  <Link href="/products#seo" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    Hệ Thống AI SEO
                  </Link>
                  <Link href="/products#sale" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    AI Automation Sale
                  </Link>
                  <Link href="/products#assistant" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    Trợ Lý Cá Nhân AI
                  </Link>
                  <Link href="/products#custom" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    AI Automation Tùy Chỉnh
                  </Link>
                </div>
              </div>

              {/* Column 4: Contact */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'white',
                }}>
                  Liên Hệ
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                  }}>
                    📍 Thù Lỗ, Thư Lâm
                  </div>
                  <a href="mailto:info@fuviai.com" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    📧 info@fuviai.com
                  </a>
                  <a href="tel:0889952123" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    📱 0889 952 123
                  </a>
                  <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    💬 Chat Zalo
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                color: '#94a3b8',
                margin: 0,
              }}>
                Copyright 2026 © Future Vision AI. All rights reserved.
              </p>
              
              {/* Social Links */}
              <div style={{
                display: 'flex',
                gap: '1rem',
              }}>
                <a href="https://facebook.com/fuviai" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}>
                  Facebook
                </a>
                <a href="https://linkedin.com/company/fuviai" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}>
                  LinkedIn
                </a>
                <a href="https://youtube.com/@fuviai" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </footer>

        <style jsx global>{`
          .desktop-menu a:hover {
            color: #3b7dff !important;
          }

          .desktop-menu a[href="/contact"]:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 125, 255, 0.3);
            color: white !important;
          }

          footer a:hover {
            color: #00d4ff !important;
          }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            
            .mobile-menu-btn {
              display: block !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
