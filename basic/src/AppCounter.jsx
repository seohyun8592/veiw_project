import React, { useState } from 'react';
import './App.css';
import Counter from './basic/components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div className="banner">
        total : {count} {count > 10 ? '😚' : '😊'}
      </div>
      <Counter title="Add + 1" total={count} onClick={handleClick} />
      <Counter title="Add + 1" total={count} onClick={handleClick} />
      <Counter title="Add + 1" total={count} onClick={handleClick} />
    </div>
  );
}
