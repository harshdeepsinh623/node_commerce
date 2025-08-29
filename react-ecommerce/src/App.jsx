// filepath: /react-ecommerce/react-ecommerce/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/profile" component={Profile} />
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;