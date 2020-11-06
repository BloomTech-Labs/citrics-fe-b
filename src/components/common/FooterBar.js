import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Styled from 'styled-components';

import '../../styles/temp.css';

const StyledFooter = Styled.div`
display: flex;
/* justify-content: space-around; */
flex-direction: column;
align-items: center;
width: 100%;
margin: 0;
position: fixed;
z-index: 999;
bottom: 0;
/* border: 2px solid black; */
background-color: green;
height: 25vh;
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
    transform: translateY(-30px);
}

.cityCompareContainer {
    height: 95%;
    display: flex;
    width: 75%;
    justify-content: space-around;
    align-items: center;

    .cityPlaceholder {
        border: 1px solid black;
        background-color: grey;
        width: 25%;
        height: 80%;
        border-radius: 15px;
    }
}

#compareBTN {
    border: 1px solid black;
    padding: 0.5rem 3rem;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    background-color: purple;

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
