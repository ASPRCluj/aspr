import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar"> 
            <div className='navbar-left'>
                <a href="/aspr/" className='logo-link'>
                    <img src={`${import.meta.env.BASE_URL}logo_white.ico`} alt="ASPR-logo" className='logo'/>
                </a>
                <p className='address-text'>Str. Bogdan Petriceicu Hașdeu 45</p>
            </div>
            <div className='navbar-right'>
                <ul className='nav-links'>
                    <li>
                        <a className="nav-link" href="/aspr/">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/aspr/despre-noi/">Despre Noi</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/aspr/ai-o-problema/">Ai o problemă?</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;