import React from 'react';

const FeedItem = ({ name, image, symbol, price, volume }) => {
  return (
    <div className="feed-item-container">
      <div className="feed-item-row">
        <div className="feed-item">
          <img src={image} alt="asset" />
          <h1>{name}</h1>
          <p className="feed-item-symbol">{symbol}</p>

        </div>
        <div className="feed-item-data">
          <p className="feed-item-price">{price}</p>
          <p className="feed-item-volume">{volume}</p>

        </div>
      </div>
    </div>
  )
}

export default FeedItem;
