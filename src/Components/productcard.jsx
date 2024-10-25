
import PropTypes from 'prop-types';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm">{product.description.substring(0, 100)}...</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white mt-2 px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

// Prop types validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
