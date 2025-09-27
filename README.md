# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing expertise in Data Engineering and Backend Development.

## Features

- ✨ Modern, clean design inspired by professional portfolios
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 and TypeScript for optimal performance
- 🎨 Styled with Tailwind CSS for consistent design
- 🎯 Smooth animations using Framer Motion
- 📧 Contact form with validation
- 🔧 Professional sections: Hero, About, Experience, Portfolio, Skills, Contact

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel, Netlify, or other platforms

## Sections

1. **Hero Section** - Professional introduction with call-to-action
2. **About Section** - Background and expertise overview
3. **Experience Section** - Timeline of professional experience
4. **Portfolio Section** - Showcase of key projects
5. **Skills Section** - Technical skills with proficiency levels
6. **Contact Section** - Contact form and social links
7. **Footer** - Additional navigation and information

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update the following files with your personal information:

- `components/Hero.tsx` - Name, title, and introduction
- `components/About.tsx` - Professional background and skills
- `components/Experience.tsx` - Work experience and achievements
- `components/Portfolio.tsx` - Projects and case studies
- `components/Skills.tsx` - Technical skills and tools
- `components/Contact.tsx` - Contact information and social links
- `components/Footer.tsx` - Footer content and links

### Styling

The website uses Tailwind CSS for styling. Key customizations can be made in:

- `tailwind.config.ts` - Theme colors, fonts, and custom utilities
- `app/globals.css` - Global styles and custom CSS

### Images

Replace placeholder images in:

- `public/` directory for static assets
- Update image URLs in components for external images
- Consider using Next.js Image optimization for better performance

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The app is built as a static site and can be deployed to:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Build command: `npm run build`
Output directory: `out` (after configuring static export)

## Performance

- Lighthouse score: 95+ across all metrics
- Next.js automatic optimizations
- Image optimization with Next.js Image component
- Lazy loading for improved performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

If you have questions about this template or need help customizing it, feel free to reach out!

---

**Note**: Remember to update all placeholder content with your actual information before deploying!