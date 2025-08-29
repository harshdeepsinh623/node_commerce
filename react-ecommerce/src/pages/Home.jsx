import React from 'react';
import ProductList from '../components/products/ProductList';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;