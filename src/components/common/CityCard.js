import React from 'react'

function formatLongNum(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function formatCurrency(num) {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const CityCard = props => {
  return (
    <div className="city-card">
      <div className="city-card-header">
        <h2>{props.city.cityName}</h2>
      </div>
      <p>Population: {formatLongNum(props.city.population)}</p>
      <p>Avg. Rent (1BR): {formatCurrency(props.city.rentRate)}</p>
      <p>Median Income: {formatCurrency(props.city.medIncome)}</p>
    </div>
  )
}

export default CityCard
