// File: app/layout.tsx
// Changes: Increased logo size significantly for better visual prominence
// Commit: "style: increase logo size for better visual balance"

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
            padding: '1.25rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {/* Logo - MUCH LARGER for better prominence */}
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none',
            }}>
              {/* Logo Icon - Increased to 56px */}
              <Image 
                src="/logo-icon.png" 
                alt="Future Vision AI" 
                width={56}
                height={56}
                style={{
                  objectFit: 'contain',
                }}
                priority
              />
              
              {/* Logo Text - Much Larger */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-sora)',
                  fontSize: '32px',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '1.5px',
                  lineHeight: 1,
                }}>
                  FVA
                </span>
                <span style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#64748b',
                  letterSpacing: '1px',
                  lineHeight: 1,
                }}>
                  FUTURE VISION AI
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div 
              className="desktop-menu"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              <Link href="/" className="nav-link" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
              }}>
                Trang chủ
              </Link>
              <Link href="/about" className="nav-link" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
              }}>
                Giới thiệu
              </Link>
              <Link href="/products" className="nav-link" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
              }}>
                Sản phẩm
              </Link>
              <Link href="/blog" className="nav-link" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1e293b',
                textDecoration: 'none',
              }}>
                Tin tức
              </Link>
              <Link href="/contact" className="cta-button" style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                color: 'white',
                padding: '12px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(59, 125, 255, 0.2)',
              }}>
                Liên hệ
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" style={{
              background: 'none',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              color: '#1e293b',
              display: 'none',
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
              {/* Column 1: About - Larger Logo */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.5rem',
                }}>
                  <Image 
                    src="/logo-icon.png" 
                    alt="Future Vision AI" 
                    width={48}
                    height={48}
                    style={{
                      objectFit: 'contain',
                      filter: 'brightness(1.2)',
                    }}
                  />
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-sora)',
                      fontSize: '28px',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #3b7dff 0%, #00d4ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}>
                      FVA
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#94a3b8',
                      letterSpacing: '0.8px',
                      lineHeight: 1,
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
                  <Link href="/" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    Trang Chủ
                  </Link>
                  <Link href="/about" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    Giới Thiệu
                  </Link>
                  <Link href="/products" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    Sản Phẩm
                  </Link>
                  <Link href="/blog" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    Tin Tức
                  </Link>
                  <Link href="/contact" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
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
                  <Link href="/products#recruitment" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    AI Automation Tuyển Dụng
                  </Link>
                  <Link href="/products#seo" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    Hệ Thống AI SEO
                  </Link>
                  <Link href="/products#sale" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    AI Automation Sale
                  </Link>
                  <Link href="/products#assistant" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    Trợ Lý Cá Nhân AI
                  </Link>
                  <Link href="/products#custom" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
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
                  <a href="mailto:info@fuviai.com" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    📧 info@fuviai.com
                  </a>
                  <a href="tel:0889952123" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
                  }}>
                    📱 0889 952 123
                  </a>
                  <a href="https://zalo.me/0889952123" target="_blank" rel="noopener noreferrer" className="footer-link" style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#cbd5e1',
                    textDecoration: 'none',
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
                <a href="https://facebook.com/fuviai" target="_blank" rel="noopener noreferrer" className="footer-link" style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                }}>
                  Facebook
                </a>
                <a href="https://linkedin.com/company/fuviai" target="_blank" rel="noopener noreferrer" className="footer-link" style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                }}>
                  LinkedIn
                </a>
                <a href="https://youtube.com/@fuviai" target="_blank" rel="noopener noreferrer" className="footer-link" style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                }}>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
