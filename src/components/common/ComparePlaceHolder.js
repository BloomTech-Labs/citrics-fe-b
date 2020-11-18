import React from 'react'
import Styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const StyledComparePlaceHolder = Styled.div`
    &:hover {
        transition: all 0.5s;
        /* background-color: white; */
        color: #05386B;
        /* border: 3px solid #05386B; */

    }
 background-color: #edf4e1;
 width: 300px;
 height: 180px;
 padding: 1rem;
 border-radius: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
 border: 1px solid black;
 margin: 15px;
`

const ComparePlaceHolder = () => {
  const history = useHistory()

  return (
    <StyledComparePlaceHolder
      onClick={evt => {
        evt.preventDefault()
        history.push('/')
      }}
    >
      <p>Click a card to compare.</p>
    </StyledComparePlaceHolder>
  )
}

export default ComparePlaceHolder
