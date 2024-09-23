import PropTypes from "prop-types";

const Card = ({ image, title, description, hasImage, className = "" }) => {
  return (
    <div className={`relative group overflow-hidden cursor-pointer ${className}`}>
      {hasImage && (
        <>
          <img
            src={image}
            alt={title || "Card image"}
            className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          {/* Contenedor para el título y la descripción */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white transition-all duration-300 ease-in-out mb-2">
              {title}
            </h2>
            {description && (
              <p className="text-base sm:text-lg text-white opacity-90">
                {description}
              </p>
            )}
          </div>
        </>
      )}

      {!hasImage && (
        <div className={`bg-transparent rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border-2 border-gray-700 flex items-center justify-center ${className}`}>
          {description && (
            <p className="text-white text-base text-center px-4">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  hasImage: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  hasImage: true,
};

export default Card;
