import React from 'react'
import Plotly from '../common/Plotly'

const TemperatureViz = props => {
  return (
    <div>
      <Plotly data={props.comparingCities} graphLabel="Average Temperature" />
    </div>
  )
}

export default TemperatureViz
