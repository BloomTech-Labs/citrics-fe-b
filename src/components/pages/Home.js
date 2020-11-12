import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar'
import CityCard from '../common/CityCard'
import { getCities } from '../../state/actions'

const initialState = {
  searchValue: '',
  minPopulation: 0,
  maxPopulation: 0,
  minRent: 0,
  maxRent: 0,
  minHouseCost: 0,
  maxHouseCost: 0,
}

const mockCityData = [
  {
    cityName: 'Seattle, WA',
    cityId: 20,
    population: 3000000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'Portland, OR',
    cityId: 21,
    population: 2500000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'Los Angeles, CA',
    cityId: 22,
    population: 7000000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'San Francisco, CA',
    cityId: 23,
    population: 5000000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'Detroit, MI',
    cityId: 24,
    population: 5000000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'Orlando, FL',
    cityId: 25,
    population: 4500000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'Pittsburgh, PA',
    cityId: 25,
    population: 4500000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'Atlanta, GA',
    cityId: 25,
    population: 4500000,
    rentRate: 1500,
    medIncome: 55000,
  },
  {
    cityName: 'Milwaukee, WI',
    cityId: 25,
    population: 4500000,
    rentRate: 1500,
    medIncome: 55000,
  },
]

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

  return (
    <section>
      <SearchBar onChangeHandler={onChangeHandler} initialState={state} />

      <div className="city-card-container">
        {mockCityData.map(city => {
          return <CityCard key={city.cityId} city={city} compare={false} />
        })}
        {/* {props.cities.map(city => {
          return <CityCard key={city.id} city={city} />
        })} */}
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
