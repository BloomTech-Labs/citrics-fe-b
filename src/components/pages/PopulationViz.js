import React, { useEffect, useState } from 'react'
import Plotly from '../common/Plotly'

const PopulationViz = props => {
  return (
    <div>
      <Plotly data={props.comparingCities} graphLabel="Population" />
    </div>
  )
}

export default PopulationViz
