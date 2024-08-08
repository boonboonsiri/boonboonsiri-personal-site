import React from 'react';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Gallery } from 'react-grid-gallery';

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const ImageGrid = ({ transform, text, children }) => {
  var images = children.props.children.length ? children.props.children : [children.props.children];
  images = images.filter((image) => image.props)

  images = images.map((image) => {
    return { src: image.props.src, width: image.props.width, height: image.props.height }
  })

  const slides = images.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
  }));

  const [index, setIndex] = useState(-1);

  // const handleClick = (index, item) => setIndex(index);

  return (

    <div className='ImageGrid'>
      {/* <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        margin={6}
        rowHeight={400}
      /> */}

    <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={400}
        onClick={({ index: current }) => setIndex(current)}
        spacing={20}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default ImageGrid;
