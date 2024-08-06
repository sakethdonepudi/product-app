import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const Cart = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400">Rs. {item.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <h3 className="font-bold">Total: Rs. {totalCost.toFixed(2)}</h3>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
