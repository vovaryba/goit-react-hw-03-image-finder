import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
