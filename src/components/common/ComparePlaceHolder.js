import React from 'react'
import Styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const StyledComparePlaceHolder = Styled.div`
    &:hover {
        transition: all 0.5s;
        /* background-color: white; */
        color: #05386B;
        /* border: 3px solid #05386B; */
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
 background-color: #edf4e1;
 width: 300px;
 height: 170px;
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
      <p>Click Here To Search For Another City To Compare</p>
    </StyledComparePlaceHolder>
  )
}

export default ComparePlaceHolder
