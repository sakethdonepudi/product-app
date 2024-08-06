// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Shopping</h1>
      <div className="relative">
        <FaShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cartItems.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
