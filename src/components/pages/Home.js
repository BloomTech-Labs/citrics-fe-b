import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar'
import CityCard from '../common/CityCard'
import Title from '../common/Title'
import { getCities } from '../../state/actions'

import { getCLIArray } from '../../helper/dataProperties'

const initialState = {
  searchValue: '',
  minPopulation: 0,
  maxPopulation: 0,
  minRent: 0,
  maxRent: 0,
  minHouseCost: 0,
  maxHouseCost: 0,
}

const Home = props => {
  useEffect(() => {
    props.getCities()
  }, [])

  const [state, setState] = useState(initialState)
  const [comparisons, setComparisons] = useState([])

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    var compareIds = []
    props.comparingCities.forEach(city => {
      compareIds.push(city.cityId)
      setComparisons(compareIds)
    })
  }, [props.comparingCities])

  props.cities.sort()

  return (
    <section>
      <Title />
      <SearchBar onChangeHandler={onChangeHandler} initialState={state} />

      <div className="city-card-container">
        {props.cities
          .filter(city => {
            return !comparisons.includes(city.cityId)
          })
          .map(city => {
            return <CityCard key={city.id} city={city} compare={false} />
          })}
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    comparingCities: state.comparingCities,
    favorites: state.userPreferences.favorites,
  }
}

export default connect(mapStateToProps, { getCities })(Home)
