// src/components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(item));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-2">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
      <div className="flex-1">
        <h2 className="text-lg font-bold">{item.title}</h2>
        <p className="text-gray-600">Rs. {item.price}</p>
        <p className="text-sm text-gray-400">{item.category}</p>
      </div>
      <div className="flex items-center">
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-md"
          onClick={handleRemove}
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded-md"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
