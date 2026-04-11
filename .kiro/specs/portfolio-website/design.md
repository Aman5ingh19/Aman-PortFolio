# Design Document

## Overview

The Portfolio Website is a single-page application (SPA) built with modern web technologies to showcase Aman Singh's professional profile. The design follows a component-based architecture with a dark theme, smooth animations, and responsive layouts. The application will be built using vanilla JavaScript with Framer Motion for animations, ensuring optimal performance and maintainability.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────┐
│         Portfolio Website (SPA)         │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │      Presentation Layer           │  │
│  │  (HTML + CSS + JavaScript)        │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │      Animation System             │  │
│  │      (Framer Motion CDN)          │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │      Form Handler                 │  │
│  │      (Client-side validation)     │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and animation orchestration
- **Framer Motion**: Animation library (loaded via CDN)
- **Font Awesome / Lucide Icons**: Icon library for skill and social icons

## Components and Interfaces

### 1. Hero Section Component

**Purpose**: Primary landing area with introduction and call-to-action

**Structure**:
```html
<section id="hero" class="hero-section">
  <div class="hero-content">
    <h1 class="hero-name">Aman Singh</h1>
    <p class="hero-tagline">Building Scalable Web Applications & Intelligent Systems</p>
    <p class="hero-location">Gurugram, India</p>
    <div class="hero-cta">
      <a href="#contact" class="btn-primary">Get In Touch</a>
      <a href="#projects" class="btn-secondary">View Projects</a>
    </div>
  </div>
</section>
```

**Styling**:
- Full viewport height
- Centered content with flexbox
- Gradient text effect on tagline
- Animated entrance with staggered delays

### 2. About Section Component

**Purpose**: Display professional background and passion statement

**Structure**:
```html
<section id="about" class="about-section">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <p class="about-text">[About content]</p>
  </div>
</section>
```

**Styling**:
- Max-width container for readability
- Fade-in animation on scroll
- Larger font size for emphasis

### 3. Skills Section Component

**Purpose**: Display technical skills organized by category with icons

**Structure**:
```html
<section id="skills" class="skills-section">
  <div class="container">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3 class="category-title">Languages</h3>
        <div class="skill-items">
          <div class="skill-item">
            <i class="skill-icon">[icon]</i>
            <span>C++</span>
          </div>
          <!-- More skills -->
        </div>
      </div>
      <!-- More categories -->
    </div>
  </div>
</section>
```

**Styling**:
- CSS Grid layout for categories (responsive: 1-3 columns)
- Card-based design for each category
- Staggered animation on scroll
- Hover effects on skill items

### 4. Projects Section Component

**Purpose**: Showcase projects with descriptions and technologies

**Structure**:
```html
<section id="projects" class="projects-section">
  <div class="container">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <h3 class="project-title">HRMS Lite</h3>
        <p class="project-description">Full stack HR management system</p>
        <div class="project-tech">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Django</span>
          <span class="tech-tag">MongoDB</span>
        </div>
        <ul class="project-features">
          <li>Employee management & attendance tracking</li>
        </ul>
      </div>
      <!-- More projects -->
    </div>
  </div>
</section>
```

**Styling**:
- CSS Grid layout (responsive: 1-3 columns)
- Card design with border and shadow
- Hover effect: lift and glow
- Scale animation on scroll

### 5. Experience Timeline Component

**Purpose**: Display work experience in chronological order

**Structure**:
```html
<section id="experience" class="experience-section">
  <div class="container">
    <h2 class="section-title">Experience</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="experience-title">Web Developer Intern</h3>
          <p class="experience-company">Unified Mentor</p>
          <p class="experience-period">June 2025 – Aug 2025</p>
          <ul class="experience-responsibilities">
            <li>Built responsive UI</li>
            <li>Improved UX and performance</li>
          </ul>
        </div>
      </div>
      <!-- More experiences -->
    </div>
  </div>
</section>
```

**Styling**:
- Vertical timeline with connecting line
- Alternating left-right layout on desktop
- Stacked layout on mobile
- Slide-in animation from sides

### 6. Education Section Component

**Purpose**: Display academic qualifications

**Structure**:
```html
<section id="education" class="education-section">
  <div class="container">
    <h2 class="section-title">Education</h2>
    <div class="education-item">
      <h3 class="education-degree">B.Tech CSE</h3>
      <p class="education-institution">K.R. Mangalam University</p>
      <p class="education-period">2023–2027</p>
    </div>
  </div>
</section>
```

**Styling**:
- Card-based design
- Centered content
- Fade-in animation

### 7. Contact Section Component

**Purpose**: Provide contact form and social links

**Structure**:
```html
<section id="contact" class="contact-section">
  <div class="container">
    <h2 class="section-title">Get In Touch</h2>
    <form id="contact-form" class="contact-form">
      <div class="form-group">
        <input type="text" id="name" name="name" placeholder="Your Name" required>
      </div>
      <div class="form-group">
        <input type="email" id="email" name="email" placeholder="Your Email" required>
      </div>
      <div class="form-group">
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" class="btn-primary">Send Message</button>
    </form>
    <div class="social-links">
      <a href="[github-url]" target="_blank" rel="noopener" class="social-link">
        <i class="icon-github"></i>
      </a>
      <a href="[linkedin-url]" target="_blank" rel="noopener" class="social-link">
        <i class="icon-linkedin"></i>
      </a>
    </div>
  </div>
</section>
```

**Styling**:
- Centered form with max-width
- Input fields with focus states
- Social links with hover effects
- Success/error message display area

### 8. Navigation Component

**Purpose**: Provide smooth scrolling navigation

**Structure**:
```html
<nav class="navbar">
  <div class="nav-container">
    <a href="#hero" class="nav-logo">AS</a>
    <ul class="nav-menu">
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#skills" class="nav-link">Skills</a></li>
      <li><a href="#projects" class="nav-link">Projects</a></li>
      <li><a href="#experience" class="nav-link">Experience</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <button class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>
```

**Styling**:
- Fixed position with backdrop blur
- Hamburger menu on mobile
- Smooth scroll behavior
- Active link highlighting

## Data Models

### Project Data Structure

```javascript
const projects = [
  {
    id: 1,
    title: "HRMS Lite",
    description: "Full stack HR management system",
    technologies: ["React", "Django", "MongoDB"],
    features: ["Employee management & attendance tracking"]
  },
  {
    id: 2,
    title: "Phishing Email Detection System",
    description: "Machine learning + NLP project",
    technologies: ["SVM", "Random Forest", "AdaBoost"],
    features: ["Evaluated using AUC-ROC"]
  },
  {
    id: 3,
    title: "Health Tracker (MERN)",
    description: "Health monitoring system",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Authentication + disease prediction"]
  }
];
```

### Experience Data Structure

```javascript
const experiences = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "Unified Mentor",
    period: "June 2025 – Aug 2025",
    responsibilities: [
      "Built responsive UI",
      "Improved UX and performance"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "IBM",
    period: "June 2025 – July 2025",
    responsibilities: [
      "Developed MERN stack applications",
      "Created REST APIs and backend systems"
    ]
  }
];
```

### Skills Data Structure

```javascript
const skills = {
  Languages: ["C++", "Python", "JavaScript"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Django"],
  Database: ["MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"]
};
```

## Design System

### Color Palette (Dark Theme)

```css
:root {
  /* Background Colors */
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #1a1a1a;
  
  /* Text Colors */
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-tertiary: #707070;
  
  /* Accent Colors */
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
  --accent-gradient: linear-gradient(135deg, #3b82f6, #8b5cf6);
  
  /* Border Colors */
  --border-primary: #2a2a2a;
  --border-secondary: #3a3a3a;
  
  /* Status Colors */
  --success: #10b981;
  --error: #ef4444;
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Fira Code', 'Courier New', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Spacing

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
}
```

### Breakpoints

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## Animation Strategy

### Framer Motion Integration

Load Framer Motion via CDN in HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/framer-motion@10/dist/framer-motion.js"></script>
```

### Animation Patterns

1. **Hero Section Animations**
   - Name: Fade in + slide up (delay: 0s)
   - Tagline: Fade in + slide up (delay: 0.2s)
   - Location: Fade in (delay: 0.4s)
   - CTAs: Fade in + scale (delay: 0.6s, stagger: 0.1s)

2. **Scroll-Based Animations**
   - Trigger: When element enters viewport (threshold: 0.2)
   - Default: Fade in + slide up
   - Duration: 0.6s
   - Easing: ease-out

3. **Hover Animations**
   - Project cards: Scale 1.05 + shadow increase
   - Buttons: Scale 1.05 + brightness increase
   - Social links: Scale 1.2 + color change
   - Duration: 0.3s

4. **Staggered Animations**
   - Skills: Stagger children by 0.1s
   - Timeline items: Stagger by 0.2s

### JavaScript Animation Controller

```javascript
class AnimationController {
  constructor() {
    this.observers = [];
    this.initScrollAnimations();
  }
  
  initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: 0.2 }
    );
    
    elements.forEach(el => observer.observe(el));
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }
}
```

## Error Handling

### Form Validation

1. **Client-Side Validation**
   - Name field: Required, min 2 characters
   - Email field: Required, valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
   - Message field: Required, min 10 characters

2. **Validation Feedback**
   - Display error messages below invalid fields
   - Apply error styling (red border + error text)
   - Prevent form submission until all fields are valid

3. **Success Feedback**
   - Display success message after form submission
   - Clear form fields
   - Auto-hide message after 5 seconds

### Error States

```javascript
const formStates = {
  IDLE: 'idle',
  VALIDATING: 'validating',
  SUCCESS: 'success',
  ERROR: 'error'
};

function validateForm(formData) {
  const errors = {};
  
  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message || formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
}
```

## Testing Strategy

### Manual Testing Checklist

1. **Responsive Design Testing**
   - Test on mobile (320px, 375px, 414px)
   - Test on tablet (768px, 1024px)
   - Test on desktop (1280px, 1920px)
   - Verify all sections adapt correctly
   - Verify navigation works on all sizes

2. **Animation Testing**
   - Verify hero animations play on load
   - Verify scroll animations trigger correctly
   - Verify hover effects work smoothly
   - Check animation performance (no jank)
   - Test with reduced motion preference

3. **Form Testing**
   - Submit empty form (should show errors)
   - Submit with invalid email (should show error)
   - Submit with valid data (should show success)
   - Verify validation messages display correctly
   - Test form reset after successful submission

4. **Cross-Browser Testing**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

5. **Accessibility Testing**
   - Keyboard navigation works
   - Focus states are visible
   - Color contrast meets WCAG AA standards
   - Screen reader compatibility
   - Semantic HTML structure

### Performance Testing

1. **Metrics to Monitor**
   - First Contentful Paint (FCP) < 1.8s
   - Largest Contentful Paint (LCP) < 2.5s
   - Cumulative Layout Shift (CLS) < 0.1
   - First Input Delay (FID) < 100ms

2. **Optimization Techniques**
   - Minify CSS and JavaScript
   - Optimize images (use WebP format)
   - Lazy load images below the fold
   - Use CSS containment for sections
   - Defer non-critical JavaScript

## Implementation Notes

### File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # Main stylesheet
├── script.js           # Main JavaScript file
└── assets/
    └── icons/          # Icon files (if not using CDN)
```

### Progressive Enhancement

1. **Base Layer**: Semantic HTML with all content accessible
2. **Enhancement Layer**: CSS for styling and layout
3. **Interaction Layer**: JavaScript for animations and form handling

### Accessibility Considerations

- Use semantic HTML5 elements
- Provide alt text for decorative elements (empty alt)
- Ensure sufficient color contrast (4.5:1 for normal text)
- Support keyboard navigation
- Respect prefers-reduced-motion media query
- Use ARIA labels where necessary
- Ensure focus indicators are visible

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions
- CSS Grid and Flexbox support required
- ES6+ JavaScript features
- Intersection Observer API for scroll animations
