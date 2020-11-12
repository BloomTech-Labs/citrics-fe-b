import React from 'react'
import { connect } from 'react-redux'
import { cityToCompare } from '../../state/actions'

function formatLongNum(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function formatCurrency(num) {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const CityCard = props => {
  return (
    <div
      className="city-card"
      onClick={e => {
        e.preventDefault()
        props.cityToCompare(props.cityId)
      }}
    >
      <h2>{props.city.cityName}</h2>
      <p>Population: {formatLongNum(props.city.population)}</p>
      <p>Avg. Rent (1BR): {formatCurrency(props.city.rentRate)}</p>
      <p>Median Income: {formatCurrency(props.city.medIncome)}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
  }
}

export default connect(mapStateToProps, { cityToCompare })(CityCard)
