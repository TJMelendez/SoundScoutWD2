import logo from '/src/images/Color logo - no background.png';
import search from '/src/images/search.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const handleClick = () => {
        console.log('Home Button Clicked!');
      };
    return (
        <nav className='flex bg-black items-center justify-between'>
            <div className='navbar-links flex items-center space-x-20'>
                <Link to ='/' className='link-class'>
                    <img className='w-32 h-32' src={logo} alt="Logo" />
                </Link>
                <ul>
                    <li className='text-white text-2xl'><Link to='/request-promotion-form' className='link-class'>Request Promotion</Link></li>
                </ul>
            </div>
            <Link to ='/results' className=' '>
                <button onClick={handleClick}>
                    <img className='w-1/2 h-1/2' src={search} alt="Search Icon" />
                </button>
            </Link>
        </nav>
    )
};

export default NavBar;