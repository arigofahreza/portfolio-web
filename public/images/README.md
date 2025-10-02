# Images Directory

This directory contains all static images used in the portfolio website.

## Structure

- `profile/` - Profile pictures and personal photos
- `projects/` - Project screenshots and mockups
- `icons/` - Custom icons and logos
- `backgrounds/` - Background images and patterns

## Profile Images

Place your profile photos in the `profile/` directory. Recommended specifications:

- **Format**: JPG, PNG, or WebP
- **Size**: 400x400px (square ratio)
- **Quality**: High resolution for retina displays
- **File size**: Under 500KB for optimal loading

## Usage in Components

Images in this directory can be accessed using:
```jsx
import Image from 'next/image'

// For profile image
<Image
  src="/images/profile/your-photo.jpg"
  alt="Profile"
  width={400}
  height={400}
/>
```

## Optimization

Next.js automatically optimizes images when using the `next/image` component:
- Automatic WebP conversion
- Lazy loading
- Responsive image sizes
- Blur placeholder support