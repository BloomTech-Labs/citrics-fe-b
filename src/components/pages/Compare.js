import React from 'react'
import { Route } from 'react-router-dom'
import CompareNav from '../common/CompareNav'
import PopulationViz from './PopulationViz'
import HomePriceViz from './HomePriceViz'
import IncomeViz from './IncomeViz'
import TemperatureViz from './TemperatureViz'
import Styled from 'styled-components'
import { connect } from 'react-redux'

const StyledCompareDiv = Styled.div`
width: 85%;
max-width: 1500px;
/* border: 1px solid grey; */
margin: 0 auto;
padding: 1rem;
padding-top: 0;
height: 100vh;
`

const Compare = props => {
  return (
    <StyledCompareDiv>
      <CompareNav />

      <Route exact path="/compare/population">
        <PopulationViz comparingCities={props.comparingCities} />
      </Route>
      <Route exact path="/compare/avg-household-income">
        <IncomeViz comparingCities={props.comparingCities} />
      </Route>
      <Route exact path="/compare/avg-home-price">
        <HomePriceViz comparingCities={props.comparingCities} />
      </Route>
      <Route exact path="/compare/avg-temperature">
        <TemperatureViz comparingCities={props.comparingCities} />
      </Route>
    </StyledCompareDiv>
  )
}

// export default Compare
const mapStateToProps = state => {
  return {
    comparingCities: state.comparingCities,
  }
}

export default connect(mapStateToProps, {})(Compare)
