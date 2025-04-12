import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BaseApp from './pages/BaseApp';
import AppsmithApp from './pages/AppsmithApp';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/base" element={<BaseApp />} />
        <Route path="/products/appsmith" element={<AppsmithApp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;