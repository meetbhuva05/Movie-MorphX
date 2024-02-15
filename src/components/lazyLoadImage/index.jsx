import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LayLoadImage = ({src, className}) => {
  return (
    <>
      <LazyLoadImage
      src={src}
        className={className || ''}
        alt=""
        effect='blur'

      />
    </>
  )
}

export default LayLoadImage
