# 🚀 QUICK START - 15 PHÚT SETUP

## BƯỚC 1: SETUP WORDPRESS (5 phút)

1. **Tạo subdomain trong DirectAdmin:**
   - Subdomain Management → Create: `cms`
   - Result: `cms.fuviai.com`

2. **Cài WordPress:**
   - Softaculous → WordPress
   - Domain: `cms.fuviai.com`
   - Install

3. **Cài plugin:**
   - WPGraphQL (BẮT BUỘC)
   - Yoast SEO (Khuyên dùng)

4. **Tạo content mẫu:**
   - 3-5 blog posts
   - 2-3 services
   - Upload featured images

5. **Test API:**
   - Vào: `https://cms.fuviai.com/graphql`
   - Chạy query test
   - Thấy dữ liệu → OK!

---

## BƯỚC 2: DEPLOY NEXT.JS (5 phút)

1. **Upload code lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/ai-fuviai-nextjs.git
   git push -u origin main
   ```

2. **Deploy Vercel:**
   - Login: https://vercel.com
   - New Project → Import GitHub repo
   - Add Environment Variables:
     ```
     NEXT_PUBLIC_WORDPRESS_API_URL=https://cms.fuviai.com/graphql
     NEXT_PUBLIC_SITE_URL=https://ai.fuviai.com
     ```
   - Deploy

3. **Test Vercel URL:**
   - `https://ai-fuviai-nextjs-xxx.vercel.app`
   - Check content hiển thị

---

## BƯỚC 3: SETUP DOMAIN (5 phút)

1. **Trong Vercel:**
   - Settings → Domains
   - Add: `ai.fuviai.com`
   - Note: CNAME value

2. **Trong Tenten:**
   - DNS Management → fuviai.com
   - Add CNAME:
     ```
     Host: ai
     Value: cname.vercel-dns.com
     ```
   - Save

3. **Đợi & Test:**
   - Đợi 15-30 phút
   - Test: `https://ai.fuviai.com`
   - Thấy website → DONE! 🎉

---

## ✅ CHECKLIST

- [ ] WordPress installed on cms.fuviai.com
- [ ] WPGraphQL plugin active
- [ ] Sample content created
- [ ] Code pushed to GitHub
- [ ] Vercel deployed
- [ ] Custom domain added
- [ ] DNS configured
- [ ] ai.fuviai.com working!

---

## 🆘 NẾU GẶP LỖI

**WordPress API không work:**
- Check WPGraphQL plugin
- Check permalink settings
- Test URL: `https://cms.fuviai.com/graphql`

**Vercel deploy fail:**
- Check environment variables
- Check Node.js version (18+)
- Read build logs

**Domain không work:**
- Check DNS propagation: https://dnschecker.org
- Đợi thêm 1-2 giờ
- Check Vercel domain status

---

**MỌI THỨ OK? LÀM TIẾP:**

1. Add Google Analytics
2. Setup contact form
3. Add more content
4. Optimize images
5. Setup monitoring

**DONE! 🎊**
