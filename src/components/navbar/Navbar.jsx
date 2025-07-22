import { useState } from 'react';
import './Navbar.css';

function Navbar({ currentSection, goToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Configuración de colores para cada sección
  const sectionStyles = {
    0: { // Hero - fondo gris claro
      bgColor: '#f5f5f5',
      textColor: '#333',
      logoSpanColor: '#a53dff'
    },
    1: { // Sobre mi - fondo azul claro
      bgColor: '#e8f4fd', 
      textColor: '#2c3e50',
      logoSpanColor: '#3498db'
    },
    2: { // Servicios - fondo verde claro
      bgColor: '#f0f8e8',
      textColor: '#2d5016',
      logoSpanColor: '#27ae60'
    },
    3: { // Proyectos - fondo beige claro
      bgColor: '#fdf2e8',
      textColor: '#8B4513', // Marrón oscuro saddlebrown
      logoSpanColor: '#D2691E' // Naranja chocolate
    },
    4: { // Contacto - fondo gris azulado claro
      bgColor: '#f0f4f8',
      textColor: '#2D3748', // Gris oscuro slate
      logoSpanColor: '#1E40AF' // Azul oscuro para complementar el fondo azulado
    }
  };

  const currentStyle = sectionStyles[currentSection] || sectionStyles[0];

  const handleClick = (e, sectionIndex) => {
    e.preventDefault();
    goToSection(sectionIndex);
    setIsMenuOpen(false); // Cerrar menú después de navegar
    // Mostrar navigation dots al cerrar el menú
    const navigationDots = document.getElementById('navigation-dots');
    if (navigationDots) {
      navigationDots.style.opacity = '1';
      navigationDots.style.pointerEvents = 'auto';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Ocultar/mostrar navigation dots
    const navigationDots = document.getElementById('navigation-dots');
    if (navigationDots) {
      navigationDots.style.opacity = !isMenuOpen ? '0' : '1';
      navigationDots.style.pointerEvents = !isMenuOpen ? 'none' : 'auto';
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo" style={{ color: currentStyle.textColor }}>
            Comunica<span style={{ color: currentStyle.logoSpanColor }}>Canarias</span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            <li><a href="#inicio" onClick={(e) => handleClick(e, 0)} className={currentSection === 0 ? 'active' : ''} style={{ color: currentSection === 0 ? currentStyle.logoSpanColor : currentStyle.textColor }}>Inicio</a></li>
            <li><a href="#sobre-mi" onClick={(e) => handleClick(e, 1)} className={currentSection === 1 ? 'active' : ''} style={{ color: currentSection === 1 ? currentStyle.logoSpanColor : currentStyle.textColor }}>Sobre mí</a></li>
            <li><a href="#servicios" onClick={(e) => handleClick(e, 2)} className={currentSection === 2 ? 'active' : ''} style={{ color: currentSection === 2 ? currentStyle.logoSpanColor : currentStyle.textColor }}>Servicios</a></li>
            <li><a href="#proyectos" onClick={(e) => handleClick(e, 3)} className={currentSection === 3 ? 'active' : ''} style={{ color: currentSection === 3 ? currentStyle.logoSpanColor : currentStyle.textColor }}>Proyectos</a></li>
            <li><a href="#contacto" onClick={(e) => handleClick(e, 4)} className={currentSection === 4 ? 'active' : ''} style={{ color: currentSection === 4 ? currentStyle.logoSpanColor : currentStyle.textColor }}>Contacto</a></li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span style={{ backgroundColor: currentStyle.textColor }}></span>
            <span style={{ backgroundColor: currentStyle.textColor }}></span>
            <span style={{ backgroundColor: currentStyle.textColor }}></span>
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          {/* Close Button */}
          <button className="mobile-close-btn" onClick={toggleMenu} aria-label="Cerrar menú">
            <span style={{ backgroundColor: currentStyle.textColor }}></span>
            <span style={{ backgroundColor: currentStyle.textColor }}></span>
          </button>
          
          <div className="mobile-logo" style={{ color: currentStyle.textColor }}>
            Comunica<span style={{ color: currentStyle.logoSpanColor }}>Canarias</span>
          </div>
          <nav className="mobile-nav">
            <a href="#inicio" onClick={(e) => handleClick(e, 0)} className={currentSection === 0 ? 'active' : ''} 
               style={currentSection === 0 ? { 
                 color: currentStyle.logoSpanColor,
                 background: `linear-gradient(135deg, ${currentStyle.logoSpanColor}12, ${currentStyle.logoSpanColor}04)`,
                 borderColor: `${currentStyle.logoSpanColor}40`,
                 boxShadow: `0 4px 12px ${currentStyle.logoSpanColor}15`
               } : {}}>
              <span className="nav-number" style={{
                color: currentStyle.logoSpanColor,
                backgroundColor: `${currentStyle.logoSpanColor}15`
              }}>01</span>
              <span className="nav-text">Inicio</span>
            </a>
            <a href="#sobre-mi" onClick={(e) => handleClick(e, 1)} className={currentSection === 1 ? 'active' : ''}
               style={currentSection === 1 ? { 
                 color: currentStyle.logoSpanColor,
                 background: `linear-gradient(135deg, ${currentStyle.logoSpanColor}12, ${currentStyle.logoSpanColor}04)`,
                 borderColor: `${currentStyle.logoSpanColor}40`,
                 boxShadow: `0 4px 12px ${currentStyle.logoSpanColor}15`
               } : {}}>
              <span className="nav-number" style={{
                color: currentStyle.logoSpanColor,
                backgroundColor: `${currentStyle.logoSpanColor}15`
              }}>02</span>
              <span className="nav-text">Sobre mí</span>
            </a>
            <a href="#servicios" onClick={(e) => handleClick(e, 2)} className={currentSection === 2 ? 'active' : ''}
               style={currentSection === 2 ? { 
                 color: currentStyle.logoSpanColor,
                 background: `linear-gradient(135deg, ${currentStyle.logoSpanColor}12, ${currentStyle.logoSpanColor}04)`,
                 borderColor: `${currentStyle.logoSpanColor}40`,
                 boxShadow: `0 4px 12px ${currentStyle.logoSpanColor}15`
               } : {}}>
              <span className="nav-number" style={{
                color: currentStyle.logoSpanColor,
                backgroundColor: `${currentStyle.logoSpanColor}15`
              }}>03</span>
              <span className="nav-text">Servicios</span>
            </a>
            <a href="#proyectos" onClick={(e) => handleClick(e, 3)} className={currentSection === 3 ? 'active' : ''}
               style={currentSection === 3 ? { 
                 color: currentStyle.logoSpanColor,
                 background: `linear-gradient(135deg, ${currentStyle.logoSpanColor}12, ${currentStyle.logoSpanColor}04)`,
                 borderColor: `${currentStyle.logoSpanColor}40`,
                 boxShadow: `0 4px 12px ${currentStyle.logoSpanColor}15`
               } : {}}>
              <span className="nav-number" style={{
                color: currentStyle.logoSpanColor,
                backgroundColor: `${currentStyle.logoSpanColor}15`
              }}>04</span>
              <span className="nav-text">Proyectos</span>
            </a>
            <a href="#contacto" onClick={(e) => handleClick(e, 4)} className={currentSection === 4 ? 'active' : ''}
               style={currentSection === 4 ? { 
                 color: currentStyle.logoSpanColor,
                 background: `linear-gradient(135deg, ${currentStyle.logoSpanColor}12, ${currentStyle.logoSpanColor}04)`,
                 borderColor: `${currentStyle.logoSpanColor}40`,
                 boxShadow: `0 4px 12px ${currentStyle.logoSpanColor}15`
               } : {}}>
              <span className="nav-number" style={{
                color: currentStyle.logoSpanColor,
                backgroundColor: `${currentStyle.logoSpanColor}15`
              }}>05</span>
              <span className="nav-text">Contacto</span>
            </a>
          </nav>
          
          {/* Footer in mobile menu */}
          <div className="mobile-footer">
            <div className="mobile-social-links">
              <a href="mailto:hello@comunicacanarias.com" style={{ color: currentStyle.textColor }} title="Email">
                ✉️ hello@comunicacanarias.com
              </a>
            </div>
            <div className="mobile-copyright" style={{ color: currentStyle.textColor }}>
              © 2025 ComunicaCanarias
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
