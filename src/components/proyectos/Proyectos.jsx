import { useState, useEffect } from 'react';
import './Proyectos.css';

function Proyectos() {
    const [currentProject, setCurrentProject] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');

    const projects = [
        { id: 1, title: "Proyecto 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
        { id: 2, title: "Proyecto 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
        { id: 3, title: "Proyecto 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." }
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
        
        if (direction === 'next' && currentProject < projects.length - 1) {
            setSlideDirection('left'); // Next slides from right to left
            setCurrentProject(prev => prev + 1);
            return true; // Handled horizontally
        } else if (direction === 'prev' && currentProject > 0) {
            setSlideDirection('right'); // Prev slides from left to right
            setCurrentProject(prev => prev - 1);
            return true; // Handled horizontally
        }
        
        return false; // Not handled, allow vertical scroll
    };

    // Exponer la función para que App.jsx pueda acceder
    useEffect(() => {
        window.proyectosNavigate = navigateHorizontally;
        return () => {
            delete window.proyectosNavigate;
        };
    }, [currentProject, isMobile, projects.length]);

    return (
        <section className="proyectos-section">
            <h2>Proyectos</h2>
            <p></p>
            
            {isMobile ? (
                // Vista móvil: Un proyecto a la vez
                <div className="mobile-project-container">
                    <div className={`project-card slide-${slideDirection}`} key={`${currentProject}-${slideDirection}`}>
                        <h3>{projects[currentProject].title}</h3>
                        <p>{projects[currentProject].description}</p>
                        <div className="project-counter">
                            {currentProject + 1} / {projects.length}
                        </div>
                    </div>
                    
                    {/* Navigation dots for projects */}
                    <div className="project-navigation-dots">
                        {projects.map((_, index) => (
                            <div
                                key={index}
                                className={`nav-dot ${currentProject === index ? 'active' : ''}`}
                                onClick={() => {
                                    setSlideDirection(index > currentProject ? 'left' : 'right');
                                    setCurrentProject(index);
                                }}
                                style={{
                                    backgroundColor: currentProject === index ? '#D2691E' : 'rgba(255, 255, 255, 0.5)',
                                    borderColor: currentProject === index ? '#D2691E' : 'rgba(255, 255, 255, 0.8)'
                                }}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                // Vista desktop: Todos los proyectos
                <div className="desktop-projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Proyectos;
