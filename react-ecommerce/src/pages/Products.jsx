import React, { useContext } from 'react';
import ProductList from '../components/products/ProductList';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList />
      {cartItems.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl">Items in Cart: {cartItems.length}</h2>
        </div>
      )}
    </div>
  );
};

export default Products;