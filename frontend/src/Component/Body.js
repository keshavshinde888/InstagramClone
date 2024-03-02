import React from 'react';
import IMG from '../Img/img1.jpeg'
export const Body = () => {
  return (
    <div className='ImgDiv'>
      <img
        src={IMG}  // Assuming the Img folder is in the public directory
        alt="An image"
      />
    </div>
  );
};