import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar'
import CityCard from '../common/CityCard'
import { getCities } from '../../state/actions'
import { getCLIArray } from '../../helper/dataProperties'

const initialState = {
  searchValue: '',
  minPopulation: 50000,
  maxPopulation: 1000000,
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
  const [displayCities, setDisplayCities] = useState(props.cities)

  useEffect(() => {
    setDisplayCities(props.cities)
  }, [props.cities])

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    if (initialState.minPopulation > 0 && initialState.maxPopulation > 0) {
      setDisplayCities(
        props.cities.filter(city => {
          return (
            city.population >= initialState.minPopulation &&
            city.population <= initialState.maxPopulation
          )
        })
      )
    }
  }

  props.cities.sort()

  return (
    <section>
      <SearchBar onChangeHandler={onChangeHandler} initialState={state} />

      <div className="city-card-container">
        {displayCities.map(city => {
          return <CityCard key={city.id} city={city} compare={false} />
        })}
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
  }
}

export default connect(mapStateToProps, { getCities })(Home)
