import React from 'react'
import Styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { UserOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons'

import SearchBar from './SearchBar'

const StyledNavBar = Styled.div`
width: 100%;
background-color: #5bdb95;
display: flex;
justify-content: center;
align-items: center;

.navBarContainer {
  width: 100%;
  padding: 0.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 200px;
    &:hover {
      transition: all 0.4s ease-in-out;
      transform: scale(1.1);
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
    <StyledNavBar>
      <div className="navBarContainer">
        <img
          src={require('../../images/citrics.png')}
          alt="citrics logo and name"
          onClick={evt => {
            evt.preventDefault()
            history.push('/')
          }}
        />

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
