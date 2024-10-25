
//  import React from 'react';
import PropTypes from 'prop-types';

const CartModal = ({ cartItems, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-3/4 max-w-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems && cartItems.length > 0 ? ( // Added a check for cartItems
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <span>{item.title}</span>
                <button onClick={() => removeFromCart(item.id)} className="bg-black text-white p-2 rounded-md">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
        <button onClick={closeModal} className="mt-4 bg-black text-white p-2 rounded-md">Close</button>
      </div>
    </div>
  );
};

// Define prop types
CartModal.propTypes = {

  cartItems: PropTypes.arrayOf(

    PropTypes.shape({

      id: PropTypes.number.isRequired,

      title: PropTypes.string.isRequired,
    })
  ).isRequired,

  closeModal: PropTypes.func.isRequired,

  removeFromCart: PropTypes.func.isRequired,
};

export default CartModal;
