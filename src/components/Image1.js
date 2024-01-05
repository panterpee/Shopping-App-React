import React from 'react';

const Image1 = ({ text }) => {
  return (
    <img
      className="d-block w-100"
      src={`https://via.placeholder.com/800x400?text=${text}`}
      alt={text}
    />
  );
};

export default Image1;