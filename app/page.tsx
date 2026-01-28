// FILE: app/page.tsx
// TRANG CHỦ - Copy toàn bộ nội dung này vào app/page.tsx

import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Tự Động Hóa Công Việc Trong 5 Ngày</h1>
            <p className="hero-subtitle">
              Giải pháp AI toàn diện giúp doanh nghiệp của bạn{' '}
              <strong>tự động hóa 70% công việc</strong>, tăng{' '}
              <strong>3X năng suất</strong> và tiết kiệm{' '}
              <strong>hàng trăm triệu đồng</strong> mỗi năm
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Khách hàng</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">300%</div>
                <div className="stat-label">Tăng ROI</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">70%</div>
                <div className="stat-label">Tiết kiệm TG</div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link href="/contact" className="btn-primary">
                Nhận Tư Vấn Miễn Phí
              </Link>
              <Link href="/products" className="btn-secondary">
                Xem Giải Pháp
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div style={{
              width: '100%',
              height: '500px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15rem',
              opacity: 0.1
            }}>
              🤖
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div style={{
        background: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(59, 130, 246, 0.1)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.1)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '1.5rem' }}>★</span>
            <span>4.9/5 Đánh giá</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '1.5rem' }}>🚀</span>
            <span>5-7 Ngày Triển Khai</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '1.5rem' }}>💰</span>
            <span>ROI trong 3 tháng</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '1.5rem' }}>🔒</span>
            <span>Bảo mật tuyệt đối</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="page-title" style={{ fontSize: '3rem' }}>
              Giải Pháp AI Toàn Diện
            </h2>
            <p className="page-subtitle">
              5 sản phẩm AI mạnh mẽ giúp tự động hóa mọi khía cạnh của doanh nghiệp bạn
            </p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">🎯</div>
              <h3 className="product-title">AI Automation Tuyển Dụng</h3>
              <p className="product-description">
                Tự động sàng lọc CV, phỏng vấn ứng viên với AI, đánh giá năng lực và tìm được nhân tài phù hợp trong vòng 48 giờ
              </p>
              <ul className="product-features">
                <li>CV Screening tự động</li>
                <li>AI Interview Assistant</li>
                <li>Candidate Scoring</li>
              </ul>
              <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="product-card">
              <div className="product-icon">🔍</div>
              <h3 className="product-title">Hệ Thống AI SEO</h3>
              <p className="product-description">
                Tạo nội dung SEO tự động, nghiên cứu từ khóa thông minh, audit kỹ thuật và đưa website lên TOP Google
              </p>
              <ul className="product-features">
                <li>AI Content Generation</li>
                <li>Keyword Research tự động</li>
                <li>Technical SEO Audit</li>
              </ul>
              <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="product-card">
              <div className="product-icon">⚙️</div>
              <h3 className="product-title">AI Automation Tùy Chỉnh</h3>
              <p className="product-description">
                Giải pháp AI được thiết kế riêng cho doanh nghiệp bạn, tích hợp với hệ thống hiện tại và tối ưu quy trình độc đáo
              </p>
              <ul className="product-features">
                <li>Custom Workflow Design</li>
                <li>Integration với hệ thống</li>
                <li>Dedicated Support Team</li>
              </ul>
              <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="product-card">
              <div className="product-icon">💼</div>
              <h3 className="product-title">AI Automation Sale</h3>
              <p className="product-description">
                Tự động hóa quy trình bán hàng, chấm điểm leads, tiếp cận đa kênh và dự đoán doanh thu với độ chính xác cao
              </p>
              <ul className="product-features">
                <li>Lead Scoring & Qualification</li>
                <li>Multi-channel Outreach</li>
                <li>Predictive Analytics</li>
              </ul>
              <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="product-card">
              <div className="product-icon">🤖</div>
              <h3 className="product-title">Trợ Lý Cá Nhân AI</h3>
              <p className="product-description">
                Trợ lý AI làm việc 24/7 quản lý email, lịch hẹn, công việc và phân tích dữ liệu thay bạn
              </p>
              <ul className="product-features">
                <li>Email & Calendar Management</li>
                <li>Task & Project Automation</li>
                <li>Voice Commands & Analytics</li>
              </ul>
              <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                Tìm hiểu thêm →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="page-title" style={{ fontSize: '3rem' }}>
              Tại Sao Chọn Future Vision AI?
            </h2>
            <p className="page-subtitle">
              AI giúp bạn giải quyết triệt để những thách thức lớn nhất trong kinh doanh
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.1)'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '1rem'
              }}>
                70%
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tự động hóa công việc</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                AI xử lý tất cả tác vụ lặp lại, nhân viên tập trung vào công việc sáng tạo có giá trị cao
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.1)'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '1rem'
              }}>
                60-80%
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tiết kiệm chi phí nhân sự</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Giảm nhu cầu tuyển dụng, 1 AI có thể thay 3-5 nhân viên cho công việc thủ công
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.1)'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '1rem'
              }}>
                99.9%
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Độ chính xác</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                AI không bao giờ mệt mỏi, không bao giờ sai sót, xử lý chính xác 24/7
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.1)'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '1rem'
              }}>
                ∞
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Scale không giới hạn</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Tăng gấp đôi, gấp ba công việc mà không cần thêm nhân sự hay chi phí
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>
            Sẵn Sàng Chuyển Đổi Doanh Nghiệp Với AI?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Đừng để đối thủ vượt mặt. Bắt đầu tự động hóa ngay hôm nay!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:0889952123"
              style={{
                background: 'white',
                color: 'var(--primary)',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1rem'
              }}
            >
              📞 Gọi Ngay: 0889 952 123
            </a>
            <Link
              href="/contact"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1rem',
                border: '2px solid white'
              }}
            >
              Đặt Lịch Tư Vấn Miễn Phí
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
