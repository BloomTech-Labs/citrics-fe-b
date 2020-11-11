import React from 'react'
import Styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const StyledComparePlaceHolder = Styled.div`
    &:hover {
        transition: all 0.4s ease-in-out;
        background-color: white;
        color: #05386B;
        border: 3px solid #05386B;
    }
 background-color: #edf4e1;
 width: 30%;
 height: 90%;
 padding: 1rem;
 border-radius: 15px;
 display: flex;
 justify-content: center;
 align-items: center;
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
      <p>Click Here To Search For Another City To Compare</p>
    </StyledComparePlaceHolder>
  )
}

export default ComparePlaceHolder
