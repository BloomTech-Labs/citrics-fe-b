import React from 'react'

const CityCard = props => {
  return (
    <div className="city-card">
      <h2>{props.city.cityName}</h2>
      <p>Population: {props.city.population}</p>
    </div>
  )
}

export default CityCard
