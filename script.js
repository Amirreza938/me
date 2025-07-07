console.log("Welcome to my website!");

// Particle System
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(96, 165, 250, ${particle.opacity})`;
            // const hue = (Date.now() / 50 + particle.x) % 360;
            // this.ctx.fillStyle = `hsla(${hue}, 100%, 70%, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        // Draw connections
        this.drawConnections();
        
        requestAnimationFrame(() => this.animate());
    }

    drawConnections() {
        const maxDistance = 150;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (maxDistance - distance) / maxDistance * 0.3;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, text) {
        this.element = element;
        this.text = text;
        this.index = 0;
        this.init();
    }

    init() {
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), 100);
        }
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
        this.updateNavbar();
        this.animateCounters();
        this.animateSkillBars();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    updateNavbar() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            }
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(counter) {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillFill = entry.target.querySelector('.skill-fill');
                    const skillLevel = entry.target.dataset.skill;
                    setTimeout(() => {
                        skillFill.style.width = skillLevel + '%';
                    }, 300);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
}

// 3D Tilt Effect
class TiltEffect {
    constructor() {
        this.init();
    }

    init() {
        const cards = document.querySelectorAll('.project-card, .skill-category, .contact-item');
        
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
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }
}

// Mouse Cursor Effect
class CursorEffect {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            let cursor = document.querySelector('.cursor-dot');
            if (!cursor) {
                this.createCursor();
            }
            
            const dot = document.querySelector('.cursor-dot');
            const outline = document.querySelector('.cursor-outline');
            
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
            
            outline.style.left = e.clientX + 'px';
            outline.style.top = e.clientY + 'px';
        });
    }

    createCursor() {
        // const dot = document.createElement('div');
        // dot.className = 'cursor-dot';
        // dot.style.cssText = `
        //     position: fixed;
        //     width: 8px;
        //     height: 8px;
        //     background: #60a5fa;
        //     border-radius: 50%;
        //     pointer-events: none;
        //     z-index: 9999;
        //     transition: transform 0.1s ease;
        // `;
        
        // const outline = document.createElement('div');
        // outline.className = 'cursor-outline';
        // outline.style.cssText = `
        //     position: fixed;
        //     width: 30px;
        //     height: 30px;
        //     border: 2px solid rgba(96, 165, 250, 0.3);
        //     border-radius: 50%;
        //     pointer-events: none;
        //     z-index: 9998;
        //     transition: all 0.3s ease;
        // `;
        
        document.body.appendChild(dot);
        document.body.appendChild(outline);
    }
}



// Loading Animation
class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        const loader = document.createElement('div');
        loader.id = 'loading-screen';
        loader.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <h2>Loading Portfolio...</h2>
            </div>
        `;
        
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .loading-content {
                text-align: center;
                color: #e2e8f0;
            }
            
            .loading-spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(96, 165, 250, 0.3);
                border-top: 3px solid #60a5fa;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(loader);
        
        // Remove loader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(loader);
                }, 500);
            }, 1000);
        });
    }
}

// Active Navigation
class ActiveNavigation {
    constructor() {
        this.init();
    }

    init() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Button Ripple Effect
class RippleEffect {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    left: ${x - 10}px;
                    top: ${y - 10}px;
                `;
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add ripple animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .btn {
                position: relative;
                overflow: hidden;
            }
            
            .nav-links a.active {
                color: #60a5fa;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading animation
    new LoadingAnimation();
    
    // Initialize typing animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        new TypingAnimation(typingText, 'Amirreza Asgharzadeh');
    }
    
    // Initialize particle system
    new ParticleSystem();
    
    // Initialize smooth scrolling
    new SmoothScroll();
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize 3D tilt effect
    new TiltEffect();
    
    // Initialize cursor effect
    new CursorEffect();
    
    // Parallax effect disabled to prevent spacing issues
    // new ParallaxEffect();
    
    // Initialize active navigation
    new ActiveNavigation();
    
    // Initialize ripple effect
    new RippleEffect();
    
    console.log("3D Portfolio loaded successfully!");
});

// Add scroll-to-top functionality
window.addEventListener('scroll', () => {
    const scrollTop = document.querySelector('.scroll-to-top');
    if (!scrollTop) {
        createScrollToTop();
    } else {
        if (window.scrollY > 500) {
            scrollTop.style.opacity = '1';
            scrollTop.style.visibility = 'visible';
        } else {
            scrollTop.style.opacity = '0';
            scrollTop.style.visibility = 'hidden';
        }
    }
});

function createScrollToTop() {
    const scrollTop = document.createElement('div');
    scrollTop.className = 'scroll-to-top';
    scrollTop.innerHTML = '↑';
    scrollTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #60a5fa, #a855f7);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(96, 165, 250, 0.3);
    `;
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollTop.addEventListener('mouseenter', () => {
        scrollTop.style.transform = 'scale(1.1)';
        scrollTop.style.boxShadow = '0 6px 20px rgba(96, 165, 250, 0.4)';
    });
    
    scrollTop.addEventListener('mouseleave', () => {
        scrollTop.style.transform = 'scale(1)';
        scrollTop.style.boxShadow = '0 4px 15px rgba(96, 165, 250, 0.3)';
    });
    
    document.body.appendChild(scrollTop);
}