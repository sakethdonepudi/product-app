import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductModal = ({ visible, product, onClose, onAddToCart }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg w-11/12 sm:w-3/4 md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-4">{product.title}</h2>
        <p className="text-lg text-gray-700">Rs. {product.price}</p>
        <p className="text-gray-800 mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => onAddToCart(product)}
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            Add To Cart
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
