import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-[#81d9e0] text-white p-6 flex justify-between items-center relative">
      <h1 className="text-xl font-bold text-black underline absolute left-1/2 transform -translate-x-1/2">Shopping</h1>
      <div className="flex-1"></div>
      <div className="relative text-black">
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
