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
height: 20vh;
transition: all 0.8s ease-in-out;
min-height: 175px;

#footerToggle {
    height: 12px;
    width: 75px;
    font-size: 4rem;
    margin-top: 10px;
    padding: 0;
    background-color: black;
    border-radius: 15px;
    transform: translateY(-25px);
}

.cityCompareContainer {
    height: 95%;
    display: flex;
    width: 75%;
    justify-content: space-around;
    align-items: center;

    .cityPlaceholder {
        background-color: #edf4e1;
        width: 25%;
        height: 90%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

#compareBTN {
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
        <div>
          <Link id="compareBTN" to="/compare">
            Compare
          </Link>
        </div>
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
