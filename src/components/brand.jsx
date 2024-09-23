import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Brand = ({ images }) => {
  return (
    <div className="overflow-hidden w-full mb-12">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-80%" }}
        transition={{ repeat: Infinity, duration: 17, ease: "linear" }}
      >
        {images.map((image, index) => (
          <div className="flex-shrink-0 mx-10" key={index}>
            <img src={image} alt={`brand-${index}`} className="w-20 h-20 object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="flex-shrink-0 mx-10" key={index + images.length}>
            <img src={image} alt={`brand-${index}-duplicate`} className="w-20 h-20 object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="flex-shrink-0 mx-4" key={index + images.length}>
            <img src={image} alt={`brand-${index}-duplicate`} className="w-20 h-20 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

Brand.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Brand;


