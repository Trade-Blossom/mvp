import React from 'react'

const DescriptionBar = () => {
  return (
    <div className="asset-container description-bar">
      <div className="asset-row">
        <div className="asset">
          <h1>Name</h1>
          <p className="asset-symbol"></p>

        </div>
        <div className="asset-data">
          <p className="asset-price">Price</p>
          <p className="asset-market-cap">Market Cap</p>
          <p className="asset-percent">Change</p>
          <p className="asset-volume">Volume</p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBar
