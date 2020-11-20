import React from 'react'
import Styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const StyledComparePlaceHolder = Styled.div`
    &:hover {
        transition: all 0.5s;
        color: #05386B;
        cursor: pointer;

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
      <p>Click a card to search.</p>
    </StyledComparePlaceHolder>
  )
}

export default ComparePlaceHolder
