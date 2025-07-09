# A Simple 3D Interactive Portfolio Website

A modern, interactive portfolio website built with HTML, JavaScript, and **Tailwind CSS**, featuring 3D effects, smooth animations, and a dynamic particle system background.

Although I am familiar with React, I intentionally built this project using vanilla HTML, JavaScript, and Tailwind CSS for educational purposes—to deepen my understanding of core web technologies and custom interactivity without relying on frameworks.

## Features

- **Interactive Particle System**: Dynamic floating particles with connection lines
- **3D Tilt Effects**: Cards and elements respond to mouse movement with 3D transformations
- **Smooth Animations**: Fade-in effects, typing animation, and scroll-based animations
- **Responsive Design**: Optimized for all device sizes using Tailwind's responsive utilities
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and smooth transitions
- **Interactive Navigation**: Active section highlighting and smooth scrolling
- **Animated Skill Bars**: Progressive skill level visualization
- **Dynamic Counters**: Animated statistics counters
- **Ripple Button Effects**: Interactive button press feedback

## File Structure

```
task1-html/
├── index.html          # Main HTML structure with Tailwind CSS
├── script.js           # JavaScript functionality and interactions
├── assets/
│   └── images/         # Project images and icons
└── README.md           # This documentation file
```

## HTML Structure (index.html)

### Document Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amirreza Asgharzadeh - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'slate-900': '#0f172a',
                        // Custom color extensions...
                    }
                }
            }
        }
    </script>
</head>
```

### Key Sections

#### 1. Particle System Container
```html
<div class="fixed top-0 left-0 w-full h-full -z-10">
    <canvas id="particles-canvas" class="w-full h-full"></canvas>
</div>
```
- Fixed position canvas for background particle animation
- Controlled by JavaScript ParticleSystem class

#### 2. Navigation Bar
```html
<nav class="fixed top-0 w-full bg-slate-800 backdrop-blur-sm border border-blue-400/30 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300">
    <div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AA</div>
    <ul class="flex list-none gap-8">
        <li><a href="#home" data-section="home" class="text-slate-200 no-underline transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all after:duration-300">Home</a></li>
        <!-- More navigation links -->
    </ul>
</nav>
```
- Fixed position with glassmorphism effect using Tailwind's backdrop-blur
- Smooth scrolling navigation with active state tracking

#### 3. Hero Section
```html
<section id="home" class="h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
    <div class="text-center z-10">
        <div class="bg-slate-800/80 backdrop-blur-lg rounded-[20px] p-12 border border-blue-400/30 perspective-1000 transform-gpu transition-all duration-300 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:-translate-y-2">
            <h1 class="text-5xl mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-amber-500 bg-clip-text text-transparent animate-gradient-shift">
                <span class="inline-block">Amirreza Asgharzadeh</span>
                <span class="animate-blink">|</span>
            </h1>
            <!-- More hero content -->
        </div>
    </div>
</section>
```
- 3D card effect with Tailwind's transform utilities
- Typing animation for the main title
- Animated scroll indicator

#### 4. About Section with Statistics
```html
<div class="grid grid-cols-1 gap-8">
    <div class="text-center p-6 bg-slate-800/50 rounded-2xl border border-blue-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(25,0,253,0.2)]">
        <span class="block text-4xl font-bold text-blue-400 stat-number" data-target="20">0</span>
        <span class="text-slate-400 text-sm uppercase tracking-wide">Projects</span>
    </div>
    <!-- More statistics -->
</div>
```
- Animated counters using `data-target` attributes
- JavaScript handles the counting animation

#### 5. Skills Section with Progress Bars
```html
<div class="skill-bar" data-skill="90">
    <span class="block mb-2 font-bold">HTML</span>
    <div class="w-full h-2 bg-slate-700/50 rounded overflow-hidden">
        <div class="skill-fill h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded w-0"></div>
    </div>
</div>
```
- Skill levels defined with `data-skill` attributes
- Animated progress bars on scroll

## Tailwind CSS Styling

### Tailwind Configuration
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'slate-900': '#0f172a',
                'slate-800': '#1e293b',
                'blue-400': '#60a5fa',
                'purple-500': '#a855f7',
                'amber-500': '#f59e0b',
            },
            animation: {
                'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
                'blink': 'blink 1s infinite',
                'bounce-custom': 'bounce-custom 2s infinite',
            }
        }
    }
}
```

### Custom CSS Animations
```css
@keyframes gradient-shift {
    0%, 100% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
}

@keyframes blink {
    0%, 50% { opacity: 1;}
    51%, 100% { opacity: 0;}
}

@keyframes bounce-custom {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}
```

### Key Tailwind Classes Used

#### 1. Layout & Structure
- `h-screen` - Full viewport height
- `flex items-center justify-center` - Flexbox centering
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive grid
- `max-w-6xl mx-auto px-8` - Container with max width and padding

#### 2. Colors & Backgrounds
- `bg-gradient-to-br from-slate-900 to-slate-800` - Background gradients
- `bg-slate-800/50` - Semi-transparent backgrounds
- `text-blue-400` - Color utilities
- `border-blue-400/30` - Semi-transparent borders

#### 3. Effects & Animations
- `backdrop-blur-sm` - Glassmorphism effect
- `transition-all duration-300` - Smooth transitions
- `hover:-translate-y-1` - Hover transforms
- `shadow-2xl` - Box shadows

#### 4. Typography
- `text-5xl` - Large text sizes
- `bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent` - Gradient text
- `font-bold` - Font weights

#### 5. Spacing & Sizing
- `p-12` - Padding utilities
- `mb-4` - Margin utilities
- `gap-8` - Grid/flex gaps
- `rounded-2xl` - Border radius

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

#### 4. CursorEffect Class
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

#### 5. LoadingAnimation Class
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

## Technical Implementation Details

### Performance Optimizations
1. **Intersection Observer**: Used instead of scroll events for better performance
2. **requestAnimationFrame**: Smooth 60fps animations
3. **Debounced Resize**: Prevents excessive canvas resizing
4. **Lazy Loading**: Elements animate only when visible

### Browser Compatibility
- **Tailwind CSS**: Modern browser support with CDN delivery
- **JavaScript**: ES6+ features with fallbacks
- **Responsive**: Mobile-first approach with Tailwind breakpoints

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and structure
- **Keyboard Navigation**: Focus states and tab order
- **Screen Reader Support**: Alt texts and ARIA labels
- **Reduced Motion**: Respects user's motion preferences

## Responsive Design

### Tailwind Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Mobile Optimizations
```html
<!-- Responsive navigation -->
<ul class="flex list-none gap-8"> <!-- Hidden on mobile, shown on larger screens -->

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<!-- Responsive text -->
<h1 class="text-3xl md:text-5xl">
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Tailwind CSS CDN)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Tailwind CSS will load automatically from CDN

### Development Setup
```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js (if available)
npx http-server

# Or simply open index.html in browser
```

## Features Breakdown

### Visual Effects
- **Particle System**: 50+ floating particles with connection lines
- **3D Transformations**: Perspective-based card tilting
- **Gradient Animations**: Shifting color backgrounds
- **Glassmorphism**: Blur effects with transparency

### Interactive Elements
- **Hover Effects**: Transform and shadow changes
- **Click Animations**: Ripple effects on buttons
- **Scroll Triggers**: Fade-in and progress animations

### Animation Types
- **CSS Keyframes**: Bounce, blink, gradient-shift
- **JavaScript Animations**: Typing, counting, progress bars
- **Intersection Observer**: Scroll-based triggers
- **Transform Animations**: 3D rotations and translations

## Customization Guide

### Colors
Modify the Tailwind configuration:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'custom-blue': '#your-color',
                'custom-purple': '#your-color',
            }
        }
    }
}
```

### Responsive Design
Use Tailwind's responsive prefixes:
```html
<div class="text-sm md:text-lg lg:text-xl">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Custom Animations
Add to the Tailwind config:
```javascript
animation: {
    'your-animation': 'your-keyframes 2s infinite',
}
```

## Performance Metrics

### Tailwind CSS Benefits
- **Utility-First**: Reduced CSS bundle size
- **CDN Delivery**: Fast loading from global CDN
- **JIT Compilation**: Only used classes are included
- **Responsive Design**: Built-in responsive utilities

### Loading Performance
- **Inline Critical CSS**: Above-the-fold styles
- **Async JavaScript**: Non-blocking script loading
- **Optimized Images**: Responsive and compressed
- **Minimal Dependencies**: Pure HTML/CSS/JS

## Browser Support

### Tested Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Known Issues
- Particle system may impact performance on older devices
- Some CSS effects require modern browser features
- Mobile Safari may have touch interaction differences

## Future Enhancements

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

## Contributing

Feel free to fork this project and submit pull requests for improvements. Please follow the existing code style and comment your changes.

## License

This project is open source and available under the MIT License.

## Author

**Amirreza Asgharzadeh**
- GitHub: [@Amirreza938](https://github.com/Amirreza938)
- LinkedIn: [Amirreza Asgharzadeh](https://www.linkedin.com/in/Amirreza%20Asgharzadeh/)
- Email: amirrezaasgharzadeh938@gmail.com

---

This portfolio demonstrates modern web development techniques including Tailwind CSS utility-first approach, JavaScript animations, and responsive design principles. The code is well-structured,
