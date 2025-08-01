# Perfect Dress - Modern React Website

A professional and modern fashion website built with React, featuring stunning animations, responsive design, and the latest web technologies.

## 🎨 Design Features

- **Original Color Scheme Preserved**: Dark background (#111111), pink accents (#ff00ff), and blue highlights (#03a9f4)
- **Video Background**: Original fashion video with overlay effects
- **Modern Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Works perfectly on all devices
- **Professional UI**: Clean, modern interface with glassmorphism effects

## 🚀 Technologies Used

- **React 18** - Latest React with hooks and modern features
- **Vite** - Ultra-fast build tool and development server
- **Framer Motion** - Advanced animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library
- **GSAP** - Professional-grade animations
- **Poppins Font** - Modern typography

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Home.jsx          # Landing page with video background
│   ├── Collection.jsx    # Dress collection with filtering
│   ├── Blog.jsx          # Fashion blog with articles
│   ├── Contact.jsx       # Contact form and information
│   └── Navigation.jsx    # Modern navigation with animations
├── App.jsx               # Main app with routing
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎯 Key Features

### Home Page
- Full-screen video background
- Animated text and buttons
- Social media integration
- Floating decorative elements
- GSAP-powered animations

### Collection Page
- Category filtering system
- Responsive grid layout
- Hover effects and animations
- Product cards with actions
- Modern glassmorphism design

### Blog Page
- Featured article section
- Article grid with categories
- Newsletter signup
- Author and date information
- Smooth page transitions

### Contact Page
- Interactive contact form
- Contact information cards
- Social media links
- Map placeholder
- Form validation

### Navigation
- Side menu with animations
- Smooth transitions
- Active page highlighting
- Mobile-responsive design

## 🎨 Color Palette

- **Primary Dark**: `#111111` (Background)
- **Primary Pink**: `#ff00ff` (Accent color)
- **Primary Blue**: `#03a9f4` (Highlights)
- **White**: `#ffffff` (Text)
- **Gray**: Various shades for secondary text

## 📱 Responsive Design

- **Mobile**: Optimized for phones and tablets
- **Tablet**: Adaptive layouts for medium screens
- **Desktop**: Full-featured experience
- **Large Screens**: Enhanced layouts for wide displays

## ⚡ Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Optimized Animations**: Hardware-accelerated
- **Minimal Bundle**: Tree-shaking and optimization
- **Fast Loading**: Vite's instant hot reload

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  'perfect-dark': '#111111',
  'perfect-pink': '#ff00ff',
  'perfect-blue': '#03a9f4',
}
```

### Animations
Customize animations in `src/index.css`:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### Content
Update content in respective component files:
- `src/components/Home.jsx` - Hero content
- `src/components/Collection.jsx` - Dress data
- `src/components/Blog.jsx` - Blog posts
- `src/components/Contact.jsx` - Contact info

## 🌟 Advanced Features

- **GSAP Integration**: Professional animations
- **Framer Motion**: Smooth page transitions
- **Glassmorphism**: Modern glass effects
- **Hover Effects**: Interactive elements
- **Loading States**: Smooth loading experiences
- **Error Boundaries**: Graceful error handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@perfectdress.com
- Phone: +1 (555) 123-4567

---

**Perfect Dress** - Where every dress tells a story. 