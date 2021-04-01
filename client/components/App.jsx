import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';
import Feed from './Feed.jsx';
import FeedItem from './FeedItem.jsx';
import DescriptionBar from './DescriptionBar.jsx';
import '../styles.css'


const App = () => {
  const [metaData, setMetaData] = useState([]);
  const [search, setSearch] = useState('');
  const [timeArray, setTimeArray] = useState([]);
  const [priceArray, setPriceArray] = useState([]);
  const [coinName, setCoinName] = useState('Bitcoin')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((response) => {
        setMetaData(response.data)
      })
      .catch((error) => { console.log('error fetching API data: ', error) })
    axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14')
      .then((history) => {
        let times = []
        let prices = []
        history.data.prices.forEach((price) => {
          times.push(price[0])
          prices.push(price[1])
        })
        setTimeArray(times)
        setPriceArray(prices)
      })
      .catch((error) => { console.log('error fetching price history: ', error) })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleItemClick = (id, name) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14`)
      .then((history) => {
        setCoinName(name)
        let times = []
        let prices = []
        history.data.prices.forEach((price) => {
          times.push(price[0])
          prices.push(price[1])
        })
        setTimeArray(times)
        setPriceArray(prices)
      })
      .catch((error) => { console.log('error fetching price history: ', error) })
  }

  const filterList = metaData.filter(data =>
    data.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="app-container">
        <header className="header-container">
          <img src="https://i.imgur.com/o7eDb5C.png" alt="icon" />
          <h1>Coin Garden</h1>
        </header>
        <div className="search-form">
          <h2>Search for a crypto</h2>
          <form>
            <input type="text" placeholder="Search" className="search-input" onChange={handleSearch} />
          </form>
        </div>
        <Chart timeArray={timeArray} priceArray={priceArray} name={coinName} />
        <DescriptionBar />
        <Feed filterList={filterList} handleItemClick={handleItemClick} />
      </div>
    </>
  )
}

export default App;
