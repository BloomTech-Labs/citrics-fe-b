import React from 'react'
import Styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { UserOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons'

const StyledNavBar = Styled.div`
width: 100%;
background-color: #5bdb95;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #05386B;

.navBarContainer {
  width: 100%;
  padding: 0.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 40px;
      height: 50px;
      margin-left: 5px;
      margin-bottom: 8px;
  
    }

    &:hover {
        transition: all 0.4s ease-in-out;
        transform: scale(1.01);
        cursor: url(hand.cur), pointer;
      }
  }


      #NavItems {
        height: 100%;
        display: flex;
        align-items: center;
      }

      #favorites {
        margin: 0 1.25rem;
      }
      .NavItem {
        &:hover {
          border-bottom: 2px solid #05386b;
        }
        &:focus, &:active, &:after {
          decoration: none;
          outline: none;
        }
        margin: 0;
        padding: 0.75rem;
        font-size: 1.3rem;
        color: #05386b;
      }
}

`

const NavBar = () => {
  let history = useHistory()

  return (
    <StyledNavBar className="nav-bar">
      <div className="navBarContainer">
        <div className="logo">
          <h2>CITRICS</h2>
          <img
            src={require('../../images/citrics.png')}
            alt="citrics logo and name"
            onClick={evt => {
              evt.preventDefault()
              history.push('/')
            }}
          />
        </div>

        <div id="NavItems">
          <HomeOutlined
            className="NavItem"
            id="home"
            onClick={evt => {
              evt.preventDefault()
              history.push('/')
            }}
          />
          <HeartOutlined
            className="NavItem"
            id="favorites"
            onClick={evt => {
              evt.preventDefault()
              history.push('/profile')
            }}
          />
          <UserOutlined
            className="NavItem"
            id="profile"
            onClick={evt => {
              evt.preventDefault()
              history.push('/profile')
            }}
          />
        </div>
      </div>
    </StyledNavBar>
  )
}

export default NavBar
