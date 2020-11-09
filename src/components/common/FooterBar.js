import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Styled from 'styled-components';

import '../../styles/temp.css';

const StyledFooter = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin: 0;
position: fixed;
z-index: 999;
bottom: 0;
background-color: #5bdb95;
height: 22.5vh;
transition: all 0.8s ease-in-out;
min-height: 175px;
max-height: 250px;

#footerToggle {
    &:hover {
        cursor: url(hand.cur), pointer;
    }
    height: 12px;
    width: 75px;
    font-size: 4rem;
    margin: 0;
    padding: 0;
    background-color: #05386b;
    border-radius: 15px;
    transform: translateY(-20px);
}

.cityCompareContainer {
    height: 95%;
    display: flex;
    width: 75%;
    justify-content: space-around;
    align-items: center;

    .cityPlaceholder {
        background-color: #edf4e1;
        width: 30%;
        height: 90%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
}

#compareBTN {
    &:hover {
        transition: all 0.5s ease-in-out;
        /* background-color: #edf4e1; */
        color: #5bdb95;
    }
    padding: 0.33rem 3rem;
    border-radius: 15px;
    text-decoration: none;
    color: #edf4e1;
    font-size: 1.2rem;
    background-color: #05386b;
}
`;

const FooterBar = () => {
  const [compareBTNDisable, setCompareBTNDisable] = useState(false);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('compare')) {
      setCompareBTNDisable(true);
    } else {
      setCompareBTNDisable(false);
    }
  }, [location]);

  const toggleFooter = () => {
    document.querySelector('#footerBar').classList.toggle('hidden');
    document.querySelector('#footerToggle').classList.toggle('buttonToggle');
  };

  return (
    <StyledFooter id="footerBar">
      <div
        id="footerToggle"
        onClick={() => {
          toggleFooter();
        }}
      ></div>
      {compareBTNDisable ? null : (
        <Link id="compareBTN" to="/compare">
          Compare
        </Link>
      )}
      <div class="cityCompareContainer">
        <div class="cityPlaceholder">I be an city placholder</div>
        <div class="cityPlaceholder">I be an city placholder</div>
        <div class="cityPlaceholder">I be an city placholder</div>
      </div>
    </StyledFooter>
  );
};

export default FooterBar;
