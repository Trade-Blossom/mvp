import React from 'react';

const FeedItem = ({ name, image, symbol, price, volume, priceChange, marketCap, id, handleItemClick }) => {
  let capTransform = marketCap;
  let volumeTransform = volume;

  // MARKET CAP
  // Thousands
  if (marketCap.toString().length > 3 && marketCap.toString().length < 7) {
    capTransform = (marketCap / 1000).toFixed(1) + 'K'
  }
  // Millions
  if (marketCap.toString().length > 6 && marketCap.toString().length < 10) {
    capTransform = (marketCap / 1000000).toFixed(1) + 'M'
  }
  // Billions
  if (marketCap.toString().length > 9 && marketCap.toString().length < 13) {
    capTransform = (marketCap / 1000000000).toFixed(1) + 'B'
  }
  // Trillions
  if (marketCap.toString().length > 12 && marketCap.toString().length < 15) {
    capTransform = (marketCap / 1000000000000).toFixed(1) + 'T'
  }

  // VOLUME
  // Thousands
  if (volume.toString().length > 3 && volume.toString().length < 7) {
    volumeTransform = (volume / 1000).toFixed(1) + 'K'
  }
  // Millions
  if (volume.toString().length > 6 && volume.toString().length < 10) {
    volumeTransform = (volume / 1000000).toFixed(1) + 'M'
  }
  // Billions
  if (volume.toString().length > 9 && volume.toString().length < 13) {
    volumeTransform = (volume / 1000000000).toFixed(1) + 'B'
  }
  // Trillions
  if (volume.toString().length > 12 && volume.toString().length < 15) {
    volumeTransform = (volume / 1000000000000).toFixed(1) + 'T'
  }


  return (
    <div className="asset-container">
      <div className="asset-row" onClick={ () => {handleItemClick(id)} }>
        <div className="asset">
          <img src={image} alt="asset" />
          <h1>{name}</h1>
          <p className="asset-symbol">{symbol}</p>

        </div>
        <div className="asset-data">
          <p className="asset-price">${price.toLocaleString()}</p>
          <p className="asset-market-cap">{capTransform}</p>
          {
            priceChange < 0 ? (
              <p className="asset-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="asset-percent green">{priceChange.toFixed(2)}%</p>
            )
          }
          <p className="asset-volume">{volumeTransform}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedItem;
