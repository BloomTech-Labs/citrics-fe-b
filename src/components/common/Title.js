import { react } from 'plotly.js'
import React from 'react'

const Title = props => {
  return (
    <div id="title">
      <div className="logo">
        <h1>CITRICS</h1>
        <img
          src={require('../../images/citrics.png')}
          alt="citrics logo and name"
        />
      </div>
    </div>
  )
}

export default Title
