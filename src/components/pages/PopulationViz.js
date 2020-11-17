import React, { useEffect, useState } from 'react'
import Plotly from '../common/Plotly'
import Plot from 'react-plotly.js'
import { connect } from 'react-redux'

const PopulationViz = props => {
  return (
    <div>
      <Plotly data={props.comparingCities} graphLabel="Population" />
    </div>
  )
}

export default PopulationViz
