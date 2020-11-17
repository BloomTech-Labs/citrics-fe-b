import React from 'react'
import Plotly from '../common/Plotly'

const HomePriceViz = props => {
  return (
    <div>
      <Plotly data={props.comparingCities} graphLabel="Average Home Price" />
    </div>
  )
}

export default HomePriceViz
