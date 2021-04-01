import React from 'react'

const ControllerBar = () => {
  return (
    <div className="controller-container">
      <div className="controller-price"></div>
      <div className="controller-filters">
        <span className="controller-day">
          {'1d'}
        </span>{' | '}
        <span className="controller-week">
          {'1w'}
        </span>{' | '}
        <span className="controller-month">
          {'1m'}
        </span>{' | '}
        <span className="controller-year">
          {'1y'}
        </span>{' | '}
        <span className="controller-all">
          {'ALL'}
        </span>
      </div>
    </div>
  )
}

export default ControllerBar
