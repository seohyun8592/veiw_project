import React from 'react';

export default function Avatar({ img, isNew }) {
  return (
    <div className="avatar">
      {isNew && <span className="tag">new</span>}
      <img src={img} alt="avatar" className="photo" />
    </div>
  );
}
