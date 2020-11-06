import React from 'react';
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
border: 2px solid black;
background-color: green;
height: 22.5vh;
/* min-height: 175px; */

#footerToggle {
    height: 5px;
    width: 75px;
    font-size: 4rem;
    margin: 2px;
    padding: 0;
    border: 1px solid black;
    background-color: black;
}

.cityCompareContainer {
    height: 95%;
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;

    .cityPlaceholder {
        border: 1px solid black;
        background-color: grey;
        width: 25%;
        height: 80%;
    }

}
`;

const FooterBar = () => {
  const toggleFooter = () => {
    document.querySelector('#footerBar').classList.toggle('hidden');
    console.log('alo');
  };

  return (
    <StyledFooter id="footerBar">
      <div
        id="footerToggle"
        onClick={() => {
          toggleFooter();
        }}
      ></div>
      <div class="cityCompareContainer">
        <div class="cityPlaceholder">I be an city placholder</div>
        <div class="cityPlaceholder">I be an city placholder</div>
        <div class="cityPlaceholder">I be an city placholder</div>
      </div>
    </StyledFooter>
  );
};

export default FooterBar;
