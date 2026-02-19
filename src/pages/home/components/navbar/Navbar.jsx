import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar"> 
            <div className='navbar-left'>
                <a href="/aspr/" className='logo-link'>
                    <img src={`${import.meta.env.BASE_URL}logo_white.ico`} alt="ASPR-logo" className='logo'/>
                </a>
                <p className='address-text'>Str. Bogdan Petriceicu Hașdeu 45</p>
            </div>
            <div className='navbar-right'>
                 <button
                    className={`menu-button ${menuOpen ? 'open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(v => !v)}
                    >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <ul className='nav-links'>
                    <li><a className="nav-link" href="/aspr/">Home</a></li>
                    <li><a className="nav-link" href="/aspr/despre-noi/">Despre Noi</a></li>
                    <li><a className="nav-link" href="/aspr/ai-o-problema/">Ai o problemă?</a></li>
                </ul>

                <div
                    className={`mobile-overlay ${menuOpen ? 'visible' : ''}`}
                    onClick={() => setMenuOpen(false)}
                    aria-hidden={!menuOpen}
                />

                <aside className={`mobile-panel ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
                    <div className='top-part'>
                        <img src={`${import.meta.env.BASE_URL}logo_white.ico`} alt="ASPR-logo" className='logo'/>
                        <button className="close-panel" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
                    </div>
                    <ul className="mobile-links">
                        <li><a className="mobile-link" href="/aspr/">Home</a></li>
                        <li><a className="mobile-link" href="/aspr/despre-noi/">Despre Noi</a></li>
                        <li><a className="mobile-link" href="/aspr/ai-o-problema/">Ai o problemă?</a></li>
                    </ul>
                </aside>
            </div>
        </nav>
    );
};

export default Navbar;