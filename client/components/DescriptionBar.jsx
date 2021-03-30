import React, {useState, useEffect} from 'react';

const DescriptionBar = () => {
  return (
    <div className="description-bar">
      <span className="description-text">Name</span>
      <span className="description-text">Price</span>
      <span className="description-text">Change</span>
      <span className="description-text">Volume</span>
      <span className="description-text">Trade</span>
      <span className="description-text">Follow</span>
    </div>
  )
}

export default DescriptionBar;
