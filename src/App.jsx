import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import SobreMi from "./components/sobre-mi/SobreMi";
import Servicios from "./components/servicios/Servicios";
import Proyectos from "./components/proyectos/Proyectos";
import Contacto from "./components/contacto/Contacto";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  // Mismos colores que el navbar para consistencia
  const sectionStyles = {
    0: { // Hero - gris claro
      bgColor: '#f5f5f5',
      textColor: '#333333',
      logoSpanColor: '#a53dff'
    },
    1: { // Sobre mí - azul claro
      bgColor: '#e8f4fd', 
      textColor: '#2c3e50',
      logoSpanColor: '#3498db'
    },
    2: { // Servicios - verde claro
      bgColor: '#f0f8e8',
      textColor: '#2d5016',
      logoSpanColor: '#27ae60'
    },
    3: { // Proyectos - beige claro
      bgColor: '#fdf2e8',
      textColor: '#8B4513',
      logoSpanColor: '#D2691E'
    },
    4: { // Contacto - gris azulado claro
      bgColor: '#f0f4f8',
      textColor: '#2D3748',
      logoSpanColor: '#1E40AF'
    }
  };

  const currentStyle = sectionStyles[currentSection] || sectionStyles[0];


  useEffect(() => {
    let startY = 0;
    let isScrolling = false;

    const handleWheel = (e) => {
      e.preventDefault();
      
      // Check if we're in Servicios section and on mobile
      if (currentSection === 2 && window.serviciosNavigate) {
        const direction = e.deltaY > 0 ? 'next' : 'prev';
        const handled = window.serviciosNavigate(direction);
        
        if (handled) {
          // Horizontal navigation handled the scroll
          return;
        }
      }
      
      // Check if we're in Proyectos section and on mobile
      if (currentSection === 3 && window.proyectosNavigate) {
        const direction = e.deltaY > 0 ? 'next' : 'prev';
        const handled = window.proyectosNavigate(direction);
        
        if (handled) {
          // Horizontal navigation handled the scroll
          return;
        }
      }

      // Normal vertical navigation
      if (e.deltaY > 0 && currentSection < 4) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent default scrolling
    };

    const handleTouchEnd = (e) => {
      if (isScrolling) return;
      
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;
      const threshold = 50; // Minimum swipe distance

      if (Math.abs(deltaY) > threshold) {
        // Check if we're in Servicios section and on mobile
        if (currentSection === 2 && window.serviciosNavigate) {
          const direction = deltaY > 0 ? 'next' : 'prev';
          const handled = window.serviciosNavigate(direction);
          
          if (handled) {
            // Horizontal navigation handled the gesture
            return;
          }
        }
        
        // Check if we're in Proyectos section and on mobile
        if (currentSection === 3 && window.proyectosNavigate) {
          const direction = deltaY > 0 ? 'next' : 'prev';
          const handled = window.proyectosNavigate(direction);
          
          if (handled) {
            // Horizontal navigation handled the gesture
            return;
          }
        }

        // Normal vertical navigation
        isScrolling = true;
        if (deltaY > 0 && currentSection < 4) {
          // Swipe up - go to next section
          setCurrentSection(prev => prev + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          // Swipe down - go to previous section
          setCurrentSection(prev => prev - 1);
        }
        
        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling = false;
        }, 700);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection]);

  useEffect(() => {
    const container = document.querySelector('.fullpage-container');
    if (container) {
      container.style.transform = `translateY(-${currentSection * 100}vh)`;
    }
  }, [currentSection]);

  const goToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex);
  };

  return (
    <>
      <Navbar currentSection={currentSection} goToSection={goToSection} />
      <div className="navigation-dots" id="navigation-dots">
        {[0, 1, 2, 3, 4].map(index => (
          <div
            key={index}
            className={`nav-dot ${currentSection === index ? 'active' : ''}`}
            onClick={() => goToSection(index)}
            title={['Inicio', 'Sobre mí', 'Servicios', 'Proyectos', 'Contacto'][index]}
            style={{
              backgroundColor: currentSection === index ? currentStyle.logoSpanColor : 'rgba(255, 255, 255, 0.5)',
              borderColor: currentSection === index ? currentStyle.logoSpanColor : 'rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
      </div>
      <div className="fullpage-container">
        <section className="fullpage-section" id="inicio" style={{backgroundColor: '#f5f5f5'}}>
          <Hero />
        </section>
        <section className="fullpage-section" id="sobre-mi" style={{backgroundColor: '#e8f4fd'}}>
          <SobreMi />
        </section>
        <section className="fullpage-section" id="servicios" style={{backgroundColor: '#f0f8e8'}}>
          <Servicios />
        </section>
        <section className="fullpage-section" id="proyectos" style={{backgroundColor: '#fdf2e8'}}>
          <Proyectos />
        </section>
        <section className="fullpage-section" id="contacto" style={{backgroundColor: '#f8e8f8'}}>
          <Contacto />
        </section>
      </div>
    </>
  )
}

export default App
