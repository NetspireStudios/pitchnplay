# Troubleshooting Guide - Pitch & Play Website

## 🚨 Common Issues and Solutions

### Issue 1: No Styling/CSS Applied (Default Fonts, No Colors)

**Problem:** Website loads but shows only plain text with default browser styling, no Tailwind CSS styles applied.

**Symptoms:**
- Plain black text on white background
- Default browser fonts (not Inter)
- No animations or hover effects
- No color gradients or modern styling

**Root Causes:**
1. ❌ **Wrong Directory**: Running `npm run dev` from wrong folder
2. ❌ **Tailwind v4 Compatibility**: Using Tailwind CSS v4 which has different config requirements
3. ❌ **PostCSS Configuration**: Incorrect PostCSS setup
4. ❌ **Missing Dependencies**: Missing autoprefixer or other CSS processing tools

**Solution Steps:**

#### Step 1: Check Directory
```bash
# Make sure you're in the correct project directory
cd pitchnplay-website
pwd  # Should show: .../pitchnplay/pitchnplay-website
```

#### Step 2: Fix Tailwind CSS Version
```bash
# Remove incompatible v4
npm uninstall tailwindcss @tailwindcss/postcss

# Install stable v3
npm install tailwindcss@^3.4.17 postcss@^8.4.31 autoprefixer
```

#### Step 3: Update PostCSS Config
```javascript
// postcss.config.mjs
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
```

#### Step 4: Clear Cache and Restart
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Start dev server
npm run dev
```

### Issue 2: Font Loading Errors

**Problem:** `Font file not found: Can't resolve './fonts/GeistVF.woff2'`

**Solution:** We switched to Google Fonts for better reliability:

```typescript
// layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});
```

### Issue 3: Animation Not Working

**Problem:** Framer Motion animations not displaying

**Check:**
1. ✅ `framer-motion` installed: `npm list framer-motion`
2. ✅ Components have `"use client"` directive
3. ✅ Motion components imported correctly

### Issue 4: Build Errors

**Common Solutions:**
```bash
# Reinstall all dependencies
npm install

# Clear all caches
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
npm install

# Check for TypeScript errors
npm run build
```

## ✅ Verification Checklist

After fixing issues, verify these work:

- [ ] **Fonts**: Text uses Inter font (not Times New Roman/Arial)
- [ ] **Colors**: Blue and green gradients visible in hero section
- [ ] **Animations**: Elements fade in as you scroll
- [ ] **Hover Effects**: Cards lift up when you hover
- [ ] **Responsive**: Mobile menu works on small screens
- [ ] **Navigation**: Smooth scrolling between sections

## 🔧 Quick Debug Commands

```bash
# Check if in correct directory
pwd

# Verify dependencies installed
npm list tailwindcss framer-motion lucide-react

# Check dev server status
npm run dev

# Build test (catches errors)
npm run build
```

## 📞 Need Help?

If issues persist:
1. Clear browser cache (Ctrl+F5)
2. Try incognito/private browsing mode
3. Check browser console for errors (F12)
4. Restart VS Code/editor
5. Restart computer (fixes file permission issues)

---

**Last Updated:** After fixing Tailwind v4 compatibility issues
**Working Directory:** `C:\Users\razaa\OneDrive\Desktop\pitchnplay\pitchnplay-website`
**Dev Server:** `http://localhost:3002` 