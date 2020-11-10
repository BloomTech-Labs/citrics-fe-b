import React, { useState } from 'react'
import Styled from 'styled-components'
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

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  // Filter form state
  const [population, setPopulation] = useState(0)
  const [costOfLiving, setCostOfLiving] = useState()

  // Rent min and max form state
  const [rentMin, setRentMin] = useState(0)
  const [rentMax, setRentMax] = useState(0)

  // House cost min and max form state
  const [houseCostMin, setHouseCostMin] = useState(0)
  const [houseCostMax, setHouseCostMax] = useState(0)

  const onChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  const populationOnChange = e => {
    setPopulation({
      ...population,
      [e.target.name]: e.target.value,
    })
  }

  const costOfLivingOnChange = e => {
    setCostOfLiving({
      ...costOfLiving,
      [e.target.name]: e.target.value,
    })
  }

  const rentMinOnChange = e => {
    setRentMin({
      ...rentMin,
      [e.target.name]: e.target.value,
    })
  }

  const rentMaxOnChange = e => {
    setRentMax({
      ...rentMax,
      [e.target.name]: e.target.value,
    })
  }

  const houseCostMinOnChange = e => {
    setHouseCostMin({
      ...houseCostMin,
      [e.target.name]: e.target.value,
    })
  }

  const houseCostMaxOnChange = e => {
    setHouseCostMax({
      ...houseCostMax,
      [e.target.name]: e.target.value,
    })
  }

  const toggle = () => setOpen(!open)

  return (
    <div className="searchbar-wrapper">
      <StyledInput
        type="text"
        onChange={onChange}
        name="search"
        value={search.value}
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
              name="population"
              value={population}
              onChange={populationOnChange}
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
              name="rentMin"
              value={rentMin}
              onChange={rentMinOnChange}
            />
            <StyledFilterInput
              placeholder="Max"
              name="rentMax"
              value={rentMax}
              onChange={rentMaxOnChange}
            />
          </section>

          <section>
            <StyledH2>House cost</StyledH2>
            <StyledFilterInput
              placeholder="Min"
              name="houseCostMin"
              value={houseCostMin}
              onChange={houseCostMinOnChange}
            />
            <StyledFilterInput
              placeholder="Max"
              name="houseCostMax"
              value={houseCostMax}
              onChange={houseCostMaxOnChange}
            />
          </section>
        </StyledFilterDiv>
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchBar
