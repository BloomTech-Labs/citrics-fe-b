import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component'
import { useLocation } from 'react-router-dom'
import PopulationSelect from './PopulationSelect'
import HouseCostSelect from './HouseCostSelect'
import RentSelect from './RentSelect'

const StyledSearch = Styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
align-items: center;
.search-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#searchBar {
  width: 65%;
  border-radius: 15px;
  height: 4em;
  margin: 2rem 1rem;
  font-size: 1rem;
  border: 1px solid #05386B;
  text-align: center;
  &:focus, &:active {
    outline: none;
    border: 3px solid #5BDB95;
  }
}

#dd-btn {
  width: 5rem;
  height: 4rem;
  background-color: #5bdb95;
  border: none;
  border-radius: 15px;
  color: white; 
  font-size: 1rem;
  &:hover {
    background-color: #05386B;
    transition: 0.5s;
  }
}

h2 {
  color: #5bdb95;
  font-size: 1.3rem;
}
`
const StyledFilterDiv = Styled.div`
display:flex;
justify-content: space-evenly;
z-index: 100;
text-align: center;
width: 75%;

#costOfLiving {
  background-color: #5BDB95;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  margin-top: 0.5rem;
  padding: 0.8rem 0;
  &:hover {
    background-color: #05386B;
    transition: 0.2s;
    border-bottom: 1px solid black;
  }
}
`

const SearchBar = props => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  //const { user } = props

  useEffect(() => {
    document.querySelector('#searchBar').focus()
  }, [location])

  const toggle = () => setOpen(!open)

  return (
    <StyledSearch className="search-area-container">
      <div className="search-top">
        <input
          type="text"
          onChange={props.onChangeHandler}
          name="searchValue"
          value={props.initialState.searchValue.value}
          placeholder="Search for a city!"
          id="searchBar"
        />

        <button id="dd-btn" onClick={() => toggle()}>
          Filters
        </button>
      </div>
      {open ? (
        <StyledFilterDiv>
          <section>
            <h2> Population </h2>
            <PopulationSelect
              onChange={props.onChangeHandler}
              min={props.initialState.minPopulation.value}
              max={props.initialState.maxPopulation.value}
              minName="minPopulation"
              maxName="maxPopulation"
            />
          </section>

          <section>
            <h2>Cost of Living</h2>
            <div id="costOfLiving">
              <StarRatingComponent starCount={5} />
            </div>
          </section>
          <section>
            <h2>Rent</h2>
            <RentSelect
              onChange={props.onChangeHandler}
              min={props.initialState.minRent.value}
              max={props.initialState.maxRent.value}
              minName="minRent"
              maxName="maxRent"
            />
          </section>

          <section>
            <h2>House cost</h2>
            <HouseCostSelect
              onChange={props.onChangeHandler}
              min={props.initialState.minHouseCost.value}
              max={props.initialState.maxHouseCost.value}
              minName="minHouseCost"
              maxName="maxHouseCost"
            />
          </section>
        </StyledFilterDiv>
      ) : null}
    </StyledSearch>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, null)(SearchBar)

// Fixing git
