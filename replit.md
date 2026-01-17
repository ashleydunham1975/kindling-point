# Replit.md

## Overview

This is a web application configured for Firebase Hosting deployment. The project appears to be a single-page application (SPA) with client-side routing, as indicated by the rewrite rules that direct all requests to `index.html`.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Single-Page Application (SPA)**: The Firebase configuration shows all routes rewrite to `index.html`, indicating client-side routing is used
- **Build Output**: Compiled assets are placed in `dist/public` directory
- **Framework**: The specific frontend framework is not yet determined from the current files, but the structure suggests a modern JavaScript framework (React, Vue, or similar)

### Hosting & Deployment

- **Firebase Hosting**: The application is configured to deploy to Firebase Hosting
- **Static File Serving**: The `dist/public` directory serves as the public root for all static assets
- **Ignored Files**: Standard exclusions for `node_modules`, dotfiles, and the Firebase config itself

### Build System

- **Output Directory**: `dist/public` suggests a build tool (Vite, Webpack, or similar) compiles source files into this distribution folder

## External Dependencies

### Third-Party Services

| Service | Purpose |
|---------|---------|
| Firebase Hosting | Static site hosting and CDN delivery |

### Infrastructure

- **CDN**: Firebase Hosting provides global CDN distribution
- **SSL**: Automatic HTTPS provided by Firebase