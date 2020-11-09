import React, { useState, useEffect } from 'react'

const CityCard = props => {
  return (
    <div class="city-card">
      <h1>{props.city.cityName}</h1>
    </div>
  )
}

export default CityCard
