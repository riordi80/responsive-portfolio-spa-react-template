import { useState, useEffect } from 'react';
import './HorizontalSlider.css';

function HorizontalSlider({ 
    items, 
    renderItem, 
    showDots = true, 
    showCounter = true,
    navigationKey = null,
    className = "",
    itemClassName = ""
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Función para navegar horizontalmente
    const navigate = (direction) => {
        if (!isMobile) return false; // Solo en móvil
        
        if (direction === 'next' && currentIndex < items.length - 1) {
            setSlideDirection('left');
            setCurrentIndex(prev => prev + 1);
            return true;
        } else if (direction === 'prev' && currentIndex > 0) {
            setSlideDirection('right');
            setCurrentIndex(prev => prev - 1);
            return true;
        }
        
        return false;
    };

    // Exponer función globalmente si se proporciona una key
    useEffect(() => {
        if (navigationKey && isMobile) {
            window[navigationKey] = navigate;
            return () => {
                delete window[navigationKey];
            };
        }
    }, [currentIndex, isMobile, items.length, navigationKey]);

    const handleDotClick = (index) => {
        setSlideDirection(index > currentIndex ? 'left' : 'right');
        setCurrentIndex(index);
    };

    if (!isMobile) {
        // En desktop, renderiza todos los items (se maneja fuera del componente)
        return null;
    }

    return (
        <div className={`horizontal-slider-container ${className}`}>
            <div className={`slider-item slide-${slideDirection} ${itemClassName}`} 
                 key={`${currentIndex}-${slideDirection}`}>
                {renderItem(items[currentIndex], currentIndex)}
                
                {showCounter && (
                    <div className="slider-counter">
                        {currentIndex + 1} / {items.length}
                    </div>
                )}
            </div>
            
            {showDots && (
                <div className="slider-navigation-dots">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`nav-dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default HorizontalSlider;