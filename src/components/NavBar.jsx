import logo from '/images/Logo Files/For Web/png/Color logo - no background.png';
import search from '/images/search.png';

const NavBar = () => {
    const handleClick = () => {
        console.log('Home Button Clicked!');
      };
    return (
        <nav className='flex bg-black items-center justify-between'>
            <div className='flex items-center space-x-20'>
                <button onClick={handleClick}>
                    <img className='w-32 h-32' src={logo} alt="Logo" />
                </button>
                <ul>
                    <li className='text-white text-2xl'><a href='/'>Request Promotion</a></li>
                </ul>
            </div>
            <button onClick={handleClick}>
                <img className='w-1/2 h-1/2' src={search} alt="Search Icon" />
            </button>
        </nav>
    )
};

export default NavBar;