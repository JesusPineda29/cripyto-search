import { FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p className="footer-title">Cotizador de
                        Cripto Monedas</p>
                    <p className="footer-author">
                        Desarrollado por <strong>Jesús Pineda</strong>
                    </p>
                </div>

                <nav className="footer-nav">
                    <a
                        href="https://jesus-pineda-portafolio.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Sitio Web personal"
                        className="footer-link"
                    >
                        <FaGlobe size={22} />
                        <span>Sitio Web</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jesús-pineda-630a3b300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Perfil de LinkedIn"
                        className="footer-link"
                    >
                        <FaLinkedin size={22} />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/JesusPineda29"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Repositorio en GitHub"
                        className="footer-link"
                    >
                        <FaGithub size={22} />
                        <span>GitHub</span>
                    </a>
                </nav>

                <div className="footer-copy">
                    © {new Date().getFullYear()} - Todos los derechos reservados
                </div>
            </div>
        </footer>
    );
};
