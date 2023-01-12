import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((check) => !check);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('@');
        setProducts(data);
      });
    return () => {
      console.log('clean');
    };
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        id="check"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="check">따끈따끈한 🔥 세일</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
