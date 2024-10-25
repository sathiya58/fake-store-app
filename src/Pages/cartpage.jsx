
import PropTypes from 'prop-types';

const CartPage = ({ cartItems, removeFromCart, increaseQty, decreaseQty }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => increaseQty(item.id)} className="px-2 py-1 bg-black text-white">+</button>
                <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 bg-black text-white">-</button>
                <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-red-500 text-white">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl">Total: ${total.toFixed(2)}</p>
            <p className="text-xl font-bold">Discounted Total (10% off): ${discountedTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Prop types validation
CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQty: PropTypes.func.isRequired,
  decreaseQty: PropTypes.func.isRequired,
};

export default CartPage;
