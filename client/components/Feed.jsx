import React, {useState, useEffect} from 'react';

// Dummy data for now
// TODO - Once I get data from API, build a FeedItem component to dynamically render items
const Feed = () => {
  return (
    <div className="feed">
     <div className="index">
       <span className="index-name">Index 1</span>
       <span className="index-price">$12,345</span>
       <span className="percent-change">10%</span>
       <span className="market-cap">1.1T</span>
       <button type="button" className="trade-button">Trade</button>
       <button type="button" className="follow-button">Follow</button>
     </div>

     <div className="index">
       <span className="index-name">Index 2</span>
       <span className="index-price">$12,345</span>
       <span className="percent-change">10%</span>
       <span className="market-cap">1.1T</span>
       <button type="button" className="trade-button">Trade</button>
       <button type="button" className="follow-button">Follow</button>
     </div>

     <div className="index">
       <span className="index-name">Index 3</span>
       <span className="index-price">$12,345</span>
       <span className="percent-change">10%</span>
       <span className="market-cap">1.1T</span>
       <button type="button" className="trade-button">Trade</button>
       <button type="button" className="follow-button">Follow</button>
     </div>

     <div className="index">
       <span className="index-name">Index 4</span>
       <span className="index-price">$12,345</span>
       <span className="percent-change">10%</span>
       <span className="market-cap">1.1T</span>
       <button type="button" className="trade-button">Trade</button>
       <button type="button" className="follow-button">Follow</button>
     </div>

     <div className="index">
       <span className="index-name">Index 5</span>
       <span className="index-price">$12,345</span>
       <span className="percent-change">10%</span>
       <span className="market-cap">1.1T</span>
       <button type="button" className="trade-button">Trade</button>
       <button type="button" className="follow-button">Follow</button>
     </div>
    </div>
  )
}

export default Feed;
