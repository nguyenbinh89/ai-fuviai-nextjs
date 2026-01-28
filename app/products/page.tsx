// FILE: app/products/page.tsx
// Tạo folder app/products/ và copy file này vào app/products/page.tsx

import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      icon: '🎯',
      title: 'AI Automation Tuyển Dụng',
      description: 'Tự động sàng lọc CV, phỏng vấn ứng viên với AI, đánh giá năng lực và tìm được nhân tài phù hợp trong vòng 48 giờ.',
      features: [
        'CV Screening tự động với AI - Phân tích và xếp hạng hàng trăm CV trong vài phút',
        'AI Interview Assistant - Phỏng vấn sơ bộ ứng viên 24/7, tiết kiệm 80% thời gian',
        'Candidate Scoring - Đánh giá và so sánh ứng viên dựa trên tiêu chí khách quan',
        'Automated Scheduling - Tự động đặt lịch phỏng vấn với ứng viên phù hợp',
        'Integration với ATS - Tích hợp liền mạch với hệ thống tuyển dụng hiện tại'
      ]
    },
    {
      icon: '🔍',
      title: 'Hệ Thống AI SEO',
      description: 'Tạo nội dung SEO tự động, nghiên cứu từ khóa thông minh, audit kỹ thuật và đưa website lên TOP Google.',
      features: [
        'AI Content Generation - Tạo hàng trăm bài viết SEO chất lượng cao tự động',
        'Keyword Research AI - Phân tích và tìm từ khóa tiềm năng với độ chính xác cao',
        'Technical SEO Audit - Quét và sửa lỗi kỹ thuật tự động',
        'Competitor Analysis - Phân tích đối thủ và đề xuất chiến lược',
        'Rank Tracking - Theo dõi thứ hạng từ khóa real-time'
      ]
    },
    {
      icon: '💼',
      title: 'AI Automation Sale',
      description: 'Tự động hóa quy trình bán hàng, chấm điểm leads, tiếp cận đa kênh và dự đoán doanh thu với độ chính xác cao.',
      features: [
        'Lead Scoring & Qualification - AI chấm điểm và phân loại leads tự động',
        'Multi-channel Outreach - Tiếp cận khách hàng qua email, SMS, social tự động',
        'Predictive Analytics - Dự đoán doanh thu và conversion rate chính xác',
        'Sales Pipeline Automation - Tự động di chuyển leads qua các giai đoạn',
        'CRM Integration - Đồng bộ với Salesforce, HubSpot, Pipedrive...'
      ]
    },
    {
      icon: '🤖',
      title: 'Trợ Lý Cá Nhân AI',
      description: 'Trợ lý AI làm việc 24/7 quản lý email, lịch hẹn, công việc và phân tích dữ liệu thay bạn.',
      features: [
        'Email & Calendar Management - Tự động sắp xếp lịch và trả lời email',
        'Task & Project Automation - Quản lý công việc và theo dõi tiến độ tự động',
        'Voice Commands - Điều khiển bằng giọng nói tiếng Việt',
        'Smart Analytics - Phân tích và báo cáo năng suất cá nhân',
        'Personal Assistant - Nhắc nhở, đề xuất và hỗ trợ 24/7'
      ]
    },
    {
      icon: '⚙️',
      title: 'AI Automation Tùy Chỉnh',
      description: 'Giải pháp AI được thiết kế riêng cho doanh nghiệp bạn, tích hợp với hệ thống hiện tại và tối ưu quy trình độc đáo.',
      features: [
        'Custom Workflow Design - Thiết kế quy trình tự động theo yêu cầu riêng',
        'System Integration - Tích hợp với mọi hệ thống và phần mềm hiện tại',
        'Dedicated Support Team - Đội ngũ hỗ trợ riêng 24/7',
        'Scalable Architecture - Kiến trúc mở rộng theo nhu cầu phát triển',
        'Continuous Optimization - Liên tục tối ưu và cải thiện hiệu suất'
      ]
    }
  ]

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Sản Phẩm & Giải Pháp</h1>
        <p className="page-subtitle">
          5 sản phẩm AI automation mạnh mẽ giúp tự động hóa mọi khía cạnh của doanh nghiệp bạn
        </p>
      </div>

      {/* Product Details */}
      {products.map((product, idx) => (
        <section
          key={idx}
          style={{
            background: idx % 2 === 0 ? 'white' : '#f8fafc',
            padding: '4rem 0'
          }}
        >
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              direction: idx % 2 === 0 ? 'ltr' : 'rtl'
            }}>
              <div style={{ direction: 'ltr' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                  {product.icon} {product.title}
                </h2>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem',
                  lineHeight: 1.8
                }}>
                  {product.description}
                </p>
                <ul className="product-features" style={{ marginBottom: '2rem' }}>
                  {product.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      style={{
                        padding: '1rem 0',
                        borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <span style={{ color: 'var(--success)', fontWeight: 'bold', fontSize: '1.5rem' }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary">
                  Tư Vấn Ngay
                </Link>
              </div>
              <div style={{
                direction: 'ltr',
                height: '400px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                borderRadius: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem'
              }}>
                {product.icon}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing */}
      <section style={{
        background: 'linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bảng Giá Linh Hoạt</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Chọn gói phù hợp với quy mô doanh nghiệp của bạn
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              {
                name: 'Starter',
                price: '5-10tr',
                period: '/tháng',
                features: [
                  '1-2 workflow automation',
                  'Hỗ trợ email',
                  'Dashboard cơ bản',
                  'Integration 5 apps',
                  '500 tác vụ/tháng'
                ]
              },
              {
                name: 'Professional',
                price: '15-30tr',
                period: '/tháng',
                featured: true,
                features: [
                  '5-10 workflow automation',
                  'Hỗ trợ 24/7',
                  'Dashboard nâng cao',
                  'Integration không giới hạn',
                  '5000 tác vụ/tháng',
                  'Custom AI models'
                ]
              },
              {
                name: 'Enterprise',
                price: 'Liên hệ',
                period: 'Báo giá riêng',
                features: [
                  'Unlimited workflows',
                  'Dedicated team',
                  'Custom dashboard',
                  'On-premise deployment',
                  'Unlimited tasks',
                  'SLA 99.9%',
                  'Priority support'
                ]
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  padding: '3rem 2rem',
                  borderRadius: '1.5rem',
                  border: plan.featured ? '2px solid var(--primary)' : '2px solid rgba(59, 130, 246, 0.1)',
                  transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: plan.featured ? '0 20px 40px rgba(59, 130, 246, 0.2)' : 'none'
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                  {plan.name}
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {plan.price}
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  {plan.period}
                </div>
                <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2rem' }}>
                  {plan.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      style={{
                        padding: '0.75rem 0',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <span style={{ color: 'var(--success)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                  {plan.name === 'Enterprise' ? 'Liên Hệ' : 'Chọn Gói'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
