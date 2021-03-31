import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';
import Feed from './Feed.jsx';
import FeedItem from './FeedItem.jsx';
import '../styles.css'


const App = () => {
  const [metaData, setMetaData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((response) => {
        setMetaData(response.data)
      })
      .catch((error) => { console.log('error fetching API data: ', error) })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterList = metaData.filter( data =>
    data.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app-container">
      <h1>Trade Blossom</h1>
      <div className="search-form">
        <h2>Search for an asset</h2>
        <form>
          <input type="text" placeholder="Search" className="search-input" onChange={handleSearch} />
        </form>
      </div>
      <Chart />
      <Feed filterList={filterList} />
    </div>
  )
}

export default App;
