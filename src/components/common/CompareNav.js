import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const StyledCompareNav = Styled.div`
width: 80%;
margin: 2rem auto;
display: flex;
justify-content: space-around;
border: 1px solid black;
/* position: fixed; */

a {
    &:hover {
        transition: .5s;
        background-color: grey;
    }
    padding: 1rem;
    width: 25%;
    border: 1px solid black;
    text-align: center;
    text-decoration: none;
    color: black;
}
`;

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
  );
};

export default CompareNav;
