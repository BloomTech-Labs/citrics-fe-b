import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar'
import CityCard from '../common/CityCard'
import Title from '../common/Title'
import { getCities } from '../../state/actions'
import { getCLIArray } from '../../helper/dataProperties'
import Loader from 'react-loader-spinner'

const initialState = {
  searchValue: '',
  minPopulation: -1,
  maxPopulation: 99999999,
  minRent: -1,
  maxRent: 99999999,
  minHouseCost: -1,
  maxHouseCost: 999999999,
}

const Home = props => {
  useEffect(() => {
    props.getCities()
  }, [])

  const [state, setState] = useState(initialState)
  const [comparisons, setComparisons] = useState([])
  // const [breakpoints, setBreakpoints] = useState([])

  // useEffect(() => {
  //   setBreakpoints(getCLIArray())
  // }, [])

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
        {props.isLoading ? (
          <Loader
            type="Circles"
            color="#5BDB95"
            height={100}
            width={100}
            timeout={5000} //5 secs
          />
        ) : null}

        {!props.isloading && props.cities.length > 0
          ? props.cities
              .filter(city => {
                return (
                  !comparisons.includes(city.cityId) &&
                  city.population >= state.minPopulation &&
                  city.population <= state.maxPopulation &&
                  city.cityName
                    .toLowerCase()
                    .includes(state.searchValue.toLowerCase()) &&
                  city.rent >= state.minRent &&
                  city.rent <= state.maxRent &&
                  city.averageHomeCost >= state.minHouseCost &&
                  city.averageHomeCost <= state.maxHouseCost
                )
              })
              .map(city => {
                return (
                  <CityCard key={city.cityId} city={city} compare={false} />
                )
              })
          : null}
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    comparingCities: state.comparingCities,
    isLoading: state.isLoading,
    // favorites: state.userPreferences.favorites,
  }
}

export default connect(mapStateToProps, { getCities })(Home)
