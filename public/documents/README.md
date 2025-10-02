# Documents Directory

This directory contains downloadable files for the portfolio website.

## Structure

- `cv/` - CV/Resume files in various formats
- `certificates/` - Professional certificates and awards
- `portfolio/` - Portfolio documents and case studies

## CV Files

Place your CV/Resume files in the `cv/` directory:

### Recommended Files:
- `cv-arigo-fahreza.pdf` - Main CV in PDF format
- `resume-arigo-fahreza.pdf` - Alternative resume format
- `cv-arigo-fahreza-en.pdf` - English version
- `cv-arigo-fahreza-id.pdf` - Indonesian version

### File Requirements:
- **Format**: PDF (most compatible)
- **Size**: Under 2MB for quick download
- **Naming**: Use kebab-case with your name
- **Content**: Keep updated with latest information

## Usage in Components:

CV download is implemented in Hero.tsx:
```tsx
<a
  href="/documents/cv/cv-arigo-fahreza.pdf"
  download="CV-Arigo-Fahreza.pdf"
  className="..."
>
  <FiDownload className="mr-2" />
  Download CV
</a>
```

## Security Notes:
- PDF files are served statically by Next.js
- No server-side processing required
- Files are publicly accessible via direct URL
- Consider file size for mobile users