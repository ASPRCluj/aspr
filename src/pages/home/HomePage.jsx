import Navbar from './components/navbar/Navbar';
import './HomePage.css';

function HomePage() {
    return (
        <div className='homepage'>
            <div className='header'>
                <Navbar />
            </div>
            <div className='body'>
                <div className='first-section'>
                    <div className='motto-text'>
                        <p>Noi pentru <span className='bold-word'>ASPR</span>,<br /><span className='bold-word'>ASPR</span> pentru toți!</p>
                    </div>
                    <div className='logo-pic'>
                        <img src={`${import.meta.env.BASE_URL}logo_white.png`} alt="ASPR-logo" className='logo'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;