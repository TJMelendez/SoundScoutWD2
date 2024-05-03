import PropTypes from 'prop-types';

const Banner = ({ title, backgroundImage }) => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className='text-yellow-300 text-2xl'>{title}</h1>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
};

export default Banner;