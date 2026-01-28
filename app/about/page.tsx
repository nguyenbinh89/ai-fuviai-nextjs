// FILE: app/about/page.tsx
// Tạo folder: app/about/
// Copy file này vào: app/about/page.tsx

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Về Future Vision AI</h1>
        <p className="page-subtitle">
          Chúng tôi là đơn vị tiên phong trong lĩnh vực tự động hóa doanh nghiệp với công nghệ AI và n8n,
          giúp hàng trăm doanh nghiệp Việt Nam chuyển đổi số thành công
        </p>
      </div>

      {/* Story Section */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Câu Chuyện Của Chúng Tôi</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Future Vision AI được thành lập với sứ mệnh giúp các doanh nghiệp Việt Nam tiếp cận và
                ứng dụng công nghệ AI một cách dễ dàng, hiệu quả và tiết kiệm chi phí.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Chúng tôi nhận thấy rằng nhiều doanh nghiệp đang lãng phí hàng trăm giờ vào các công việc
                thủ công, lặp đi lặp lại có thể được tự động hóa hoàn toàn. Đó là lý do chúng tôi ra đời -
                để mang đến giải pháp AI thực sự có thể áp dụng, không phức tạp, và mang lại ROI rõ ràng.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ và tự động hóa, đội ngũ của chúng tôi
                đã giúp hơn 500+ doanh nghiệp tiết kiệm hàng tỷ đồng chi phí và tăng gấp 3 lần năng suất.
              </p>
            </div>
            <div style={{
              height: '400px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10rem'
            }}>
              🚀
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '1.5rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sứ Mệnh</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Giúp mọi doanh nghiệp Việt Nam, dù lớn hay nhỏ, đều có thể tiếp cận và
                ứng dụng công nghệ AI để tự động hóa quy trình, tăng năng suất và tập trung
                vào những việc thực sự quan trọng.
              </p>
            </div>

            <div style={{ background: 'white', padding: '3rem', borderRadius: '1.5rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🌟</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tầm Nhìn</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Trở thành đơn vị hàng đầu Việt Nam về giải pháp tự động hóa doanh nghiệp với AI,
                góp phần đưa Việt Nam trở thành một trong những quốc gia dẫn đầu về chuyển đổi số
                trong khu vực Đông Nam Á.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="page-title" style={{ fontSize: '2.5rem' }}>Giá Trị Cốt Lõi</h2>
            <p className="page-subtitle">Những nguyên tắc định hướng mọi hành động của chúng tôi</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: '💡', title: 'Đổi Mới Không Ngừng', desc: 'Luôn học hỏi, cập nhật công nghệ mới nhất để mang đến giải pháp tốt nhất cho khách hàng' },
              { icon: '🤝', title: 'Khách Hàng Là Trung Tâm', desc: 'Thành công của khách hàng là thành công của chúng tôi. Chúng tôi luôn đặt lợi ích khách hàng lên hàng đầu' },
              { icon: '✨', title: 'Chất Lượng Vượt Trội', desc: 'Cam kết mang đến sản phẩm và dịch vụ chất lượng cao, vượt mong đợi của khách hàng' },
              { icon: '🔒', title: 'Bảo Mật Tuyệt Đối', desc: 'Dữ liệu khách hàng được bảo vệ với công nghệ mã hóa cao cấp và quy trình bảo mật nghiêm ngặt' },
              { icon: '⚡', title: 'Nhanh Chóng & Hiệu Quả', desc: 'Triển khai nhanh trong 5-7 ngày, đem lại ROI rõ ràng ngay trong 3 tháng đầu' },
              { icon: '🎓', title: 'Đào Tạo & Hỗ Trợ', desc: 'Đào tạo chi tiết cho team khách hàng và hỗ trợ 24/7 để đảm bảo vận hành trơn tru' }
            ].map((value, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
                borderRadius: '1rem',
                border: '1px solid rgba(59, 130, 246, 0.1)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{value.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="page-title" style={{ fontSize: '2.5rem' }}>Đội Ngũ Chuyên Gia</h2>
            <p className="page-subtitle">Những con người tài năng đằng sau sự thành công của 500+ khách hàng</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { avatar: '👨‍💼', name: 'Nguyễn Văn A', role: 'CEO & Founder', bio: '10+ năm kinh nghiệm trong AI và tự động hóa. Cựu kỹ sư tại Google và Facebook' },
              { avatar: '👩‍💻', name: 'Trần Thị B', role: 'CTO', bio: 'Chuyên gia về n8n và workflow automation. 8 năm kinh nghiệm backend development' },
              { avatar: '👨‍🎨', name: 'Lê Văn C', role: 'Lead AI Engineer', bio: 'Tiến sĩ về Machine Learning. Từng làm việc tại Microsoft Research Asia' },
              { avatar: '👩‍💼', name: 'Phạm Thị D', role: 'Head of Customer Success', bio: 'Chuyên gia về tối ưu quy trình doanh nghiệp. 7 năm kinh nghiệm tư vấn' }
            ].map((member, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  {member.avatar}
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{member.name}</h4>
                <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>{member.role}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Con Số Ấn Tượng</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem' }}>
            Minh chứng cho sự tin tưởng và thành công
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
            {[
              { number: '500+', label: 'Khách Hàng' },
              { number: '10+', label: 'Năm Kinh Nghiệm' },
              { number: '4.9', label: 'Đánh Giá Trung Bình' },
              { number: '1000+', label: 'Dự Án Hoàn Thành' }
            ].map((stat, idx) => (
              <div key={idx} style={{ padding: '2rem' }}>
                <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem' }}>{stat.number}</div>
                <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
