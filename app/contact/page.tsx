// FILE: app/contact/page.tsx  
// Tạo folder app/contact/ và copy file này vào app/contact/page.tsx

'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted! (Demo mode)')
    console.log('Form data:', formData)
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Liên Hệ Với Chúng Tôi</h1>
        <p className="page-subtitle">
          Đặt lịch tư vấn miễn phí hoặc liên hệ trực tiếp để biết thêm thông tin về giải pháp AI automation
        </p>
      </div>

      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Thông Tin Liên Hệ</h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: 1.8
              }}>
                Chúng tôi sẵn sàng tư vấn miễn phí về giải pháp tự động hóa phù hợp nhất với doanh nghiệp của bạn.
                Hãy liên hệ ngay để được hỗ trợ!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { icon: '📱', title: 'Hotline', value: '0889 952 123', link: 'tel:0889952123', note: 'Thứ 2 - Chủ Nhật: 8:00 - 22:00' },
                  { icon: '📧', title: 'Email', value: 'info@fuviai.com', link: 'mailto:info@fuviai.com', note: 'Phản hồi trong vòng 24 giờ' },
                  { icon: '💬', title: 'Zalo', value: 'Chat ngay trên Zalo', link: 'https://zalo.me/0889952123', note: 'Hỗ trợ trực tuyến nhanh chóng' },
                  { icon: '📍', title: 'Địa chỉ', value: 'Thù Lỗ, Thư Lâm', note: 'Thứ 2 - Thứ 6: 9:00 - 18:00' }
                ].map((method, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
                      borderRadius: '1rem',
                      border: '1px solid rgba(59, 130, 246, 0.1)'
                    }}
                  >
                    <div style={{ fontSize: '2rem' }}>{method.icon}</div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem' }}>{method.title}</h4>
                      {method.link ? (
                        <a
                          href={method.link}
                          style={{
                            color: 'var(--primary)',
                            textDecoration: 'none',
                            fontWeight: 600
                          }}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p style={{ color: 'var(--text)' }}>{method.value}</p>
                      )}
                      <p style={{
                        marginTop: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem'
                      }}>
                        {method.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>
                Đặt Lịch Tư Vấn Miễn Phí
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và Tên *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Số Điện Thoại *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="0889 952 123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Tên Công Ty</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="ABC Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Sản Phẩm Quan Tâm *</label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">-- Chọn sản phẩm --</option>
                    <option value="recruitment">AI Automation Tuyển Dụng</option>
                    <option value="seo">Hệ Thống AI SEO</option>
                    <option value="sale">AI Automation Sale</option>
                    <option value="assistant">Trợ Lý Cá Nhân AI</option>
                    <option value="custom">AI Automation Tùy Chỉnh</option>
                    <option value="all">Tư vấn tất cả sản phẩm</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Nhu Cầu Cụ Thể</label>
                  <textarea
                    id="message"
                    placeholder="Mô tả ngắn gọn về nhu cầu và mục tiêu của doanh nghiệp bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                  Gửi Thông Tin Ngay
                </button>

                <p style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center'
                }}>
                  ✅ Không cần thẻ tín dụng • 🔒 Thông tin được bảo mật
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Vị Trí Văn Phòng</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Hẹn gặp bạn tại văn phòng của chúng tôi
          </p>

          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            height: '500px',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)'
          }}>
            🗺️ Bản đồ Google Maps sẽ được nhúng tại đây
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bạn Cần Hỗ Trợ Gấp?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Gọi hotline ngay để được tư vấn trực tiếp từ chuyên gia
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
            <a
              href="https://zalo.me/0889952123"
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
              💬 Chat Zalo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
