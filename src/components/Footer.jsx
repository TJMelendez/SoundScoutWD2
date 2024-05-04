import logo from '/src/images/Color logo - no background.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='grid grid-cols-4 bg-black text-white text-center items-center justify-between'>
            <div>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li><a href='/request-promotion-form'>Request Promotion</a></li>
                    <li><a href='/'>Search</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Contact Us</li>
                    <li>Event Request Support</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Top 10 Concerts in 2024</li>
                    <li>How to prep for your first jam</li>
                    <li>How to pick a lesson teacher</li>
                </ul>
            </div>

            <div className='navbar-links flex items-center space-x-20'>
                <Link to ='/' className='link-class'>
                    {/*<button onClick={handleClick}>*/}
                    <img className='w-32 h-32' src={logo} alt="Logo" />
                    {/*</button>*/}
                </Link>
            </div>
        </footer>
    )
};

export default Footer;