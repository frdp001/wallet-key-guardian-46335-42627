# 🚀 Quick Start Guide

Get your Webkeymaster site deployed on Cloudflare Pages in under 5 minutes!

## Prerequisites

- GitHub account
- Cloudflare account (free)
- Your code pushed to GitHub

## Step-by-Step Deployment

### 1. Open Cloudflare Dashboard

Visit: https://dash.cloudflare.com/

### 2. Navigate to Pages

Click: **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**

### 3. Select Repository

- Authorize Cloudflare to access your GitHub
- Select your repository
- Click **Begin setup**

### 4. Configure Build

Copy and paste these exact settings:

```
Project name: webkeymaster (or your choice)
Production branch: main
Build command: npm install && npm run build
Build output directory: dist
Root directory: (leave empty)
```

**Environment variables** (click "+ Add variable"):
```
NODE_VERSION = 18
```

### 5. Deploy!

Click **Save and Deploy**

⏱️ Wait 2-5 minutes for the build to complete.

### 6. Your Site is Live! 🎉

You'll get a URL like:
```
https://webkeymaster.pages.dev
```

## What's Next?

### Add Custom Domain (Optional)

1. Go to **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter your domain: `webkeymaster.com`
4. Update your DNS:
   ```
   Type: CNAME
   Name: @
   Content: webkeymaster.pages.dev
   ```
5. Wait for SSL (automatic, ~5 minutes)

### Enable Analytics

1. Go to **Web Analytics** in Cloudflare
2. Click **Add a site**
3. Copy the analytics script
4. It's already included in your site!

### Configure Custom Settings

**Auto Minify** (Recommended):
- Go to **Settings** → **Optimization**
- Enable: JavaScript, CSS, HTML
- Save

**Cache Rules** (Optional):
- Create cache rules for static assets
- Set long TTL for images, CSS, JS

## Verify Deployment

Visit your live site and check:

- ✅ Homepage loads
- ✅ Navigation works  
- ✅ `/wallet` route loads
- ✅ All images display
- ✅ Forms work
- ✅ Mobile responsive

## Test Locally Before Deploy

Want to test the production build locally first?

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build
npm run preview
```

Open: http://localhost:4173

## Troubleshooting

### Build Fails?

**Error**: "lockfile had changes, but lockfile is frozen"

**Fix**: Already handled! We use npm, not bun.

### 404 on Routes?

**Check**: `public/_redirects` file exists with:
```
/* /index.html 200
```
✅ Already configured!

### Slow Build?

**Normal**: First build takes 2-5 minutes.
**Future**: Builds are faster (~1-2 minutes).

### Can't Find Build Command?

Use exactly:
```
npm install && npm run build
```

## Continuous Deployment

Now every time you:
1. Make changes to your code
2. Push to GitHub `main` branch
3. Cloudflare automatically deploys! 🚀

## Performance Tips

Your site is already optimized with:
- ⚡ Code splitting
- 📦 Tree shaking
- 🗜️ Minification
- 🖼️ Asset optimization
- 🌐 CDN delivery
- 📱 Mobile-first design

## Support

Need help?

- 📚 [Full Deployment Guide](./DEPLOYMENT.md)
- ✅ [Build Checklist](./BUILD_CHECKLIST.md)
- 🔧 [Cloudflare Docs](https://developers.cloudflare.com/pages/)
- 📖 [README](./README.md)

---

**That's it!** Your site is now live and auto-deploys on every push. 🎉
