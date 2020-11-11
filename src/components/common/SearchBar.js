import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component'
import { useLocation } from 'react-router-dom'

const StyledInput = Styled.input`
width: 65%;
border: none;
border-radius: 10px;
height: 4em;
margin: 40px 60px;
font-size: 15px;
border: 1px solid #05386B;
`

const StyledButton = Styled.button`
width: 5rem;
height: 4rem;
background-color: #5bdb95;
border: none;
border-radius: 2px;
color: white;
`

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

const SearchBar = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)


  useEffect(() => {
    document.querySelector('#searchBar').focus()
  }, [location])


  const toggle = () => setOpen(!open)

  return (
    <div className="searchbar-wrapper">
      <StyledInput
        type="text"
        onChange={props.onChangeHandler}
        name="searchValue"
        value={props.initialState.searchValue.value}
        placeholder="Search for a city!"
        id="searchBar"
      />

      <StyledButton id="dd-btn" onClick={() => toggle()}>
        Filters
      </StyledButton>

      {open ? (
        <StyledFilterDiv>
          <section>
            <StyledH2> Population </StyledH2>
            <StyledFilterInput
              placeholder="Min"
              name="minPopulation"
              type="number"
              value={props.initialState.minPopulation.value}
              onChange={props.onChangeHandler}
            />
            <StyledFilterInput
              placeholder="Max"
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

