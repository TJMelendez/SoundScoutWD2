import PropTypes from 'prop-types';
import NavBar from '/src/components/NavBar.jsx';
import Footer from '/src/components/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      { children }
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
