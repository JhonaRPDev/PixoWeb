import PropTypes from 'prop-types';

const Info = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12 sm:py-24">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
          {title}
        </h1>

        {description && (
          <p className="text-white text-lg text-center mb-8">
            {description}
          </p>
        )}

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
            COTIZA AHORA
          </button>
        </div>

        {imageSrc && (
          <div className="mt-12 flex justify-center">
            <img
              src={imageSrc}
              alt="Info"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Info;