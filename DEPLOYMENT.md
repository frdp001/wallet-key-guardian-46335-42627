# Deployment Instructions

## ✅ Cloudflare Pages (Recommended)

### Step 1: Prepare Repository
Ensure your code is pushed to GitHub, GitLab, or Bitbucket.

### Step 2: Create Cloudflare Pages Project

1. Visit [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select your repository

### Step 3: Configure Build Settings

```yaml
Production branch: main
Build command: npm install && npm run build
Build output directory: dist
Root directory: (leave blank or /)

Environment variables:
  NODE_VERSION: 18
```

### Step 4: Deploy

Click **Save and Deploy**. Your site will be live at:
- `https://your-project.pages.dev`

### Step 5: Custom Domain (Optional)

1. Go to **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `webkeymaster.com`)
4. Follow DNS setup instructions
5. SSL certificate is automatic

## 📊 Build Verification

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4173` to verify the build.

## 🔧 Troubleshooting

### Build Fails

**Error**: `lockfile had changes, but lockfile is frozen`

**Solution**: Cloudflare should use npm, not bun. Ensure build command is:
```bash
npm install && npm run build
```

### Routes Return 404

**Issue**: Direct navigation to routes like `/wallet` returns 404.

**Solution**: Verify `public/_redirects` contains:
```
/* /index.html 200
```

### Assets Not Loading

**Check**:
1. All asset imports use `@/assets/` path
2. Images are in `src/assets/` directory
3. `vite.config.ts` has correct alias configuration

### Performance Issues

**Optimize**:
1. Enable Cloudflare caching
2. Use Cloudflare CDN
3. Enable HTTP/3
4. Configure cache rules

## 🚀 Alternative Deployment Methods

### Vercel

```bash
npm install -g vercel
vercel --prod
```

Build settings:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

`netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Static Hosting

After running `npm run build`, upload the `dist/` folder to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- GitHub Pages

## 📈 Post-Deployment

### Enable Analytics
- Cloudflare Web Analytics
- Google Analytics
- Plausible Analytics

### Performance Monitoring
- Cloudflare Performance Insights
- Lighthouse CI
- WebPageTest

### Security Headers
Add in Cloudflare Pages:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### CDN Configuration
- Enable Auto Minify (HTML, CSS, JS)
- Enable Brotli compression
- Configure cache rules
- Set up firewall rules

## 🔐 Environment Variables

For production, set environment variables in Cloudflare Pages:

```env
# Example variables (prefix with VITE_ for client-side access)
VITE_API_URL=https://api.webkeymaster.com
VITE_ENVIRONMENT=production
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## ✨ Continuous Deployment

Every push to main branch triggers automatic deployment:

1. Code pushed to GitHub
2. Cloudflare detects changes
3. Build starts automatically
4. Tests run (if configured)
5. Deploy to production
6. Old version stays active until new version is ready
7. Zero-downtime deployment

## 📞 Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Project Issues](https://github.com/your-repo/issues)
