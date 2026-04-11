// ===================================
// Three.js 3D Background Animation
// ===================================

function initThreeJS() {
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded');
    return;
  }

  const canvas = document.getElementById('three-canvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Create particle system
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  // Create particle material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.15,
    color: 0x3b82f6,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Create geometric shapes
  const geometries = [
    new THREE.TorusGeometry(10, 3, 16, 100),
    new THREE.OctahedronGeometry(8, 0),
    new THREE.IcosahedronGeometry(7, 0)
  ];
  
  const material = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.1
  });
  
  const meshes = geometries.map((geometry, index) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (index - 1) * 30;
    mesh.position.z = -20;
    scene.add(mesh);
    return mesh;
  });
  
  camera.position.z = 50;
  
  // Mouse movement effect
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;
    
    // Rotate geometric shapes
    meshes.forEach((mesh, index) => {
      mesh.rotation.x += 0.003 * (index + 1);
      mesh.rotation.y += 0.002 * (index + 1);
    });
    
    // Camera movement based on mouse
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    renderer.setAnimationLoop(null);
  }
}

// ===================================
// Navigation Functionality
// ===================================

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  const isActive = navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isActive);
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active link highlighting based on scroll position
function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      correspondingLink?.classList.add('active');
    } else {
      correspondingLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveSection);

// ===================================
// Scroll Animation System
// ===================================

class AnimationController {
  constructor() {
    this.initScrollAnimations();
  }

  initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay for multiple elements
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elements.forEach(el => observer.observe(el));
  }
}

// Initialize animation controller
const animationController = new AnimationController();

// ===================================
// Form Validation & Submission
// ===================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
function validateName(name) {
  if (!name || name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  return '';
}

function validateEmail(email) {
  if (!email || !emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
}

function validateMessage(message) {
  if (!message || message.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  return '';
}

// Show error message
function showError(inputElement, errorMessage) {
  const formGroup = inputElement.closest('.form-group');
  const errorElement = formGroup.querySelector('.error-message');
  
  formGroup.classList.add('error');
  errorElement.textContent = errorMessage;
}

// Clear error message
function clearError(inputElement) {
  const formGroup = inputElement.closest('.form-group');
  const errorElement = formGroup.querySelector('.error-message');
  
  formGroup.classList.remove('error');
  errorElement.textContent = '';
}

// Validate field on blur
function setupFieldValidation() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  nameInput.addEventListener('blur', () => {
    const error = validateName(nameInput.value);
    if (error) {
      showError(nameInput, error);
    } else {
      clearError(nameInput);
    }
  });

  emailInput.addEventListener('blur', () => {
    const error = validateEmail(emailInput.value);
    if (error) {
      showError(emailInput, error);
    } else {
      clearError(emailInput);
    }
  });

  messageInput.addEventListener('blur', () => {
    const error = validateMessage(messageInput.value);
    if (error) {
      showError(messageInput, error);
    } else {
      clearError(messageInput);
    }
  });
}

// Form submission handler
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate all fields
  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const messageError = validateMessage(message);

  // Clear previous errors
  document.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('error');
    group.querySelector('.error-message').textContent = '';
  });

  // Show errors if any
  let hasErrors = false;

  if (nameError) {
    showError(document.getElementById('name'), nameError);
    hasErrors = true;
  }

  if (emailError) {
    showError(document.getElementById('email'), emailError);
    hasErrors = true;
  }

  if (messageError) {
    showError(document.getElementById('message'), messageError);
    hasErrors = true;
  }

  // If no errors, show success message
  if (!hasErrors) {
    formStatus.className = 'form-status success';
    formStatus.textContent = 'Thank you for your message! I will get back to you soon.';

    // Clear form
    contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      formStatus.className = 'form-status';
      formStatus.textContent = '';
    }, 5000);
  } else {
    formStatus.className = 'form-status error';
    formStatus.textContent = 'Please fix the errors above and try again.';

    // Hide error message after 5 seconds
    setTimeout(() => {
      formStatus.className = 'form-status';
      formStatus.textContent = '';
    }, 5000);
  }
});

// Initialize field validation
setupFieldValidation();

// ===================================
// Smooth Scroll Enhancement
// ===================================

// Add smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(highlightActiveSection, 100));

// ===================================
// Initialize on DOM Load
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Three.js background
  initThreeJS();
  
  // Trigger initial active link highlight
  highlightActiveSection();
  
  // Add loaded class to body for any CSS transitions
  document.body.classList.add('loaded');
});
