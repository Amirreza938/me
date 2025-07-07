# 3D Interactive Portfolio Website

A modern, interactive portfolio website built with HTML, CSS, and JavaScript featuring 3D effects, animations, and a particle system background.

## 🚀 Features

- **Interactive Particle System**: Dynamic floating particles with connection lines
- **3D Tilt Effects**: Cards and elements respond to mouse movement with 3D transformations
- **Smooth Animations**: Fade-in effects, typing animation, and scroll-based animations
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and smooth transitions
- **Interactive Navigation**: Active section highlighting and smooth scrolling
- **Animated Skill Bars**: Progressive skill level visualization
- **Dynamic Counters**: Animated statistics counters
- **Custom Cursor Effects**: Enhanced mouse interaction feedback
- **Ripple Button Effects**: Interactive button press feedback

## 📁 File Structure

```
task1-html/
├── index.html          # Main HTML structure
├── style.css           # All CSS styles and animations
├── script.js           # JavaScript functionality and interactions
└── README.md           # This documentation file
```

## 🎯 HTML Structure (index.html)

### Document Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amirreza Asgharzadeh - 3D Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
```

### Key Sections

#### 1. Particle System Container
```html
<div class="particles-container">
    <canvas id="particles-canvas"></canvas>
</div>
```
- Fixed position canvas for background particle animation
- Controlled by JavaScript ParticleSystem class

#### 2. Navigation Bar
```html
<nav class="navbar">
    <div class="nav-brand">AA</div>
    <ul class="nav-links">
        <li><a href="#home" data-section="home">Home</a></li>
        <!-- More navigation links -->
    </ul>
</nav>
```
- Fixed position with glassmorphism effect
- Smooth scrolling navigation with active state tracking

#### 3. Hero Section
```html
<section id="home" class="hero-section">
    <div class="hero-content">
        <div class="hero-card">
            <h1 class="hero-title">
                <span class="typing-text">Amirreza Asgharzadeh</span>
                <span class="cursor">|</span>
            </h1>
            <!-- More hero content -->
        </div>
    </div>
    <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
    </div>
</section>
```
- 3D card effect with perspective transformation
- Typing animation for the main title
- Animated scroll indicator

#### 4. About Section with Statistics
```html
<div class="about-stats">
    <div class="stat-item">
        <span class="stat-number" data-target="20">0</span>
        <span class="stat-label">Projects</span>
    </div>
    <!-- More statistics -->
</div>
```
- Animated counters using `data-target` attributes
- JavaScript handles the counting animation

#### 5. Skills Section with Progress Bars
```html
<div class="skill-bar" data-skill="90">
    <span class="skill-name">HTML</span>
    <div class="skill-progress">
        <div class="skill-fill"></div>
    </div>
</div>
```
- Skill levels defined with `data-skill` attributes
- Animated progress bars on scroll

## 🎨 CSS Styling (style.css)

### Global Styles and Variables
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #e2e8f0;
    line-height: 1.6;
    overflow-x: hidden;
}
```

### Color Scheme
- **Primary**: `#60a5fa` (Blue)
- **Secondary**: `#a855f7` (Purple)
- **Background**: `#0f172a` to `#1e293b` (Dark gradients)
- **Text**: `#e2e8f0` (Light gray)
- **Accent**: `#94a3b8` (Medium gray)

### Key CSS Techniques

#### 1. Glassmorphism Effect
```css
.navbar {
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(96, 165, 250, 0.3);
}
```
- Semi-transparent backgrounds with blur effect
- Subtle borders for depth

#### 2. 3D Transformations
```css
.hero-card {
    transform: perspective(1000px) rotateX(5deg);
    transition: all 0.3s ease;
}

.hero-card:hover {
    transform: perspective(1000px) rotateX(0deg) translateY(-10px);
}
```
- Perspective for 3D depth
- Smooth transitions on hover

#### 3. Gradient Text Effects
```css
.hero-title {
    background: linear-gradient(45deg, #60a5fa, #a855f7, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 3s ease-in-out infinite;
}
```
- Animated gradient text
- Cross-browser compatibility

#### 4. Advanced Animations
```css
@keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}
```
- Keyframe animations for smooth effects
- Bounce effect for scroll indicator

#### 5. Responsive Grid Layouts
```css
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```
- CSS Grid for responsive layouts
- Auto-fit for flexible column counts

## ⚡ JavaScript Functionality (script.js)

### Class-Based Architecture
The JavaScript is organized into classes for better maintainability:

#### 1. ParticleSystem Class
```javascript
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }
    
    createParticles() {
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        // Creates particles based on screen size
    }
    
    drawConnections() {
        const maxDistance = 150;
        // Draws lines between nearby particles
    }
}
```
**Features:**
- Dynamic particle count based on screen size
- Particle movement with wrapping
- Connection lines between nearby particles
- Smooth animation with requestAnimationFrame

#### 2. TypingAnimation Class
```javascript
class TypingAnimation {
    constructor(element, text) {
        this.element = element;
        this.text = text;
        this.index = 0;
        this.init();
    }
    
    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), 100);
        }
    }
}
```
**Features:**
- Character-by-character typing effect
- Customizable typing speed
- Automatic cursor animation

#### 3. ScrollAnimations Class
```javascript
class ScrollAnimations {
    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
    }
    
    animateCounter(counter) {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        // Smooth counting animation
    }
}
```
**Features:**
- Intersection Observer for performance
- Fade-in animations on scroll
- Animated counters with smooth transitions
- Skill bar progress animations

#### 4. TiltEffect Class
```javascript
class TiltEffect {
    init() {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
        });
    }
}
```
**Features:**
- 3D tilt effect based on mouse position
- Smooth transitions on mouse enter/leave
- Perspective transformation for depth

#### 5. CursorEffect Class
```javascript
class CursorEffect {
    createCursor() {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        // Creates custom cursor elements
        
        const outline = document.createElement('div');
        outline.className = 'cursor-outline';
        // Creates cursor outline
    }
}
```
**Features:**
- Custom cursor with dot and outline
- Smooth following animation
- Dynamic CSS injection

#### 6. LoadingAnimation Class
```javascript
class LoadingAnimation {
    init() {
        const loader = document.createElement('div');
        loader.id = 'loading-screen';
        loader.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <h2>Loading Portfolio...</h2>
            </div>
        `;
        // Creates loading screen
    }
}
```
**Features:**
- Full-screen loading overlay
- Animated spinner
- Smooth fade-out transition

### Event Handling and Initialization
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all effects
    new LoadingAnimation();
    new TypingAnimation(typingText, 'Amirreza Asgharzadeh');
    new ParticleSystem();
    new SmoothScroll();
    new ScrollAnimations();
    new TiltEffect();
    new CursorEffect();
    new ActiveNavigation();
    new RippleEffect();
});
```

## 🛠️ Technical Implementation Details

### Performance Optimizations
1. **Intersection Observer**: Used instead of scroll events for better performance
2. **requestAnimationFrame**: Smooth 60fps animations
3. **Debounced Resize**: Prevents excessive canvas resizing
4. **Lazy Loading**: Elements animate only when visible

### Browser Compatibility
- **CSS**: Vendor prefixes for webkit browsers
- **JavaScript**: ES6+ features with fallbacks
- **Responsive**: Mobile-first approach with breakpoints

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **Keyboard Navigation**: Focus states and tab order
- **Screen Reader Support**: Alt texts and ARIA labels
- **Reduced Motion**: Respects user's motion preferences

## 📱 Responsive Design

### Breakpoints
```css
@media (max-width: 768px) {
    .nav-links { display: none; }
    .hero-title { font-size: 2rem; }
    .about-content { grid-template-columns: 1fr; }
    .timeline::before { left: 20px; }
}
```

### Mobile Optimizations
- Simplified navigation
- Adjusted typography scales
- Modified layouts for small screens
- Touch-friendly interactions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Or serve via local server for development

### Development Setup
```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js (if available)
npx http-server

# Or simply open index.html in browser
```

## 🎯 Features Breakdown

### Visual Effects
- **Particle System**: 50+ floating particles with connection lines
- **3D Transformations**: Perspective-based card tilting
- **Gradient Animations**: Shifting color backgrounds
- **Glassmorphism**: Blur effects with transparency

### Interactive Elements
- **Hover Effects**: Transform and shadow changes
- **Click Animations**: Ripple effects on buttons
- **Scroll Triggers**: Fade-in and progress animations
- **Mouse Tracking**: Custom cursor and tilt effects

### Animation Types
- **CSS Keyframes**: Bounce, blink, gradient-shift
- **JavaScript Animations**: Typing, counting, progress bars
- **Intersection Observer**: Scroll-based triggers
- **Transform Animations**: 3D rotations and translations

## 🔧 Customization Guide

### Colors
Modify the CSS custom properties or gradient values:
```css
:root {
    --primary-color: #60a5fa;
    --secondary-color: #a855f7;
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
}
```

### Animations
Adjust timing and easing functions:
```css
.hero-card {
    transition: all 0.3s ease; /* Modify duration and easing */
}
```

### Content
Update the HTML content in `index.html`:
- Personal information
- Skills and percentages
- Project details
- Contact information

## 📊 Performance Metrics

### Optimization Techniques
- **Efficient Selectors**: Minimal DOM queries
- **Event Delegation**: Reduced event listeners
- **Animation Batching**: Grouped DOM updates
- **Memory Management**: Cleanup of unused elements

### Loading Performance
- **Inline Critical CSS**: Above-the-fold styles
- **Async JavaScript**: Non-blocking script loading
- **Optimized Images**: Responsive and compressed
- **Minimal Dependencies**: Pure HTML/CSS/JS

## 🐛 Browser Support

### Tested Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Known Issues
- Particle system may impact performance on older devices
- Some CSS effects require modern browser features
- Mobile Safari may have touch interaction differences

## 📈 Future Enhancements

### Planned Features
- Dark/Light theme toggle
- More interactive project showcases
- Contact form with validation
- Blog section integration
- Performance analytics

### Technical Improvements
- PWA capabilities
- Service worker caching
- Image optimization
- Bundle size reduction

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements. Please follow the existing code style and comment your changes.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Amirreza Asgharzadeh**
- GitHub: [@Amirreza938](https://github.com/Amirreza938)
- LinkedIn: [Amirreza Asgharzadeh](https://www.linkedin.com/in/Amirreza%20Asgharzadeh/)
- Email: amirrezaasgharzadeh938@gmail.com

---

This portfolio demonstrates modern web development techniques including 3D CSS transformations, JavaScript animations, and responsive design principles. The code is well-structured, commented, and optimized for performance across different devices and browsers.
