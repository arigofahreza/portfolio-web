# Project Images Guide

## Current Status
Portfolio.tsx currently uses placeholder images from Unsplash. You can replace these with your actual project screenshots.

## Recommended Project Images:

### **Image Specifications:**
- **Size**: 500x300px (5:3 aspect ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution
- **File Size**: Under 300KB each

### **Suggested Filenames:**
```
public/images/projects/
├── data-pipeline.jpg          # Real-time Data Pipeline
├── microservices.jpg          # Microservices Architecture
├── cloud-warehouse.jpg        # Cloud Data Warehouse
├── api-gateway.jpg           # API Gateway & Auth Service
├── ml-pipeline.jpg           # Machine Learning Pipeline
└── event-driven.jpg          # Event-Driven Architecture
```

## To Update Portfolio Images:

1. **Add your project screenshots** to `public/images/projects/`

2. **Update Portfolio.tsx** - Replace image URLs:
   ```tsx
   // Change from:
   image: "https://images.unsplash.com/photo-xxx",
   
   // To:
   image: "/images/projects/your-project.jpg",
   ```

## Image Content Ideas:

### **Data Pipeline Project:**
- Dashboard screenshots
- Architecture diagrams
- Data flow visualizations
- Performance metrics

### **Microservices Project:**
- System architecture diagram
- API documentation
- Container orchestration setup
- Monitoring dashboards

### **Cloud Warehouse:**
- AWS/Cloud console screenshots
- Data visualization charts
- ETL pipeline diagrams
- Performance comparisons

## Tips for Great Project Images:

✅ **Do:**
- Use actual screenshots of your work
- Include relevant metrics/data
- Show clean, professional interfaces
- Add annotations if helpful

❌ **Avoid:**
- Generic stock photos
- Blurry or low-quality images
- Screenshots with sensitive data
- Images that don't represent your work

## Fallback Options:

If you don't have project screenshots yet:
1. Keep current Unsplash images (they look professional)
2. Create mockups using tools like Figma
3. Use architecture diagram screenshots
4. Generate visual representations of your data flows