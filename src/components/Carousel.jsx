import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Carousel = (props) => {
  return (
    <BrowserOnly>
      {() => <CarouselInside {...props}></CarouselInside>}
    </BrowserOnly>
  );
};

const CarouselInside = ({ children }) => {

  const [state, setState] = useState(false);

  const container = document.querySelector('.Carousel');

  if (container) {
    const boxes = container.querySelectorAll("p");

    let activeIndex = 1;
    let isTransitioning = false;
  
    function updateCurrentImg() {
      isTransitioning = true;
  
      boxes.forEach((box, index) => {
        const isActive = index === activeIndex;
        box.classList.toggle("expanded", isActive);
        box.classList.toggle("closed", !isActive);
      });
  
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  
    function handleBoxClick(index) {
      if (isTransitioning) {
        return;
      }
  
      if (index === activeIndex && boxes[index].classList.contains("expanded")) {
        boxes.forEach((box) => box.classList.remove("closed", "expanded"));
        activeIndex = 0;
      } else {
        activeIndex = index;
        updateCurrentImg();
      }
    }
  
  
    updateCurrentImg();
  
    boxes.forEach((box, index) => {
      box.addEventListener("click", () => handleBoxClick(index));
    });
  }

  useEffect(() => {
    setState(true);
  }, [container]);


  return (
    <div className="Carousel box-container">
      {children}
    </div>
  );
};

export default Carousel;
