# Platformbuilds.org

A modern, professional website for Platformbuilds - a leading Platform Engineering and Site Reliability Engineering company.

## Built With

- **Jekyll** - Static site generator
- **Custom CSS** - Enhanced Dante theme with local fonts and dark/light mode
- **Docker** - Containerized development environment
- **GitHub Pages** - Hosting and deployment
- **Font Awesome** - Icon library
- **OpenGraph & Twitter Cards** - Social media optimization

## Features

- ✅ Fully responsive design
- ✅ SEO optimized with structured data
- ✅ Fast loading with optimized assets
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Dark/Light theme toggle
- ✅ Local font loading (DM Sans, Figtree)
- ✅ Analytics integration ready
- ✅ Contact form integration
- ✅ Blog with pagination
- ✅ Case studies and services pages
- ✅ Open source and customizable

## Local Development

### Prerequisites

- Docker and Docker Compose
- Ruby 3.1+ (for local development without Docker)
- Bundler
- Jekyll 4.3+

### Setup with Docker (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/platformbuilds/platformbuilds-org.git
cd platformbuilds-org
```

2. Start the development server:
```bash
docker-compose up
```

3. Open http://localhost:4000 in your browser

### Setup without Docker

1. Clone the repository:
```bash
git clone https://github.com/platformbuilds/platformbuilds-org.git
cd platformbuilds-org
```

2. Install dependencies:
```bash
bundle install
```

3. Start the development server:
```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

4. Open http://localhost:4000 in your browser

### Building for Production

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Custom Domain Setup

1. Add CNAME file with your domain
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in repository settings

## Content Management

### Adding Blog Posts

Create a new file in `_posts/` with the format:
```
YYYY-MM-DD-post-title.md
```

Include frontmatter:
```yaml
---
layout: post
title: "Your Post Title"
date: 2024-10-25
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
author: "Author Name"
excerpt: "Brief description of the post"
---
```

### Adding Case Studies

Create files in `_case_studies/` directory with appropriate frontmatter.

### Adding Services

Create files in `_services/` directory with service details and pricing information.

## Configuration

### Site Settings

Edit `_config.yml` to update:
- Site title and description
- Contact information
- Social media links
- Navigation menu
- SEO settings

### Styling

- Custom CSS: `assets/css/style.css`
- CSS custom properties for theming
- Responsive design with mobile-first approach
- Local fonts: DM Sans and Figtree

### Analytics

Add your analytics tracking code to `_layouts/default.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Contact Forms

Update the form action in `contact.md` to use your preferred form service:
- Formspree
- Netlify Forms
- Custom backend

## Performance

The site is optimized for performance with:
- Minified CSS and JavaScript
- Optimized images
- Lazy loading
- Efficient caching headers
- CDN delivery for assets

## SEO Features

- Structured data markup
- Open Graph tags
- Twitter Cards
- Sitemap generation
- Robots.txt
- Semantic HTML
- Fast loading times
- Mobile responsive

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact:
- Email: hello@platformbuilds.org
- GitHub Issues: Create an issue in this repository

---

**Platformbuilds** - Building better platforms, shipping faster.