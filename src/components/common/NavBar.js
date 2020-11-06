import React from 'react';
import Styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledNavBar = Styled.div`
width: 100%;
background-color: #5bdb95;
display: flex;
justify-content: center;
align-items: center;

.navBarContainer {
  width: 100%;
  padding: 0.5rem 2rem;

  img {
    width: 200px;
    &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.1);
      cursor: url(hand.cur), pointer;
    }
  }
}

`;

const NavBar = () => {
  let history = useHistory();

  return (
    <StyledNavBar>
      <div className="navBarContainer">
        <img
          src={require('../../images/citrics.png')}
          alt="citrics logo and name"
          onClick={evt => {
            evt.preventDefault();
            history.push('/');
          }}
        />
        <div></div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
