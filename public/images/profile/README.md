# Profile Photo Instructions

## Current Setup

The Hero component is now configured to use a local profile photo from:
`/images/profile/profile-photo.jpg`

## To Add Your Profile Photo:

1. **Prepare Your Photo:**
   - Format: JPG, PNG, or WebP
   - Recommended size: 400x400px (square)
   - High quality for retina displays
   - File size: Under 500KB for optimal loading

2. **File Naming:**
   - Save your photo as: `profile-photo.jpg`
   - Place it in: `public/images/profile/`

3. **Alternative Names:**
   If you prefer a different filename, update the `src` in `components/Hero.tsx`:
   ```tsx
   src="/images/profile/your-filename.jpg"
   ```

## Current Fallback:
- The component includes a blur placeholder for smooth loading
- If the image doesn't exist, Next.js will show an error in development

## Features Added:
- ✅ Blur placeholder for smooth loading
- ✅ Optimized alt text for SEO
- ✅ Priority loading for above-the-fold content
- ✅ Responsive image sizing

## Next Steps:
1. Add your actual profile photo to `public/images/profile/profile-photo.jpg`
2. Test the website to ensure the image loads correctly
3. Optionally, add more profile photos for different sections