import { useState } from 'react';
import './Contacto.css';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simular envío
        setTimeout(() => {
            setIsSubmitting(false);
            alert('¡Mensaje enviado! Te contactaré pronto.');
            setFormData({ nombre: '', email: '', mensaje: '' });
        }, 2000);
    };

    return (    
        <section className="contacto" id="contacto">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>¿Trabajamos juntos?</h2>
                    <p>Me encantaría conocer tu proyecto y ver cómo puedo ayudarte</p>
                </div>
                
                <div className="contact-card">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Tu nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        
                        <div className="form-group">
                            <textarea
                                name="mensaje"
                                placeholder="Cuéntame sobre tu proyecto..."
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                                className="form-textarea"
                                rows="4"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                    </form>
                    
                    <div className="contact-info">
                        <div className="contact-item">
                            <span>hello@comunicacanarias.com</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="contact-footer">
                <div className="footer-content">
                    <p>&copy; 2025 ComunicaCanarias</p>
                </div>
            </footer>
        </section>
    );
}

export default Contacto;
