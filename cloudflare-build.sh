#!/bin/bash

# Cloudflare Pages build script
echo "Starting Cloudflare Pages build..."

# Install dependencies using npm (more reliable for CI/CD)
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

echo "Build complete!"
