import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar'
import CityCard from '../common/CityCard'
import { getCities } from '../../state/actions'
import { getCLIArray } from '../../helper/dataProperties'

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
      <SearchBar onChangeHandler={onChangeHandler} initialState={state} />

      <div className="city-card-container">
        {props.cities
          .filter(city => {
            return !comparisons.includes(city.cityId)
          })
          .filter(city => {
            return state.minPopulation !== initialState.minPopulation
              ? city.population >= state.minPopulation
              : city
          })
          .filter(city => {
            return state.maxPopulation !== initialState.maxPopulation
              ? city.population <= state.maxPopulation
              : city
          })
          .filter(city => {
            return state.searchValue !== ''
              ? city.cityName
                  .toLowerCase()
                  .includes(state.searchValue.toLowerCase())
              : city
          })
          .filter(city => {
            return state.minRent !== initialState.minRent
              ? city.rent >= state.minRent
              : city
          })
          .filter(city => {
            return state.maxRent !== initialState.maxRent
              ? city.rent <= state.maxRent
              : city
          })
          .filter(city => {
            return state.minHouseCost !== initialState.minHouseCost
              ? city.averageHomeCost >= state.minHouseCost
              : city
          })
          .filter(city => {
            return state.maxHouseCost !== initialState.maxHouseCost
              ? city.averageHomeCost <= state.maxHouseCost
              : city
          })
          // .filter(city => {
          //   return city.costOfLivingIndex < breakpoints[0] ? city.costOfLivingIndex < breakpoints[0] :
          //   city.costOfLivingIndex < breakpoints[1] ? city.costOfLivingIndex < breakpoints[1] :
          //   city.costOfLivingIndex < breakpoints[2] ? city.costOfLivingIndex < breakpoints[2] : city
          // })
          .map(city => {
            return <CityCard key={city.cityId} city={city} compare={false} />
          })}
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    comparingCities: state.comparingCities,
  }
}

export default connect(mapStateToProps, { getCities })(Home)
