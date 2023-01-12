import React, { useState } from 'react';
import './App.css';
import Products from './basic/components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((v) => !v)}>Toggle</button>
    </>
  );
}
