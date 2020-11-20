import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Styled from 'styled-components'

const StyledRent = Styled.div`
.simpleSelect {
    background-color: #5BDB95;
    color: white;
}
`

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function RentSelect(props) {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <StyledRent>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Min</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.min}
          onChange={props.onChange}
          name={props.minName}
          className="simpleSelect"
        >
          <MenuItem value={-1}>
            <em>Min</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={1500}>1500</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Max</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.max}
          onChange={props.onChange}
          name={props.maxName}
          className="simpleSelect"
        >
          <MenuItem value={99999999}>
            <em>Max</em>
          </MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={1500}>1500</MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={3000}>3000</MenuItem>
          <MenuItem value={4000}>4000</MenuItem>
          <MenuItem value={5000}>5000</MenuItem>
        </Select>
      </FormControl>
    </StyledRent>
  )
}
