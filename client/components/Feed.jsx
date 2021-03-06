import React from 'react';
import FeedItem from './FeedItem.jsx';

const Feed = ({ filterList, asset, handleItemClick }) => {
  return (
    filterList.map(asset => {
      return (
        <FeedItem
          key={asset.id}
          name={asset.name}
          image={asset.image}
          symbol={asset.symbol}
          price={asset.current_price}
          volume={asset.total_volume}
          priceChange={asset.price_change_percentage_24h}
          marketCap={asset.market_cap}
          id={asset.id}
          handleItemClick={handleItemClick}
        />
      )
    })
  )
}

export default Feed;
