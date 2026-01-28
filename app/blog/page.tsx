// FILE: app/blog/page.tsx
// Tạo folder app/blog/ và copy file này vào app/blog/page.tsx

import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    { icon: '📊', category: 'Case Study', date: '15/01/2026', title: 'Công Ty XYZ Tiết Kiệm 500 Triệu/Năm Nhờ AI Automation', excerpt: 'Tìm hiểu cách công ty XYZ trong ngành F&B đã tự động hóa 80% quy trình bán hàng và marketing, giảm 70% chi phí nhân sự chỉ trong 3 tháng...' },
    { icon: '🤖', category: 'Hướng Dẫn', date: '12/01/2026', title: '5 Bước Triển Khai AI Chatbot Cho Doanh Nghiệp SME', excerpt: 'Hướng dẫn chi tiết cách setup AI chatbot từ A-Z, tích hợp với website, Facebook, Zalo để tự động trả lời khách hàng 24/7...' },
    { icon: '💡', category: 'Kiến Thức', date: '10/01/2026', title: 'AI vs RPA: Đâu Là Giải Pháp Tự Động Hóa Phù Hợp Với Bạn?', excerpt: 'So sánh chi tiết giữa AI automation và RPA, ưu nhược điểm của từng loại và cách chọn giải pháp phù hợp với doanh nghiệp...' },
    { icon: '🎯', category: 'Case Study', date: '08/01/2026', title: 'Startup ABC Tăng 300% Lead Chất Lượng Với AI Lead Scoring', excerpt: 'Câu chuyện thực tế về cách một startup B2B SaaS tăng gấp 3 conversion rate nhờ tự động chấm điểm và phân loại leads bằng AI...' },
    { icon: '📈', category: 'Xu Hướng', date: '05/01/2026', title: 'Top 10 Xu Hướng AI Automation Năm 2026', excerpt: 'Khám phá những xu hướng AI automation mới nhất sẽ thống trị năm 2026: từ AI agents, multi-modal AI đến hyperautomation...' },
    { icon: '🔍', category: 'SEO', date: '03/01/2026', title: 'Cách AI SEO Đưa Website Lên TOP 3 Google Trong 60 Ngày', excerpt: 'Case study chi tiết về cách sử dụng AI để nghiên cứu từ khóa, tạo nội dung và tối ưu technical SEO để đạt top 3 trong 2 tháng...' },
    { icon: '💼', category: 'Hướng Dẫn', date: '01/01/2026', title: 'n8n vs Zapier vs Make: So Sánh 3 Nền Tảng Automation Hàng Đầu', excerpt: 'Phân tích chi tiết ưu nhược điểm, giá cả và use cases phù hợp của 3 công cụ workflow automation phổ biến nhất hiện nay...' },
    { icon: '🚀', category: 'Kiến Thức', date: '28/12/2025', title: 'ROI Của AI Automation: Tính Toán Chi Tiết & Case Studies', excerpt: 'Hướng dẫn cách tính toán ROI khi đầu tư vào AI automation, kèm theo 5 case studies thực tế với số liệu cụ thể...' },
    { icon: '🎓', category: 'Hướng Dẫn', date: '25/12/2025', title: 'Xây Dựng Chatbot AI Đa Ngôn Ngữ Với Claude và n8n', excerpt: 'Tutorial từng bước cách tạo chatbot AI hỗ trợ tiếng Việt và tiếng Anh, tích hợp với website, Facebook Messenger và Zalo...' }
  ]

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Tin Tức & Blog</h1>
        <p className="page-subtitle">
          Cập nhật kiến thức mới nhất về AI automation, case studies và best practices
        </p>
      </div>

      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-image">{post.icon}</div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link
                    href="#"
                    style={{
                      color: 'var(--primary)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Đọc thêm →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
