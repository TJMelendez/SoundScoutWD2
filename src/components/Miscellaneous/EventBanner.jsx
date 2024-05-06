import PropTypes from 'prop-types';

const Banner = ({ title, backgroundImage }) => {
    return (
        <div className='banner overflow-hidden relative flex-col items-start px-16 pt-4 pb-24 w-full text-5xl font-semibold tracking-tight 
        text-lime-300 leading-[72px] min-h-[250px] max-md:px-5 max-md:pb-10 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]' 
        style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img className="object-cover absolute inset-0 size-full opacity-50" src={backgroundImage} alt={title} />
            <h1 className='relative mb-52 max-md:mb-10 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]'>{title}</h1>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
};

export default Banner;