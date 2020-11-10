import React, { useState } from 'react'
import Styled from 'styled-components'

import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'

const StyledInput = Styled.input`
width: 65%;
border: none;
height: 4em;
margin: 40px 60px;
font-size: 15px;
`

const StyledButton = Styled.button`
width: 5rem;
height: 4rem;
background-color: #5bdb95;
border: none;
border-radius: 2px;
color: white;
`

// Fixing git

const StyledH2 = Styled.h2`
color: #5bdb95; 

`

const StyledFilterInput = Styled.input`
color: #05386b;
width: 2.5rem;
height: 2.5rem;
border: none;
`

const StyledFilterDiv = Styled.div`
display:flex;
justify-content: space-evenly;
`

const SearchBar = props => {
  const [open, setOpen] = useState(false)

  // Filter form state

  // Population min and max form state

  //   const [costOfLiving, setCostOfLiving] = useState()

  // Rent min and max form state
  //   const [minRent, setRentMin] = useState(props.initialState.minRent)
  //   const [maxRent, setRentMax] = useState(props.initialState.maxRent)

  // House cost min and max form state
  //   const [minHouseCost, setMinHouseCost] = useState(props.initialState.minHouseCost)
  //   const [maxHouseCost, setMaxHouseCost] = useState(props.initialState.maxHouseCost)

  //   const onChange = e => {
  //     setSearch({
  //       ...search,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  //   const populationOnChange = e => {
  //     setPopulation({
  //       ...population,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  //   const costOfLivingOnChange = e => {
  //     setCostOfLiving({
  //       ...costOfLiving,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  //   const rentMinOnChange = e => {
  //     setRentMin({
  //       ...rentMin,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  //   const rentMaxOnChange = e => {
  //     setRentMax({
  //       ...rentMax,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  //   const houseCostMinOnChange = e => {
  //     setHouseCostMin({
  //       ...houseCostMin,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  //   const houseCostMaxOnChange = e => {
  //     setHouseCostMax({
  //       ...houseCostMax,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  const toggle = () => setOpen(!open)

  return (
    <div className="searchbar-wrapper">
      <StyledInput
        type="text"
        onChange={props.onChangeHandler}
        name="searchValue"
        value={props.initialState.searchValue.value}
        placeholder="Search for a city!"
      />

      <StyledButton id="dd-btn" onClick={() => toggle()}>
        Filters
      </StyledButton>

      {open ? (
        <StyledFilterDiv>
          <section>
            <StyledH2> Population </StyledH2>
            <StyledFilterInput
              placeholder="0"
              name="minPopulation"
              type="number"
              value={props.initialState.minPopulation.value}
              onChange={props.onChangeHandler}
            />
            <StyledFilterInput
              placeholder="0"
              name="maxPopulation"
              type="number"
              value={props.initialState.maxPopulation.value}
              onChange={props.onChangeHandler}
            />
          </section>

          <section>
            <StyledH2>Cost of Living</StyledH2>
            <StarRatingComponent starCount={5} />
          </section>
          <section>
            <StyledH2>Rent</StyledH2>
            <StyledFilterInput
              placeholder="Min"
              name="minRent"
              type="number"
              value={props.initialState.minRent.value}
              onChange={props.onChangeHandler}
            />
            <StyledFilterInput
              placeholder="Max"
              name="maxRent"
              type="number"
              value={props.initialState.maxRent.value}
              onChange={props.onChangeHandler}
            />
          </section>

          <section>
            <StyledH2>House cost</StyledH2>
            <StyledFilterInput
              placeholder="Min"
              name="minHouseCost"
              value={props.initialState.minHouseCost.value}
              type="number"
              onChange={props.onChangeHandler}
            />
            <StyledFilterInput
              placeholder="Max"
              name="maxHouseCost"
              type="number"
              value={props.initialState.maxHouseCost.value}
              onChange={props.onChangeHandler}
            />
          </section>
        </StyledFilterDiv>
      ) : (
        ''
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, null)(SearchBar)
