import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar'
import CityCard from '../common/CityCard'
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

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  props.cities.sort()

  return (
    <section>
      <SearchBar onChangeHandler={onChangeHandler} initialState={state} />

      <div className="city-card-container">
        {/* {mockCityData.map(city => {
          return <CityCard key={city.cityId} city={city} />
        })} */}
        {props.cities.map(city => {
          return <CityCard key={city.id} city={city} />
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
