# Cloudflare Pages Deployment Guide

## Quick Setup

### 1. Connect Your Repository
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub repository

### 2. Configure Build Settings

Use these exact settings in Cloudflare Pages:

```
Framework preset: None (or Vite)
Build command: npm install && npm run build
Build output directory: dist
Root directory: /
Node version: 18 or 20
```

### 3. Environment Variables (Optional)

If you need environment variables:
- Go to Settings > Environment variables
- Add any `VITE_` prefixed variables
- Example: `VITE_API_URL`

### 4. Deploy

Click "Save and Deploy". Your site will be live in minutes!

## Build Configuration

This project is optimized for Cloudflare Pages with:

- ✅ SPA routing via `_redirects` file
- ✅ Optimized Vite build configuration
- ✅ Asset bundling and minification
- ✅ CSS purging and optimization
- ✅ TypeScript compilation
- ✅ React optimizations

## Troubleshooting

### Build Fails with Lockfile Error

If you see `lockfile had changes, but lockfile is frozen`:

**Solution**: Use npm instead of Bun
- Build command: `npm install && npm run build`

### 404 Errors on Routes

Ensure `_redirects` file exists in `public/` directory with:
```
/* /index.html 200
```

### Assets Not Loading

Check that:
1. All imports use `@/` alias
2. Assets are in `src/assets/` directory
3. Vite config includes proper path resolution

## Performance Optimization

The build is configured for optimal performance:

- Code splitting enabled
- Tree shaking for unused code
- CSS minification
- Asset optimization
- Gzip compression
- Service worker ready

## Custom Domain

To add a custom domain:

1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add your domain
4. Update DNS records as instructed

## SSL/HTTPS

Cloudflare automatically provides SSL certificates. HTTPS is enabled by default.

## Analytics

Enable Web Analytics in Cloudflare Pages settings to track:
- Page views
- Unique visitors
- Performance metrics
- Core Web Vitals

## Support

For issues:
1. Check build logs in Cloudflare dashboard
2. Verify build settings match this guide
3. Test locally with `npm run build && npm run preview`
4. Check [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
