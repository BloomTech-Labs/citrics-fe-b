import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import CityCard from './common/CityCard'
import SearchBar from '../common/SearchBar'

const Home = props => {
  useEffect(() => {
    //Placeholder until we add backend
  }, [])

  // return props.cities.map(city => {
  //   return <CityCard key={city.id} city={city} />
  // })

  return <SearchBar />
}

// const mapStateToProps = state => {
//   return{
//     cities: state.reducers.cities,
//   }
// }

export default Home

// export default connect(mapStateToProps, {getCities})(Home)
