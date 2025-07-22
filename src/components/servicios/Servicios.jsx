import { useState, useEffect } from 'react';
import './Servicios.css';

function Servicios() {
    const [currentService, setCurrentService] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');

    const services = [
        { id: 1, title: "Servicio 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
        { id: 2, title: "Servicio 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
        { id: 3, title: "Servicio 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Función para navegar horizontalmente (será llamada desde App.jsx)
    const navigateHorizontally = (direction) => {
        if (!isMobile) return false; // No manejar en desktop
        
        if (direction === 'next' && currentService < services.length - 1) {
            setSlideDirection('left'); // Next slides from right to left
            setCurrentService(prev => prev + 1);
            return true; // Handled horizontally
        } else if (direction === 'prev' && currentService > 0) {
            setSlideDirection('right'); // Prev slides from left to right
            setCurrentService(prev => prev - 1);
            return true; // Handled horizontally
        }
        
        return false; // Not handled, allow vertical scroll
    };

    // Exponer la función para que App.jsx pueda acceder
    useEffect(() => {
        window.serviciosNavigate = navigateHorizontally;
        return () => {
            delete window.serviciosNavigate;
        };
    }, [currentService, isMobile, services.length]);

    return (
        <section className="servicios-section">
            <h2>Qué puedo hacer por ti</h2>
            <p>Servicios profesionales adaptados a tus necesidades</p>
            
            {isMobile ? (
                // Vista móvil: Un servicio a la vez
                <div className="mobile-service-container">
                    <div className={`service-card slide-${slideDirection}`} key={`${currentService}-${slideDirection}`}>
                        <h3>{services[currentService].title}</h3>
                        <p>{services[currentService].description}</p>
                        <div className="service-counter">
                            {currentService + 1} / {services.length}
                        </div>
                    </div>
                    
                    {/* Navigation dots for services */}
                    <div className="service-navigation-dots">
                        {services.map((_, index) => (
                            <div
                                key={index}
                                className={`nav-dot ${currentService === index ? 'active' : ''}`}
                                onClick={() => {
                                    setSlideDirection(index > currentService ? 'left' : 'right');
                                    setCurrentService(index);
                                }}
                                style={{
                                    backgroundColor: currentService === index ? '#27ae60' : 'rgba(255, 255, 255, 0.5)',
                                    borderColor: currentService === index ? '#27ae60' : 'rgba(255, 255, 255, 0.8)'
                                }}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                // Vista desktop: Todos los servicios
                <div className="desktop-services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Servicios;
