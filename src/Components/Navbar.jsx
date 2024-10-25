
// import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';

const Navbar = ({ cartItems }) => {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gray-800 p-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-serif">Fake Store API</Link>
        
        {/* Centered Home Link */}
        <div className="flex-grow flex justify-center">
          <Link to="/" className="mx-4 text-xl font-bold font-serif">Home</Link>
        </div>

        {/* Cart Button at the End */}
        <Link to="/cart" className="relative flex items-center text-xl font-bold font-serif">
          <FaShoppingCart className="mr-1" /> {/* Cart icon */}
          Cart
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

// Define PropTypes for the Navbar component
Navbar.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Navbar;


