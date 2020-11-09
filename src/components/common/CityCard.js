import React, { useState, useEffect } from 'react'

const CityCard = props => {
  return (
    <div className="city-card">
      <h1>{props.city.citynamestate}</h1>
    </div>
  )
}

export default CityCard
