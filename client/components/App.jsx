import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';


const App = () => {

  return (
    <div>
      <h1>Trade Blossom</h1>
      <Chart />
    </div>
  )
}

export default App;
