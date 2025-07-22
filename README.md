# Responsive Portfolio SPA Web Template

**A professional, responsive portfolio SPA built with React and Vite for a digital content manager and journalist.**  
This project showcases a modular and advanced frontend architecture, designed for scalability and rich user interaction.


## 🚀 Tech Stack

- **Framework:** React 19.1.0
- **Bundler:** Vite 7.0.4
- **Architecture:** SPA (Single Page Application)
- **Routing:** Fullpage vertical and horizontal navigation
- **Design:** Mobile-first, modular CSS, advanced color theming


## 🧩 Features

### 🔗 Advanced Navigation System

- Vertical fullpage scroll/swipe across main sections
- Horizontal swipe navigation for **Services** and **Projects** on mobile
- Adaptive navigation dots with dynamic thematic colors
- Elegant hamburger menu with full-screen overlay on mobile
- Custom `wheel` and `touch` event handling

### 🎨 Intelligent Color System

Each section features a dedicated color palette for a consistent and immersive UX:

| Section   | Background     | Accent Color   |
|-----------|----------------|----------------|
| Hero      | #f5f5f5      | #a53dff      |
| About     | #e8f4fd      | #3498db      |
| Services  | #f0f8e8      | #27ae60      |
| Projects  | #fdf2e8      | #D2691E      |
| Contact   | #f0f4f8      | #1E40AF      |

These styles are centrally configured in `App.jsx` and `Navbar.jsx`.

### 🧱 Modular Components

#### `Hero` (`/src/components/hero/Hero.jsx`)
- Minimalistic and elegant presentation
- Emphasized typography with accent coloring

#### `Navbar` (`/src/components/navbar/`)
- **Desktop:** Centered navigation with active state highlighting
- **Mobile:** Fullscreen menu with animated transitions
- Dynamically adapts color based on current section
- Integrated footer in mobile menu

#### `Services` (`/src/components/servicios/`)
- **Desktop:** 3-column grid layout
- **Mobile:** Horizontal slider with gesture navigation
- Custom animations and navigation dots
- Global state management from `App.jsx`

#### `Projects` (`/src/components/proyectos/`)
- Functionally mirrors **Services**
- Uses a different thematic color scheme

#### `Contact` (`/src/components/contacto/`)
- Fully functional form with input validation
- Loading and submission states
- Glassmorphism effect on backdrop
- Fully responsive down to 320px


## 🎨 Style System

- Component-scoped modular CSS
- Mobile-first responsive design
- Native CSS animations and transitions
- Glassmorphism via `backdrop-filter`
- Organized and layered z-index system


## 🔧 Dynamic Color Adaptation

Color transitions are smooth (`transition: all 0.3s ease`) and fully integrated across:

- **Navbar Logo and Active Links**
- **Hamburger Button and Close Icon**
- **Mobile Menu Items and Navigation Numbers**
- **Fullpage Navigation Dots**
- **Services/Projects section-specific dots**

This creates a cohesive and branded visual experience throughout user navigation.


## 🚧 Current Content (Placeholder)

- `Hero`: "Hi, I'm Laura" with lorem ipsum
- `About`: Basic title and dummy text
- `Services` and `Projects`: 3 generic items each
- `Contact`: Simulated submission form


## 📈 Next Improvements (Roadmap)

1. **Content**:
   - Real portfolio items, testimonials, blog or CMS integration
2. **Functionality**:
   - Filters, lightbox, lazy loading
3. **Technical Enhancements**:
   - SEO optimization, PWA support, dark mode toggle
4. **UX/UI Upgrades**:
   - Professional typography, media iconography


## 📁 Project Structure Highlights

src/
├── components/
│ ├── hero/
│ ├── navbar/
│ ├── servicios/
│ ├── proyectos/
│ └── contacto/
├── App.jsx
└── main.jsx


## 📌 About

This project serves as a strong technical foundation for building a complete digital portfolio for content creators. Its modular, scalable and responsive setup ensures smooth integration of future features and content with a clear visual identity.
