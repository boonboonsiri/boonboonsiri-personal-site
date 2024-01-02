import React, { cloneElement } from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

{/* <Sticker>
  ![](image-49.png)
  <div className="outline">
  ![](image-49.png)
  </div>
  <div className="shadow">
  ![](image-49.png)
  </div>
</Sticker> */}

const Sticker = ({ transform, scale, children }) => {


  return (
    <div className="Sticker" style={{transform: transform}}>
      {children}
    </div>
  );
};

export default Sticker;
