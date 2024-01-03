import React from 'react';

const Polaroid = ({ transform, text, children }) => {
  return (
    <div className="Polaroid" style={{transform: transform}}>
      {children}
      <div className="text">
        {text}
      </div>
    </div>
  );
};

export default Polaroid;
