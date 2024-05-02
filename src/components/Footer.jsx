import logo from '/images/Logo Files/For Web/png/Color logo - no background.png';

const Footer = () => {
    const handleClick = () => {
        console.log('Home Button Clicked!');
      };
    return (
        <footer className="flex">
            <div>
                <ul>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Careers</a></li>
                    <li><a href='/'>Request Promotion</a></li>
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

            <div>
                <button onClick={handleClick}>
                    <img className='w-32 h-32' src={logo} alt="Logo" />
                </button>
            </div>
        </footer>
    )
};

export default Footer;