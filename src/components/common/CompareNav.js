import React from 'react'
import { NavLink } from 'react-router-dom'
import Styled from 'styled-components'

const StyledCompareNav = Styled.div`
width: 80%;
margin: 2rem auto;
display: flex;
justify-content: space-around;
/* border: 1px solid black; */
/* position: fixed; */

a {
    &:hover {
        transition: .5s ease-in-out;
        background-color: #05386b;
        color: #edf4e1;
    }
    padding: 1rem;
    width: 25%;
    border-right: 2px solid #edf4e1;
    &:last-child {
        border: none;
    }
    text-align: center;
    text-decoration: none;
    color: black;
    background-color: #5bdb95;


}
`

const CompareNav = () => {
  return (
    <StyledCompareNav>
      <NavLink activeClassName="selected" to="/compare/population">
        Population
      </NavLink>
      <NavLink activeClassName="selected" to="/compare/avg-household-income">
        AVG Household Income
      </NavLink>
      <NavLink activeClassName="selected" to="/compare/avg-home-price">
        AVG Home Price
      </NavLink>
      <NavLink activeClassName="selected" to="/compare/avg-temperature">
        AVG Temperature
      </NavLink>
    </StyledCompareNav>
  )
}

export default CompareNav
