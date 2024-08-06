import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductModal from './ProductModal';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setModalVisible(false);
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400 mr-1" style={{ fontSize: '18px' }}></i>);
      } else if (i < rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400 mr-1" style={{ fontSize: '18px' }}></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400 mr-1" style={{ fontSize: '18px' }}></i>);
      }
    }
    return stars;
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <ul className="space-y-4">
        {products.map((product) => {
          const inCart = cartItems.find((item) => item.id === product.id);
          return (
            <li
              key={product.id}
              className="bg-white rounded-xl p-4 flex border border-gray-500 cursor-pointer"
              onClick={() => openModal(product)}
            >
              <img src={product.image} alt={product.title} className="w-26 h-24 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating.rate)}
                  <span className="text-black ml-2">({product.rating.count})</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-black">
                    <span className="font-bold">Rs.  {product.price}</span> 
                  </p>
                  {inCart && (
                    <div className="flex items-center">
                      <button
                        className="bg-gray-300 text-gray-800 px-2 py-1 rounded-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(removeFromCart(product));
                        }}
                      >
                        -
                      </button>
                      <span className="mx-2">{inCart.quantity}</span>
                      <button
                        className="bg-gray-300 text-gray-800 px-2 py-1 rounded-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(addToCart(product));
                        }}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-400">Category: {product.category}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {selectedProduct && (
        <ProductModal
          visible={modalVisible}
          product={selectedProduct}
          onClose={() => setModalVisible(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ProductList;
