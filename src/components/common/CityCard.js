import React from 'react'
import { connect } from 'react-redux'
import { cityToCompare, removeCityFromCompare } from '../../state/actions'
import {
  HeartOutlined,
  HeartFilled,
  InfoCircleOutlined,
} from '@ant-design/icons'

function formatLongNum(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function formatCurrency(num) {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const CityCard = props => {
  if (props.compare == false) {
    return (
      <div
        className="city-card"
        onClick={e => {
          e.preventDefault()
          props.cityToCompare(props.city.cityId)
        }}
      >
        <div className="city-card-header">
          <h3 className="city-name">
            {props.city.cityName}, {props.city.stateCode}
          </h3>
          <HeartOutlined />
        </div>
        <div className="city-attributes">
          <p>Population: {formatLongNum(props.city.population)}</p>
          <p>Rent: {formatCurrency(props.city.rent)}</p>
          <p>House Cost: {formatCurrency(props.city.averageHomeCost)}</p>
          <p>Cost of Living Index: {props.city.costOfLivingIndex}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="city-card">
        <button
          className="removeCardFromCompare"
          onClick={e => {
            e.preventDefault()
            props.removeCityFromCompare(props.city.cityId)
          }}
        >
          x
        </button>
        <h3>
          {props.city.cityName}, {props.city.stateCode}
        </h3>
        <p>Population: {formatLongNum(props.city.population)}</p>
        <p>Rent: {props.city.rent}</p>
        <p>House Cost: {props.city.averageHomeCost}</p>
        <p>Cost of Living Index: {props.city.costOfLivingIndex}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    comparingCities: state.comparingCities,
  }
}

export default connect(mapStateToProps, {
  cityToCompare,
  removeCityFromCompare,
})(CityCard)
