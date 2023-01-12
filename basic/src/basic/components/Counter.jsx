import React, { useState } from 'react';

export default function Counter({ title, total, onClick }) {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount((prev) => prev + 1);
    onClick();
  };
  return (
    <div className="counter">
      <p className="num">
        {count} <span>/ {total}</span>
      </p>
      <button className="btn" onClick={click}>
        {title}
      </button>
    </div>
  );
}
