import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const CheckoutForm = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log('Checkout data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2 className="text-lg font-bold">Checkout</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Total Amount: ${totalAmount}</h3>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Checkout</button>
    </form>
  );
};

export default CheckoutForm;