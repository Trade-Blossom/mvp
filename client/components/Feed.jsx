import React from 'react';
import FeedItem from './FeedItem.jsx';

const Feed = ({filterList, asset}) => {
  return (
    filterList.map( asset => {
      return (
        <FeedItem
        key={asset.id}
        name={asset.name}
        image={asset.image}
        symbol={asset.symbol}
        price={asset.current_price}
        volume={asset.market_cap}
        />
      )
    })
  )
}

export default Feed;
