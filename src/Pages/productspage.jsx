import React from 'react';
import ProductCard from '../Components/ProductCard';
import PropTypes from 'prop-types';


const ProductsPage = ({ cartItems, addToCart }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => {
        // Check if the product is already in the cart
        const isInCart = cartItems.some(item => item.id === product.id);
        return (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
            inCart={isInCart} // Pass the inCart status to ProductCard if needed
          />
        );
      })}
    </div>
  );
};

ProductsPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsPage;
