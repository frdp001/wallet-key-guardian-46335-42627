# Build & Deployment Checklist

## ✅ Pre-Deployment Checklist

### Code Quality
- [x] All TypeScript errors resolved
- [x] No console errors in browser
- [x] All imports using `@/` alias
- [x] Semantic HSL colors used throughout
- [x] Responsive design tested (mobile, tablet, desktop)
- [x] All routes working correctly
- [x] 404 page styled and functional

### Performance
- [x] Images optimized and properly imported
- [x] Lazy loading implemented where appropriate
- [x] Code splitting configured
- [x] Bundle size optimized
- [x] No unnecessary dependencies

### SEO & Metadata
- [x] Meta tags configured (title, description, OG, Twitter)
- [x] robots.txt configured
- [x] sitemap.xml created
- [x] Canonical URLs set
- [x] Alt text on all images
- [x] Semantic HTML structure

### Configuration
- [x] vite.config.ts optimized for production
- [x] _redirects file for SPA routing
- [x] Environment variables documented
- [x] Build scripts tested locally
- [x] TypeScript strict mode enabled

### Security
- [x] No exposed API keys or secrets
- [x] Input validation on forms
- [x] Secure headers configured
- [x] HTTPS enforced

## 🚀 Cloudflare Pages Setup

### Repository
1. Code pushed to GitHub/GitLab
2. Repository is public or Cloudflare has access
3. Main/master branch is production-ready

### Build Configuration
```yaml
Build command: npm install && npm run build
Build output directory: dist
Root directory: /
Node version: 18 or 20
```

### Environment Variables (if needed)
- Set in Cloudflare Pages → Settings → Environment variables
- Use `VITE_` prefix for client-side variables
- Never commit secrets to repository

### Custom Domain (optional)
1. Add domain in Cloudflare Pages
2. Update DNS records
3. SSL certificate auto-provisioned
4. Verify HTTPS works

## 🔍 Testing

### Local Testing
```bash
# Development
npm run dev

# Production build
npm run build
npm run preview
```

### Test Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works (all links)
- [ ] Wallet page functions properly
- [ ] Forms submit correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Assets load properly
- [ ] Routes work (no 404s)
- [ ] Performance is good (Lighthouse)

## 📊 Post-Deployment Verification

### Functional Tests
- [ ] Visit production URL
- [ ] Test all routes manually
- [ ] Verify wallet connections work
- [ ] Check form submissions
- [ ] Test on multiple browsers
- [ ] Test on mobile devices

### Performance Tests
- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights
- [ ] Verify Core Web Vitals
- [ ] Test loading speed
- [ ] Check bundle size

### SEO Tests
- [ ] Google Search Console verification
- [ ] Sitemap submitted
- [ ] robots.txt accessible
- [ ] Meta tags rendering correctly
- [ ] Open Graph preview looks good
- [ ] Twitter Card preview looks good

## 🐛 Common Issues & Solutions

### Issue: Build Fails with Lockfile Error
**Solution**: Use npm instead of Bun
```bash
npm install && npm run build
```

### Issue: Routes Return 404
**Solution**: Verify `public/_redirects` exists:
```
/* /index.html 200
```

### Issue: Assets Not Loading
**Solution**: Check:
- Assets are in `src/assets/`
- Imports use `import img from '@/assets/img.png'`
- Vite config has correct alias

### Issue: Environment Variables Not Working
**Solution**: 
- Prefix with `VITE_`
- Restart dev server
- Rebuild for production

## 📈 Optimization Tips

### Performance
1. Enable Cloudflare caching
2. Configure cache rules
3. Enable Auto Minify
4. Enable Brotli compression
5. Use Cloudflare CDN

### Security
1. Add security headers
2. Configure CSP (Content Security Policy)
3. Enable Cloudflare firewall
4. Set up rate limiting
5. Enable DDoS protection

### Monitoring
1. Set up Cloudflare Analytics
2. Configure uptime monitoring
3. Enable error tracking
4. Set up performance monitoring
5. Configure alerts

## ✨ Success Criteria

Your deployment is successful when:

- ✅ Site loads in < 3 seconds
- ✅ Lighthouse score > 90
- ✅ No console errors
- ✅ All routes work
- ✅ Mobile responsive
- ✅ Forms functional
- ✅ HTTPS enabled
- ✅ Custom domain works (if configured)
- ✅ Analytics tracking
- ✅ SEO metadata correct

## 📞 Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [shadcn/ui Docs](https://ui.shadcn.com/)

---

**Ready to deploy?** Follow the steps in `DEPLOYMENT.md`!
