# Aman Singh - Portfolio Website

A modern, professional full stack developer portfolio website featuring a dark theme, smooth animations, Three.js 3D background, and responsive design.

## 👨‍💻 About

Computer Science Engineering student with a strong foundation in full stack development and data structures and algorithms. Skilled in building scalable web applications using the MERN Stack and Python. Familiar with machine learning concepts with hands-on experience through a research-based project.

**Live Demo**: Open `index.html` directly in your browser to see the portfolio in action.

**Repository**: [GitHub - Aman PortFolio](https://github.com/Aman5ingh19/Aman-Portfolio)



## ✨ Features

- **Modern Dark Theme**: Professional dark color scheme with gradient accents
- **Three.js 3D Background**: Animated particles and geometric shapes
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll-based animations using Intersection Observer API
- **Interactive Navigation**: Fixed navbar with active link highlighting and mobile hamburger menu
- **Contact Form**: Client-side validation with user-friendly error messages
- **Downloadable Resume**: One-click resume download button
- **Accessibility**: WCAG AA compliant with keyboard navigation support
- **Performance Optimized**: Fast loading with minimal dependencies

## Sections

1. **Hero Section**: Eye-catching introduction with name, tagline, and call-to-action buttons
2. **About**: Professional background and passion statement
3. **Skills**: Technical skills organized by category with icons
4. **Projects**: Showcase of key projects with technologies and features
5. **Experience**: Timeline of work experience
6. **Education**: Academic qualifications
7. **Contact**: Form with validation and social media links

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

## Customization

### Update Personal Information

Edit `index.html` to update:
- Name, tagline, and location in the hero section
- About text
- Skills, projects, and experience details
- Social media links (GitHub, LinkedIn)

### Customize Colors

Edit CSS custom properties in `style.css`:

```css
:root {
  --accent-primary: #3b82f6;  /* Primary accent color */
  --accent-secondary: #8b5cf6; /* Secondary accent color */
  /* ... other colors */
}
```

### Add More Projects

Add new project cards in the projects section of `index.html`:

```html
<div class="project-card" data-animate>
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-description">Description</p>
  <div class="project-tech">
    <span class="tech-tag">Tech 1</span>
    <span class="tech-tag">Tech 2</span>
  </div>
  <ul class="project-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Skip to main content link
- Color contrast meets WCAG AA standards
- Respects prefers-reduced-motion setting

## Performance

- Minimal external dependencies
- Optimized CSS and JavaScript
- Efficient scroll animations with Intersection Observer
- Debounced scroll handlers

## Contact Form

The contact form includes client-side validation for:
- Name (minimum 2 characters)
- Email (valid email format)
- Message (minimum 10 characters)

Note: This is a static website. To make the contact form functional, you'll need to integrate it with a backend service or form handling service like:
- Formspree
- Netlify Forms
- EmailJS
- Your own backend API

## License

Feel free to use this template for your own portfolio. Attribution is appreciated but not required.

## Author

**Aman Singh**
- Location: Gurugram, India
- GitHub: [Update with your GitHub URL]
- LinkedIn: [Update with your LinkedIn URL]

---

Built with ❤️ using HTML, CSS, and JavaScript
