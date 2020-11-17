import React from 'react'
import Plotly from '../common/Plotly'

const IncomeViz = props => {
  return (
    <div>
      <Plotly
        data={props.comparingCities}
        graphLabel="Average Household Income"
      />
    </div>
  )
}

export default IncomeViz
