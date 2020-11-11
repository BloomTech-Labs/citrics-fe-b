import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Styled from 'styled-components'
import ComparePlaceHolder from '../common/ComparePlaceHolder'
import '../../styles/temp.css'

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
border-top: 1px solid #05386B;

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
    box-shadow: 0px 0px 8px #5BDB95;
}

.cityCompareContainer {
    height: 95%;
    display: flex;
    width: 75%;
    justify-content: space-around;
    align-items: center;
}

#compareBTN {
    &:hover {
        transition: all 0.5s ease-in-out;
        /* background-color: #edf4e1; */
        color: #5bdb95;
    }
    padding: 0.10rem 3rem;
    border-radius: 15px;
    text-decoration: none;
    color: #edf4e1;
    font-size: 1.2rem;
    background-color: #05386b;
}
`

const FooterBar = () => {
  const [compareBTNDisable, setCompareBTNDisable] = useState(false)

  let location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('compare')) {
      setCompareBTNDisable(true)
    } else {
      setCompareBTNDisable(false)
    }
    if (location.pathname.includes('profile')) {
      document.querySelector('#footerBar').classList.add('hidden')
      document.querySelector('#footerToggle').classList.add('buttonToggle')
    }
    if (location.pathname == '/') {
      document.querySelector('#footerBar').classList.remove('hidden')
      document.querySelector('#footerToggle').classList.remove('buttonToggle')
    }
  }, [location])

  const toggleFooter = () => {
    document.querySelector('#footerBar').classList.toggle('hidden')
    document.querySelector('#footerToggle').classList.toggle('buttonToggle')
  }

  return (
    <StyledFooter id="footerBar">
      <div
        id="footerToggle"
        onClick={() => {
          toggleFooter()
        }}
      ></div>
      {compareBTNDisable ? null : (
        <Link id="compareBTN" to="/compare">
          Compare
        </Link>
      )}
      <div class="cityCompareContainer">
        <ComparePlaceHolder />
        <ComparePlaceHolder />
        <ComparePlaceHolder />
      </div>
    </StyledFooter>
  )
}

export default FooterBar
