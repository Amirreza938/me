# Amirreza Asgharzadeh - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Computer Engineering student and web developer. Built with vanilla HTML, CSS, and JavaScript for educational purposes and to demonstrate fundamental web development skills, despite having React experience.

🌐 **Live Demo**: [https://amirreza938.github.io/me/](https://amirreza938.github.io/me/)

##  Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Sections](#sections)
- [Customization](#customization)
- [Deployment](#deployment)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Contact](#contact)

##  Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and glassmorphism effects
- **Responsive**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth transitions, hover effects, and animated elements throughout
- **Particle System**: Dynamic particle background for enhanced visual appeal
- **Typing Animation**: Animated typing effect for the name display in hero section
- **Skill Bars**: Animated progress bars showing technical proficiency levels
- **Project Showcase**: Interactive project cards with hover overlays and detailed information
- **Contact Form**: Contact section with multiple ways to get in touch
- **Smooth Scrolling**: Seamless navigation between sections with smooth scroll behavior
- **Performance Optimized**: Fast loading times and optimized assets for better user experience

##  Technologies Used

### Frontend
- **HTML5**: Semantic markup structure with modern HTML elements
- **CSS3**: Modern styling with custom properties, animations, and gradient effects
- **JavaScript (ES6+)**: Interactive functionality, animations, and DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design

### Build Tools
- **Vite**: Modern build tool providing fast development server and optimized production builds
- **Node.js**: JavaScript runtime for development tools and package management

### Deployment
- **GitHub Pages**: Static site hosting for seamless deployment

##  Project Structure

```
portfolio-website/
├── docs/                              # Built files for GitHub Pages deployment
│   ├── assets/
│   │   ├── index-Bhp9WLf6.css        # Compiled CSS
│   │   └── index-CwdQnrlP.js         # Compiled JavaScript
│   ├── icon.png
│   ├── image.png
│   ├── Traveloka-Flight-Hotel-Package.jpg
│   ├── vite.svg
│   └── index.html                     # Production HTML
├── src/
│   ├── main.js                        # Main JavaScript file with animations
│   └── style.css                      # Additional custom styles
├── public/                            # Static assets
│   ├── icon.png                       # Favicon
│   ├── image.png                      # Project screenshots
│   ├── Traveloka-Flight-Hotel-Package.jpg
│   └── vite.svg
├── index.html                         # Main HTML file
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── package.json                       # Project dependencies and scripts
└── README.md                          # Project documentation
```

##  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amirreza938/me.git
   cd me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

##  Usage

### Development Commands
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Building for Production
```bash
npm run build
```
This creates optimized files in the `docs` directory, ready for deployment.

##  Sections

###  Home Section
- **Hero Banner**: Eye-catching introduction with animated typing effect
- **Call-to-Action Buttons**: Navigation to About and Contact sections
- **Particle Background**: Dynamic animated particle system
- **Responsive Design**: Adapts beautifully to all screen sizes

###  About Section
- **Personal Introduction**: Detailed description of background and interests
- **Statistics Cards**: Animated counters showing projects, skills, and experience
- **Fade-in Animations**: Smooth entrance animations for better user experience

###  Education Section
- **Timeline Design**: Vertical timeline showcasing educational background
- **Interactive Cards**: Hover effects and smooth transitions
- **Academic Journey**: From high school diploma to current university studies

###  Skills Section
- **Technical Skills**: 
  - **Frontend**: HTML/CSS (50%), JavaScript (40%), React (30%), Vue.js (25%)
  - **Backend**: Node.js (40%), Python (60%), Express.js (35%), MongoDB (60%)
  - **Tools**: Git (80%), VS Code (80%)
- **Animated Progress Bars**: Visual representation of skill levels
- **Soft Skills**: Communication, teamwork, problem-solving, and leadership

###  Projects Section
- **Project Cards**: Interactive cards with hover overlays
- **Technology Tags**: Visual indicators of technologies used
- **Live Links**: Direct links to GitHub repositories
- **Featured Projects**:
  - **Hotel & Flight Booking Website**: React-based booking interface with dark mode
  - **Portfolio Website**: This very website showcasing modern web development

###  Contact Section
- **Multiple Contact Methods**: Email, location, and LinkedIn
- **Interactive Cards**: Hover effects for better user engagement
- **Social Links**: Direct links to professional profiles

##  Customization

### Colors and Themes
The website uses a dark theme with blue and purple gradients. To customize:

1. **Primary Colors**: Modify the gradient colors in `index.html`
   ```css
   /* Main gradient theme */
   from-blue-400 to-purple-500
   
   /* Background gradients */
   from-slate-900 to-slate-800
   ```

2. **Tailwind Configuration**: Update `tailwind.config.js` for custom colors

### Content Updates
1. **Personal Information**: Update text content in `index.html`
2. **Skills**: Modify skill percentages and add new technologies
3. **Projects**: Add new project cards with images and descriptions
4. **Images**: Replace images in the `public` folder

### Animations
- **Typing Effect**: Customize in `src/main.js`
- **Particle System**: Modify particle behavior and appearance
- **Hover Effects**: Adjust transition durations and transforms

##  Deployment

### GitHub Pages Deployment

1. **Configure Vite**: Set the correct base path in `vite.config.js`
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     build: {
       outDir: 'docs'
     }
   })
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `main` branch and `/docs` folder

##  Performance

### Optimization Features
- **Vite Build Optimization**: Tree-shaking, code splitting, and minification
- **Image Optimization**: Compressed images for faster loading
- **CSS Purging**: Unused CSS removed in production build
- **Lazy Loading**: Efficient loading of content and animations
- **Responsive Images**: Appropriately sized images for different devices

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 90+ in all categories

##  Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile Browsers**: iOS Safari, Chrome Mobile

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Test responsiveness on multiple devices
- Ensure accessibility standards are met
- Optimize images and assets before committing


##  Contact

**Amirreza Asgharzadeh**

- **Email**: [amirrezaasgharzadeh938@gmail.com](mailto:amirrezaasgharzadeh938@gmail.com)
- **LinkedIn**: [Amirreza Asgharzadeh](https://www.linkedin.com/in/Amirreza%20Asgharzadeh/)
- **GitHub**: [Amirreza938](https://github.com/Amirreza938)
- **Website**: [https://amirreza938.github.io/me/](https://amirreza938.github.io/me/)
- **Location**: Mashhad, Iran

---

⭐ **If you found this project helpful, please give it a star!** ⭐

### Mobile Responsive
The website is fully responsive and provides an excellent user experience across all devices.

---

*Built with ❤️ by Amirreza Asgharzadeh*
