import React from 'react';

const FeedItem = ({ name, image, symbol, price, volume, priceChange, marketCap }) => {
  return (
    <div className="asset-container">
      <div className="asset-row">
        <div className="asset">
          <img src={image} alt="asset" />
          <h1>{name}</h1>
          <p className="asset-symbol">{symbol}</p>

        </div>
        <div className="asset-data">
          <p className="asset-price">${price.toLocaleString()}</p>
          <p className="asset-market-cap">{marketCap}</p>
          {
            priceChange < 0 ? (
              <p className="asset-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="asset-percent green">{priceChange.toFixed(2)}%</p>
            )
          }
          <p className="asset-volume">{volume}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedItem;
