# Webkeymaster - Web3 Security Platform

A modern, secure Web3 wallet connection platform built with React, TypeScript, and Tailwind CSS.

**Lovable Project URL**: https://lovable.dev/projects/e66678bc-2d4c-4ac5-96cf-26d32b6fbf4c

## 🚀 Features

- **Multi-Wallet Support**: Connect with 60+ cryptocurrency wallets
- **Modern UI**: Dark-themed interface with golden accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Secure**: End-to-end encrypted wallet connections
- **Live Markets**: Real-time cryptocurrency market data
- **Web3 Services**: Comprehensive suite of crypto services

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e66678bc-2d4c-4ac5-96cf-26d32b6fbf4c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e66678bc-2d4c-4ac5-96cf-26d32b6fbf4c) and click on Share -> Publish.

## 📤 Cloudflare Pages Deployment

This project is optimized for Cloudflare Pages:

### Build Settings:
- **Build Command**: `npm install && npm run build`
- **Build Output Directory**: `dist`
- **Node Version**: `18` or higher
- **Environment**: Production

The `_redirects` file is included for SPA routing support.

### Alternative Deployment:
Simply open [Lovable](https://lovable.dev/projects/e66678bc-2d4c-4ac5-96cf-26d32b6fbf4c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can! To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 🎨 Design System

- **Primary Color**: Golden Yellow (HSL: 43 96% 56%)
- **Background**: Dark Blue (HSL: 220 26% 8%)
- **Custom Animations**: float, pulse-glow, scroll-brands
- **Semantic Tokens**: All colors use HSL format for consistency

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Route pages
│   ├── Index.tsx       # Home page
│   ├── Wallet.tsx      # Wallet connection
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 📝 License

© 2024 Webkeymaster. All rights reserved.
