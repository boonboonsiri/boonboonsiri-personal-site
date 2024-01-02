import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Polaroid = ({ transform, text, margin, children }) => {
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
