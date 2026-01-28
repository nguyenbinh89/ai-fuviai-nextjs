# 🚀 Future Vision AI - Next.js + WordPress Headless

Complete setup guide cho ai.fuviai.com với Next.js và WordPress Headless CMS.

---

## 📋 MỤC LỤC

1. [Tổng Quan Kiến Trúc](#tổng-quan-kiến-trúc)
2. [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
3. [Setup WordPress Headless](#setup-wordpress-headless)
4. [Setup Next.js](#setup-nextjs)
5. [Deploy lên Vercel](#deploy-lên-vercel)
6. [Cấu Hình DNS](#cấu-hình-dns)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)

---

## 📊 TỔNG QUAN KIẾN TRÚC

```
Frontend (Next.js)          Backend (WordPress)
ai.fuviai.com       ←API→   cms.fuviai.com
   Vercel                   DirectAdmin Hosting
```

### **Ưu điểm:**
- ✅ Performance: Next.js ISR/SSG siêu nhanh
- ✅ SEO Perfect: Server-side rendering
- ✅ Security: WordPress ẩn đằng sau API
- ✅ Scalability: Frontend/Backend tách biệt
- ✅ Modern DX: React, TypeScript, Tailwind

---

## 🔧 YÊU CẦU HỆ THỐNG

### **Local Development:**
- Node.js 18+ 
- npm hoặc yarn
- Git

### **Hosting:**
- WordPress hosting (DirectAdmin của bạn)
- Vercel account (free tier OK)
- Domain: fuviai.com

---

## 🎯 BƯỚC 1: SETUP WORDPRESS HEADLESS

### **1.1. Tạo Subdomain cho WordPress**

Trong **DirectAdmin:**

1. **Subdomain Management** → Create new:
   - Subdomain: `cms`
   - Domain: `fuviai.com`
   - Result: `cms.fuviai.com`

2. **SSL Certificates**:
   - Enable SSL cho `cms.fuviai.com`

### **1.2. Cài WordPress**

**Option A: Softaculous (Auto Installer)**
1. Find "Softaculous" trong DirectAdmin
2. Choose "WordPress"
3. Domain: `cms.fuviai.com`
4. Install

**Option B: Manual**
1. Download WordPress: https://wordpress.org/download/
2. Upload to `/public_html/cms/`
3. Create database trong DirectAdmin
4. Run installer: `https://cms.fuviai.com/wp-admin/install.php`

### **1.3. Cài Plugins Cần Thiết**

Vào WordPress Admin → Plugins → Add New:

#### **A. WPGraphQL** ⭐ BẮT BUỘC
```
Plugin: WPGraphQL
URL: https://wordpress.org/plugins/wp-graphql/
```

#### **B. Headless Mode** (Optional)
```
Plugin: Headless Mode
Purpose: Disable WP frontend, keep admin only
```

#### **C. WPGraphQL for ACF** (Nếu dùng custom fields)
```
Plugin: WPGraphQL for Advanced Custom Fields
```

#### **D. Yoast SEO** (Recommended)
```
Plugin: Yoast SEO
Purpose: SEO management
```

### **1.4. Cấu Hình WordPress**

**wp-config.php** - Thêm vào cuối file:

```php
// Allow CORS from Next.js
define('HEADLESS_FRONTEND_URL', 'https://ai.fuviai.com');

// Enable REST API
define('REST_API_ENABLED', true);
```

**functions.php** - Thêm custom post types:

```php
// Service Post Type
function create_service_post_type() {
    register_post_type('service',
        array(
            'labels' => array(
                'name' => __('Services'),
                'singular_name' => __('Service')
            ),
            'public' => true,
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'service',
            'graphql_plural_name' => 'services',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        )
    );
}
add_action('init', 'create_service_post_type');
```

### **1.5. Tạo Nội Dung Mẫu**

1. **Posts** → Add New (3-5 bài blog)
2. **Services** → Add New (các dịch vụ)
3. **Pages** → Add New (About, Contact, etc.)
4. Upload featured images cho mỗi post/service

### **1.6. Test GraphQL API**

Truy cập: `https://cms.fuviai.com/graphql`

Chạy query test:
```graphql
query {
  posts {
    nodes {
      title
      excerpt
    }
  }
}
```

Nếu thấy dữ liệu → SUCCESS! ✅

---

## 🎯 BƯỚC 2: SETUP NEXT.JS

### **2.1. Clone Repository**

```bash
# Clone code đã tạo
cd /home/claude/ai-fuviai-nextjs

# Hoặc download và extract
```

### **2.2. Cài Dependencies**

```bash
npm install
```

### **2.3. Cấu Hình Environment**

Tạo file `.env.local`:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://cms.fuviai.com/graphql
NEXT_PUBLIC_SITE_URL=https://ai.fuviai.com
REVALIDATE_TIME=60
```

### **2.4. Test Local**

```bash
npm run dev
```

Mở: `http://localhost:3000`

**Kiểm tra:**
- ✅ Homepage hiển thị
- ✅ Services từ WordPress xuất hiện
- ✅ Blog posts hiển thị
- ✅ Featured images load được
- ✅ Click vào post/service → detail page works

---

## 🚀 BƯỚC 3: DEPLOY LÊN VERCEL

### **3.1. Push Code lên GitHub**

```bash
# Initialize git (nếu chưa có)
git init
git add .
git commit -m "Initial commit: Next.js + WP Headless"

# Create GitHub repo
# Trên GitHub.com: New Repository → ai-fuviai-nextjs

# Push code
git remote add origin https://github.com/YOUR_USERNAME/ai-fuviai-nextjs.git
git push -u origin main
```

### **3.2. Deploy trên Vercel**

1. **Đăng nhập Vercel**: https://vercel.com
2. **New Project** → Import từ GitHub
3. Select repository: `ai-fuviai-nextjs`
4. **Environment Variables** - Thêm:
   ```
   NEXT_PUBLIC_WORDPRESS_API_URL = https://cms.fuviai.com/graphql
   NEXT_PUBLIC_SITE_URL = https://ai.fuviai.com
   REVALIDATE_TIME = 60
   ```
5. **Deploy**

Đợi 2-3 phút → Deploy xong!

### **3.3. Lấy Vercel Domain**

Sau khi deploy, Vercel sẽ cung cấp URL:
```
https://ai-fuviai-nextjs-xxx.vercel.app
```

Test URL này trước!

---

## 🌐 BƯỚC 4: CẤU HÌNH DNS

### **4.1. Add Custom Domain trong Vercel**

1. Vercel Dashboard → Project Settings → **Domains**
2. Add domain: `ai.fuviai.com`
3. Vercel sẽ hiển thị DNS records cần thêm:
   ```
   Type: CNAME
   Name: ai
   Value: cname.vercel-dns.com
   ```

### **4.2. Cấu Hình DNS trong Tenten**

1. Login Tenten: https://tenten.vn
2. Vào quản lý domain `fuviai.com`
3. **DNS Management** → Add Record:
   ```
   Type: CNAME
   Host: ai
   Value: cname.vercel-dns.com
   TTL: 3600
   ```
4. Save

### **4.3. Đợi DNS Propagate**

- Thời gian: 15 phút - 2 giờ
- Check status: https://dnschecker.org

### **4.4. Verify trong Vercel**

1. Quay lại Vercel → Domains
2. `ai.fuviai.com` sẽ chuyển từ 🔴 → 🟢
3. SSL auto-issued (5-10 phút)

### **4.5. Test Production**

```
https://ai.fuviai.com
```

**Should see:**
- ✅ Website loads
- ✅ HTTPS (🔒 padlock)
- ✅ Fast loading (< 1s)
- ✅ Content từ WordPress

---

## ✅ BƯỚC 5: TESTING

### **5.1. Functionality Tests**

- [ ] Homepage loads
- [ ] Services page shows all services
- [ ] Blog page shows all posts
- [ ] Click service → detail page
- [ ] Click blog post → detail page
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Footer links work

### **5.2. Performance Tests**

Test tại: https://pagespeed.web.dev

Target scores:
- Performance: > 90
- Accessibility: > 90
- SEO: > 95

### **5.3. SEO Tests**

- [ ] Title tags correct
- [ ] Meta descriptions present
- [ ] OG images showing
- [ ] Structured data valid
- [ ] Sitemap exists: `/sitemap.xml`

### **5.4. Mobile Tests**

- [ ] Responsive design
- [ ] Touch-friendly
- [ ] Fast on 3G/4G

---

## 🔄 WORKFLOW SAU KHI DEPLOY

### **Thêm Content Mới:**

1. Login WordPress: `https://cms.fuviai.com/wp-admin`
2. Tạo post/service mới
3. Publish
4. **Next.js tự động update trong 60 giây** (ISR)
5. No need to redeploy!

### **Thay Đổi Code:**

1. Edit code locally
2. Test: `npm run dev`
3. Commit + push to GitHub
4. Vercel auto-deploy
5. Live trong 2-3 phút

---

## 🎨 CUSTOMIZATION

### **Đổi Colors:**

File: `tailwind.config.ts`

```typescript
colors: {
  primary: '#00f0ff',    // Cyan
  secondary: '#7000ff',  // Purple
  accent: '#ff0080',     // Magenta
  dark: '#0a0a0f',      // Background
}
```

### **Thêm Custom Post Type:**

File WordPress: `functions.php`

```php
function create_custom_post_type() {
    register_post_type('your_type',
        array(
            'labels' => array('name' => __('Your Type')),
            'public' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'yourType',
            'graphql_plural_name' => 'yourTypes',
        )
    );
}
add_action('init', 'create_custom_post_type');
```

### **Thêm Query mới:**

File: `lib/wordpress-api.ts`

```typescript
export const GET_YOUR_TYPE = gql`
  query GetYourType {
    yourTypes {
      nodes {
        id
        title
        content
      }
    }
  }
`;
```

---

## 🐛 TROUBLESHOOTING

### **Problem: GraphQL endpoint not found**

**Solution:**
1. Check WPGraphQL plugin active
2. Verify URL: `https://cms.fuviai.com/graphql`
3. Check WordPress permalink settings

### **Problem: Images not loading**

**Solution:**
1. Check `next.config.js` domains
2. Verify image URLs trong WordPress
3. Check CORS settings

### **Problem: Content not updating**

**Solution:**
1. Clear Vercel cache
2. Check ISR revalidate time
3. Force revalidation: `/api/revalidate`

### **Problem: SSL error**

**Solution:**
1. Wait 10-20 minutes
2. Check DNS propagation
3. Verify CNAME pointing to Vercel

---

## 📊 MONITORING & ANALYTICS

### **Setup Google Analytics:**

File: `app/layout.tsx`

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### **Setup Vercel Analytics:**

```bash
npm install @vercel/analytics
```

`app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 💰 CHI PHÍ

### **WordPress Hosting:**
- DirectAdmin: ~40-100k VNĐ/tháng (bạn đã có)

### **Vercel:**
- Free tier: 100GB bandwidth/tháng ✅
- Nếu vượt: $20/tháng Pro plan

### **Total:**
- Chi phí thực tế: ~40-100k VNĐ/tháng
- Vercel free là đủ cho startup/SME

---

## 🎯 NEXT STEPS

### **Phase 1: MVP (Done)**
- ✅ Next.js + WordPress setup
- ✅ Basic pages (Home, Blog, Services)
- ✅ Deploy on Vercel
- ✅ Custom domain

### **Phase 2: Enhancement**
- [ ] Contact form với n8n webhook
- [ ] Search functionality
- [ ] Newsletter signup
- [ ] Case studies section

### **Phase 3: Advanced**
- [ ] Multilingual (vi/en)
- [ ] AI chatbot integration
- [ ] Analytics dashboard
- [ ] A/B testing

---

## 📚 RESOURCES

- Next.js Docs: https://nextjs.org/docs
- WPGraphQL Docs: https://www.wpgraphql.com/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

## 🆘 SUPPORT

**Issues:**
- GitHub: Create issue trong repository
- Email: support@fuviai.com
- Zalo: 0889 952 123

---

**CHÚC BẠN THÀNH CÔNG! 🎉🚀**
