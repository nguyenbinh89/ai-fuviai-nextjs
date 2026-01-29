// File: app/page.tsx
// Homepage - Fuviai.com Design
// Complete redesign matching fuviai.com HTML

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        🎉 <span className="font-bold">MIỄN PHÍ TƯ VẤN</span> cho 10 khách hàng đầu tiên trong tháng 1 • 
        <span className="ml-2 animate-pulse">⏰ Còn 3 suất</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 pt-20 pb-24 px-4 overflow-hidden">
        {/* Decorative animated blobs */}
        <div 
          className="absolute top-20 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <div 
          className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-sky-100">
                <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                <span className="text-sm font-medium text-gray-700 ml-1">50+ khách hàng tin tưởng</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tự Động Hóa <span className="gradient-text">Công Việc</span> Trong <span className="highlight-text">5 Ngày</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Giảm <span className="font-bold text-sky-600">70% thời gian</span> xử lý công việc lặp đi lặp lại.<br/>
                Tăng <span className="font-bold text-sky-600">3X năng suất</span> với AI Automation từ Future Vision AI.
              </p>
              
              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-lg text-gray-700">✅ Triển khai trong 5-7 ngày</div>
                <div className="flex items-center gap-3 text-lg text-gray-700">✅ Không cần kiến thức lập trình</div>
                <div className="flex items-center gap-3 text-lg text-gray-700">✅ ROI 300% sau 3 tháng</div>
                <div className="flex items-center gap-3 text-lg text-gray-700">✅ Hỗ trợ 24/7 bằng tiếng Việt</div>
              </div>
              
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="group bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover-scale inline-flex items-center justify-center gap-2"
                >
                  Nhận Tư Vấn Miễn Phí
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover-lift inline-flex items-center justify-center gap-2 border-2 border-gray-200">
                  <span className="text-sky-600">▶</span>
                  Xem Demo 2 Phút
                </button>
              </div>
              
              {/* Micro-conversion */}
              <p className="text-sm text-gray-500 mt-4">🎁 Tặng kèm 20 workflow templates miễn phí • Không cần thẻ tín dụng</p>
            </div>
            
            {/* Right: Social Proof + Visual */}
            <div className="relative">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift">
                  <div className="text-4xl font-bold text-sky-600 mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Doanh nghiệp</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift">
                  <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
                  <div className="text-gray-600 text-sm">Tăng ROI</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift">
                  <div className="text-4xl font-bold text-orange-600 mb-2">70%</div>
                  <div className="text-gray-600 text-sm">Tiết kiệm thời gian</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift">
                  <div className="text-4xl font-bold text-purple-600 mb-2">5-7</div>
                  <div className="text-gray-600 text-sm">Ngày triển khai</div>
                </div>
              </div>
              
              {/* Testimonial Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift">
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Future Vision AI giúp chúng tôi tiết kiệm 20 giờ/tuần xử lý đơn hàng. ROI đạt 400% chỉ sau 2 tháng!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">NV</div>
                  <div>
                    <div className="font-semibold text-gray-900">Nguyễn Văn A</div>
                    <div className="text-sm text-gray-500">CEO, ShopXYZ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-gray-400 text-3xl">↓</span>
        </div>
      </section>

      {/* Trust Bar - Social Proof */}
      <section className="bg-white border-y border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div>
              <div className="text-4xl mb-2">👥</div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Khách hàng</div>
            </div>
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Workflows hoạt động</div>
            </div>
            <div>
              <div className="text-4xl mb-2">⏰</div>
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">Giờ tiết kiệm/tháng</div>
            </div>
            <div>
              <div className="text-4xl mb-2">📈</div>
              <div className="text-2xl font-bold text-gray-900">300%</div>
              <div className="text-sm text-gray-600">ROI trung bình</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <div className="text-6xl mb-4">😰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bạn đang gặp vấn đề này?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  Nhân viên mất 4-6h/ngày cho công việc lặp đi lặp lại
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  Xử lý đơn hàng chậm, khách hàng phàn nàn
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  Sai sót khi nhập liệu thủ công
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  Chi phí nhân sự tăng nhưng hiệu quả không cao
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  Muốn mở rộng nhưng quy trình chưa tự động
                </li>
              </ul>
            </div>
            
            {/* Solution */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-sky-200">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Giải pháp AI Automation từ Future Vision AI</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                  <span className="font-medium">Tự động hóa 70% công việc lặp đi lặp lại</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                  <span className="font-medium">Xử lý đơn hàng tự động 24/7, không sai sót</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                  <span className="font-medium">AI thông minh, chính xác 99.9%</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                  <span className="font-medium">Tiết kiệm 2-3 nhân sự, reinvest vào phát triển</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                  <span className="font-medium">Scale dễ dàng, không cần thêm headcount</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover-scale inline-flex items-center justify-center gap-2"
              >
                Bắt Đầu Ngay Hôm Nay
                →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Chỉ 3 Bước Đơn Giản</h2>
          <p className="text-xl text-gray-600 mb-16">Từ tư vấn đến triển khai chỉ mất 5-7 ngày</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-sky-200 to-blue-200 transform -translate-x-4 z-0"></div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">1</div>
                <div className="text-4xl mb-3">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tư Vấn Miễn Phí</h3>
                <p className="text-gray-600 mb-3">Gọi điện 30 phút, phân tích quy trình hiện tại của bạn</p>
                <div className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">⏱ 30 phút</div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-sky-200 to-blue-200 transform -translate-x-4 z-0"></div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">2</div>
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Xây Dựng & Test</h3>
                <p className="text-gray-600 mb-3">Đội ngũ chuyên gia xây dựng workflow theo đúng yêu cầu</p>
                <div className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">⏱ 3-5 ngày</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">3</div>
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Triển Khai & Đào Tạo</h3>
                <p className="text-gray-600 mb-3">Hệ thống chạy thực tế + đào tạo team sử dụng</p>
                <div className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">⏱ 1-2 ngày</div>
              </div>
            </div>
          </div>
          
          {/* Total Time */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
            <p className="text-2xl font-bold text-gray-900 mb-2">⚡ Tổng thời gian: <span className="text-green-600">5-7 ngày</span></p>
            <p className="text-gray-600">Sau đó bạn tiết kiệm 20+ giờ mỗi tuần, mãi mãi!</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Khách Hàng Thành Công</h2>
            <p className="text-xl text-gray-600">Kết quả thực tế từ 50+ doanh nghiệp Việt Nam</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">S</div>
                  <div>
                    <div className="font-bold text-gray-900">ShopXYZ</div>
                    <div className="text-sm text-gray-500">E-commerce</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 italic mb-4">"Không còn đơn hàng nào bị trễ kể từ khi dùng Future Vision AI"</p>
                <div className="space-y-2">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-green-700 font-bold">70% giảm thời gian xử lý đơn</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-blue-700 font-bold">+85% Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">A</div>
                  <div>
                    <div className="font-bold text-gray-900">ABC Agency</div>
                    <div className="text-sm text-gray-500">Marketing</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 italic mb-4">"Team giờ tập trung vào chiến lược thay vì copy-paste"</p>
                <div className="space-y-2">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-green-700 font-bold">20 giờ tiết kiệm mỗi tuần</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-blue-700 font-bold">+40% Engagement</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">T</div>
                  <div>
                    <div className="font-bold text-gray-900">Tech Solutions</div>
                    <div className="text-sm text-gray-500">B2B SaaS</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 italic mb-4">"ROI 300% sau 3 tháng. Best investment ever!"</p>
                <div className="space-y-2">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-green-700 font-bold">0% leads bị bỏ sót</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-blue-700 font-bold">+55% Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Đầu Tư Thông Minh</h2>
            <p className="text-xl text-gray-600">ROI 300% sau 3 tháng. Bạn tiết kiệm được bao nhiêu?</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="relative rounded-2xl p-8 bg-white border-2 border-gray-200 hover-lift">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter</h3>
                <p className="text-sm mb-4 text-gray-500">Cho SME & Startup</p>
                <div className="text-4xl font-bold text-sky-600 mb-1">15-25 triệu</div>
                <p className="text-sm text-gray-500">One-time fee</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">1-2 workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Tối đa 5 integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Triển khai 3-5 ngày</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Hỗ trợ 30 ngày</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Documentation đầy đủ</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="block w-full py-3 rounded-xl font-semibold text-center transition-all bg-gradient-to-r from-sky-600 to-blue-600 text-white hover-scale"
              >
                Bắt Đầu
              </Link>
            </div>
            
            {/* Professional Plan (Popular) */}
            <div className="relative rounded-2xl p-8 bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">⭐ Được Chọn Nhiều Nhất</div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
                <p className="text-sm mb-4 text-sky-100">Phổ biến nhất</p>
                <div className="text-4xl font-bold text-white mb-1">30-50 triệu</div>
                <p className="text-sm text-sky-100">One-time fee</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-sky-200 flex-shrink-0">✓</span>
                  <span className="text-sm text-white">3-5 workflows phức tạp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-200 flex-shrink-0">✓</span>
                  <span className="text-sm text-white">Unlimited integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-200 flex-shrink-0">✓</span>
                  <span className="text-sm text-white">Triển khai 5-7 ngày</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-200 flex-shrink-0">✓</span>
                  <span className="text-sm text-white">Hỗ trợ 90 ngày</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-200 flex-shrink-0">✓</span>
                  <span className="text-sm text-white">Đào tạo team</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-200 flex-shrink-0">✓</span>
                  <span className="text-sm text-white">Tối ưu liên tục</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-200 flex-shrink-0">✓</span>
                  <span className="text-sm text-white">Priority support 24/7</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="block w-full py-3 rounded-xl font-semibold text-center transition-all bg-white text-sky-600 hover:bg-sky-50"
              >
                Chọn Ngay
              </Link>
            </div>
            
            {/* Enterprise Plan */}
            <div className="relative rounded-2xl p-8 bg-white border-2 border-gray-200 hover-lift">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Enterprise</h3>
                <p className="text-sm mb-4 text-gray-500">Cho doanh nghiệp lớn</p>
                <div className="text-4xl font-bold text-sky-600 mb-1">Liên hệ</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Unlimited workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Dedicated team</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Hỗ trợ trọn đời</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">SLA 99.9%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Onsite training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Strategic consulting</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="block w-full py-3 rounded-xl font-semibold text-center transition-all bg-gradient-to-r from-sky-600 to-blue-600 text-white hover-scale"
              >
                Liên Hệ
              </Link>
            </div>
          </div>
          
          {/* ROI Calculator */}
          <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">💰 Tính Toán ROI Của Bạn</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-gray-600 mb-2 text-sm">Chi phí dịch vụ</div>
                <div className="text-3xl font-bold text-gray-900">30 triệu</div>
              </div>
              <div>
                <div className="text-gray-600 mb-2 text-sm">Tiết kiệm 20h/tuần × 4 tuần</div>
                <div className="text-3xl font-bold text-orange-600">80 giờ/tháng</div>
              </div>
              <div>
                <div className="text-gray-600 mb-2 text-sm">Giá trị thời gian (500k/h)</div>
                <div className="text-3xl font-bold text-green-600">40 triệu/tháng</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900">→ Hoà vốn sau <span className="text-green-600">1 tháng</span>, ROI <span className="text-green-600">300%</span> sau 3 tháng! 🚀</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-sky-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="text-6xl mb-4">🛡️</div>
          <h2 className="text-3xl font-bold mb-4">Cam Kết 100% Hài Lòng</h2>
          <p className="text-xl mb-6 text-sky-100">Nếu workflow không hoạt động đúng như mô tả, chúng tôi <span className="font-bold">sửa miễn phí</span> hoặc <span className="font-bold">hoàn lại 100% tiền</span> trong 30 ngày.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">✓ Không rủi ro</div>
            <div className="flex items-center gap-2">✓ Hỗ trợ 24/7</div>
            <div className="flex items-center gap-2">✓ Bảo hành trọn đời</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Tăng Năng Suất 3X?</h2>
          <p className="text-xl text-sky-100 mb-6">Hơn 50 doanh nghiệp đã tiết kiệm 1000+ giờ mỗi tháng. Đến lượt bạn!</p>
          <Link 
            href="/contact" 
            className="inline-flex bg-white text-sky-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-sky-50 hover-scale items-center gap-2"
          >
            Đăng Ký Tư Vấn Miễn Phí
            →
          </Link>
          <p className="text-sm text-sky-100 mt-4">⏰ Còn 3 suất tư vấn miễn phí trong tháng 1</p>
        </div>
      </section>
    </div>
  )
}
